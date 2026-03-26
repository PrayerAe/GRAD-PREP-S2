import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { ConceptGrid, TipBox, StepList, ExampleBox } from './mathContent.jsx'
import { MLPipelineDiagram, TrainTestSplitDiagram, BiasVarianceDiagram, DecisionTreeDiagram, MLProjectWorkflow } from './codingLabDiagrams.jsx'

// ═══════════════════════════════════════════════════════════════
// PART 2: Machine Learning Coding (8 sections)
// ═══════════════════════════════════════════════════════════════

export const mlCodingSections = [
  {
    title: '🎯 Scikit-learn: Setup & First Model',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Scikit-learn adalah library ML paling populer di Python. API-nya konsisten: fit() → predict() → score() untuk semua model.</p>

        <MLPipelineDiagram />

        <SectionTitle icon="📦">Install & Import</SectionTitle>
        <CodeBlock>{`pip install scikit-learn

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.pipeline import Pipeline
import pandas as pd
import numpy as np`}</CodeBlock>

        <SectionTitle icon="🚀">Model Pertama: Step by Step</SectionTitle>
        <CodeBlock>{`# ═══ STEP 1: Load data ════════════════════════════
from sklearn.datasets import fetch_california_housing
data = fetch_california_housing()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target   # median house value (dalam $100k)

print(f"Features: {X.shape}")   # (20640, 8)
print(X.head())

# ═══ STEP 2: Split data ══════════════════════════
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"Train: {X_train.shape}, Test: {X_test.shape}")

# ═══ STEP 3: Preprocessing ═══════════════════════
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)    # fit + transform
X_test_scaled = scaler.transform(X_test)           # HANYA transform!

# ═══ STEP 4: Train model ═════════════════════════
model = LinearRegression()
model.fit(X_train_scaled, y_train)

# ═══ STEP 5: Predict & Evaluate ══════════════════
y_pred = model.predict(X_test_scaled)

mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print(f"RMSE: {rmse:.4f}")
print(f"R² Score: {r2:.4f}")

# Koefisien model
for name, coef in zip(X.columns, model.coef_):
    print(f"  {name}: {coef:.4f}")`}</CodeBlock>

        <SectionTitle icon="🔗">Pipeline (Best Practice)</SectionTitle>
        <CodeBlock>{`# Pipeline = gabungkan preprocessing + model dalam 1 objek
pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("model", LinearRegression())
])

# Fit & predict — pipeline handle semuanya!
pipe.fit(X_train, y_train)
y_pred = pipe.predict(X_test)
print(f"R²: {pipe.score(X_test, y_test):.4f}")

# Keuntungan pipeline:
# 1. Tidak bisa lupa transform test data
# 2. Mudah di-save dan di-load
# 3. Compatible dengan GridSearchCV`}</CodeBlock>

        <TipBox title="Data Leakage Warning">
          SELALU split data SEBELUM preprocessing. <code>fit_transform()</code> hanya pada training set. <code>transform()</code> saja pada test set. Jika dilanggar = data leakage = metrik terlalu optimis.
        </TipBox>

        <DiagramBox>{`ML Workflow:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Load    │ →  │  Split   │ →  │  Preproc │ →  │  Train   │ →  │ Evaluate │
│  Data    │    │Train/Test│    │ (fit on  │    │  Model   │    │  on Test │
│          │    │          │    │  train)  │    │ .fit()   │    │ .score() │
└──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘`}</DiagramBox>
      </div>
    ),
  },
  {
    title: '📈 Regresi: Linear, Ridge & Lasso',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Regresi memprediksi nilai kontinu (harga, suhu, gaji). Regularisasi (Ridge/Lasso) mencegah overfitting.</p>

        <TrainTestSplitDiagram />

        <SectionTitle icon="📐">Linear Regression</SectionTitle>
        <FormulaBox label="Model" formula="ŷ = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ" note="Minimasi MSE = (1/n) Σ(ŷᵢ - yᵢ)²" />
        <CodeBlock>{`from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import numpy as np

# Linear Regression
lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)

# Evaluasi regresi
print(f"MAE:  {mean_absolute_error(y_test, y_pred):.4f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.4f}")
print(f"R²:   {r2_score(y_test, y_pred):.4f}")

# Koefisien
print(f"Intercept: {lr.intercept_:.4f}")
for feat, coef in sorted(zip(X.columns, lr.coef_), key=lambda x: abs(x[1]), reverse=True):
    print(f"  {feat}: {coef:+.4f}")`}</CodeBlock>

        <SectionTitle icon="🏔️">Ridge (L2) & Lasso (L1)</SectionTitle>
        <FormulaBox label="Ridge (L2)" formula="J = MSE + λ Σβⱼ²" note="Koefisien mengecil mendekati 0 tapi tidak = 0" />
        <FormulaBox label="Lasso (L1)" formula="J = MSE + λ Σ|βⱼ|" note="Koefisien bisa = 0 → feature selection otomatis" />
        <CodeBlock>{`# Ridge Regression (L2 regularization)
ridge = Ridge(alpha=1.0)    # alpha = lambda (strength)
ridge.fit(X_train, y_train)
print(f"Ridge R²: {ridge.score(X_test, y_test):.4f}")

# Lasso Regression (L1 regularization)
lasso = Lasso(alpha=0.1)
lasso.fit(X_train, y_train)
print(f"Lasso R²: {lasso.score(X_test, y_test):.4f}")

# Lasso melakukan feature selection — lihat koefisien = 0
for feat, coef in zip(X.columns, lasso.coef_):
    marker = "✅" if coef != 0 else "❌ (dihapus)"
    print(f"  {feat}: {coef:.4f} {marker}")

# ElasticNet (kombinasi L1 + L2)
elastic = ElasticNet(alpha=0.1, l1_ratio=0.5)  # 50% L1, 50% L2
elastic.fit(X_train, y_train)

# ─── Cari alpha terbaik ──────────────────────────
from sklearn.linear_model import RidgeCV, LassoCV

ridge_cv = RidgeCV(alphas=[0.01, 0.1, 1.0, 10.0], cv=5)
ridge_cv.fit(X_train, y_train)
print(f"Best alpha: {ridge_cv.alpha_}")`}</CodeBlock>

        <CompareTable
          headers={['Model', 'Regularisasi', 'Feature Selection', 'Kapan Digunakan']}
          rows={[
            ['LinearRegression', 'Tidak ada', 'Tidak', 'Baseline, data sederhana'],
            ['Ridge (L2)', 'λΣβ²', 'Tidak (shrink)', 'Banyak fitur berkorelasi'],
            ['Lasso (L1)', 'λΣ|β|', 'Ya (sparse)', 'Butuh feature selection'],
            ['ElasticNet', 'L1 + L2', 'Ya', 'Best of both worlds'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '🔍 Klasifikasi: Logistic, SVM & KNN',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Klasifikasi memprediksi kategori (spam/bukan, sakit/sehat). Tiga model fundamental yang wajib dikuasai.</p>

        <SectionTitle icon="📊">Logistic Regression</SectionTitle>
        <CodeBlock>{`from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (classification_report, confusion_matrix,
                             roc_auc_score, roc_curve)
from sklearn.datasets import load_breast_cancer
import matplotlib.pyplot as plt

# Dataset kanker payudara (binary classification)
data = load_breast_cancer()
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.2, random_state=42
)

# Logistic Regression
lr = LogisticRegression(C=1.0, max_iter=1000)
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)
y_prob = lr.predict_proba(X_test)[:, 1]  # probabilitas kelas positif

# Evaluasi
print(classification_report(y_test, y_pred))
print(f"\\nROC-AUC: {roc_auc_score(y_test, y_prob):.4f}")

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print(f"\\nConfusion Matrix:")
print(f"  TN={cm[0,0]}  FP={cm[0,1]}")
print(f"  FN={cm[1,0]}  TP={cm[1,1]}")

# ROC Curve
fpr, tpr, thresholds = roc_curve(y_test, y_prob)
plt.plot(fpr, tpr, label=f"AUC = {roc_auc_score(y_test, y_prob):.3f}")
plt.plot([0,1], [0,1], "k--")
plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate")
plt.title("ROC Curve")
plt.legend()
plt.show()`}</CodeBlock>

        <SectionTitle icon="⚔️">SVM & KNN</SectionTitle>
        <CodeBlock>{`from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

# SVM — perlu scaling!
svm_pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("svm", SVC(kernel="rbf", C=1.0, gamma="scale", probability=True))
])
svm_pipe.fit(X_train, y_train)
print(f"SVM Accuracy: {svm_pipe.score(X_test, y_test):.4f}")

# KNN — perlu scaling juga!
knn_pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("knn", KNeighborsClassifier(n_neighbors=5))
])
knn_pipe.fit(X_train, y_train)
print(f"KNN Accuracy: {knn_pipe.score(X_test, y_test):.4f}")

# Cari K terbaik
scores = []
for k in range(1, 31):
    knn = Pipeline([("scaler", StandardScaler()),
                     ("knn", KNeighborsClassifier(n_neighbors=k))])
    knn.fit(X_train, y_train)
    scores.append(knn.score(X_test, y_test))

best_k = np.argmax(scores) + 1
print(f"Best K: {best_k}, Accuracy: {scores[best_k-1]:.4f}")`}</CodeBlock>

        <CompareTable
          headers={['Model', 'Kelebihan', 'Kekurangan', 'Perlu Scaling?']}
          rows={[
            ['Logistic Reg', 'Cepat, interpretable, probabilitas', 'Linear boundary', 'Opsional'],
            ['SVM', 'Kernel trick (nonlinear), margin optimal', 'Lambat di data besar, sulit interpret', 'Ya!'],
            ['KNN', 'Simple, nonlinear, no training', 'Lambat di prediksi, sensitif skala', 'Ya!'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '🌳 Tree-Based Models',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Tree-based models adalah workhorses ML — akurat, robust, dan tidak perlu scaling. Random Forest dan Gradient Boosting sering memenangkan kompetisi.</p>

        <DecisionTreeDiagram />

        <SectionTitle icon="🌲">Decision Tree & Random Forest</SectionTitle>
        <CodeBlock>{`from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
import matplotlib.pyplot as plt

# Decision Tree
dt = DecisionTreeClassifier(max_depth=5, min_samples_split=10, random_state=42)
dt.fit(X_train, y_train)
print(f"DT Accuracy: {dt.score(X_test, y_test):.4f}")

# Random Forest (bagging — parallel trees)
rf = RandomForestClassifier(
    n_estimators=100,       # jumlah trees
    max_depth=10,           # batas kedalaman
    min_samples_leaf=5,     # minimum sample di leaf
    n_jobs=-1,              # gunakan semua CPU cores
    random_state=42
)
rf.fit(X_train, y_train)
print(f"RF Accuracy: {rf.score(X_test, y_test):.4f}")

# Feature Importance
importances = pd.Series(rf.feature_importances_, index=X.columns)
top_features = importances.nlargest(10)

plt.figure(figsize=(10, 6))
top_features.plot(kind="barh", color="steelblue")
plt.xlabel("Importance")
plt.title("Top 10 Feature Importance (Random Forest)")
plt.tight_layout()
plt.show()`}</CodeBlock>

        <SectionTitle icon="📈">Gradient Boosting</SectionTitle>
        <CodeBlock>{`# Gradient Boosting (sequential trees — memperbaiki error sebelumnya)
gb = GradientBoostingClassifier(
    n_estimators=200,
    learning_rate=0.1,      # step size (kecil = lebih banyak trees)
    max_depth=3,            # shallow trees!
    subsample=0.8,          # stochastic GB
    random_state=42
)
gb.fit(X_train, y_train)
print(f"GB Accuracy: {gb.score(X_test, y_test):.4f}")

# Staged prediction — lihat performa vs jumlah trees
from sklearn.metrics import accuracy_score
train_scores = []
test_scores = []
for y_pred in gb.staged_predict(X_test):
    test_scores.append(accuracy_score(y_test, y_pred))

plt.plot(test_scores)
plt.xlabel("Number of Trees")
plt.ylabel("Test Accuracy")
plt.title("Gradient Boosting: Accuracy vs Trees")
plt.show()`}</CodeBlock>

        <DiagramBox>{`Random Forest (Bagging):          Gradient Boosting:
┌──────┐ ┌──────┐ ┌──────┐      ┌──────┐   ┌──────┐   ┌──────┐
│Tree 1│ │Tree 2│ │Tree 3│      │Tree 1│ → │Tree 2│ → │Tree 3│
│(data │ │(data │ │(data │      │      │   │(fix  │   │(fix  │
│subset)│ │subset)│ │subset)│     │      │   │error)│   │error)│
└──┬───┘ └──┬───┘ └──┬───┘      └──────┘   └──────┘   └──────┘
   └────┬────┘────────┘           Sequential: each tree learns
        ↓                         from previous tree's mistakes
   Majority Vote / Average`}</DiagramBox>
      </div>
    ),
  },
  {
    title: '🎛️ Hyperparameter Tuning',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Hyperparameter tuning bisa meningkatkan performa model 5-15%. Cari kombinasi parameter terbaik secara sistematis.</p>

        <BiasVarianceDiagram />

        <SectionTitle icon="🔍">GridSearchCV & RandomizedSearchCV</SectionTitle>
        <CodeBlock>{`from sklearn.model_selection import GridSearchCV, RandomizedSearchCV, cross_val_score
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# ═══ GridSearchCV — coba SEMUA kombinasi ══════════
param_grid = {
    "n_estimators": [50, 100, 200],
    "max_depth": [5, 10, 15, None],
    "min_samples_split": [2, 5, 10],
}
# Total: 3 × 4 × 3 = 36 kombinasi × 5 fold = 180 fit

grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid,
    cv=5,                    # 5-fold cross-validation
    scoring="f1",            # optimasi F1-score
    n_jobs=-1,               # parallel
    verbose=1
)
grid.fit(X_train, y_train)

print(f"Best params: {grid.best_params_}")
print(f"Best F1: {grid.best_score_:.4f}")
print(f"Test F1: {grid.score(X_test, y_test):.4f}")

# ═══ RandomizedSearchCV — lebih cepat ═════════════
from scipy.stats import randint, uniform

param_dist = {
    "n_estimators": randint(50, 500),
    "max_depth": randint(3, 20),
    "min_samples_split": randint(2, 20),
    "min_samples_leaf": randint(1, 10),
}

random_search = RandomizedSearchCV(
    RandomForestClassifier(random_state=42),
    param_dist,
    n_iter=50,              # coba 50 kombinasi random
    cv=5,
    scoring="f1",
    n_jobs=-1,
    random_state=42
)
random_search.fit(X_train, y_train)
print(f"Best: {random_search.best_params_}")`}</CodeBlock>

        <SectionTitle icon="📊">Cross-Validation & Learning Curves</SectionTitle>
        <CodeBlock>{`from sklearn.model_selection import cross_val_score, learning_curve
import matplotlib.pyplot as plt

# Cross-validation score
scores = cross_val_score(rf, X_train, y_train, cv=5, scoring="accuracy")
print(f"CV Accuracy: {scores.mean():.4f} ± {scores.std():.4f}")

# Learning Curve — diagnosa overfitting/underfitting
train_sizes, train_scores, test_scores = learning_curve(
    rf, X_train, y_train, cv=5,
    train_sizes=np.linspace(0.1, 1.0, 10),
    scoring="accuracy"
)

plt.figure(figsize=(10, 6))
plt.plot(train_sizes, train_scores.mean(axis=1), label="Train")
plt.plot(train_sizes, test_scores.mean(axis=1), label="Validation")
plt.fill_between(train_sizes,
                 train_scores.mean(axis=1) - train_scores.std(axis=1),
                 train_scores.mean(axis=1) + train_scores.std(axis=1), alpha=0.1)
plt.xlabel("Training Size")
plt.ylabel("Accuracy")
plt.title("Learning Curve")
plt.legend()
plt.show()
# Gap besar train-val = overfitting → kurangi kompleksitas
# Keduanya rendah = underfitting → tambah kompleksitas`}</CodeBlock>

        <TipBox title="Tips Tuning">
          Mulai dengan RandomizedSearchCV (cepat, cari range), lalu GridSearchCV di sekitar best params (fine-tune). Untuk model besar, gunakan Optuna (Bayesian optimization).
        </TipBox>
      </div>
    ),
  },
  {
    title: '📊 Clustering & Unsupervised Learning',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Unsupervised learning menemukan pola di data tanpa label. Clustering mengelompokkan data yang mirip bersama.</p>

        <SectionTitle icon="🎯">K-Means Clustering</SectionTitle>
        <CodeBlock>{`from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt

# Scaling penting untuk clustering!
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# K-Means
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = kmeans.fit_predict(X_scaled)

print(f"Silhouette Score: {silhouette_score(X_scaled, labels):.4f}")
print(f"Inertia: {kmeans.inertia_:.2f}")

# Elbow Method — cari K optimal
inertias = []
silhouettes = []
K_range = range(2, 11)
for k in K_range:
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X_scaled)
    inertias.append(km.inertia_)
    silhouettes.append(silhouette_score(X_scaled, km.labels_))

fig, axes = plt.subplots(1, 2, figsize=(14, 5))
axes[0].plot(K_range, inertias, "bx-")
axes[0].set_title("Elbow Method")
axes[0].set_xlabel("K")
axes[0].set_ylabel("Inertia")

axes[1].plot(K_range, silhouettes, "rx-")
axes[1].set_title("Silhouette Score")
axes[1].set_xlabel("K")
axes[1].set_ylabel("Score")
plt.tight_layout()
plt.show()`}</CodeBlock>

        <SectionTitle icon="🔍">PCA & Visualisasi</SectionTitle>
        <CodeBlock>{`from sklearn.decomposition import PCA
from sklearn.manifold import TSNE

# PCA — reduksi dimensi untuk visualisasi
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
print(f"Explained variance: {pca.explained_variance_ratio_.sum():.2%}")

# Visualisasi clusters di 2D
plt.figure(figsize=(10, 8))
scatter = plt.scatter(X_pca[:, 0], X_pca[:, 1], c=labels, cmap="viridis", alpha=0.6)
plt.colorbar(scatter, label="Cluster")
plt.xlabel(f"PC1 ({pca.explained_variance_ratio_[0]:.1%})")
plt.ylabel(f"PC2 ({pca.explained_variance_ratio_[1]:.1%})")
plt.title("K-Means Clusters (PCA 2D)")
plt.show()

# t-SNE — visualisasi nonlinear (lebih detail tapi lambat)
tsne = TSNE(n_components=2, perplexity=30, random_state=42)
X_tsne = tsne.fit_transform(X_scaled)

plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=labels, cmap="viridis", alpha=0.6, s=10)
plt.title("t-SNE Visualization")
plt.show()`}</CodeBlock>

        <CompareTable
          headers={['Algoritma', 'Kelebihan', 'Kekurangan']}
          rows={[
            ['K-Means', 'Cepat, mudah dipahami', 'Harus tentukan K, sensitif outlier'],
            ['DBSCAN', 'Auto K, deteksi outlier, bentuk bebas', 'Sensitif terhadap epsilon'],
            ['Hierarchical', 'Dendrogram, tidak perlu K di awal', 'Lambat untuk data besar'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '⚖️ Handling Imbalanced Data',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Data imbalanced (misal 99% normal, 1% fraud) membuat model bias ke majority class. Perlu strategi khusus.</p>

        <SectionTitle icon="📊">Teknik Handling</SectionTitle>
        <CodeBlock>{`from sklearn.utils.class_weight import compute_class_weight
from sklearn.metrics import classification_report, precision_recall_curve
import numpy as np

# ═══ 1. Class Weight ═════════════════════════════
# Beri bobot lebih ke minority class
rf = RandomForestClassifier(class_weight="balanced", random_state=42)
rf.fit(X_train, y_train)

# Manual class weight
weights = compute_class_weight("balanced", classes=np.unique(y_train), y=y_train)
print(f"Class weights: {dict(zip(np.unique(y_train), weights))}")

# ═══ 2. SMOTE (Synthetic Minority Over-sampling) ═
# pip install imbalanced-learn
from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler
from imblearn.pipeline import Pipeline as ImbPipeline

# Cek distribusi sebelum
from collections import Counter
print(f"Sebelum: {Counter(y_train)}")

# SMOTE
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)
print(f"Sesudah SMOTE: {Counter(y_resampled)}")

# ═══ 3. Kombinasi SMOTE + Undersampling ══════════
pipe = ImbPipeline([
    ("smote", SMOTE(sampling_strategy=0.5)),         # minority → 50% majority
    ("under", RandomUnderSampler(sampling_strategy=0.8)),  # majority dikurangi
    ("model", RandomForestClassifier(random_state=42))
])
pipe.fit(X_train, y_train)

# ═══ 4. Threshold Tuning ═════════════════════════
y_prob = rf.predict_proba(X_test)[:, 1]
precision, recall, thresholds = precision_recall_curve(y_test, y_prob)

# Cari threshold yang memaksimalkan F1
f1_scores = 2 * precision * recall / (precision + recall + 1e-8)
best_idx = np.argmax(f1_scores)
best_threshold = thresholds[best_idx]
print(f"Best threshold: {best_threshold:.3f}")

# Prediksi dengan custom threshold
y_pred_custom = (y_prob >= best_threshold).astype(int)
print(classification_report(y_test, y_pred_custom))`}</CodeBlock>

        <TipBox title="Penting!">
          SMOTE hanya diterapkan pada training set, BUKAN test set. Gunakan <code>imblearn.pipeline.Pipeline</code> (bukan sklearn.pipeline) agar SMOTE otomatis hanya di train.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🚀 XGBoost & LightGBM',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">XGBoost dan LightGBM adalah gradient boosting teroptimasi yang mendominasi kompetisi Kaggle. Lebih cepat dan akurat dari sklearn GradientBoosting.</p>

        <SectionTitle icon="⚡">XGBoost</SectionTitle>
        <CodeBlock>{`# pip install xgboost lightgbm
import xgboost as xgb

# XGBoost Classifier
xgb_model = xgb.XGBClassifier(
    n_estimators=500,
    max_depth=6,
    learning_rate=0.1,
    subsample=0.8,
    colsample_bytree=0.8,
    eval_metric="logloss",
    random_state=42,
    use_label_encoder=False
)

# Training dengan early stopping
xgb_model.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
    verbose=50                      # print setiap 50 iterasi
)

print(f"XGB Accuracy: {xgb_model.score(X_test, y_test):.4f}")`}</CodeBlock>

        <SectionTitle icon="💡">LightGBM</SectionTitle>
        <CodeBlock>{`import lightgbm as lgb

# LightGBM Classifier
lgb_model = lgb.LGBMClassifier(
    n_estimators=500,
    max_depth=6,
    learning_rate=0.1,
    num_leaves=31,               # LightGBM khas — leaf-wise growth
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42,
    verbose=-1
)

lgb_model.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
)
print(f"LGBM Accuracy: {lgb_model.score(X_test, y_test):.4f}")`}</CodeBlock>

        <SectionTitle icon="🎯">Optuna — Bayesian Hyperparameter Optimization</SectionTitle>
        <CodeBlock>{`# pip install optuna
import optuna

def objective(trial):
    params = {
        "n_estimators": trial.suggest_int("n_estimators", 100, 1000),
        "max_depth": trial.suggest_int("max_depth", 3, 12),
        "learning_rate": trial.suggest_float("learning_rate", 0.01, 0.3, log=True),
        "subsample": trial.suggest_float("subsample", 0.6, 1.0),
        "colsample_bytree": trial.suggest_float("colsample_bytree", 0.6, 1.0),
        "min_child_weight": trial.suggest_int("min_child_weight", 1, 10),
    }

    model = xgb.XGBClassifier(**params, random_state=42, use_label_encoder=False)
    model.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=0)

    from sklearn.metrics import f1_score
    y_pred = model.predict(X_test)
    return f1_score(y_test, y_pred)

# Jalankan optimization
study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=50, show_progress_bar=True)

print(f"Best F1: {study.best_value:.4f}")
print(f"Best params: {study.best_params}")`}</CodeBlock>

        <CompareTable
          headers={['', 'XGBoost', 'LightGBM', 'CatBoost']}
          rows={[
            ['Kecepatan', 'Cepat', 'Paling cepat', 'Sedang'],
            ['Memory', 'Sedang', 'Rendah', 'Sedang'],
            ['Categorical', 'Manual encoding', 'Built-in', 'Built-in (terbaik)'],
            ['Default perf', 'Bagus', 'Bagus', 'Sering terbaik OOB'],
            ['Tree growth', 'Level-wise', 'Leaf-wise', 'Oblivious trees'],
          ]}
        />
      </div>
    ),
  },
]

// ═══════════════════════════════════════════════════════════════
// PART 2B: ML Projects Step-by-Step (5 sections)
// ═══════════════════════════════════════════════════════════════

export const mlProjectSections = [
  {
    title: '🏠 Project 1: Prediksi Harga Rumah',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Project regresi klasik — prediksi harga rumah dari fitur seperti luas, jumlah kamar, dan lokasi.</p>

        <MLProjectWorkflow />

        <SectionTitle icon="📋">Full Pipeline</SectionTitle>
        <CodeBlock>{`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# ═══ 1. LOAD DATA ═════════════════════════════════
from sklearn.datasets import fetch_california_housing
data = fetch_california_housing()
df = pd.DataFrame(data.data, columns=data.feature_names)
df["Price"] = data.target

# ═══ 2. EDA ═══════════════════════════════════════
print(df.describe())
print(df.isnull().sum())

# ═══ 3. FEATURE ENGINEERING ═══════════════════════
df["RoomsPerHousehold"] = df["AveRooms"] / df["AveOccup"]
df["BedroomRatio"] = df["AveBedrms"] / df["AveRooms"]

# ═══ 4. SPLIT & SCALE ════════════════════════════
X = df.drop("Price", axis=1)
y = df["Price"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

# ═══ 5. MODEL COMPARISON ═════════════════════════
models = {
    "Linear Reg": LinearRegression(),
    "Ridge": Ridge(alpha=1.0),
    "Random Forest": RandomForestRegressor(n_estimators=100, random_state=42),
    "Gradient Boost": GradientBoostingRegressor(n_estimators=200, random_state=42),
}

results = {}
for name, model in models.items():
    model.fit(X_train_s, y_train)
    y_pred = model.predict(X_test_s)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)
    results[name] = {"RMSE": rmse, "R²": r2}
    print(f"{name:20s} → RMSE: {rmse:.4f}, R²: {r2:.4f}")

# ═══ 6. SAVE MODEL ═══════════════════════════════
import joblib
best_model = models["Gradient Boost"]
joblib.dump(best_model, "house_price_model.pkl")
joblib.dump(scaler, "house_price_scaler.pkl")`}</CodeBlock>

        <TipBox title="Checklist Project">
          1) EDA dahulu. 2) Handle missing & outlier. 3) Feature engineering. 4) Baseline model. 5) Compare multiple models. 6) Tune best model. 7) Final evaluation on test set. 8) Save model.
        </TipBox>
      </div>
    ),
  },
  {
    title: '💳 Project 2: Deteksi Fraud Kartu Kredit',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Real-world problem: data sangat imbalanced (0.17% fraud). Fokus pada recall dan precision, bukan accuracy.</p>

        <CodeBlock>{`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score, precision_recall_curve
from imblearn.over_sampling import SMOTE
from imblearn.pipeline import Pipeline as ImbPipeline

# ═══ 1. LOAD & EXPLORE ═══════════════════════════
# Kaggle: Credit Card Fraud Detection dataset
df = pd.read_csv("creditcard.csv")
print(f"Shape: {df.shape}")
print(f"\\nFraud ratio: {df['Class'].mean():.4%}")
# Output: 0.0017 → hanya 0.17% fraud!

# ═══ 2. SPLIT ════════════════════════════════════
X = df.drop("Class", axis=1)
y = df["Class"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

# ═══ 3. PIPELINE: SMOTE + MODEL ═════════════════
pipe = ImbPipeline([
    ("scaler", StandardScaler()),
    ("smote", SMOTE(sampling_strategy=0.3, random_state=42)),
    ("model", RandomForestClassifier(
        n_estimators=200, class_weight="balanced", random_state=42, n_jobs=-1
    ))
])
pipe.fit(X_train, y_train)

# ═══ 4. EVALUATE ═════════════════════════════════
y_pred = pipe.predict(X_test)
y_prob = pipe.predict_proba(X_test)[:, 1]

print(classification_report(y_test, y_pred))
print(f"ROC-AUC: {roc_auc_score(y_test, y_prob):.4f}")

# ═══ 5. THRESHOLD TUNING ════════════════════════
precision, recall, thresholds = precision_recall_curve(y_test, y_prob)
f1 = 2 * precision * recall / (precision + recall + 1e-8)
best_thresh = thresholds[np.argmax(f1)]
print(f"Optimal threshold: {best_thresh:.3f}")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '😊 Project 3: Analisis Sentimen Review',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">NLP project: klasifikasi review positif/negatif menggunakan TF-IDF dan machine learning klasik.</p>

        <CodeBlock>{`import pandas as pd
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
from sklearn.metrics import classification_report
from sklearn.pipeline import Pipeline

# ═══ 1. LOAD DATA ═════════════════════════════════
# Contoh: IMDB reviews atau dataset review produk
reviews = pd.DataFrame({
    "text": ["Film ini luar biasa bagus!", "Mengecewakan, buang waktu saja",
             "Aktor bermain sangat natural", "Plot cerita membingungkan", ...],
    "sentiment": [1, 0, 1, 0, ...]   # 1=positif, 0=negatif
})

# ═══ 2. TEXT PREPROCESSING ════════════════════════
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^a-zA-Z\\s]', '', text)    # hapus tanda baca
    text = re.sub(r'\\s+', ' ', text).strip()    # hapus extra spasi
    return text

reviews["clean"] = reviews["text"].apply(clean_text)

# ═══ 3. PIPELINE: TF-IDF + MODEL ════════════════
X_train, X_test, y_train, y_test = train_test_split(
    reviews["clean"], reviews["sentiment"], test_size=0.2, random_state=42
)

# Naive Bayes pipeline
nb_pipe = Pipeline([
    ("tfidf", TfidfVectorizer(max_features=5000, ngram_range=(1, 2))),
    ("model", MultinomialNB(alpha=0.1))
])
nb_pipe.fit(X_train, y_train)
print("Naive Bayes:")
print(classification_report(y_test, nb_pipe.predict(X_test)))

# SVM pipeline (biasanya lebih baik untuk teks)
svm_pipe = Pipeline([
    ("tfidf", TfidfVectorizer(max_features=10000, ngram_range=(1, 2))),
    ("model", LinearSVC(C=1.0))
])
svm_pipe.fit(X_train, y_train)
print("SVM:")
print(classification_report(y_test, svm_pipe.predict(X_test)))

# ═══ 4. PREDIKSI REVIEW BARU ═════════════════════
new_reviews = ["Produk ini sangat membantu!", "Kecewa berat, tidak sesuai deskripsi"]
predictions = svm_pipe.predict(new_reviews)
for rev, pred in zip(new_reviews, predictions):
    print(f"{'😊 Positif' if pred == 1 else '😞 Negatif'}: {rev}")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '👥 Project 4: Customer Segmentation',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Unsupervised learning project: kelompokkan pelanggan berdasarkan perilaku belanja untuk strategi marketing.</p>

        <CodeBlock>{`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

# ═══ 1. RFM ANALYSIS ═════════════════════════════
# Recency: kapan terakhir beli
# Frequency: seberapa sering beli
# Monetary: berapa total belanja

orders = pd.read_csv("orders.csv")
snapshot_date = orders["order_date"].max() + pd.Timedelta(days=1)

rfm = orders.groupby("customer_id").agg({
    "order_date": lambda x: (snapshot_date - x.max()).days,  # Recency
    "order_id": "count",                                      # Frequency
    "total_amount": "sum"                                      # Monetary
}).rename(columns={
    "order_date": "Recency", "order_id": "Frequency", "total_amount": "Monetary"
})

# ═══ 2. SCALING & CLUSTERING ═════════════════════
scaler = StandardScaler()
rfm_scaled = scaler.fit_transform(rfm)

# Elbow method
inertias = [KMeans(n_clusters=k, random_state=42).fit(rfm_scaled).inertia_ for k in range(2, 11)]
plt.plot(range(2, 11), inertias, "bx-")
plt.title("Elbow Method")
plt.show()

# K=4 segments
kmeans = KMeans(n_clusters=4, random_state=42)
rfm["Segment"] = kmeans.fit_predict(rfm_scaled)

# ═══ 3. ANALISIS SEGMENT ═════════════════════════
segment_profile = rfm.groupby("Segment").agg(["mean", "count"])
print(segment_profile)

# Naming segments
segment_names = {
    0: "Champions",      # low recency, high freq & monetary
    1: "At Risk",        # high recency, low freq
    2: "Loyal",          # medium recency, high freq
    3: "New Customers",  # low recency, low freq
}
rfm["SegmentName"] = rfm["Segment"].map(segment_names)

# ═══ 4. VISUALISASI ══════════════════════════════
pca = PCA(n_components=2)
rfm_pca = pca.fit_transform(rfm_scaled)
plt.scatter(rfm_pca[:, 0], rfm_pca[:, 1], c=rfm["Segment"], cmap="viridis", alpha=0.5)
plt.title("Customer Segments (PCA)")
plt.colorbar()
plt.show()`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '📋 Best Practices & Checklist ML Project',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Rangkuman checklist untuk membuat ML project yang profesional dan reproducible.</p>

        <SectionTitle icon="📁">Project Structure</SectionTitle>
        <CodeBlock>{`ml-project/
├── data/
│   ├── raw/               # data asli (JANGAN diubah)
│   └── processed/         # data yang sudah di-clean
├── notebooks/
│   ├── 01_eda.ipynb
│   ├── 02_modeling.ipynb
│   └── 03_evaluation.ipynb
├── src/
│   ├── data_processing.py
│   ├── features.py
│   ├── model.py
│   └── evaluate.py
├── models/                # saved models (.pkl)
├── requirements.txt
├── README.md
└── .gitignore`}</CodeBlock>

        <SectionTitle icon="✅">ML Project Checklist</SectionTitle>
        <StepList steps={[
          'Definisi masalah: apa yang mau diprediksi? metric sukses apa?',
          'Collect & explore data (EDA): shape, types, missing, distribusi, korelasi',
          'Data cleaning: missing values, outliers, duplicates, type conversion',
          'Feature engineering: create, transform, select fitur informatif',
          'Split data: train/validation/test (SEBELUM preprocessing)',
          'Baseline model: model paling sederhana sebagai benchmark',
          'Iterasi: coba multiple models, compare dengan cross-validation',
          'Hyperparameter tuning: GridSearch/RandomSearch/Optuna',
          'Final evaluation: test set (HANYA SEKALI di akhir)',
          'Interpretasi: feature importance, SHAP, error analysis',
          'Save model & pipeline: joblib.dump() + scaler + encoder',
          'Dokumentasi: README, docstrings, notebook yang rapi',
        ]} />

        <CompareTable
          headers={['Mistake', 'Problem', 'Solution']}
          rows={[
            ['Data leakage', 'Metric terlalu bagus, fail di production', 'Split SEBELUM preprocessing'],
            ['No baseline', 'Tidak tahu apakah model bagus', 'Dummy model / simple model dulu'],
            ['Overfitting', 'Train bagus, test jelek', 'Cross-validation, regularisasi'],
            ['Wrong metric', 'Model tidak berguna walaupun score tinggi', 'Pilih metric sesuai bisnis'],
            ['No versioning', 'Tidak bisa reproduce hasil', 'Git + MLflow + random_state'],
          ]}
        />

        <TipBox title="Golden Rules">
          1) Pahami data sebelum model. 2) Simple model dulu (baseline). 3) Cross-validate semua. 4) Test set hanya disentuh SEKALI. 5) Selalu set random_state. 6) Document everything.
        </TipBox>
      </div>
    ),
  },
]
