/**
 * Real-World Coding Projects — Step-by-step guided mini-projects
 * Setiap project adalah studi kasus dunia nyata yang bisa dijalankan langsung di browser.
 * Menggunakan Pyodide (NumPy, Pandas, Scikit-learn tersedia).
 */

export const codingProjects = [
  // ═══════════════════════════════════════════════
  // KATEGORI 1: DATA ANALYSIS & VISUALIZATION
  // ═══════════════════════════════════════════════
  {
    id: 'salary-analysis',
    category: 'Data Analysis',
    title: 'Analisis Gaji Karyawan',
    description: 'Analisis dataset gaji karyawan: distribusi, korelasi pendidikan vs gaji, dan insight per departemen.',
    difficulty: 'easy',
    tags: ['Pandas', 'Statistics', 'EDA'],
    estimatedTime: '10 menit',
    initialCode: `import pandas as pd
import numpy as np

np.random.seed(42)
n = 200

# Generate dataset gaji karyawan
departments = np.random.choice(["Engineering", "Marketing", "Sales", "HR", "Finance"], n)
education = np.random.choice(["SMA", "S1", "S2", "S3"], n, p=[0.1, 0.5, 0.3, 0.1])
experience = np.random.randint(0, 25, n)

# Gaji berdasarkan dept + pendidikan + pengalaman
base = {"Engineering": 12, "Finance": 11, "Marketing": 9, "Sales": 8, "HR": 8}
edu_mult = {"SMA": 0.7, "S1": 1.0, "S2": 1.3, "S3": 1.6}
salary = [
    round(base[d] * edu_mult[e] * (1 + exp * 0.04) + np.random.randn() * 2, 1)
    for d, e, exp in zip(departments, education, experience)
]

df = pd.DataFrame({
    "department": departments,
    "education": education,
    "experience_years": experience,
    "salary_juta": salary,
})

# ═══ STEP 1: Overview Data ═══
print("=" * 50)
print("STEP 1: Overview Dataset")
print("=" * 50)
print(f"Shape: {df.shape}")
print(f"\\nSample data:")
print(df.head(10).to_string())

# ═══ STEP 2: Statistik Deskriptif ═══
print("\\n" + "=" * 50)
print("STEP 2: Statistik Deskriptif")
print("=" * 50)
print(df.describe().round(2).to_string())

# ═══ STEP 3: Gaji per Departemen ═══
print("\\n" + "=" * 50)
print("STEP 3: Rata-rata Gaji per Departemen")
print("=" * 50)
dept_stats = df.groupby("department")["salary_juta"].agg(["mean", "median", "std", "count"])
dept_stats = dept_stats.sort_values("mean", ascending=False).round(2)
print(dept_stats.to_string())

# ═══ STEP 4: Gaji per Pendidikan ═══
print("\\n" + "=" * 50)
print("STEP 4: Rata-rata Gaji per Pendidikan")
print("=" * 50)
edu_stats = df.groupby("education")["salary_juta"].agg(["mean", "count"])
edu_stats = edu_stats.sort_values("mean", ascending=False).round(2)
print(edu_stats.to_string())

# ═══ STEP 5: Korelasi ═══
print("\\n" + "=" * 50)
print("STEP 5: Korelasi Pengalaman vs Gaji")
print("=" * 50)
corr = df["experience_years"].corr(df["salary_juta"])
print(f"Korelasi Pearson: {corr:.4f}")
print(f"Interpretasi: {'Korelasi positif kuat' if corr > 0.5 else 'Korelasi positif sedang' if corr > 0.3 else 'Korelasi lemah'}")

# ═══ STEP 6: Top Earners ═══
print("\\n" + "=" * 50)
print("STEP 6: Top 5 Gaji Tertinggi")
print("=" * 50)
top5 = df.nlargest(5, "salary_juta")
print(top5.to_string(index=False))

# ═══ INSIGHT ═══
print("\\n" + "=" * 50)
print("INSIGHT & KESIMPULAN")
print("=" * 50)
best_dept = dept_stats.index[0]
best_edu = edu_stats.index[0]
print(f"1. Departemen gaji tertinggi: {best_dept} (avg {dept_stats.loc[best_dept, 'mean']:.1f} juta)")
print(f"2. Pendidikan gaji tertinggi: {best_edu} (avg {edu_stats.loc[best_edu, 'mean']:.1f} juta)")
print(f"3. Pengalaman vs Gaji: korelasi {corr:.2f}")
print(f"4. Total karyawan: {len(df)}")`,
    expectedOutput: null,
    hint: 'Jalankan untuk melihat analisis lengkap! Coba ubah data atau tambahkan analisis sendiri.',
  },

  {
    id: 'covid-trend',
    category: 'Data Analysis',
    title: 'Analisis Tren Data (Simulasi COVID)',
    description: 'Analisis tren time-series: moving average, growth rate, dan deteksi puncak gelombang.',
    difficulty: 'medium',
    tags: ['Pandas', 'Time Series', 'Statistics'],
    estimatedTime: '12 menit',
    initialCode: `import pandas as pd
import numpy as np

np.random.seed(42)

# Simulasi data harian (365 hari)
days = 365
dates = pd.date_range("2024-01-01", periods=days)

# Simulasi: 3 gelombang
base = np.zeros(days)
for peak_day, height, width in [(60, 500, 30), (180, 800, 40), (300, 350, 25)]:
    wave = height * np.exp(-0.5 * ((np.arange(days) - peak_day) / width) ** 2)
    base += wave
noise = np.random.poisson(20, days) + np.random.randint(0, 30, days)
cases = np.maximum(0, (base + noise)).astype(int)

df = pd.DataFrame({"date": dates, "daily_cases": cases})
df["cumulative"] = df["daily_cases"].cumsum()
df["ma_7day"] = df["daily_cases"].rolling(7).mean()
df["ma_30day"] = df["daily_cases"].rolling(30).mean()

# ═══ STEP 1: Overview ═══
print("STEP 1: Overview Data (365 hari)")
print(f"Total kasus: {df['cumulative'].iloc[-1]:,}")
print(f"Rata-rata harian: {df['daily_cases'].mean():.0f}")
print(f"Puncak tertinggi: {df['daily_cases'].max():,} kasus")
print(f"Hari dengan 0 kasus: {(df['daily_cases'] == 0).sum()}")

# ═══ STEP 2: Analisis per Kuartal ═══
print("\\n" + "=" * 50)
print("STEP 2: Analisis per Kuartal")
print("=" * 50)
df["quarter"] = df["date"].dt.quarter
quarterly = df.groupby("quarter")["daily_cases"].agg(["sum", "mean", "max"])
quarterly.columns = ["total", "avg_daily", "peak_daily"]
print(quarterly.round(0).to_string())

# ═══ STEP 3: Deteksi Gelombang ═══
print("\\n" + "=" * 50)
print("STEP 3: Deteksi Puncak Gelombang")
print("=" * 50)
ma = df["ma_7day"].fillna(0).values
threshold = ma.mean() + ma.std()
in_wave = False
waves = []
for i in range(len(ma)):
    if ma[i] > threshold and not in_wave:
        in_wave = True
        wave_start = i
    elif ma[i] <= threshold and in_wave:
        in_wave = False
        peak_idx = wave_start + np.argmax(ma[wave_start:i])
        waves.append({
            "wave": len(waves) + 1,
            "start": str(dates[wave_start].date()),
            "peak": str(dates[peak_idx].date()),
            "peak_cases": int(cases[peak_idx]),
            "duration_days": i - wave_start,
        })

for w in waves:
    print(f"  Gelombang {w['wave']}: {w['start']} - puncak {w['peak']} ({w['peak_cases']} kasus, {w['duration_days']} hari)")

# ═══ STEP 4: Growth Rate ═══
print("\\n" + "=" * 50)
print("STEP 4: Weekly Growth Rate (sample)")
print("=" * 50)
df["weekly_total"] = df["daily_cases"].rolling(7).sum()
df["prev_week"] = df["weekly_total"].shift(7)
df["growth_rate"] = ((df["weekly_total"] - df["prev_week"]) / df["prev_week"] * 100).round(1)

# Sample 12 titik
sample_idx = np.linspace(14, days-1, 12, dtype=int)
for i in sample_idx:
    gr = df.loc[i, "growth_rate"]
    arrow = "↑" if gr > 0 else "↓" if gr < 0 else "→"
    print(f"  {df.loc[i, 'date'].strftime('%Y-%m-%d')}: {arrow} {gr:+.1f}%")

# ═══ INSIGHT ═══
print("\\n" + "=" * 50)
print("INSIGHT & REKOMENDASI")
print("=" * 50)
print(f"Terdeteksi {len(waves)} gelombang dalam {days} hari")
worst_q = quarterly["total"].idxmax()
print(f"Kuartal terburuk: Q{worst_q} ({quarterly.loc[worst_q, 'total']:.0f} total kasus)")
print(f"Threshold gelombang: > {threshold:.0f} kasus/hari (MA-7)")`,
    expectedOutput: null,
    hint: 'Ini simulasi analisis epidemiologi! Coba ubah parameter gelombang (peak_day, height, width).',
  },

  // ═══════════════════════════════════════════════
  // KATEGORI 2: PREDICTION MODELS
  // ═══════════════════════════════════════════════
  {
    id: 'house-price-predictor',
    category: 'Prediction',
    title: 'Prediksi Harga Rumah',
    description: 'Bangun model prediksi harga rumah dengan feature engineering, model comparison, dan interpretasi.',
    difficulty: 'medium',
    tags: ['Regression', 'Scikit-learn', 'Feature Engineering'],
    estimatedTime: '15 menit',
    initialCode: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error, r2_score

np.random.seed(42)
n = 500

# ═══ STEP 1: Generate Dataset Realistis ═══
print("STEP 1: Generate Dataset Rumah")
print("=" * 55)

luas = np.random.randint(36, 300, n)
kamar = np.clip(np.round(luas / 40 + np.random.randn(n) * 0.5), 1, 8).astype(int)
lantai = np.random.choice([1, 2, 3], n, p=[0.4, 0.45, 0.15])
garasi = np.random.choice([0, 1, 2], n, p=[0.3, 0.5, 0.2])
lokasi = np.random.choice(["Pusat", "Suburban", "Pinggiran"], n, p=[0.2, 0.5, 0.3])
umur = np.random.randint(0, 30, n)

lok_mult = {"Pusat": 1.5, "Suburban": 1.0, "Pinggiran": 0.7}
harga = np.array([
    round(l * 8 + k * 80 + lt * 150 + g * 100 + lok_mult[lok] * 300 - u * 5
    + np.random.randn() * 100, 0)
    for l, k, lt, g, lok, u in zip(luas, kamar, lantai, garasi, lokasi, umur)
])

df = pd.DataFrame({
    "luas_m2": luas, "kamar": kamar, "lantai": lantai,
    "garasi": garasi, "lokasi": lokasi, "umur_tahun": umur,
    "harga_juta": harga,
})
print(f"Dataset: {df.shape[0]} rumah, {df.shape[1]} kolom")
print(df.head().to_string())
print(f"\\nHarga: {df['harga_juta'].min():.0f} - {df['harga_juta'].max():.0f} juta")

# ═══ STEP 2: Feature Engineering ═══
print("\\n" + "=" * 55)
print("STEP 2: Feature Engineering")
print("=" * 55)

df["luas_per_kamar"] = (df["luas_m2"] / df["kamar"]).round(1)
df["is_new"] = (df["umur_tahun"] <= 5).astype(int)
df = pd.get_dummies(df, columns=["lokasi"], drop_first=True)

features = [c for c in df.columns if c != "harga_juta"]
print(f"Features ({len(features)}): {features}")

# ═══ STEP 3: Split & Scale ═══
X = df[features].values
y = df["harga_juta"].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)
print(f"\\nTrain: {X_train.shape[0]}, Test: {X_test.shape[0]}")

# ═══ STEP 4: Model Comparison ═══
print("\\n" + "=" * 55)
print("STEP 4: Perbandingan 5 Model")
print("=" * 55)

models = {
    "Linear Regression": LinearRegression(),
    "Ridge (L2)": Ridge(alpha=1.0),
    "Lasso (L1)": Lasso(alpha=1.0),
    "Random Forest": RandomForestRegressor(n_estimators=100, random_state=42),
    "Gradient Boosting": GradientBoostingRegressor(n_estimators=100, random_state=42),
}

results = []
for name, model in models.items():
    use_scaled = name in ["Linear Regression", "Ridge (L2)", "Lasso (L1)"]
    Xtr = X_train_s if use_scaled else X_train
    Xte = X_test_s if use_scaled else X_test

    model.fit(Xtr, y_train)
    pred = model.predict(Xte)
    mae = mean_absolute_error(y_test, pred)
    r2 = r2_score(y_test, pred)
    cv = cross_val_score(model, Xtr, y_train, cv=5, scoring="r2").mean()

    results.append({"model": name, "MAE": mae, "R2": r2, "CV_R2": cv})
    print(f"  {name:22s} | MAE: {mae:7.1f} | R2: {r2:.4f} | CV-R2: {cv:.4f}")

# ═══ STEP 5: Best Model Analysis ═══
print("\\n" + "=" * 55)
print("STEP 5: Analisis Model Terbaik")
print("=" * 55)

best = max(results, key=lambda x: x["R2"])
print(f"Best model: {best['model']} (R2={best['R2']:.4f})")

# Feature importance (dari Random Forest)
rf = models["Random Forest"]
importances = sorted(zip(features, rf.feature_importances_), key=lambda x: -x[1])
print("\\nFeature Importance:")
for feat, imp in importances[:6]:
    bar = "█" * int(imp * 40)
    print(f"  {feat:20s} {imp:.3f} {bar}")

# ═══ STEP 6: Prediksi Rumah Baru ═══
print("\\n" + "=" * 55)
print("STEP 6: Prediksi Harga Rumah Baru")
print("=" * 55)

new_houses = [
    {"desc": "Rumah kecil pinggiran", "data": [45, 2, 1, 0, 3, 0, 22.5, 0, 0, 1]},
    {"desc": "Rumah mewah pusat kota", "data": [250, 6, 3, 2, 1, 1, 41.7, 1, 1, 0]},
    {"desc": "Rumah suburban baru", "data": [120, 3, 2, 1, 2, 1, 40.0, 0, 0, 0]},
]
for house in new_houses:
    pred = rf.predict([house["data"]])[0]
    print(f"  {house['desc']:30s} -> Rp {pred:,.0f} juta")`,
    expectedOutput: null,
    hint: 'Bandingkan 5 model dan lihat feature importance! Coba ubah fitur rumah baru di STEP 6.',
  },

  {
    id: 'customer-churn',
    category: 'Prediction',
    title: 'Prediksi Customer Churn',
    description: 'Prediksi pelanggan yang akan berhenti berlangganan. Termasuk class imbalance handling.',
    difficulty: 'hard',
    tags: ['Classification', 'Imbalanced Data', 'Business'],
    estimatedTime: '15 menit',
    initialCode: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import classification_report, confusion_matrix

np.random.seed(42)
n = 1000

# ═══ STEP 1: Generate Dataset ═══
print("STEP 1: Dataset Pelanggan Telco")
print("=" * 55)

tenure = np.random.randint(1, 72, n)
monthly_charge = np.random.uniform(20, 120, n).round(2)
total_charge = (tenure * monthly_charge * np.random.uniform(0.9, 1.1, n)).round(2)
contract = np.random.choice(["Month-to-month", "One year", "Two year"], n, p=[0.5, 0.3, 0.2])
support_tickets = np.random.poisson(2, n)
online_security = np.random.choice([0, 1], n, p=[0.4, 0.6])

# Churn probability (realistic)
churn_score = (
    -0.03 * tenure
    + 0.02 * monthly_charge
    + 0.15 * support_tickets
    - 0.5 * online_security
    + np.where(contract == "Month-to-month", 1.5, np.where(contract == "One year", 0.3, -0.5))
    + np.random.randn(n) * 0.8
)
churn = (churn_score > np.percentile(churn_score, 73)).astype(int)

df = pd.DataFrame({
    "tenure_months": tenure,
    "monthly_charge": monthly_charge,
    "total_charges": total_charge,
    "contract": contract,
    "support_tickets": support_tickets,
    "online_security": online_security,
    "churn": churn,
})

print(f"Dataset: {n} pelanggan")
print(f"Churn rate: {churn.mean():.1%} ({churn.sum()} pelanggan)")
print(f"\\nSample:")
print(df.head(8).to_string())

# ═══ STEP 2: EDA ═══
print("\\n" + "=" * 55)
print("STEP 2: Exploratory Data Analysis")
print("=" * 55)

for col in ["contract", "online_security"]:
    print(f"\\nChurn rate per {col}:")
    ct = df.groupby(col)["churn"].agg(["mean", "count"])
    ct.columns = ["churn_rate", "count"]
    ct["churn_rate"] = (ct["churn_rate"] * 100).round(1).astype(str) + "%"
    print(ct.to_string())

print("\\nChurners vs Non-churners:")
for col in ["tenure_months", "monthly_charge", "support_tickets"]:
    c0 = df[df["churn"] == 0][col].mean()
    c1 = df[df["churn"] == 1][col].mean()
    print(f"  {col:20s}: Stay={c0:.1f}, Churn={c1:.1f}")

# ═══ STEP 3: Preprocessing ═══
print("\\n" + "=" * 55)
print("STEP 3: Preprocessing")
print("=" * 55)

df_model = pd.get_dummies(df, columns=["contract"], drop_first=True)
features = [c for c in df_model.columns if c != "churn"]
X = df_model[features].values
y = df_model["churn"].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)
print(f"Train: {len(y_train)} (churn: {y_train.mean():.1%})")
print(f"Test:  {len(y_test)} (churn: {y_test.mean():.1%})")

# ═══ STEP 4: Model Comparison ═══
print("\\n" + "=" * 55)
print("STEP 4: Model Comparison (with class_weight='balanced')")
print("=" * 55)

models = {
    "Logistic Regression": LogisticRegression(class_weight="balanced", max_iter=1000),
    "Random Forest": RandomForestClassifier(n_estimators=100, class_weight="balanced", random_state=42),
    "Gradient Boosting": GradientBoostingClassifier(n_estimators=100, random_state=42),
}

best_model = None
best_f1 = 0
for name, model in models.items():
    model.fit(X_train_s, y_train)
    pred = model.predict(X_test_s)
    report = classification_report(y_test, pred, output_dict=True)
    f1_churn = report["1"]["f1-score"]
    print(f"\\n{name}:")
    print(f"  Accuracy: {report['accuracy']:.3f}")
    print(f"  Churn Precision: {report['1']['precision']:.3f}")
    print(f"  Churn Recall: {report['1']['recall']:.3f}")
    print(f"  Churn F1: {f1_churn:.3f}")
    if f1_churn > best_f1:
        best_f1 = f1_churn
        best_model = (name, model)

# ═══ STEP 5: Confusion Matrix ═══
print("\\n" + "=" * 55)
print(f"STEP 5: Confusion Matrix ({best_model[0]})")
print("=" * 55)

pred = best_model[1].predict(X_test_s)
cm = confusion_matrix(y_test, pred)
print(f"           Pred:Stay  Pred:Churn")
print(f"  Stay:     {cm[0][0]:5d}      {cm[0][1]:5d}")
print(f"  Churn:    {cm[1][0]:5d}      {cm[1][1]:5d}")

# ═══ STEP 6: Business Impact ═══
print("\\n" + "=" * 55)
print("STEP 6: Business Impact Analysis")
print("=" * 55)

avg_revenue = df["monthly_charge"].mean() * 12
saved = cm[1][1]  # true positives (churn detected)
missed = cm[1][0]  # false negatives (churn missed)
false_alarm = cm[0][1]  # false positives
retention_cost = 50  # biaya retensi per customer

revenue_saved = saved * avg_revenue
retention_total = (saved + false_alarm) * retention_cost
revenue_lost = missed * avg_revenue

print(f"  Revenue saved (detected churn): Rp {revenue_saved:,.0f}/tahun")
print(f"  Revenue lost (missed churn):    Rp {revenue_lost:,.0f}/tahun")
print(f"  Retention program cost:         Rp {retention_total:,.0f}")
print(f"  NET BENEFIT:                    Rp {revenue_saved - retention_total:,.0f}/tahun")`,
    expectedOutput: null,
    hint: 'Perhatikan F1-score untuk class Churn (bukan accuracy). Dalam kasus imbalanced, recall lebih penting!',
  },

  {
    id: 'exam-score-predictor',
    category: 'Prediction',
    title: 'Prediksi Nilai Ujian Mahasiswa',
    description: 'Prediksi apakah mahasiswa lulus/tidak berdasarkan kebiasaan belajar. Cocok untuk konteks S2!',
    difficulty: 'easy',
    tags: ['Classification', 'Education', 'Logistic Regression'],
    estimatedTime: '10 menit',
    initialCode: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

np.random.seed(42)
n = 400

# ═══ STEP 1: Dataset Mahasiswa ═══
print("STEP 1: Dataset Kebiasaan Belajar Mahasiswa")
print("=" * 55)

study_hours = np.random.uniform(0.5, 12, n)
attendance = np.random.uniform(40, 100, n)
sleep_hours = np.random.uniform(3, 10, n)
prev_gpa = np.random.uniform(1.5, 4.0, n)
part_time = np.random.choice([0, 1], n, p=[0.6, 0.4])

# Skor lulus
score = (
    study_hours * 5
    + attendance * 0.4
    + sleep_hours * 3
    + prev_gpa * 10
    - part_time * 8
    + np.random.randn(n) * 8
)
passed = (score > np.median(score)).astype(int)

df = pd.DataFrame({
    "jam_belajar": study_hours.round(1),
    "kehadiran_pct": attendance.round(1),
    "jam_tidur": sleep_hours.round(1),
    "ipk_sebelum": prev_gpa.round(2),
    "kerja_partime": part_time,
    "lulus": passed,
})

print(f"Mahasiswa: {n}")
print(f"Lulus: {passed.sum()} ({passed.mean():.1%})")
print(df.head(8).to_string())

# ═══ STEP 2: Profil Mahasiswa ═══
print("\\n" + "=" * 55)
print("STEP 2: Profil Mahasiswa Lulus vs Tidak Lulus")
print("=" * 55)

for col in ["jam_belajar", "kehadiran_pct", "jam_tidur", "ipk_sebelum"]:
    lulus = df[df["lulus"] == 1][col].mean()
    gagal = df[df["lulus"] == 0][col].mean()
    diff = lulus - gagal
    print(f"  {col:16s}: Lulus={lulus:.1f}, Gagal={gagal:.1f} (diff={diff:+.1f})")

# ═══ STEP 3: Train Model ═══
print("\\n" + "=" * 55)
print("STEP 3: Training Logistic Regression")
print("=" * 55)

features = ["jam_belajar", "kehadiran_pct", "jam_tidur", "ipk_sebelum", "kerja_partime"]
X = df[features].values
y = df["lulus"].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

model = LogisticRegression()
model.fit(X_train_s, y_train)
y_pred = model.predict(X_test_s)

print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=["Gagal", "Lulus"]))

# ═══ STEP 4: Faktor Penting ═══
print("=" * 55)
print("STEP 4: Faktor yang Mempengaruhi Kelulusan")
print("=" * 55)

for feat, coef in sorted(zip(features, model.coef_[0]), key=lambda x: -abs(x[1])):
    direction = "+" if coef > 0 else "-"
    bar = "█" * int(abs(coef) * 5)
    impact = "Meningkatkan" if coef > 0 else "Menurunkan"
    print(f"  {feat:16s}: {direction}{abs(coef):.3f} {bar} ({impact} peluang lulus)")

# ═══ STEP 5: Prediksi Mahasiswa Baru ═══
print("\\n" + "=" * 55)
print("STEP 5: Prediksi Mahasiswa Baru")
print("=" * 55)

students = [
    {"desc": "Rajin, tidur cukup", "data": [8, 90, 7, 3.5, 0]},
    {"desc": "Jarang masuk, kerja", "data": [3, 55, 5, 2.8, 1]},
    {"desc": "IPK tinggi, sibuk", "data": [5, 70, 6, 3.8, 1]},
    {"desc": "Belajar intens, IPK rendah", "data": [10, 85, 8, 2.2, 0]},
]

for s in students:
    X_new = scaler.transform([s["data"]])
    pred = model.predict(X_new)[0]
    prob = model.predict_proba(X_new)[0]
    status = "LULUS" if pred else "GAGAL"
    print(f"  {s['desc']:30s} -> {status} (confidence: {max(prob):.1%})")`,
    expectedOutput: null,
    hint: 'Lihat koefisien model di Step 4 — faktor mana yang paling berpengaruh?',
  },

  {
    id: 'stock-signal',
    category: 'Prediction',
    title: 'Sinyal Trading Saham (Klasifikasi)',
    description: 'Prediksi sinyal beli/jual berdasarkan technical indicators: RSI, Moving Average, Volume.',
    difficulty: 'hard',
    tags: ['Classification', 'Finance', 'Technical Analysis'],
    estimatedTime: '15 menit',
    initialCode: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import classification_report, accuracy_score

np.random.seed(42)
days = 500

# ═══ STEP 1: Simulasi Harga Saham ═══
print("STEP 1: Simulasi Data Harga Saham (500 hari)")
print("=" * 55)

price = [10000]
for i in range(1, days):
    change = np.random.randn() * 150 + 5
    price.append(max(5000, price[-1] + change))
price = np.array(price)
volume = np.random.randint(100000, 5000000, days)

df = pd.DataFrame({
    "price": price.round(0),
    "volume": volume,
})

# ═══ STEP 2: Technical Indicators ═══
print("\\nSTEP 2: Hitung Technical Indicators")
print("=" * 55)

# Moving Averages
df["ma_5"] = df["price"].rolling(5).mean()
df["ma_20"] = df["price"].rolling(20).mean()
df["ma_50"] = df["price"].rolling(50).mean()

# RSI (14 day)
delta = df["price"].diff()
gain = delta.where(delta > 0, 0).rolling(14).mean()
loss = (-delta.where(delta < 0, 0)).rolling(14).mean()
rs = gain / (loss + 1e-10)
df["rsi"] = 100 - (100 / (1 + rs))

# Bollinger Bands
df["bb_mid"] = df["price"].rolling(20).mean()
bb_std = df["price"].rolling(20).std()
df["bb_upper"] = df["bb_mid"] + 2 * bb_std
df["bb_lower"] = df["bb_mid"] - 2 * bb_std
df["bb_position"] = (df["price"] - df["bb_lower"]) / (df["bb_upper"] - df["bb_lower"] + 1e-10)

# Volume ratio
df["vol_ratio"] = df["volume"] / df["volume"].rolling(20).mean()

# Price momentum
df["momentum_5"] = df["price"].pct_change(5) * 100
df["momentum_20"] = df["price"].pct_change(20) * 100

# Signal: harga naik > 2% dalam 5 hari ke depan
df["future_return"] = df["price"].shift(-5) / df["price"] - 1
df["signal"] = (df["future_return"] > 0.02).astype(int)

df = df.dropna().reset_index(drop=True)
print(f"Data setelah indicator: {len(df)} hari")
print(f"Buy signal: {df['signal'].mean():.1%}")

features = ["ma_5", "ma_20", "rsi", "bb_position", "vol_ratio", "momentum_5", "momentum_20"]
print(f"Features: {features}")

# ═══ STEP 3: Model Training ═══
print("\\n" + "=" * 55)
print("STEP 3: Train Model")
print("=" * 55)

X = df[features].values
y = df["signal"].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, shuffle=False)

models = {
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
    "Gradient Boosting": GradientBoostingClassifier(n_estimators=100, random_state=42),
}

for name, model in models.items():
    model.fit(X_train, y_train)
    pred = model.predict(X_test)
    acc = accuracy_score(y_test, pred)
    report = classification_report(y_test, pred, output_dict=True)
    print(f"\\n{name}:")
    print(f"  Accuracy: {acc:.3f}")
    print(f"  Buy Precision: {report['1']['precision']:.3f}")
    print(f"  Buy Recall: {report['1']['recall']:.3f}")

# ═══ STEP 4: Feature Importance ═══
print("\\n" + "=" * 55)
print("STEP 4: Indicator Terpenting")
print("=" * 55)

rf = models["Random Forest"]
for feat, imp in sorted(zip(features, rf.feature_importances_), key=lambda x: -x[1]):
    bar = "█" * int(imp * 40)
    print(f"  {feat:15s} {imp:.3f} {bar}")

# ═══ STEP 5: Backtest ═══
print("\\n" + "=" * 55)
print("STEP 5: Backtest Strategi")
print("=" * 55)

test_df = df.iloc[len(X_train):].copy()
test_df["pred_signal"] = rf.predict(X_test)

buy_returns = test_df[test_df["pred_signal"] == 1]["future_return"]
hold_returns = test_df["future_return"]

print(f"  Strategi Model (buy saat sinyal):")
print(f"    Trades: {len(buy_returns)}")
print(f"    Avg return: {buy_returns.mean()*100:.2f}%")
print(f"    Win rate: {(buy_returns > 0).mean():.1%}")
print(f"  \\n  Buy & Hold:")
print(f"    Avg return: {hold_returns.mean()*100:.2f}%")
print(f"    Win rate: {(hold_returns > 0).mean():.1%}")
print(f"\\n  Model {'mengalahkan' if buy_returns.mean() > hold_returns.mean() else 'kalah dari'} Buy & Hold")`,
    expectedOutput: null,
    hint: 'Disclaimer: ini simulasi edukasi, bukan saran investasi! Lihat feature importance dan backtest result.',
  },

  // ═══════════════════════════════════════════════
  // KATEGORI 3: CLUSTERING & SEGMENTATION
  // ═══════════════════════════════════════════════
  {
    id: 'customer-segment',
    category: 'Clustering',
    title: 'Segmentasi Pelanggan E-Commerce',
    description: 'Kelompokkan pelanggan berdasarkan perilaku belanja menggunakan K-Means dan RFM analysis.',
    difficulty: 'medium',
    tags: ['K-Means', 'RFM', 'Business Intelligence'],
    estimatedTime: '12 menit',
    initialCode: `import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

np.random.seed(42)
n = 500

# ═══ STEP 1: Generate Data Transaksi ═══
print("STEP 1: Dataset Pelanggan E-Commerce")
print("=" * 55)

# 4 segmen pelanggan tersembunyi
segments = {
    "VIP": (120, 3, 15, 500000),
    "Loyal": (80, 8, 8, 200000),
    "Casual": (40, 20, 3, 80000),
    "Dormant": (15, 60, 1, 30000),
}

data = []
for seg, (count, params) in [("VIP", (50,)), ("Loyal", (150,)), ("Casual", (200,)), ("Dormant", (100,))]:
    freq, recency, orders, spend = segments[seg]
    for _ in range(count):
        data.append({
            "frequency": max(1, int(freq + np.random.randn() * freq * 0.3)),
            "recency_days": max(1, int(recency + np.random.randn() * recency * 0.3)),
            "total_orders": max(1, int(orders + np.random.randn() * orders * 0.3)),
            "total_spend": max(10000, int(spend + np.random.randn() * spend * 0.3)),
        })

df = pd.DataFrame(data)
df["avg_order_value"] = (df["total_spend"] / df["total_orders"]).round(0)

print(f"Pelanggan: {len(df)}")
print(df.describe().round(0).to_string())

# ═══ STEP 2: RFM Analysis ═══
print("\\n" + "=" * 55)
print("STEP 2: RFM Scoring")
print("=" * 55)

df["R_score"] = pd.qcut(df["recency_days"], 4, labels=[4, 3, 2, 1]).astype(int)
df["F_score"] = pd.qcut(df["frequency"].rank(method="first"), 4, labels=[1, 2, 3, 4]).astype(int)
df["M_score"] = pd.qcut(df["total_spend"].rank(method="first"), 4, labels=[1, 2, 3, 4]).astype(int)
df["RFM_score"] = df["R_score"] + df["F_score"] + df["M_score"]

print("RFM Score Distribution:")
rfm_dist = df["RFM_score"].value_counts().sort_index()
for score, count in rfm_dist.items():
    bar = "█" * (count // 5)
    print(f"  Score {score:2d}: {count:3d} {bar}")

# ═══ STEP 3: K-Means Clustering ═══
print("\\n" + "=" * 55)
print("STEP 3: K-Means Clustering")
print("=" * 55)

cluster_features = ["frequency", "recency_days", "total_spend", "avg_order_value"]
X = df[cluster_features].values
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Elbow method
print("Elbow Method (Inertia):")
for k in range(2, 7):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X_scaled)
    print(f"  K={k}: inertia={km.inertia_:.0f}")

# Use K=4
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
df["cluster"] = kmeans.fit_predict(X_scaled)

# ═══ STEP 4: Profil Segmen ═══
print("\\n" + "=" * 55)
print("STEP 4: Profil Setiap Segmen")
print("=" * 55)

segment_names = {}
profiles = df.groupby("cluster")[cluster_features + ["RFM_score"]].mean().round(0)

for idx in profiles.index:
    p = profiles.loc[idx]
    if p["total_spend"] > 300000 and p["recency_days"] < 20:
        segment_names[idx] = "VIP Champions"
    elif p["frequency"] > 50 and p["total_spend"] > 100000:
        segment_names[idx] = "Loyal Customers"
    elif p["recency_days"] > 40:
        segment_names[idx] = "At Risk / Dormant"
    else:
        segment_names[idx] = "Casual Buyers"

df["segment_name"] = df["cluster"].map(segment_names)

for cluster_id in sorted(df["cluster"].unique()):
    subset = df[df["cluster"] == cluster_id]
    name = segment_names[cluster_id]
    print(f"\\n  [{name}] ({len(subset)} pelanggan)")
    print(f"    Avg Frequency:  {subset['frequency'].mean():.0f} kali")
    print(f"    Avg Recency:    {subset['recency_days'].mean():.0f} hari")
    print(f"    Avg Spend:      Rp {subset['total_spend'].mean():,.0f}")
    print(f"    Avg Order Value: Rp {subset['avg_order_value'].mean():,.0f}")

# ═══ STEP 5: Marketing Strategy ═══
print("\\n" + "=" * 55)
print("STEP 5: Rekomendasi Marketing per Segmen")
print("=" * 55)

strategies = {
    "VIP Champions": "Exclusive rewards, early access, personal account manager",
    "Loyal Customers": "Loyalty program, cross-sell premium products, referral bonus",
    "Casual Buyers": "Targeted promotions, email campaigns, first-purchase discounts",
    "At Risk / Dormant": "Win-back campaigns, special comeback offers, survey feedback",
}
for name, strategy in strategies.items():
    count = len(df[df["segment_name"] == name])
    revenue = df[df["segment_name"] == name]["total_spend"].sum()
    print(f"\\n  {name} ({count} customers, Rp {revenue:,.0f} revenue):")
    print(f"    Strategy: {strategy}")`,
    expectedOutput: null,
    hint: 'K-Means menemukan segmen secara otomatis! Bandingkan dengan RFM score manual.',
  },

  // ═══════════════════════════════════════════════
  // KATEGORI 4: NLP & TEXT
  // ═══════════════════════════════════════════════
  {
    id: 'sentiment-analyzer',
    category: 'NLP',
    title: 'Analisis Sentimen Review Produk',
    description: 'Bangun sentiment analyzer dari nol: preprocessing, TF-IDF, dan klasifikasi review.',
    difficulty: 'medium',
    tags: ['NLP', 'TF-IDF', 'Text Classification'],
    estimatedTime: '12 menit',
    initialCode: `import numpy as np
import re
from collections import Counter
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, accuracy_score

np.random.seed(42)

# ═══ STEP 1: Dataset Review ═══
print("STEP 1: Dataset Review Produk")
print("=" * 55)

positive_reviews = [
    "produk bagus sekali sangat puas", "kualitas luar biasa recommended",
    "pengiriman cepat barang sesuai", "sangat suka produk ini mantap",
    "harga murah kualitas bagus", "worth it banget beli lagi",
    "packing rapi barang aman", "seller ramah fast response",
    "bagus banget sesuai ekspektasi", "terbaik sih produk ini",
    "keren abis puas banget", "mantap jiwa recommended seller",
    "barang ori kualitas premium", "love it very good quality",
    "super cepat sampai suka banget", "oke banget puas pokoknya",
    "bintang lima deh bagus", "top markotop barangnya",
    "sesuai deskripsi kualitas oke", "pengalaman belanja menyenangkan",
    "bahan bagus jahitan rapi", "cocok buat hadiah premium",
    "ga nyesel beli ini", "warnanya sesuai foto bagus",
    "size pas kualitas mantap", "repeat order pasti beli lagi",
]
negative_reviews = [
    "produk jelek sangat mengecewakan", "barang rusak tidak sesuai",
    "kualitas buruk murahan", "pengiriman lama barang penyok",
    "tidak recommended kapok beli", "sampah buang uang saja",
    "seller tidak bertanggung jawab", "beda jauh sama foto",
    "ukuran tidak sesuai kecewa", "barang palsu bukan original",
    "pecah saat diterima parah", "ga worth it harga mahal",
    "zonk total menyesal beli", "respon lama ga profesional",
    "warna beda jauh kecewa", "bahan murahan cepat rusak",
    "penipuan ini mah parah", "retur susah ribet banget",
    "kualitas jauh dibawah harga", "tidak sesuai ekspektasi kecewa",
    "barang cacat ga dicek", "pengiriman sangat lambat lama",
    "packing asal asalan rusak", "mending beli di tempat lain",
]

texts = positive_reviews + negative_reviews
labels = [1] * len(positive_reviews) + [0] * len(negative_reviews)

# Shuffle
idx = np.random.permutation(len(texts))
texts = [texts[i] for i in idx]
labels = [labels[i] for i in idx]

print(f"Total reviews: {len(texts)}")
print(f"Positive: {sum(labels)}, Negative: {len(labels) - sum(labels)}")

# ═══ STEP 2: Text Preprocessing ═══
print("\\n" + "=" * 55)
print("STEP 2: Text Preprocessing")
print("=" * 55)

stopwords = {"yang", "di", "dan", "ini", "itu", "dengan", "untuk", "pada",
             "adalah", "dari", "dalam", "ke", "akan", "tidak", "juga",
             "sudah", "saya", "bisa", "ada", "atau", "oleh", "sangat",
             "sih", "deh", "nih", "banget", "sekali"}

def preprocess(text):
    text = text.lower()
    text = re.sub(r"[^a-z\\s]", "", text)
    tokens = [t for t in text.split() if t not in stopwords and len(t) > 1]
    return tokens

all_tokens = []
processed = []
for text in texts:
    tokens = preprocess(text)
    processed.append(tokens)
    all_tokens.extend(tokens)

vocab = sorted(set(all_tokens))
word_idx = {w: i for i, w in enumerate(vocab)}
print(f"Vocabulary size: {len(vocab)}")
print(f"Top 15 words: {[w for w, _ in Counter(all_tokens).most_common(15)]}")

# ═══ STEP 3: TF-IDF Vectorization ═══
print("\\n" + "=" * 55)
print("STEP 3: TF-IDF Vectorization")
print("=" * 55)

# Build TF-IDF from scratch
n_docs = len(processed)
n_vocab = len(vocab)

# Document frequency
doc_freq = np.zeros(n_vocab)
for tokens in processed:
    seen = set(tokens)
    for w in seen:
        if w in word_idx:
            doc_freq[word_idx[w]] += 1

idf = np.log(n_docs / (doc_freq + 1)) + 1

# TF-IDF matrix
X = np.zeros((n_docs, n_vocab))
for i, tokens in enumerate(processed):
    counts = Counter(tokens)
    total = len(tokens) if tokens else 1
    for w, c in counts.items():
        if w in word_idx:
            tf = c / total
            X[i, word_idx[w]] = tf * idf[word_idx[w]]

y = np.array(labels)
print(f"TF-IDF matrix: {X.shape}")

# ═══ STEP 4: Train Model ═══
print("\\n" + "=" * 55)
print("STEP 4: Train Sentiment Classifier")
print("=" * 55)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")
print(classification_report(y_test, y_pred, target_names=["Negatif", "Positif"]))

# ═══ STEP 5: Kata Paling Berpengaruh ═══
print("=" * 55)
print("STEP 5: Kata Paling Berpengaruh")
print("=" * 55)

coefs = list(zip(vocab, model.coef_[0]))
top_positive = sorted(coefs, key=lambda x: -x[1])[:8]
top_negative = sorted(coefs, key=lambda x: x[1])[:8]

print("Kata paling POSITIF:")
for word, coef in top_positive:
    bar = "+" * int(coef * 3)
    print(f"  {word:15s} {coef:+.3f} {bar}")

print("\\nKata paling NEGATIF:")
for word, coef in top_negative:
    bar = "-" * int(abs(coef) * 3)
    print(f"  {word:15s} {coef:+.3f} {bar}")

# ═══ STEP 6: Test Review Baru ═══
print("\\n" + "=" * 55)
print("STEP 6: Prediksi Review Baru")
print("=" * 55)

new_reviews = [
    "produk bagus puas recommended beli lagi",
    "barang jelek rusak kecewa kapok",
    "lumayan sih harga oke kualitas standar",
    "pengiriman cepat tapi barang cacat",
]

for review in new_reviews:
    tokens = preprocess(review)
    vec = np.zeros(n_vocab)
    for w in tokens:
        if w in word_idx:
            vec[word_idx[w]] = idf[word_idx[w]]
    pred = model.predict([vec])[0]
    prob = model.predict_proba([vec])[0]
    label = "POSITIF" if pred == 1 else "NEGATIF"
    conf = max(prob)
    print(f'  "{review}"')
    print(f"    -> {label} (confidence: {conf:.1%})\\n")`,
    expectedOutput: null,
    hint: 'TF-IDF + Logistic Regression = baseline NLP yang sangat kuat! Coba tambah review sendiri di Step 6.',
  },

  // ═══════════════════════════════════════════════
  // KATEGORI 5: ANOMALY DETECTION
  // ═══════════════════════════════════════════════
  {
    id: 'fraud-detector',
    category: 'Anomaly Detection',
    title: 'Deteksi Transaksi Fraud',
    description: 'Bangun fraud detection system: feature engineering, model training, dan threshold optimization.',
    difficulty: 'hard',
    tags: ['Anomaly Detection', 'Finance', 'Imbalanced'],
    estimatedTime: '15 menit',
    initialCode: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier, IsolationForest
from sklearn.metrics import classification_report, precision_recall_curve

np.random.seed(42)
n = 2000

# ═══ STEP 1: Generate Transaction Data ═══
print("STEP 1: Dataset Transaksi (2000 records)")
print("=" * 55)

# Normal transactions (95%)
n_normal = int(n * 0.95)
n_fraud = n - n_normal

normal = pd.DataFrame({
    "amount": np.random.lognormal(10, 1, n_normal).clip(10000, 5000000),
    "hour": np.random.choice(range(7, 23), n_normal),
    "day_of_week": np.random.choice(range(7), n_normal),
    "merchant_category": np.random.choice(range(10), n_normal),
    "distance_km": np.abs(np.random.randn(n_normal) * 5),
    "time_since_last": np.random.exponential(24, n_normal),
    "is_international": np.random.choice([0, 1], n_normal, p=[0.9, 0.1]),
    "fraud": 0,
})

# Fraud transactions (5%) — pola berbeda
fraud = pd.DataFrame({
    "amount": np.random.lognormal(12, 1.5, n_fraud).clip(50000, 50000000),
    "hour": np.random.choice([0, 1, 2, 3, 4, 5, 23], n_fraud),
    "day_of_week": np.random.choice(range(7), n_fraud),
    "merchant_category": np.random.choice([7, 8, 9], n_fraud),
    "distance_km": np.abs(np.random.randn(n_fraud) * 50),
    "time_since_last": np.random.exponential(2, n_fraud),
    "is_international": np.random.choice([0, 1], n_fraud, p=[0.3, 0.7]),
    "fraud": 1,
})

df = pd.concat([normal, fraud]).sample(frac=1, random_state=42).reset_index(drop=True)
df["amount"] = df["amount"].round(0)
df["distance_km"] = df["distance_km"].round(1)
df["time_since_last"] = df["time_since_last"].round(1)

print(f"Total: {len(df)}, Fraud: {df['fraud'].sum()} ({df['fraud'].mean():.1%})")
print(df.head(8).to_string())

# ═══ STEP 2: Feature Engineering ═══
print("\\n" + "=" * 55)
print("STEP 2: Feature Engineering")
print("=" * 55)

df["is_night"] = ((df["hour"] < 6) | (df["hour"] >= 23)).astype(int)
df["is_weekend"] = (df["day_of_week"] >= 5).astype(int)
df["amount_log"] = np.log1p(df["amount"])
df["high_amount"] = (df["amount"] > df["amount"].quantile(0.95)).astype(int)
df["rapid_transaction"] = (df["time_since_last"] < 1).astype(int)

features = ["amount_log", "hour", "distance_km", "time_since_last",
            "is_international", "is_night", "is_weekend",
            "high_amount", "rapid_transaction", "merchant_category"]
print(f"Features: {features}")

# ═══ STEP 3: Fraud Patterns ═══
print("\\n" + "=" * 55)
print("STEP 3: Fraud vs Normal Patterns")
print("=" * 55)

for feat in ["amount", "distance_km", "time_since_last", "is_night", "is_international"]:
    normal_val = df[df["fraud"] == 0][feat].mean()
    fraud_val = df[df["fraud"] == 1][feat].mean()
    ratio = fraud_val / (normal_val + 1e-10)
    print(f"  {feat:20s}: Normal={normal_val:10.1f}, Fraud={fraud_val:10.1f} (ratio: {ratio:.1f}x)")

# ═══ STEP 4: Model Training ═══
print("\\n" + "=" * 55)
print("STEP 4: Model Training")
print("=" * 55)

X = df[features].values
y = df["fraud"].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

# Supervised
rf = RandomForestClassifier(n_estimators=100, class_weight="balanced", random_state=42)
rf.fit(X_train_s, y_train)
y_pred = rf.predict(X_test_s)
y_proba = rf.predict_proba(X_test_s)[:, 1]

print("Random Forest (class_weight=balanced):")
print(classification_report(y_test, y_pred, target_names=["Normal", "Fraud"]))

# ═══ STEP 5: Threshold Optimization ═══
print("=" * 55)
print("STEP 5: Threshold Optimization")
print("=" * 55)

precision, recall, thresholds = precision_recall_curve(y_test, y_proba)
f1_scores = 2 * precision * recall / (precision + recall + 1e-10)
best_idx = np.argmax(f1_scores)
best_threshold = thresholds[best_idx] if best_idx < len(thresholds) else 0.5

print(f"Default threshold (0.5):")
print(f"  Precision: {precision[np.searchsorted(-thresholds, -0.5)]:.3f}, Recall: {recall[np.searchsorted(-thresholds, -0.5)]:.3f}")
print(f"\\nOptimal threshold ({best_threshold:.3f}):")
print(f"  Precision: {precision[best_idx]:.3f}, Recall: {recall[best_idx]:.3f}, F1: {f1_scores[best_idx]:.3f}")

# ═══ STEP 6: Business Impact ═══
print("\\n" + "=" * 55)
print("STEP 6: Business Impact")
print("=" * 55)

y_opt = (y_proba >= best_threshold).astype(int)
tp = np.sum((y_opt == 1) & (y_test == 1))
fp = np.sum((y_opt == 1) & (y_test == 0))
fn = np.sum((y_opt == 0) & (y_test == 1))

avg_fraud_amount = df[df["fraud"] == 1]["amount"].mean()
print(f"  Fraud detected:  {tp} (saved ~Rp {tp * avg_fraud_amount:,.0f})")
print(f"  Fraud missed:    {fn} (lost ~Rp {fn * avg_fraud_amount:,.0f})")
print(f"  False alarms:    {fp} (review cost)")
print(f"  Detection rate:  {tp / (tp + fn):.1%}")`,
    expectedOutput: null,
    hint: 'Dalam fraud detection, Recall lebih penting dari Precision — lebih baik false alarm daripada miss fraud!',
  },

  // ═══════════════════════════════════════════════
  // KATEGORI 6: RECOMMENDATION SYSTEM
  // ═══════════════════════════════════════════════
  {
    id: 'movie-recommender',
    category: 'Recommendation',
    title: 'Sistem Rekomendasi Film',
    description: 'Bangun recommendation engine menggunakan collaborative filtering dan content-based.',
    difficulty: 'medium',
    tags: ['Recommendation', 'Cosine Similarity', 'Collaborative Filtering'],
    estimatedTime: '12 menit',
    initialCode: `import numpy as np
import pandas as pd

np.random.seed(42)

# ═══ STEP 1: Dataset Film ═══
print("STEP 1: Dataset Film & Rating")
print("=" * 55)

movies = {
    "Inception": ["Sci-Fi", "Action", "Thriller"],
    "The Matrix": ["Sci-Fi", "Action"],
    "Interstellar": ["Sci-Fi", "Drama"],
    "The Dark Knight": ["Action", "Thriller", "Crime"],
    "Pulp Fiction": ["Crime", "Drama"],
    "Forrest Gump": ["Drama", "Romance"],
    "Titanic": ["Romance", "Drama"],
    "The Notebook": ["Romance", "Drama"],
    "Avengers": ["Action", "Sci-Fi"],
    "John Wick": ["Action", "Thriller"],
    "Parasite": ["Thriller", "Drama"],
    "La La Land": ["Romance", "Musical"],
}

users = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]
movie_list = list(movies.keys())

# Rating matrix (0 = belum nonton)
ratings = np.array([
    [5, 5, 4, 4, 0, 2, 1, 0, 5, 4, 3, 0],  # Alice - suka action/sci-fi
    [3, 3, 5, 2, 4, 5, 4, 3, 1, 1, 5, 4],  # Bob - suka drama
    [5, 4, 3, 5, 3, 0, 0, 0, 5, 5, 0, 0],  # Charlie - suka action
    [1, 2, 4, 1, 5, 5, 5, 5, 0, 0, 3, 5],  # Diana - suka romance/drama
    [4, 5, 0, 3, 0, 0, 0, 0, 4, 3, 0, 0],  # Eve - suka sci-fi
    [0, 0, 3, 0, 4, 4, 3, 4, 0, 0, 5, 3],  # Frank - suka drama/thriller
])

df_ratings = pd.DataFrame(ratings, index=users, columns=movie_list)
print("Rating Matrix (0 = belum nonton):")
print(df_ratings.to_string())

# ═══ STEP 2: Collaborative Filtering ═══
print("\\n" + "=" * 55)
print("STEP 2: Collaborative Filtering (User-Based)")
print("=" * 55)

def cosine_sim(a, b):
    # Only consider movies both users have rated
    mask = (a > 0) & (b > 0)
    if mask.sum() < 2:
        return 0
    a_m, b_m = a[mask], b[mask]
    dot = np.dot(a_m, b_m)
    norm = np.linalg.norm(a_m) * np.linalg.norm(b_m)
    return dot / norm if norm > 0 else 0

# Similarity matrix
sim_matrix = np.zeros((len(users), len(users)))
for i in range(len(users)):
    for j in range(len(users)):
        sim_matrix[i][j] = cosine_sim(ratings[i], ratings[j])

print("User Similarity Matrix:")
sim_df = pd.DataFrame(sim_matrix.round(3), index=users, columns=users)
print(sim_df.to_string())

# ═══ STEP 3: Content-Based ═══
print("\\n" + "=" * 55)
print("STEP 3: Content-Based (Genre Similarity)")
print("=" * 55)

all_genres = sorted(set(g for genres in movies.values() for g in genres))
genre_matrix = np.zeros((len(movie_list), len(all_genres)))
for i, movie in enumerate(movie_list):
    for genre in movies[movie]:
        genre_matrix[i, all_genres.index(genre)] = 1

def movie_similarity(i, j):
    a, b = genre_matrix[i], genre_matrix[j]
    dot = np.dot(a, b)
    norm = np.linalg.norm(a) * np.linalg.norm(b)
    return dot / norm if norm > 0 else 0

# Find similar movies for each
print("Film paling mirip:")
for i, movie in enumerate(movie_list[:6]):
    sims = [(j, movie_similarity(i, j)) for j in range(len(movie_list)) if j != i]
    sims.sort(key=lambda x: -x[1])
    top = sims[0]
    print(f"  {movie:20s} -> {movie_list[top[0]]:20s} (similarity: {top[1]:.2f})")

# ═══ STEP 4: Generate Recommendations ═══
print("\\n" + "=" * 55)
print("STEP 4: Rekomendasi untuk Setiap User")
print("=" * 55)

for user_idx, user in enumerate(users):
    user_ratings = ratings[user_idx]
    unrated = [j for j in range(len(movie_list)) if user_ratings[j] == 0]

    if not unrated:
        continue

    # Weighted average dari user yang mirip
    predicted = {}
    for movie_idx in unrated:
        weighted_sum = 0
        sim_sum = 0
        for other_idx in range(len(users)):
            if other_idx == user_idx or ratings[other_idx][movie_idx] == 0:
                continue
            sim = sim_matrix[user_idx][other_idx]
            weighted_sum += sim * ratings[other_idx][movie_idx]
            sim_sum += abs(sim)
        if sim_sum > 0:
            predicted[movie_list[movie_idx]] = weighted_sum / sim_sum

    top_recs = sorted(predicted.items(), key=lambda x: -x[1])[:3]
    print(f"\\n  {user}:")
    for movie, score in top_recs:
        stars = "★" * round(score) + "☆" * (5 - round(score))
        print(f"    {movie:20s} (predicted: {score:.1f}) {stars}")

# ═══ STEP 5: Evaluation ═══
print("\\n" + "=" * 55)
print("STEP 5: Evaluation (Leave-One-Out)")
print("=" * 55)

errors = []
for user_idx in range(len(users)):
    rated = [j for j in range(len(movie_list)) if ratings[user_idx][j] > 0]
    for movie_idx in rated:
        # Predict this rating using other users
        weighted_sum = 0
        sim_sum = 0
        for other_idx in range(len(users)):
            if other_idx == user_idx or ratings[other_idx][movie_idx] == 0:
                continue
            sim = sim_matrix[user_idx][other_idx]
            weighted_sum += sim * ratings[other_idx][movie_idx]
            sim_sum += abs(sim)
        if sim_sum > 0:
            pred = weighted_sum / sim_sum
            actual = ratings[user_idx][movie_idx]
            errors.append(abs(pred - actual))

mae = np.mean(errors)
rmse = np.sqrt(np.mean(np.array(errors) ** 2))
print(f"MAE:  {mae:.3f}")
print(f"RMSE: {rmse:.3f}")
print(f"Interpretasi: rata-rata prediksi meleset {mae:.1f} bintang")`,
    expectedOutput: null,
    hint: 'Collaborative filtering = rekomendasi berdasarkan user serupa. Content-based = berdasarkan genre film.',
  },

  // ═══════════════════════════════════════════════
  // KATEGORI 7: DEEP LEARNING CONCEPTS
  // ═══════════════════════════════════════════════
  {
    id: 'nn-from-scratch',
    category: 'Deep Learning',
    title: 'Neural Network dari Nol (XOR Problem)',
    description: 'Bangun dan latih neural network dari nol menggunakan NumPy. Termasuk forward pass, backprop, dan training loop.',
    difficulty: 'hard',
    tags: ['Neural Network', 'Backpropagation', 'NumPy'],
    estimatedTime: '15 menit',
    initialCode: `import numpy as np

np.random.seed(42)

# ═══ STEP 1: XOR Problem ═══
print("STEP 1: XOR Problem (Non-Linear)")
print("=" * 55)
print("XOR tidak bisa diselesaikan oleh single neuron!")
print("Butuh hidden layer (neural network).")
print()

X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])

for i in range(4):
    print(f"  Input: {X[i]} -> Output: {y[i][0]}")

# ═══ STEP 2: Network Architecture ═══
print("\\n" + "=" * 55)
print("STEP 2: Network Architecture")
print("=" * 55)
print("  Input Layer:  2 neurons")
print("  Hidden Layer: 8 neurons (Sigmoid)")
print("  Output Layer: 1 neuron (Sigmoid)")
print()

# Activation functions
def sigmoid(x):
    return 1 / (1 + np.exp(-np.clip(x, -500, 500)))

def sigmoid_deriv(x):
    return x * (1 - x)

# He initialization
W1 = np.random.randn(2, 8) * np.sqrt(2.0 / 2)
b1 = np.zeros((1, 8))
W2 = np.random.randn(8, 1) * np.sqrt(2.0 / 8)
b2 = np.zeros((1, 1))

print(f"  W1 shape: {W1.shape} ({W1.size} parameters)")
print(f"  b1 shape: {b1.shape} ({b1.size} parameters)")
print(f"  W2 shape: {W2.shape} ({W2.size} parameters)")
print(f"  b2 shape: {b2.shape} ({b2.size} parameters)")
print(f"  Total parameters: {W1.size + b1.size + W2.size + b2.size}")

# ═══ STEP 3: Training ═══
print("\\n" + "=" * 55)
print("STEP 3: Training (Gradient Descent)")
print("=" * 55)

lr = 0.5
epochs = 10000
losses = []

for epoch in range(epochs):
    # Forward pass
    z1 = X @ W1 + b1
    a1 = sigmoid(z1)
    z2 = a1 @ W2 + b2
    a2 = sigmoid(z2)

    # Loss (MSE)
    loss = np.mean((y - a2) ** 2)
    losses.append(loss)

    # Backpropagation
    d2 = (a2 - y) * sigmoid_deriv(a2)
    d1 = (d2 @ W2.T) * sigmoid_deriv(a1)

    # Update weights
    W2 -= lr * (a1.T @ d2) / 4
    b2 -= lr * np.mean(d2, axis=0, keepdims=True)
    W1 -= lr * (X.T @ d1) / 4
    b1 -= lr * np.mean(d1, axis=0, keepdims=True)

    if epoch % 1000 == 0 or epoch == epochs - 1:
        acc = np.mean((a2 > 0.5).astype(int) == y) * 100
        print(f"  Epoch {epoch:5d}: loss={loss:.6f}, accuracy={acc:.0f}%")

# ═══ STEP 4: Results ═══
print("\\n" + "=" * 55)
print("STEP 4: Prediksi Final")
print("=" * 55)

# Final forward pass
z1 = X @ W1 + b1
a1 = sigmoid(z1)
z2 = a1 @ W2 + b2
predictions = sigmoid(z2)

print("  Input    | Target | Prediction | Correct?")
print("  ---------|--------|------------|--------")
all_correct = True
for i in range(4):
    pred = predictions[i][0]
    target = y[i][0]
    pred_class = 1 if pred > 0.5 else 0
    correct = "Yes" if pred_class == target else "No"
    if pred_class != target:
        all_correct = False
    print(f"  {X[i]}   |   {target}    |   {pred:.4f}    | {correct}")

print(f"\\n  XOR Problem {'SOLVED!' if all_correct else 'not yet solved'}")

# ═══ STEP 5: Training Analysis ═══
print("\\n" + "=" * 55)
print("STEP 5: Training Analysis")
print("=" * 55)

# Loss curve summary
milestones = [0, 100, 500, 1000, 2000, 5000, epochs-1]
print("  Loss curve:")
for m in milestones:
    bar = "█" * int((1 - losses[m]) * 30)
    print(f"    Epoch {m:5d}: {losses[m]:.6f} {bar}")

print(f"\\n  Initial loss: {losses[0]:.6f}")
print(f"  Final loss:   {losses[-1]:.6f}")
print(f"  Improvement:  {(1 - losses[-1]/losses[0])*100:.1f}%")

# Hidden layer learned features
print("\\n  Hidden layer activations (what neurons learned):")
for i in range(4):
    z = X[i:i+1] @ W1 + b1
    h = sigmoid(z)[0]
    active = np.sum(h > 0.5)
    print(f"    Input {X[i]}: {active}/{len(h)} neurons active")`,
    expectedOutput: null,
    hint: 'XOR membutuhkan hidden layer karena data tidak linearly separable! Watch loss turun setiap epoch.',
  },

  // ═══════════════════════════════════════════════
  // KATEGORI 8: STATISTICS & A/B TESTING
  // ═══════════════════════════════════════════════
  {
    id: 'ab-testing',
    category: 'Statistics',
    title: 'A/B Testing untuk Website',
    description: 'Jalankan A/B test lengkap: sample size, hypothesis testing, dan statistical significance.',
    difficulty: 'medium',
    tags: ['Statistics', 'Hypothesis Testing', 'Business'],
    estimatedTime: '12 menit',
    initialCode: `import numpy as np
from collections import Counter

np.random.seed(42)

# ═══ STEP 1: Experiment Setup ═══
print("STEP 1: A/B Test Setup")
print("=" * 55)
print("Scenario: E-commerce ingin test tombol 'Beli Sekarang'")
print("  Control (A): Tombol biru (desain lama)")
print("  Treatment (B): Tombol hijau + urgency text")
print()

# Generate data
n_a = 5000  # visitors Control
n_b = 5000  # visitors Treatment

# True conversion rates
true_rate_a = 0.032  # 3.2%
true_rate_b = 0.039  # 3.9%

conversions_a = np.random.binomial(1, true_rate_a, n_a)
conversions_b = np.random.binomial(1, true_rate_b, n_b)

rate_a = conversions_a.mean()
rate_b = conversions_b.mean()
lift = (rate_b - rate_a) / rate_a * 100

print(f"  Control (A):   {n_a} visitors, {conversions_a.sum()} conversions ({rate_a:.2%})")
print(f"  Treatment (B): {n_b} visitors, {conversions_b.sum()} conversions ({rate_b:.2%})")
print(f"  Observed Lift: {lift:+.1f}%")

# ═══ STEP 2: Sample Size Check ═══
print("\\n" + "=" * 55)
print("STEP 2: Sample Size Check")
print("=" * 55)

# Minimum sample size for 80% power, 5% significance
baseline = rate_a
mde = 0.005  # minimum detectable effect
z_alpha = 1.96  # 95% confidence
z_beta = 0.84   # 80% power

p_avg = (rate_a + rate_b) / 2
min_sample = int(np.ceil(
    2 * p_avg * (1 - p_avg) * (z_alpha + z_beta) ** 2 / mde ** 2
))
print(f"  Minimum sample per group: {min_sample:,}")
print(f"  Actual sample per group:  {n_a:,}")
print(f"  Status: {'SUFFICIENT' if n_a >= min_sample else 'INSUFFICIENT'}")

# ═══ STEP 3: Z-Test ═══
print("\\n" + "=" * 55)
print("STEP 3: Two-Proportion Z-Test")
print("=" * 55)

# Pooled proportion
p_pool = (conversions_a.sum() + conversions_b.sum()) / (n_a + n_b)
se = np.sqrt(p_pool * (1 - p_pool) * (1/n_a + 1/n_b))
z_stat = (rate_b - rate_a) / se

# Two-tailed p-value (approximation using normal CDF)
def norm_cdf(x):
    return 0.5 * (1 + np.tanh(x * 0.7071067811865476))

p_value = 2 * (1 - norm_cdf(abs(z_stat)))

print(f"  H0: Conversion rate A = Conversion rate B")
print(f"  H1: Conversion rate A != Conversion rate B")
print(f"  Z-statistic: {z_stat:.4f}")
print(f"  P-value:     {p_value:.4f}")
print(f"  Significance (alpha=0.05): {'YES - SIGNIFICANT' if p_value < 0.05 else 'NO - Not significant'}")

# ═══ STEP 4: Confidence Interval ═══
print("\\n" + "=" * 55)
print("STEP 4: Confidence Interval")
print("=" * 55)

diff = rate_b - rate_a
se_diff = np.sqrt(rate_a * (1 - rate_a) / n_a + rate_b * (1 - rate_b) / n_b)
ci_lower = diff - 1.96 * se_diff
ci_upper = diff + 1.96 * se_diff

print(f"  Difference: {diff:.4f} ({diff*100:.2f} percentage points)")
print(f"  95% CI: [{ci_lower:.4f}, {ci_upper:.4f}]")
print(f"  Contains 0? {'YES (not significant)' if ci_lower <= 0 <= ci_upper else 'NO (significant)'}")

# ═══ STEP 5: Practical Significance ═══
print("\\n" + "=" * 55)
print("STEP 5: Practical Significance & Revenue Impact")
print("=" * 55)

monthly_visitors = 100000
avg_order = 250000  # Rp

current_revenue = monthly_visitors * rate_a * avg_order
new_revenue = monthly_visitors * rate_b * avg_order
revenue_diff = new_revenue - current_revenue

print(f"  Monthly visitors: {monthly_visitors:,}")
print(f"  Average order value: Rp {avg_order:,}")
print(f"\\n  Current (A): {monthly_visitors * rate_a:.0f} conversions -> Rp {current_revenue:,.0f}/bulan")
print(f"  New (B):     {monthly_visitors * rate_b:.0f} conversions -> Rp {new_revenue:,.0f}/bulan")
print(f"  Difference:  Rp {revenue_diff:,.0f}/bulan")
print(f"  Annual impact: Rp {revenue_diff * 12:,.0f}/tahun")

# ═══ STEP 6: Decision ═══
print("\\n" + "=" * 55)
print("STEP 6: Final Decision")
print("=" * 55)

if p_value < 0.05 and lift > 5:
    print("  RECOMMENDATION: IMPLEMENT Treatment B")
    print(f"  Reason: Statistically significant (p={p_value:.4f}) with {lift:.1f}% lift")
elif p_value < 0.05:
    print("  RECOMMENDATION: CONSIDER implementing (small but significant effect)")
else:
    print("  RECOMMENDATION: Keep Control A (no significant difference)")
    print("  Consider: running test longer or testing bigger changes")`,
    expectedOutput: null,
    hint: 'A/B test = metode ilmiah untuk keputusan bisnis! p-value < 0.05 = statistically significant.',
  },

  {
    id: 'time-series-forecast',
    category: 'Prediction',
    title: 'Forecasting Penjualan (Time Series)',
    description: 'Prediksi penjualan masa depan menggunakan moving average, exponential smoothing, dan trend decomposition.',
    difficulty: 'medium',
    tags: ['Time Series', 'Forecasting', 'Business'],
    estimatedTime: '12 menit',
    initialCode: `import numpy as np
import pandas as pd

np.random.seed(42)

# ═══ STEP 1: Generate Sales Data ═══
print("STEP 1: Dataset Penjualan 2 Tahun (24 bulan)")
print("=" * 55)

months = 24
dates = pd.date_range("2023-01-01", periods=months, freq="MS")

# Trend + Seasonality + Noise
trend = np.linspace(100, 200, months)
seasonal = 30 * np.sin(np.linspace(0, 4 * np.pi, months))  # 2 siklus
noise = np.random.randn(months) * 10
sales = (trend + seasonal + noise).round(0)

df = pd.DataFrame({"date": dates, "sales": sales})
df["month"] = df["date"].dt.month
df["year"] = df["date"].dt.year

print(df.to_string(index=False))

# ═══ STEP 2: Decomposition ═══
print("\\n" + "=" * 55)
print("STEP 2: Trend & Seasonal Decomposition")
print("=" * 55)

# Moving average (3-month) for trend
df["trend_ma3"] = df["sales"].rolling(3, center=True).mean()
df["trend_ma6"] = df["sales"].rolling(6, center=True).mean()

# Seasonal component (avg per month across years)
monthly_avg = df.groupby("month")["sales"].mean()
df["seasonal"] = df["month"].map(monthly_avg) - monthly_avg.mean()
df["residual"] = df["sales"] - df["trend_ma3"] - df["seasonal"]

print("Monthly Seasonality Pattern:")
for m in range(1, 13):
    val = monthly_avg.get(m, 0) - monthly_avg.mean()
    bar = "+" * max(0, int(val / 3)) if val > 0 else "-" * max(0, int(-val / 3))
    print(f"  Month {m:2d}: {val:+6.1f} {bar}")

# ═══ STEP 3: Forecasting Methods ═══
print("\\n" + "=" * 55)
print("STEP 3: Forecast Bulan ke-25 sampai 30 (6 bulan)")
print("=" * 55)

# Split: 18 train, 6 test
train = df.iloc[:18]
test = df.iloc[18:]

# Method 1: Simple Moving Average
sma_pred = train["sales"].iloc[-3:].mean()
print(f"\\n  Method 1: Simple Moving Average (3-month)")
print(f"  Prediction: {sma_pred:.0f} (semua bulan sama)")

# Method 2: Exponential Smoothing
alpha = 0.3
ema = train["sales"].iloc[0]
for val in train["sales"]:
    ema = alpha * val + (1 - alpha) * ema
print(f"\\n  Method 2: Exponential Smoothing (alpha={alpha})")
print(f"  Prediction: {ema:.0f}")

# Method 3: Trend + Seasonal
last_trend = train["trend_ma3"].dropna().iloc[-1]
trend_slope = (train["trend_ma3"].dropna().iloc[-1] - train["trend_ma3"].dropna().iloc[0]) / len(train["trend_ma3"].dropna())

print(f"\\n  Method 3: Trend + Seasonal Decomposition")
print(f"  Trend slope: {trend_slope:.1f}/month")

forecasts = {}
future_months = [19, 20, 21, 22, 23, 24]
for i, fm in enumerate(future_months):
    m = (fm - 1) % 12 + 1
    trend_val = last_trend + trend_slope * (i + 1)
    season_val = monthly_avg.get(m, 0) - monthly_avg.mean()
    pred = trend_val + season_val
    forecasts[fm] = {"trend": trend_val, "seasonal": season_val, "forecast": pred}

print("  Month | Trend  | Seasonal | Forecast")
print("  ------|--------|----------|--------")
for fm, vals in forecasts.items():
    print(f"    {fm:2d}   | {vals['trend']:6.0f} | {vals['seasonal']:+7.1f}  | {vals['forecast']:7.0f}")

# ═══ STEP 4: Accuracy ═══
print("\\n" + "=" * 55)
print("STEP 4: Akurasi pada Test Set (bulan 19-24)")
print("=" * 55)

errors = {"SMA": [], "EMA": [], "Trend+Seasonal": []}
for i, (idx, row) in enumerate(test.iterrows()):
    actual = row["sales"]
    fm = 19 + i
    m = (fm - 1) % 12 + 1

    errors["SMA"].append(abs(actual - sma_pred))
    errors["EMA"].append(abs(actual - ema))
    errors["Trend+Seasonal"].append(abs(actual - forecasts[fm]["forecast"]))

print("  Method             | MAE    | Best?")
print("  -------------------|--------|------")
best_method = min(errors, key=lambda k: np.mean(errors[k]))
for method, errs in errors.items():
    mae = np.mean(errs)
    best = " <--" if method == best_method else ""
    print(f"  {method:20s}| {mae:6.1f} |{best}")

print(f"\\n  Best method: {best_method} (MAE = {np.mean(errors[best_method]):.1f})")`,
    expectedOutput: null,
    hint: 'Trend+Seasonal biasanya lebih baik karena menangkap pola musiman!',
  },
]

// Category metadata for UI grouping
export const projectCategories = [
  { id: 'Data Analysis', icon: '📊', color: 'blue', label: 'Data Analysis' },
  { id: 'Prediction', icon: '🔮', color: 'purple', label: 'Prediction Models' },
  { id: 'Clustering', icon: '🎯', color: 'amber', label: 'Clustering & Segmentation' },
  { id: 'NLP', icon: '💬', color: 'green', label: 'NLP & Text' },
  { id: 'Anomaly Detection', icon: '🚨', color: 'red', label: 'Anomaly Detection' },
  { id: 'Recommendation', icon: '⭐', color: 'indigo', label: 'Recommendation System' },
  { id: 'Deep Learning', icon: '🧠', color: 'fuchsia', label: 'Deep Learning' },
  { id: 'Statistics', icon: '📈', color: 'teal', label: 'Statistics & Testing' },
]
