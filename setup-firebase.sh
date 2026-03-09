#!/usr/bin/env bash
# ============================================================
# GradPrep – Firebase Full Setup Script
# Jalankan SETELAH: firebase login (di terminal terpisah)
# Usage: bash setup-firebase.sh
# ============================================================

set -e

PROJECT_ID="gradprep-s2"
DISPLAY_NAME="GradPrep"

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║        GradPrep Firebase Auto-Setup                  ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

# ── 1. Check Firebase login ───────────────────────────────
echo "▶ Checking Firebase login..."
FIREBASE_USER=$(firebase login:list 2>/dev/null | grep -oP '[\w.+-]+@[\w.-]+\.\w+' | head -1 || true)
if [ -z "$FIREBASE_USER" ]; then
  echo ""
  echo "❌ Belum login ke Firebase!"
  echo ""
  echo "   Buka terminal baru dan jalankan:"
  echo "   firebase login"
  echo ""
  echo "   Setelah berhasil login, jalankan script ini lagi."
  exit 1
fi
echo "✅ Logged in as: $FIREBASE_USER"

# ── 2. Create Firebase project ────────────────────────────
echo ""
echo "▶ Creating Firebase project: $PROJECT_ID..."
EXISTING=$(firebase projects:list 2>/dev/null | grep "$PROJECT_ID" || true)
if [ -n "$EXISTING" ]; then
  echo "✅ Project $PROJECT_ID already exists, using it."
else
  firebase projects:create "$PROJECT_ID" --display-name "$DISPLAY_NAME"
  echo "✅ Project $PROJECT_ID created."
fi

# ── 3. Create Web App ─────────────────────────────────────
echo ""
echo "▶ Checking/registering Web App..."
APP_LIST=$(firebase apps:list --project "$PROJECT_ID" 2>/dev/null)
if echo "$APP_LIST" | grep -q "WEB"; then
  echo "✅ Web app already exists."
else
  firebase apps:create web "GradPrep Web" --project "$PROJECT_ID"
  echo "✅ Web app registered."
fi

# ── 4. Get Web App Config ─────────────────────────────────
echo ""
echo "▶ Getting Firebase config..."
FULL_CONFIG=$(firebase apps:sdkconfig web --project "$PROJECT_ID" 2>/dev/null)

API_KEY=$(echo "$FULL_CONFIG" | grep -oP '"apiKey"\s*:\s*"\K[^"]+' || echo "")
AUTH_DOMAIN=$(echo "$FULL_CONFIG" | grep -oP '"authDomain"\s*:\s*"\K[^"]+' || echo "$PROJECT_ID.firebaseapp.com")
STORAGE_BUCKET=$(echo "$FULL_CONFIG" | grep -oP '"storageBucket"\s*:\s*"\K[^"]+' || echo "$PROJECT_ID.appspot.com")
SENDER_ID=$(echo "$FULL_CONFIG" | grep -oP '"messagingSenderId"\s*:\s*"\K[^"]+' || echo "")
APP_ID_FULL=$(echo "$FULL_CONFIG" | grep -oP '"appId"\s*:\s*"\K[^"]+' || echo "")

if [ -z "$API_KEY" ]; then
  echo "❌ Failed to get API key from Firebase config."
  echo "Raw config output:"
  echo "$FULL_CONFIG"
  exit 1
fi

echo "✅ Config extracted."
echo "   API_KEY:    ${API_KEY:0:30}..."
echo "   PROJECT_ID: $PROJECT_ID"

# ── 5. Enable Firestore ───────────────────────────────────
echo ""
echo "▶ Enabling Firestore in native mode (asia-southeast1)..."
firebase firestore:databases:create "(default)" \
  --location=asia-southeast1 \
  --project "$PROJECT_ID" 2>&1 || \
  echo "ℹ️  Firestore may already exist or couldn't enable via CLI."
echo "   Manual check: https://console.firebase.google.com/project/$PROJECT_ID/firestore"

# ── 6. Write .env.local ───────────────────────────────────
echo ""
echo "▶ Writing .env.local..."
cat > .env.local << ENVEOF
# Firebase Configuration – Auto-generated $(date)
VITE_FIREBASE_API_KEY=$API_KEY
VITE_FIREBASE_AUTH_DOMAIN=$AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=$PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=$STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=$SENDER_ID
VITE_FIREBASE_APP_ID=$APP_ID_FULL
ENVEOF
echo "✅ .env.local written."

# ── 7. Set Vercel environment variables ───────────────────
echo ""
echo "▶ Adding env vars to Vercel project (prep-s2)..."

add_vercel_env() {
  local key=$1
  local val=$2
  if [ -n "$val" ]; then
    # Remove existing first (ignore errors)
    vercel env rm "$key" production --yes 2>/dev/null || true
    # Add new value via pipe (non-interactive)
    echo "$val" | vercel env add "$key" production
    echo "   ✅ $key"
  else
    echo "   ⚠️  Skipped $key (empty value)"
  fi
}

add_vercel_env "VITE_FIREBASE_API_KEY" "$API_KEY"
add_vercel_env "VITE_FIREBASE_AUTH_DOMAIN" "$AUTH_DOMAIN"
add_vercel_env "VITE_FIREBASE_PROJECT_ID" "$PROJECT_ID"
add_vercel_env "VITE_FIREBASE_STORAGE_BUCKET" "$STORAGE_BUCKET"
add_vercel_env "VITE_FIREBASE_MESSAGING_SENDER_ID" "$SENDER_ID"
add_vercel_env "VITE_FIREBASE_APP_ID" "$APP_ID_FULL"

echo "✅ All Vercel env vars set."

# ── 8. Build & Deploy to Vercel ───────────────────────────
echo ""
echo "▶ Building project..."
npm run build

echo ""
echo "▶ Deploying to Vercel production..."
vercel --prod --yes

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║  ✅ Firebase Setup Complete!                         ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""
echo "  Firebase Project: https://console.firebase.google.com/project/$PROJECT_ID"
echo "  Firestore DB:     https://console.firebase.google.com/project/$PROJECT_ID/firestore"
echo "  Live Website:     https://prep-s2.vercel.app"
echo ""
echo "  Admin Login:"
echo "  Email:    admin@gradprep.id"
echo "  Password: Admin@2026"
echo ""
