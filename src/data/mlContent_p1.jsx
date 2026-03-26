import { FormulaCard, ExampleBox, TipBox, StepList, ConceptGrid } from './mathContent.jsx'
import { NumpyBroadcastingDiagram, PandasAnatomyDiagram, SklearnPipelineDiagram } from './mlDiagrams.jsx'

function CodeBlock({ children }) {
  return (
    <pre className="bg-gray-900 text-green-400 rounded-xl p-4 text-xs overflow-x-auto my-3 font-mono leading-relaxed whitespace-pre">
      {children}
    </pre>
  )
}
function SectionTitle({ icon, children }) {
  return (
    <h3 className="font-bold text-base text-gray-900 flex items-center gap-2 mt-5 mb-2">
      <span className="text-lg">{icon}</span>{children}
    </h3>
  )
}
function FormulaBox({ label, formula, note }) {
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 my-2">
      {label && <p className="text-[10px] font-bold text-indigo-500 uppercase mb-1">{label}</p>}
      <p className="font-mono text-indigo-900 text-sm font-semibold">{formula}</p>
      {note && <p className="text-xs text-indigo-600 mt-1">{note}</p>}
    </div>
  )
}
function CompareTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            {headers.map((h, i) => <th key={i} className="px-3 py-2 text-left font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              {row.map((cell, j) => <td key={j} className="px-3 py-2 border-b border-gray-100 text-gray-700">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
function DiagramBox({ children }) {
  return (
    <div className="bg-gray-900 rounded-xl p-4 my-4 font-mono text-xs text-green-300 overflow-x-auto leading-relaxed whitespace-pre">
      {children}
    </div>
  )
}

export { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox }

export const pythonSections = [
  {
    title: '🐍 Python Essentials & NumPy',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">NumPy adalah fondasi ekosistem Data Science Python. Hampir semua library (Pandas, Scikit-learn, TensorFlow) bergantung pada NumPy array di balik layar.</p>
        <NumpyBroadcastingDiagram />
        <SectionTitle icon="📦">Instalasi & Import</SectionTitle>
        <CodeBlock>{`pip install numpy pandas matplotlib seaborn scikit-learn

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split`}</CodeBlock>
        <SectionTitle icon="🔢">Membuat Array NumPy</SectionTitle>
        <CodeBlock>{`a = np.array([1, 2, 3, 4, 5])
b = np.array([[1, 2, 3], [4, 5, 6]])   # 2D matrix

np.zeros((3, 4))          # matrix 3x4 berisi 0
np.ones((2, 3))           # matrix 2x3 berisi 1
np.eye(4)                 # identity matrix 4x4
np.arange(0, 10, 2)       # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)      # [0.0, 0.25, 0.5, 0.75, 1.0]
np.random.randn(3, 3)     # normal distribution N(0,1)
np.random.randint(0,10,(3,3))  # random integers`}</CodeBlock>
        <SectionTitle icon="🔄">Shape, Reshape & Indexing</SectionTitle>
        <CodeBlock>{`a = np.array([[1,2,3],[4,5,6]])
a.shape          # (2, 3)
a.ndim           # 2
a.reshape(3, 2)  # ubah ke 3x2
a.reshape(-1)    # flatten ke 1D = [1,2,3,4,5,6]
a.T              # transpose
a[0, 1]          # baris 0, kolom 1 → 2
a[1, :]          # baris ke-1 semua → [4,5,6]
a[:, 2]          # semua baris, kolom ke-2 → [3,6]
a[a > 3]         # boolean mask → [4,5,6]`}</CodeBlock>
        <FormulaBox label="Dot Product / Matrix Multiply" formula="C = A · B  →  Cᵢⱼ = Σₖ Aᵢₖ · Bₖⱼ" note="Syntax: A @ B atau np.dot(A, B). Shape (m,k) @ (k,n) → (m,n)" />
        <SectionTitle icon="⚡">Broadcasting & Vectorization</SectionTitle>
        <TipBox type="info">Broadcasting memungkinkan operasi array beda shape. NumPy secara otomatis expand dimensi yang size-nya 1. Hindari Python loop — operasi NumPy 10–100× lebih cepat!</TipBox>
        <CodeBlock>{`a = np.array([1, 2, 3])
a + 10           # [11, 12, 13] — broadcast scalar
a * np.array([[1],[2],[3]])  # outer product via broadcasting

# Statistik
np.mean(a, axis=0)   # rata-rata per kolom
np.std(a)            # standard deviation
np.sum(a, axis=1)    # sum per baris

# ❌ Lambat
result = sum(a[i]*b[i] for i in range(len(a)))
# ✅ Cepat
result = np.dot(a, b)  # ~100x lebih cepat`}</CodeBlock>
        <ConceptGrid items={[
          { title: '⚡ Vectorization', desc: 'Ganti for-loop dengan operasi NumPy — gunakan BLAS/C di balik layar.', example: 'np.dot(a, b)  # bukan loop' },
          { title: '🧮 Broadcasting', desc: 'Operasi array beda shape: auto-expand dimensi size-1.', example: 'a(3,1) + b(1,4) → (3,4)' },
          { title: '🎯 Boolean Mask', desc: 'Filter elemen dengan kondisi — hasil adalah view (hemat memori).', example: 'a[a > 5]  # elemen > 5' },
          { title: '📋 View vs Copy', desc: 'Slice = view — ubah slice akan ubah array asli. Gunakan .copy() jika perlu independen.', example: 'b = a[0:3].copy()' },
        ]} />
      </div>
    ),
  },
  {
    title: '🐼 Pandas DataFrame Mastery',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Pandas adalah library utama untuk manipulasi data tabular. DataFrame ibarat spreadsheet Excel dengan kemampuan jauh lebih powerful.</p>
        <PandasAnatomyDiagram />
        <SectionTitle icon="📥">Membaca Data</SectionTitle>
        <CodeBlock>{`df = pd.read_csv("data.csv", encoding="utf-8")
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")
df = pd.read_json("data.json")

# Manual
df = pd.DataFrame({
    "nama": ["Andi", "Budi", "Citra"],
    "umur": [25, 30, 27],
    "gaji": [5_000_000, 8_000_000, 6_500_000],
    "kota": ["Jakarta", "Bandung", "Jakarta"]
})
df.to_csv("output.csv", index=False)`}</CodeBlock>
        <SectionTitle icon="🔍">Eksplorasi Awal</SectionTitle>
        <CodeBlock>{`df.head(5)          # 5 baris pertama
df.info()           # tipe data + missing values
df.describe()       # statistik deskriptif (count, mean, std, ...)
df.isnull().sum()   # jumlah missing per kolom
df.nunique()        # jumlah nilai unik per kolom
df["kota"].value_counts()  # frekuensi tiap nilai`}</CodeBlock>
        <SectionTitle icon="🎯">loc vs iloc</SectionTitle>
        <TipBox type="warning"><strong>loc</strong> = label-based (inklusif di kedua ujung). <strong>iloc</strong> = integer position (ekslusif di ujung kanan), seperti Python slicing biasa.</TipBox>
        <CodeBlock>{`df.loc[0:3, "nama":"umur"]       # label-based, inklusif
df.iloc[0:3, 0:2]                # position-based, eksklusif
df.loc[df["kota"] == "Jakarta"]  # filter dengan kondisi
df.query("umur > 25 and kota == 'Jakarta'")`}</CodeBlock>
        <SectionTitle icon="🔧">GroupBy & Agregasi</SectionTitle>
        <CodeBlock>{`df.groupby("kota")["gaji"].mean()
df.groupby("kota").agg({"gaji": ["mean","std","max"], "umur": "mean"})

# Missing values
df.fillna(df.median(numeric_only=True), inplace=True)
df.dropna(subset=["nama"])

# IQR outlier removal
Q1, Q3 = df["gaji"].quantile([0.25, 0.75])
IQR = Q3 - Q1
df = df[(df["gaji"] >= Q1-1.5*IQR) & (df["gaji"] <= Q3+1.5*IQR)]

# Merge
pd.merge(df1, df2, on="id", how="left")   # LEFT JOIN`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '📊 Visualisasi: Matplotlib & Seaborn',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Visualisasi data adalah kunci memahami distribusi, pola, dan hubungan antar variabel sebelum membangun model.</p>
        <CompareTable
          headers={['Plot','Kapan Digunakan','Fungsi']}
          rows={[
            ['Line Plot','Time series, trend','plt.plot(x, y)'],
            ['Bar Chart','Perbandingan kategori','sns.barplot(x="cat", y="val", data=df)'],
            ['Histogram','Distribusi 1 variabel','plt.hist(data, bins=30)'],
            ['Box Plot','Distribusi + outlier','sns.boxplot(x="cat", y="val", data=df)'],
            ['Scatter','Hubungan 2 variabel','plt.scatter(x, y, c=label)'],
            ['Heatmap','Korelasi matrix','sns.heatmap(df.corr(), annot=True)'],
            ['Pairplot','Semua kombinasi var','sns.pairplot(df, hue="target")'],
            ['Violin','Distribusi + density','sns.violinplot(x="cat", y="val")'],
          ]}
        />
        <CodeBlock>{`import matplotlib.pyplot as plt
import seaborn as sns

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Line plot
axes[0,0].plot(x, np.sin(x), label="sin", color="blue", lw=2)
axes[0,0].plot(x, np.cos(x), label="cos", linestyle="--", color="red")
axes[0,0].set_title("📈 Line Plot"); axes[0,0].legend(); axes[0,0].grid(alpha=0.3)

# Histogram + KDE
axes[0,1].hist(data, bins=30, color="steelblue", edgecolor="white", alpha=0.8)
axes[0,1].set_title("📊 Histogram")

# Heatmap korelasi
sns.heatmap(df.corr(), annot=True, fmt=".2f", cmap="coolwarm",
            square=True, ax=axes[1,0])
axes[1,0].set_title("🔥 Correlation Heatmap")

# Scatter + color by class
scatter = axes[1,1].scatter(df["x1"], df["x2"], c=df["label"],
                             cmap="viridis", alpha=0.7, s=50)
plt.colorbar(scatter, ax=axes[1,1])
axes[1,1].set_title("🎯 Scatter Plot")

plt.tight_layout()
plt.savefig("eda.png", dpi=150, bbox_inches="tight")
plt.show()`}</CodeBlock>
        <TipBox type="tip">Gunakan <code>sns.set_theme(style="whitegrid")</code> di awal notebook untuk tampilan yang lebih bersih. Simpan plot dengan <code>dpi=300</code> untuk kualitas laporan.</TipBox>
      </div>
    ),
  },
  {
    title: '⚙️ Scikit-learn Pipeline',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Scikit-learn menyediakan API konsisten: semua estimator menggunakan <code>fit()</code>, <code>predict()</code>, dan <code>transform()</code>.</p>
        <SklearnPipelineDiagram />
        <DiagramBox>{`  Raw Data
      │
      ▼
  train_test_split(X, y, test_size=0.2, stratify=y)
      │                          │
  X_train, y_train          X_test, y_test
      │                          │
  scaler.fit_transform()    scaler.transform()  ← ONLY transform!
      │
  model.fit(X_train, y_train)
      │
  model.predict(X_test)
      │
  metrics: accuracy, f1, roc_auc...`}</DiagramBox>
        <CodeBlock>{`from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
from sklearn.datasets import load_breast_cancer

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)

# Pipeline: preprocessing + model dalam satu objek
pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", LogisticRegression(max_iter=1000))
])

pipe.fit(X_train, y_train)
y_pred = pipe.predict(X_test)
print(classification_report(y_test, y_pred))`}</CodeBlock>
        <TipBox type="warning">Selalu gunakan Pipeline agar terhindar dari <strong>data leakage</strong> — scaler hanya boleh di-fit pada training data. Jika fit pada semua data, model "mengintip" test set!</TipBox>
      </div>
    ),
  },
  {
    title: '💡 Python Tips & Best Practices',
    body: (
      <div>
        <ConceptGrid items={[
          { title: '🚀 List Comprehension', desc: 'Lebih cepat dari loop + append karena dioptimasi di C level.', example: '[x**2 for x in range(10) if x%2==0]' },
          { title: '🔢 enumerate()', desc: 'Dapatkan index & value sekaligus — lebih Pythonic dari range(len()).', example: 'for i, v in enumerate(lst):' },
          { title: '🤐 zip()', desc: 'Iterasi beberapa list bersamaan — berhenti di list terpendek.', example: 'for a, b in zip(X, y):' },
          { title: '📝 f-strings', desc: 'Format string modern Python 3.6+. Lebih cepat dari .format().', example: 'f"Acc: {acc:.3f}, Loss: {loss:.4f}"' },
          { title: '🔄 Generator', desc: 'Hemat memori — generate nilai saat dibutuhkan, bukan sekaligus.', example: '(x**2 for x in range(1_000_000))' },
          { title: '🧠 @lru_cache', desc: 'Cache hasil fungsi yang sering dipanggil dengan input sama.', example: '@functools.lru_cache(maxsize=128)' },
        ]} />
        <SectionTitle icon="🏎️">Memory Optimization Tips</SectionTitle>
        <CodeBlock>{`# Hemat memori dengan dtype yang tepat
df["age"] = df["age"].astype("int8")       # 1 byte vs 8 byte (int64) → hemat 87.5%
df["score"] = df["score"].astype("float32") # 4 byte vs 8 byte → hemat 50%
df["category"] = df["category"].astype("category")  # string berulang → hemat 70-90%

print(df.memory_usage(deep=True).sum() / 1024**2, "MB")

# Random seed untuk reproducibility
import random
np.random.seed(42)
random.seed(42)

# Method chaining yang readable
result = (df
    .dropna(subset=["target"])
    .query("age > 18")
    .assign(gaji_juta=lambda x: x["gaji"]/1e6)
    .groupby("kota")["gaji_juta"]
    .mean()
    .sort_values(ascending=False)
)`}</CodeBlock>
      </div>
    ),
  },
]
