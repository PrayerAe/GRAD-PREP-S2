# GradPrep - Platform Belajar Persiapan S2

Platform belajar interaktif berbasis web untuk persiapan studi S2, mencakup materi Matematika, Bahasa Inggris (TOEFL & IELTS), Machine Learning & AI, Coding Lab, dan Daily Conversation.

## Deskripsi

GradPrep adalah aplikasi web yang dirancang untuk membantu calon mahasiswa S2 mempersiapkan diri secara komprehensif. Platform ini menyediakan materi belajar, latihan soal, quiz per chapter, tryout, vocabulary builder, listening simulator, dan tracking progress — semuanya dalam satu tempat.

### Fitur Utama

- **Dashboard** — Ringkasan progress belajar secara keseluruhan
- **Matematika** — Materi & latihan soal matematika dasar hingga lanjut
- **English** — Grammar, reading comprehension, dan structure
- **TOEFL** — Materi lengkap + listening simulator dengan TTS audio
- **IELTS** — Materi lengkap + listening simulator (8 passages, 2 full sets)
- **Machine Learning & AI** — Python, ML Algorithms, Deep Learning (CNN/LSTM/Transformers), NLP, Data Science Workflow
- **Coding Lab** — Interactive code editor, exercises, projects, dan cheatsheets
- **Daily Conversation** — Latihan percakapan bahasa Inggris sehari-hari
- **Vocabulary Builder** — Flashcard, browse, dan quiz (50+ kata, 5 kategori)
- **Tryout & Latihan** — Simulasi ujian dengan timer dan scoring
- **Chapter Quiz** — Quiz per bab untuk setiap mata pelajaran
- **Cheatsheets** — Ringkasan materi per section
- **Admin Panel** — Analytics tracking dan manajemen konten
- **Auth & Profile** — Login, register, dan profil pengguna
- **Cross-device Sync** — Progress tersimpan di cloud via Firebase Firestore
- **Vercel Analytics** — Monitoring performa dan pengunjung

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Routing** | React Router DOM 6 |
| **Styling** | Tailwind CSS 3 |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Backend/Auth** | Firebase (Authentication + Firestore) |
| **Hosting** | Vercel |
| **Analytics** | Vercel Analytics + Speed Insights |
| **Language** | JavaScript (ES Modules) |

## Struktur Project

```
gradprep/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── AdminRoute.jsx       # Route guard untuk admin
│   │   ├── ChapterQuiz.jsx      # Komponen quiz per chapter
│   │   ├── InteractiveCode.jsx  # Code editor interaktif
│   │   ├── ListeningSimulator.jsx # Simulator listening TOEFL/IELTS
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── ProtectedRoute.jsx   # Route guard untuk auth
│   │   ├── ProgressBar.jsx      # Progress bar component
│   │   ├── QuestionCard.jsx     # Kartu soal latihan
│   │   ├── ScoreCard.jsx        # Kartu hasil skor
│   │   ├── Sidebar.jsx          # Sidebar navigasi
│   │   └── Timer.jsx            # Timer untuk tryout
│   ├── context/             # React Context
│   │   ├── AuthContext.jsx      # Authentication state
│   │   └── UserContext.jsx      # User data state
│   ├── data/                # Konten & soal
│   │   ├── mathContent.jsx      # Materi Matematika
│   │   ├── englishContent.jsx   # Materi English
│   │   ├── toeflContent.jsx     # Materi TOEFL
│   │   ├── ieltsContent.jsx     # Materi IELTS
│   │   ├── mlContent.jsx        # Materi ML & AI (4 parts)
│   │   ├── codingLabContent.jsx # Materi Coding Lab (3 parts)
│   │   ├── conversationData.jsx # Data Daily Conversation (10 parts)
│   │   ├── vocabularyData.js    # Data Vocabulary Builder
│   │   ├── *Questions.js        # Bank soal per mata pelajaran
│   │   ├── *ChapterQuiz.js      # Quiz per chapter
│   │   ├── *SectionQuiz.js      # Quiz per section
│   │   └── *Cheatsheets.js      # Cheatsheet per section
│   ├── pages/               # Halaman utama
│   │   ├── Landing.jsx          # Landing page
│   │   ├── Login.jsx            # Login & Register
│   │   ├── Dashboard.jsx        # Dashboard utama
│   │   ├── Matematika.jsx       # Halaman Matematika
│   │   ├── English.jsx          # Halaman English
│   │   ├── TOEFL.jsx            # Halaman TOEFL
│   │   ├── IELTS.jsx            # Halaman IELTS
│   │   ├── ML.jsx               # Halaman Machine Learning
│   │   ├── CodingLab.jsx        # Halaman Coding Lab
│   │   ├── DailyConversation.jsx # Halaman Daily Conversation
│   │   ├── Vocabulary.jsx       # Halaman Vocabulary Builder
│   │   ├── Latihan.jsx          # Halaman Latihan Soal
│   │   ├── Tryout.jsx           # Halaman Tryout
│   │   ├── Profile.jsx          # Halaman Profil
│   │   └── Admin.jsx            # Halaman Admin Panel
│   ├── services/            # Firebase services
│   │   ├── firestore.js         # Firestore CRUD operations
│   │   └── authService.js       # Authentication service
│   └── App.jsx              # Root component & routing
├── firebase.json            # Firebase config
├── firestore.rules          # Firestore security rules
├── firestore.indexes.json   # Firestore indexes
├── index.html               # Entry HTML
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies & scripts
```

## Step-by-Step Pembuatan

### Phase 1 — Setup & Foundation
1. **Inisialisasi project** dengan `npm create vite@latest gradprep -- --template react`
2. **Install dependencies** — Tailwind CSS, React Router DOM, Lucide React
3. **Konfigurasi Tailwind CSS** — setup `tailwind.config.js` dan `postcss.config.js`
4. **Buat struktur folder** — `components/`, `pages/`, `data/`, `context/`, `services/`
5. **Setup routing** di `App.jsx` dengan React Router DOM
6. **Buat komponen dasar** — Navbar, Sidebar, ProtectedRoute

### Phase 2 — Core Pages & Content
7. **Landing page** — Halaman utama dengan deskripsi platform
8. **Dashboard** — Ringkasan progress semua mata pelajaran
9. **Halaman Matematika** — Materi + bank soal + cheatsheet + chapter quiz
10. **Halaman English** — Materi grammar, reading, structure + quiz
11. **Komponen Latihan** — QuestionCard, ScoreCard, Timer, ProgressBar
12. **Halaman Latihan & Tryout** — Simulasi ujian dengan timer dan scoring

### Phase 3 — Authentication & Backend
13. **Setup Firebase** — Konfigurasi Firebase project (Auth + Firestore)
14. **AuthContext** — State management untuk authentication
15. **Login & Register** — Halaman autentikasi pengguna
16. **Firestore service** — CRUD operations untuk simpan progress
17. **Cross-device sync** — Progress tracking tersimpan di Firestore
18. **Admin panel** — Analytics dan manajemen konten

### Phase 4 — TOEFL & IELTS
19. **Halaman TOEFL** — Materi lengkap (Listening, Structure, Reading)
20. **Halaman IELTS** — Materi lengkap (Listening, Reading, Writing, Speaking)
21. **Listening Simulator** — Komponen simulator listening dengan TTS audio
22. **Expand listening passages** — 6 passages TOEFL, 8 passages IELTS

### Phase 5 — Vocabulary & ML
23. **Vocabulary Builder** — Flashcard, browse, quiz dengan 50+ kata (5 kategori)
24. **Machine Learning & AI** — Python basics, ML Algorithms, Deep Learning, NLP, Data Science
25. **ML Diagrams** — Visualisasi arsitektur neural network

### Phase 6 — Coding Lab & Conversation
26. **Coding Lab** — Interactive code editor, exercises, projects, cheatsheets
27. **Daily Conversation** — 10 parts latihan percakapan bahasa Inggris
28. **InteractiveCode component** — Komponen code editor interaktif

### Phase 7 — Deployment & Optimization
29. **Deploy ke Vercel** — Setup deployment dan domain
30. **Vercel Analytics** — Integrasi monitoring performa dan pengunjung
31. **Firebase Firestore Rules** — Setup security rules
32. **Optimasi performa** — Code splitting, lazy loading konten

## Cara Menjalankan

```bash
# Clone repository
git clone <repo-url>
cd gradprep

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview
```

## Environment Variables

Buat file `.env.local` di root project:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## License

Private project untuk keperluan persiapan studi S2.
