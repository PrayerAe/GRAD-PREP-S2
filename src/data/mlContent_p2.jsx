// Chapter 2: ML Algorithms
import { TipBox, ConceptGrid } from './mathContent.jsx'
import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { LinearRegressionDiagram, DecisionTreeVisualDiagram, EnsembleDiagram, SVMDiagram, KMeansClusteringDiagram, ConfusionMatrixDiagram, RegularizationDiagram } from './mlDiagrams.jsx'

export const mlSections = [
  {
    title: '🗺️ Supervised vs Unsupervised vs Reinforcement Learning',
    body: (
      <div>
        <DiagramBox>{`                    ┌─────────────────────┐
                    │   MACHINE LEARNING  │
                    └──────────┬──────────┘
           ┌──────────────────┼──────────────────┐
           ▼                  ▼                  ▼
  ┌─────────────────┐ ┌──────────────┐ ┌──────────────────┐
  │   SUPERVISED    │ │ UNSUPERVISED │ │  REINFORCEMENT   │
  │   LEARNING      │ │  LEARNING    │ │    LEARNING      │
  ├─────────────────┤ ├──────────────┤ ├──────────────────┤
  │ Ada label (y)   │ │ Tanpa label  │ │ Agent + Reward   │
  │                 │ │              │ │                  │
  │ Classification  │ │ Clustering   │ │ Game playing     │
  │ Regression      │ │ Dim Reduction│ │ Robotics         │
  │ Detection       │ │ Anomaly Det. │ │ Recommendation   │
  ├─────────────────┤ ├──────────────┤ ├──────────────────┤
  │ Linear Reg.     │ │ K-Means      │ │ Q-Learning       │
  │ Logistic Reg.   │ │ DBSCAN       │ │ Policy Gradient  │
  │ SVM, KNN        │ │ PCA, t-SNE   │ │ PPO, A3C         │
  │ Random Forest   │ │ Autoencoders │ │ DQN              │
  └─────────────────┘ └──────────────┘ └──────────────────┘`}</DiagramBox>
        <ConceptGrid items={[
          { title: '📚 Supervised Learning', desc: 'Data training memiliki label/output yang diketahui. Model belajar memetakan input → output.', example: 'Email → Spam/Not Spam' },
          { title: '🔍 Unsupervised Learning', desc: 'Tidak ada label. Model menemukan pola/struktur tersembunyi dalam data.', example: 'Segmentasi pelanggan' },
          { title: '🎮 Reinforcement Learning', desc: 'Agent belajar dari interaksi dengan lingkungan melalui reward dan punishment.', example: 'AlphaGo, ChatGPT RLHF' },
          { title: '🔀 Semi-Supervised', desc: 'Kombinasi: sebagian kecil data berlabel + banyak data tanpa label.', example: 'Medical image labeling' },
          { title: '🎯 Classification', desc: 'Output diskret (kategori). Metrik: Accuracy, F1, AUC-ROC.', example: 'Fraud detection, NLP' },
          { title: '📈 Regression', desc: 'Output kontinu (angka). Metrik: MSE, RMSE, MAE, R².', example: 'Prediksi harga rumah' },
        ]} />
      </div>
    ),
  },
  {
    title: '📉 Linear & Logistic Regression',
    body: (
      <div>
        <SectionTitle icon="📏">Linear Regression</SectionTitle>
        <p className="text-sm text-gray-600 mb-3">Memodelkan hubungan linear antara fitur input dan output kontinu.</p>
        <LinearRegressionDiagram />
        <FormulaBox label="Model" formula="ŷ = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ = Xβ" note="β₀ = intercept/bias, β₁...βₙ = koefisien, ŷ = prediksi" />
        <FormulaBox label="Cost Function — MSE" formula="J(β) = (1/2m) Σᵢ (ŷᵢ - yᵢ)²" note="m = jumlah data, minimasi J(β) untuk menemukan β optimal" />
        <FormulaBox label="Gradient Descent Update" formula="βⱼ := βⱼ - α · (∂J/∂βⱼ)  =  βⱼ - (α/m) Σ(ŷᵢ - yᵢ)xᵢⱼ" note="α = learning rate (biasanya 0.01–0.1)" />
        <FormulaBox label="Analytic Solution (Normal Equation)" formula="β = (XᵀX)⁻¹ Xᵀy" note="Exact solution tapi lambat untuk fitur banyak (O(n³))" />

        <SectionTitle icon="🔀">Logistic Regression (Klasifikasi)</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">Untuk binary classification — output berupa probabilitas [0, 1].</p>
        <FormulaBox label="Sigmoid Activation" formula="σ(z) = 1 / (1 + e⁻ᶻ)  ,  z = Xβ" note="Output selalu dalam range (0,1) — diinterpretasikan sebagai probabilitas" />
        <FormulaBox label="Log-Loss (Binary Cross-Entropy)" formula="J(β) = -(1/m) Σ [yᵢ log(ŷᵢ) + (1-yᵢ) log(1-ŷᵢ)]" note="Minimasi ini setara dengan Maximum Likelihood Estimation" />

        <DiagramBox>{`Sigmoid Curve  σ(z) = 1/(1+e⁻ᶻ):

  1.0 |          ___________
  0.9 |       ../
  0.8 |      /
  0.7 |     /
  0.5 |----/----------------  ← threshold = 0.5
  0.3 |   /
  0.2 |  /
  0.1 |./
  0.0 |___________________
      -5  -3  -1  0  1  3  5
         z = β₀ + β₁x`}</DiagramBox>

        <CodeBlock>{`from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import r2_score, classification_report
import numpy as np

# ── Linear Regression ──────────────────────────────────
from sklearn.datasets import load_diabetes
X, y = load_diabetes(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)

print(f"R² Score: {r2_score(y_test, y_pred):.4f}")
print(f"Koefisien: {lr.coef_}")
print(f"Intercept: {lr.intercept_:.4f}")

# ── Logistic Regression ────────────────────────────────
from sklearn.datasets import load_breast_cancer
X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y)

scaler = StandardScaler()
X_train_sc = scaler.fit_transform(X_train)
X_test_sc  = scaler.transform(X_test)

clf = LogisticRegression(C=1.0, max_iter=1000, random_state=42)
clf.fit(X_train_sc, y_train)

y_pred = clf.predict(X_test_sc)
y_prob = clf.predict_proba(X_test_sc)[:, 1]  # probabilitas kelas positif

print(classification_report(y_test, y_pred))
print(f"AUC-ROC: {roc_auc_score(y_test, y_prob):.4f}")`}</CodeBlock>

        <TipBox type="tip">Logistic Regression butuh feature scaling (StandardScaler). Linear Regression juga sebaiknya di-scale agar gradient descent konvergen lebih cepat.</TipBox>
      </div>
    ),
  },
  {
    title: '🌲 Decision Trees & Random Forest',
    body: (
      <div>
        <SectionTitle icon="🌳">Decision Tree</SectionTitle>
        <p className="text-sm text-gray-600 mb-3">Tree membuat keputusan berdasarkan serangkaian pertanyaan if-else pada fitur. Setiap split dipilih untuk memaksimalkan Information Gain.</p>
        <DecisionTreeVisualDiagram />

        <FormulaBox label="Gini Impurity (default sklearn)" formula="Gini(t) = 1 - Σᵢ p(i|t)²" note="p(i|t) = proporsi kelas i di node t. Gini=0 berarti node murni (pure)" />
        <FormulaBox label="Entropy (Information Theory)" formula="H(t) = -Σᵢ p(i|t) · log₂ p(i|t)" note="H=0 berarti pure. H=1 untuk binary class seimbang 50/50" />
        <FormulaBox label="Information Gain" formula="IG(t, A) = H(t) - Σᵥ (|tᵥ|/|t|) · H(tᵥ)" note="Pilih split A yang memaksimalkan IG — yaitu paling mengurangi entropy" />

        <DiagramBox>{`Decision Tree — Contoh Klasifikasi:

              ┌─────────────────┐
              │  umur <= 30 ?   │  ← Root Node (split terbaik)
              └────────┬────────┘
              Ya /      \ Tidak
           ┌──────┐   ┌──────────────┐
           │ Gini │   │ gaji > 5jt ? │
           │=0.0  │   └──────┬───────┘
           │ Pure │   Ya /    \ Tidak
           └──────┘ ┌────┐  ┌──────┐
             ↓      │ ✓  │  │  ✗  │
           APPROVE  │Gini│  │Gini │
                    │=0.0│  │=0.0 │
                    └────┘  └─────┘`}</DiagramBox>

        <CodeBlock>{`from sklearn.tree import DecisionTreeClassifier, plot_tree
import matplotlib.pyplot as plt

# Train Decision Tree
dt = DecisionTreeClassifier(
    max_depth=5,          # cegah overfitting
    min_samples_split=10, # min sampel untuk split
    min_samples_leaf=5,   # min sampel di leaf
    criterion="gini",     # atau "entropy"
    random_state=42
)
dt.fit(X_train, y_train)

# Visualisasi tree
plt.figure(figsize=(20, 8))
plot_tree(dt, feature_names=feature_names, class_names=class_names,
          filled=True, rounded=True, fontsize=10)
plt.title("Decision Tree Visualization")
plt.show()

# Feature importance
importances = dt.feature_importances_
feat_imp = pd.Series(importances, index=feature_names).sort_values(ascending=False)
feat_imp.head(10).plot(kind="bar", title="Feature Importances")`}</CodeBlock>

        <SectionTitle icon="🌲🌲🌲">Random Forest — Ensemble of Trees</SectionTitle>
        <TipBox type="info">Random Forest = Bagging + Feature Randomness. Setiap pohon dilatih pada subset data (bootstrap) dan subset fitur acak → mengurangi variance secara drastis.</TipBox>

        <DiagramBox>{`Random Forest — Bagging:

  Bootstrap Sample 1 ──► Tree 1 ──┐
  Bootstrap Sample 2 ──► Tree 2 ──┤──► Majority Vote ──► Prediksi
  Bootstrap Sample 3 ──► Tree 3 ──┤    (Classification)
  ...                              │    atau Average
  Bootstrap Sample N ──► Tree N ──┘    (Regression)

  Tiap tree: subset data (63.2%) + subset fitur (√n_features)`}</DiagramBox>

        <CodeBlock>{`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

rf = RandomForestClassifier(
    n_estimators=200,      # jumlah pohon (lebih banyak = lebih stabil)
    max_depth=None,        # pohon tumbuh penuh
    max_features="sqrt",   # √(n_features) fitur per split
    min_samples_leaf=2,
    n_jobs=-1,             # pakai semua CPU core
    random_state=42,
    oob_score=True         # out-of-bag score untuk validasi gratis
)
rf.fit(X_train, y_train)

print(f"OOB Score: {rf.oob_score_:.4f}")
print(classification_report(y_test, rf.predict(X_test)))

# Top 10 fitur paling penting
feat_imp = pd.Series(rf.feature_importances_, index=feature_names)
feat_imp.nlargest(10).plot(kind="barh")
plt.title("🌲 Random Forest Feature Importance")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🚀 Ensemble: Bagging, Boosting & Stacking',
    body: (
      <div>
        <CompareTable
          headers={['Metode','Cara Kerja','Kelebihan','Contoh']}
          rows={[
            ['Bagging','Train N model paralel pada subset data berbeda (bootstrap)','Kurangi variance, tahan overfitting','Random Forest'],
            ['Boosting','Train model secara sequential — tiap model perbaiki error model sebelumnya','Kurangi bias, akurasi tinggi','XGBoost, AdaBoost, LightGBM'],
            ['Stacking','Prediksi base models jadi input untuk meta-learner','Kombinasikan kekuatan model berbeda','StackingClassifier'],
            ['Voting','Gabungkan prediksi dengan voting/averaging','Sederhana, robust','VotingClassifier'],
          ]}
        />
        <EnsembleDiagram />

        <DiagramBox>{`BOOSTING — Sequential Learning:

  Data asli
     │
     ├──► Model 1 ──► Error 1 (sampel salah diberi bobot lebih)
     │                    │
     ├──► Model 2 ◄────────┘ (fokus pada error sebelumnya)
     │         └──► Error 2
     │                    │
     ├──► Model 3 ◄────────┘
     │
     ...
     │
     └──► Final = Σ αᵢ · Modelᵢ (weighted sum)`}</DiagramBox>

        <CodeBlock>{`from sklearn.ensemble import (
    BaggingClassifier, AdaBoostClassifier,
    GradientBoostingClassifier, StackingClassifier,
    VotingClassifier
)

# ── AdaBoost ───────────────────────────────────────────
ada = AdaBoostClassifier(
    n_estimators=100, learning_rate=0.5, random_state=42)
ada.fit(X_train, y_train)

# ── Gradient Boosting (sklearn) ────────────────────────
gb = GradientBoostingClassifier(
    n_estimators=200, learning_rate=0.05, max_depth=4,
    subsample=0.8, random_state=42)
gb.fit(X_train, y_train)

# ── Stacking ───────────────────────────────────────────
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC

estimators = [
    ("rf",  RandomForestClassifier(n_estimators=100)),
    ("svm", SVC(probability=True)),
    ("gb",  GradientBoostingClassifier(n_estimators=100)),
]
stacked = StackingClassifier(
    estimators=estimators,
    final_estimator=LogisticRegression(),
    cv=5
)
stacked.fit(X_train, y_train)
print(f"Stacking Accuracy: {stacked.score(X_test, y_test):.4f}")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '⚡ XGBoost, LightGBM & CatBoost',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Gradient boosting libraries terbaik saat ini — mendominasi kompetisi Kaggle dan industri. Lebih cepat, lebih akurat dari sklearn GradientBoosting.</p>

        <CompareTable
          headers={['Library','Kelebihan','Kapan Digunakan','Install']}
          rows={[
            ['XGBoost','Regularisasi built-in, handle missing auto, GPU support','Tabular data, medium-large dataset','pip install xgboost'],
            ['LightGBM','SANGAT CEPAT (leaf-wise), hemat memori, akurasi tinggi','Large dataset (>100k baris), low latency','pip install lightgbm'],
            ['CatBoost','Tanpa perlu encoding kategorikal, robust overfitting','Data dengan banyak fitur kategorikal','pip install catboost'],
          ]}
        />

        <FormulaBox label="XGBoost Objective" formula="J(θ) = Σᵢ l(yᵢ, ŷᵢ) + Σₖ Ω(fₖ)" note="l = loss function, Ω = regularization term = γT + (λ/2)||w||²" />

        <CodeBlock>{`import xgboost as xgb
import lightgbm as lgb
from catboost import CatBoostClassifier

# ── XGBoost ────────────────────────────────────────────
xgb_model = xgb.XGBClassifier(
    n_estimators=500,
    learning_rate=0.05,
    max_depth=6,
    subsample=0.8,
    colsample_bytree=0.8,  # fitur per tree
    reg_alpha=0.1,         # L1 regularization
    reg_lambda=1.0,        # L2 regularization
    use_label_encoder=False,
    eval_metric="logloss",
    early_stopping_rounds=50,  # hentikan jika tidak improve
    random_state=42
)
xgb_model.fit(X_train, y_train,
              eval_set=[(X_test, y_test)],
              verbose=50)

# ── LightGBM ───────────────────────────────────────────
lgb_model = lgb.LGBMClassifier(
    n_estimators=500,
    learning_rate=0.05,
    num_leaves=31,         # kompleksitas tree (2^max_depth default)
    min_child_samples=20,
    subsample=0.8,
    colsample_bytree=0.8,
    reg_alpha=0.1,
    reg_lambda=1.0,
    random_state=42
)
lgb_model.fit(X_train, y_train,
              eval_set=[(X_test, y_test)],
              callbacks=[lgb.early_stopping(50), lgb.log_evaluation(50)])

# ── CatBoost ───────────────────────────────────────────
cat_model = CatBoostClassifier(
    iterations=500,
    learning_rate=0.05,
    depth=6,
    cat_features=cat_feature_indices,  # indeks fitur kategorikal
    early_stopping_rounds=50,
    verbose=50,
    random_state=42
)
cat_model.fit(X_train, y_train, eval_set=(X_test, y_test))

# Bandingkan semua model
for name, model in [("XGBoost", xgb_model), ("LightGBM", lgb_model), ("CatBoost", cat_model)]:
    acc = model.score(X_test, y_test)
    print(f"{name}: {acc:.4f}")`}</CodeBlock>

        <TipBox type="tip"><strong>Tips praktis:</strong> Mulai dengan LightGBM untuk kecepatan. Gunakan early_stopping agar tidak overfit. Tune learning_rate + n_estimators terakhir setelah parameter lain optimal.</TipBox>
      </div>
    ),
  },
  {
    title: '🔵 SVM & KNN',
    body: (
      <div>
        <SectionTitle icon="⚔️">Support Vector Machine (SVM)</SectionTitle>
        <p className="text-sm text-gray-600 mb-3">SVM mencari hyperplane dengan margin terbesar yang memisahkan kelas. Data yang paling dekat dengan hyperplane disebut <strong>support vectors</strong>.</p>
        <SVMDiagram />

        <FormulaBox label="Decision Boundary (Linear SVM)" formula="w · x + b = 0" note="Margin = 2/||w||. SVM memaksimalkan margin ini (minimasi ||w||)" />
        <FormulaBox label="Kernel Trick — RBF" formula="K(x, x') = exp(-γ ||x - x'||²)" note="Memetakan data ke ruang dimensi tinggi tanpa komputasi eksplisit" />

        <DiagramBox>{`SVM — Maximum Margin Hyperplane:

     Class +1  o  o                  o
               o  |  ←── margin ──►  |
               o  |  hyperplane: w·x+b=0
     Class -1  x  x                  x
                  x  x  x

  Support Vectors = titik paling dekat hyperplane
  Margin = 2/||w|| (dimaximasi)`}</DiagramBox>

        <CodeBlock>{`from sklearn.svm import SVC, SVR
from sklearn.preprocessing import StandardScaler

# SVM SANGAT sensitif terhadap skala fitur — HARUS StandardScaler!
scaler = StandardScaler()
X_train_sc = scaler.fit_transform(X_train)
X_test_sc  = scaler.transform(X_test)

# Klasifikasi
svm_clf = SVC(
    kernel="rbf",      # "linear", "poly", "rbf", "sigmoid"
    C=1.0,             # regularisasi — C kecil: margin lebar, C besar: fitting ketat
    gamma="scale",     # "scale" = 1/(n_features * X.var()), "auto" = 1/n_features
    probability=True   # aktifkan predict_proba
)
svm_clf.fit(X_train_sc, y_train)
print(f"SVM Accuracy: {svm_clf.score(X_test_sc, y_test):.4f}")

# Regresi
svm_reg = SVR(kernel="rbf", C=100, epsilon=0.1)
svm_reg.fit(X_train_sc, y_train)`}</CodeBlock>

        <SectionTitle icon="👥">K-Nearest Neighbors (KNN)</SectionTitle>
        <FormulaBox label="Euclidean Distance" formula="d(x, x') = √Σᵢ (xᵢ - x'ᵢ)²" note="KNN: prediksi = label mayoritas dari k tetangga terdekat" />

        <CodeBlock>{`from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
import numpy as np

# Cari K optimal
k_scores = []
for k in range(1, 31):
    knn = KNeighborsClassifier(n_neighbors=k, metric="euclidean", n_jobs=-1)
    scores = cross_val_score(knn, X_train_sc, y_train, cv=5, scoring="accuracy")
    k_scores.append(scores.mean())

optimal_k = np.argmax(k_scores) + 1
print(f"Optimal K = {optimal_k}, CV Score = {max(k_scores):.4f}")

plt.plot(range(1,31), k_scores, "bo-")
plt.xlabel("K"); plt.ylabel("CV Accuracy")
plt.title(f"KNN: Optimal K = {optimal_k}")
plt.axvline(optimal_k, color="red", linestyle="--")
plt.show()

knn = KNeighborsClassifier(n_neighbors=optimal_k)
knn.fit(X_train_sc, y_train)`}</CodeBlock>

        <CompareTable
          headers={['Aspek','SVM','KNN']}
          rows={[
            ['Training Time','Lambat untuk data besar O(n²-n³)','Sangat cepat (lazy learner)'],
            ['Prediction Time','Cepat','Lambat untuk data besar O(n)'],
            ['Memory','Hanya simpan support vectors','Simpan semua training data'],
            ['Feature Scaling','WAJIB','WAJIB'],
            ['Best For','High-dim, small-medium data','Non-linear, interpretable'],
            ['Hyperparameter','C, gamma, kernel','K, metric'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '📐 Naive Bayes & Bayesian Methods',
    body: (
      <div>
        <SectionTitle icon="🧮">Bayes Theorem</SectionTitle>
        <FormulaBox label="Bayes Theorem" formula="P(A|B) = P(B|A) · P(A) / P(B)" note="P(A|B) = posterior, P(B|A) = likelihood, P(A) = prior, P(B) = evidence" />
        <FormulaBox label="Naive Bayes Classifier" formula="P(y|x₁,...,xₙ) ∝ P(y) · Πᵢ P(xᵢ|y)" note="'Naive' = asumsi conditional independence antar fitur" />

        <CompareTable
          headers={['Variant','Distribusi','Digunakan Untuk']}
          rows={[
            ['GaussianNB','Normal (Gaussian)','Fitur kontinu — iris, sensor data'],
            ['MultinomialNB','Multinomial','Text classification (frekuensi kata)'],
            ['BernoulliNB','Bernoulli (0/1)','Binary features — spam detection'],
            ['ComplementNB','Complement','Text, imbalanced class'],
          ]}
        />

        <CodeBlock>{`from sklearn.naive_bayes import GaussianNB, MultinomialNB, BernoulliNB
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline

# ── Gaussian NB untuk fitur kontinu ───────────────────
gnb = GaussianNB(var_smoothing=1e-9)
gnb.fit(X_train, y_train)
print(f"GNB Accuracy: {gnb.score(X_test, y_test):.4f}")

# ── Multinomial NB untuk teks (SANGAT CEPAT) ──────────
text_pipeline = Pipeline([
    ("tfidf", TfidfVectorizer(max_features=10000, ngram_range=(1,2))),
    ("clf",   MultinomialNB(alpha=1.0))   # alpha = Laplace smoothing
])
text_pipeline.fit(X_train_text, y_train)
y_pred = text_pipeline.predict(X_test_text)

# Probabilitas prediksi
proba = gnb.predict_proba(X_test)
print(f"Probabilitas kelas: {proba[0]}")`}</CodeBlock>

        <TipBox type="tip">Naive Bayes sangat cepat, baik untuk real-time classification, dan tidak butuh scaling. Ideal untuk text classification meski asumsi independence sering dilanggar dalam praktik.</TipBox>
      </div>
    ),
  },
  {
    title: '🔵 Clustering: K-Means, DBSCAN & Hierarchical',
    body: (
      <div>
        <SectionTitle icon="🎯">K-Means Clustering</SectionTitle>
        <FormulaBox label="K-Means Objective (Inertia)" formula="J = Σₖ Σ_{xᵢ∈Cₖ} ||xᵢ - μₖ||²" note="Minimasi total jarak tiap titik ke centroid cluster-nya" />
        <KMeansClusteringDiagram />

        <DiagramBox>{`K-Means Algorithm:

  1. Inisialisasi K centroid (random / K-Means++)
  2. E-step: assign tiap titik ke centroid terdekat
  3. M-step: update centroid = rata-rata titik di cluster
  4. Ulangi 2-3 hingga konvergen

  Iterasi 0:     Iterasi 1:     Iterasi 2:
  ×  o  ×        ×  o           ×  o
  o  ×  o    →   ×  o       →   ×  o
  ×  o  ×        ×  ×           ×  ×

  × = centroid, o = data point`}</DiagramBox>

        <CodeBlock>{`from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt

# Standardize dulu!
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# ── K-Means: Cari K optimal dengan Elbow Method ───────
inertias, silhouettes = [], []
K_range = range(2, 11)

for k in K_range:
    km = KMeans(n_clusters=k, init="k-means++", n_init=10, random_state=42)
    km.fit(X_scaled)
    inertias.append(km.inertia_)
    silhouettes.append(silhouette_score(X_scaled, km.labels_))

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
ax1.plot(K_range, inertias, "bo-"); ax1.set_title("Elbow Method")
ax2.plot(K_range, silhouettes, "rs-"); ax2.set_title("Silhouette Score")
plt.tight_layout(); plt.show()

optimal_k = K_range[silhouettes.index(max(silhouettes))]
km = KMeans(n_clusters=optimal_k, init="k-means++", n_init=10, random_state=42)
labels = km.fit_predict(X_scaled)

# ── DBSCAN (density-based, tidak perlu tentukan K) ────
dbscan = DBSCAN(
    eps=0.5,           # radius neighborhood
    min_samples=5,     # min titik untuk core point
    metric="euclidean"
)
labels_db = dbscan.fit_predict(X_scaled)
n_clusters = len(set(labels_db)) - (1 if -1 in labels_db else 0)
n_noise = list(labels_db).count(-1)
print(f"DBSCAN: {n_clusters} clusters, {n_noise} noise points")

# ── Agglomerative Hierarchical ────────────────────────
agg = AgglomerativeClustering(n_clusters=3, linkage="ward")
labels_agg = agg.fit_predict(X_scaled)`}</CodeBlock>

        <CompareTable
          headers={['Algoritma','K perlu ditentukan?','Bentuk Cluster','Outlier','Kompleksitas']}
          rows={[
            ['K-Means','Ya','Spherical/convex','Sensitif','O(n·k·i·d)'],
            ['DBSCAN','Tidak','Arbitrary shape','Robust (label -1)','O(n log n)'],
            ['Hierarchical','Bisa setelah dendogram','Arbitrary','Sensitif','O(n² log n)'],
            ['GMM','Ya','Elliptical (soft)','Medium','O(n·k·d²)'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '📏 Evaluation Metrics & Model Selection',
    body: (
      <div>
        <SectionTitle icon="🎯">Classification Metrics</SectionTitle>
        <ConfusionMatrixDiagram />
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-3">
          <p className="text-xs font-bold text-gray-500 uppercase mb-3">Confusion Matrix</p>
          <div className="overflow-x-auto">
            <table className="text-xs border-collapse mx-auto">
              <thead>
                <tr>
                  <th className="p-2 bg-gray-200"></th>
                  <th className="p-2 bg-blue-100 text-blue-800">Prediksi Positif</th>
                  <th className="p-2 bg-red-100 text-red-800">Prediksi Negatif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 bg-blue-100 text-blue-800 font-semibold">Aktual Positif</td>
                  <td className="p-2 bg-green-100 text-green-800 font-bold text-center">TP ✓</td>
                  <td className="p-2 bg-red-100 text-red-800 font-bold text-center">FN ✗</td>
                </tr>
                <tr>
                  <td className="p-2 bg-red-100 text-red-800 font-semibold">Aktual Negatif</td>
                  <td className="p-2 bg-orange-100 text-orange-800 font-bold text-center">FP ✗</td>
                  <td className="p-2 bg-green-100 text-green-800 font-bold text-center">TN ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <FormulaBox label="Accuracy" formula="Accuracy = (TP + TN) / (TP + TN + FP + FN)" note="Menyesatkan jika data imbalanced (99% kelas A) — gunakan F1 atau AUC-ROC" />
        <FormulaBox label="Precision (Presisi)" formula="Precision = TP / (TP + FP)" note="Dari semua yang diprediksi positif, berapa yang benar? → Penting jika FP mahal (spam filter)" />
        <FormulaBox label="Recall (Sensitivitas)" formula="Recall = TP / (TP + FN)" note="Dari semua yang aktual positif, berapa yang terdeteksi? → Penting jika FN mahal (kanker detection)" />
        <FormulaBox label="F1-Score" formula="F1 = 2 · (Precision · Recall) / (Precision + Recall)" note="Harmonic mean P dan R. Macro/micro/weighted untuk multi-class" />
        <FormulaBox label="ROC-AUC" formula="AUC = P(score(pos) > score(neg))" note="0.5 = random, 1.0 = perfect. Robust terhadap class imbalance" />

        <SectionTitle icon="📉">Regression Metrics</SectionTitle>
        <FormulaBox label="MAE — Mean Absolute Error" formula="MAE = (1/n) Σ |ŷᵢ - yᵢ|" note="Robust terhadap outlier. Satuan sama dengan target." />
        <FormulaBox label="MSE / RMSE" formula="RMSE = √(Σ(ŷᵢ - yᵢ)²/n)" note="Penalti lebih besar untuk error besar. RMSE paling umum digunakan." />
        <FormulaBox label="R² Score (Coefficient of Determination)" formula="R² = 1 - SS_res/SS_tot = 1 - Σ(ŷᵢ-yᵢ)²/Σ(ȳ-yᵢ)²" note="1.0 = perfect, 0 = baseline (prediksi mean), negatif = lebih buruk dari baseline" />

        <CodeBlock>{`from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, classification_report, confusion_matrix,
    mean_absolute_error, mean_squared_error, r2_score
)
import numpy as np, seaborn as sns, matplotlib.pyplot as plt

# Classification metrics
print(f"Accuracy:  {accuracy_score(y_test, y_pred):.4f}")
print(f"Precision: {precision_score(y_test, y_pred, average='weighted'):.4f}")
print(f"Recall:    {recall_score(y_test, y_pred, average='weighted'):.4f}")
print(f"F1:        {f1_score(y_test, y_pred, average='weighted'):.4f}")
print(f"AUC-ROC:   {roc_auc_score(y_test, y_prob, multi_class='ovr'):.4f}")
print("\\nDetailed Report:\\n", classification_report(y_test, y_pred))

# Confusion Matrix heatmap
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues",
            xticklabels=class_names, yticklabels=class_names)
plt.title("Confusion Matrix"); plt.ylabel("Actual"); plt.xlabel("Predicted")
plt.show()

# Regression metrics
print(f"MAE:  {mean_absolute_error(y_test, y_pred):.4f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.4f}")
print(f"R²:   {r2_score(y_test, y_pred):.4f}")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🛡️ Regularization & Optimization',
    body: (
      <div>
        <SectionTitle icon="⚖️">Bias-Variance Tradeoff</SectionTitle>
        <RegularizationDiagram />
        <DiagramBox>{`  Error
  │
  │  Training Error ────────────────────────
  │                    ╲
  │  Validation Error   ╲___/‾‾‾‾‾‾‾‾‾‾‾‾‾
  │                        ↑
  │                  Sweet Spot
  │
  └──────────────────────────────────────── Model Complexity

  Underfitting          Optimal         Overfitting
  (High Bias)                        (High Variance)
  model terlalu            ✓           model hafal data
  sederhana                            training`}</DiagramBox>

        <FormulaBox label="L2 Regularization — Ridge" formula="J(β) = MSE + λ · Σⱼ βⱼ²" note="Koefisien mengecil mendekati 0. Baik jika semua fitur relevan." />
        <FormulaBox label="L1 Regularization — Lasso" formula="J(β) = MSE + λ · Σⱼ |βⱼ|" note="Koefisien bisa = 0 → feature selection otomatis!" />
        <FormulaBox label="ElasticNet — L1 + L2" formula="J(β) = MSE + λ₁·Σ|βⱼ| + λ₂·Σβⱼ²" note="Kombinasi terbaik: sparse seperti Lasso + stabil seperti Ridge" />

        <CodeBlock>{`from sklearn.linear_model import Ridge, Lasso, ElasticNet
from sklearn.model_selection import cross_val_score
import numpy as np

alphas = [0.001, 0.01, 0.1, 1, 10, 100, 1000]

# Cari alpha optimal dengan Cross-Validation
for alpha in alphas:
    ridge = Ridge(alpha=alpha)
    score = cross_val_score(ridge, X_train, y_train, cv=5, scoring="r2").mean()
    print(f"Alpha={alpha:.3f}: R²={score:.4f}")

# RidgeCV & LassoCV otomatis cari alpha terbaik
from sklearn.linear_model import RidgeCV, LassoCV
ridge_cv = RidgeCV(alphas=np.logspace(-4, 4, 100), cv=5)
ridge_cv.fit(X_train, y_train)
print(f"Best alpha (Ridge): {ridge_cv.alpha_}")

lasso_cv = LassoCV(alphas=np.logspace(-4, 2, 100), cv=5, max_iter=10000)
lasso_cv.fit(X_train, y_train)
print(f"Best alpha (Lasso): {lasso_cv.alpha_}")
# Fitur dengan koefisien 0 = tidak penting
n_zero = np.sum(lasso_cv.coef_ == 0)
print(f"Fitur yang dieliminasi Lasso: {n_zero}/{X.shape[1]}")`}</CodeBlock>

        <TipBox type="tip">Gunakan <strong>Lasso</strong> jika banyak fitur yang mungkin tidak relevan (ingin feature selection otomatis). Gunakan <strong>Ridge</strong> jika semua fitur kemungkinan relevan. <strong>ElasticNet</strong> untuk kasus di antaranya.</TipBox>
      </div>
    ),
  },
]
