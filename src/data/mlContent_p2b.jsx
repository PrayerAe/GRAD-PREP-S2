// Chapter 2b: ML Algorithms — Advanced Topics
import { TipBox, ConceptGrid } from './mathContent.jsx'
import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { PCADiagram, BiasVarianceDiagram } from './mlDiagrams.jsx'

export const mlSectionsB = [
  {
    title: '📊 PCA & Dimensionality Reduction',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Dimensionality reduction adalah proses mereduksi jumlah fitur (dimensi) dalam dataset sambil mempertahankan
          sebanyak mungkin informasi penting. Teknik ini sangat krusial dalam ML karena data nyata seringkali
          memiliki ratusan hingga ribuan fitur yang membuat training lambat dan rentan overfitting.
        </p>

        <PCADiagram />

        <SectionTitle icon="💀">Curse of Dimensionality</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Semakin banyak dimensi, semakin "jarang" data tersebar di ruang fitur. Jarak antar titik data menjadi
          hampir sama, sehingga algoritma berbasis jarak (KNN, SVM) kehilangan daya pembedanya.
        </p>
        <DiagramBox>{`
  Dimensi Rendah (2D)         Dimensi Tinggi (100D)
  ┌─────────────────┐         ┌─────────────────────┐
  │  ●  ●           │         │  Volume = r^100      │
  │     ●    ●  ●   │         │  Data sangat jarang  │
  │  ●       ●      │         │  Jarak min ≈ maks    │
  │     ●  ●        │         │  Overfitting mudah   │
  └─────────────────┘         └─────────────────────┘
  Jarak bermakna              Jarak kehilangan makna

  Volume bola unit d-dimensi: V(d) = π^(d/2) / Γ(d/2 + 1) × r^d
  → Untuk d besar, hampir semua volume ada di "kulit" bola, bukan tengah!
        `}</DiagramBox>

        <SectionTitle icon="📐">Principal Component Analysis (PCA)</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          PCA menemukan arah (principal components) dengan variansi maksimum dalam data. Langkah-langkahnya:
        </p>
        <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1 mb-3 ml-2">
          <li>Pusatkan data: kurangi mean dari setiap fitur</li>
          <li>Hitung matriks kovarians</li>
          <li>Lakukan eigendekomposisi</li>
          <li>Urutkan eigenvector berdasarkan eigenvalue (descending)</li>
          <li>Proyeksikan data ke k eigenvector teratas</li>
        </ol>

        <FormulaBox
          label="Langkah 1: Centering"
          formula="X_centered = X - μ     dimana μ = (1/n) Σᵢ xᵢ"
          note="Setiap kolom/fitur dikurangi nilai rata-ratanya"
        />
        <FormulaBox
          label="Langkah 2: Matriks Kovarians"
          formula="Σ = (1/(n-1)) × X_centeredᵀ × X_centered    [d × d matrix]"
          note="Σᵢⱼ mengukur seberapa besar fitur i dan j berkovariansi bersama"
        />
        <FormulaBox
          label="Langkah 3: Eigendekomposisi"
          formula="Σ × v = λ × v    →    Σ = V Λ Vᵀ"
          note="v = eigenvector (arah principal component), λ = eigenvalue (variansi di arah tersebut)"
        />
        <FormulaBox
          label="Variansi yang Dijelaskan (Explained Variance Ratio)"
          formula="EVR_k = λ_k / Σⱼ λⱼ     |     Cumulative EVR = Σₖ EVR_k"
          note="Pilih k komponen hingga cumulative EVR ≥ 95% (aturan praktis)"
        />
        <FormulaBox
          label="Proyeksi ke Ruang Dimensi Rendah"
          formula="Z = X_centered × W_k     dimana W_k = [v₁, v₂, ..., v_k] ∈ ℝ^(d×k)"
          note="Z ∈ ℝ^(n×k) adalah representasi data dalam k dimensi baru"
        />

        <TipBox type="info">
          <strong>SVD vs Eigendekomposisi:</strong> Dalam praktik, PCA diimplementasikan via Singular Value
          Decomposition (SVD): X = UΣVᵀ. Lebih numeris stabil dan tidak perlu menghitung Σ secara eksplisit.
          Eigenvalue PCA = (singular value SVD)² / (n-1).
        </TipBox>

        <SectionTitle icon="🌀">t-SNE: Visualisasi Non-Linear</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          t-SNE (t-distributed Stochastic Neighbor Embedding) adalah teknik non-linear untuk visualisasi 2D/3D.
          Sangat baik memperlihatkan kluster, tetapi tidak cocok untuk preprocessing ML karena:
          tidak deterministik, tidak bisa project data baru, dan tidak preserve jarak global.
        </p>
        <FormulaBox
          label="t-SNE: Probabilitas Kemiripan di Ruang Asal"
          formula="p_{j|i} = exp(-||xᵢ-xⱼ||²/2σᵢ²) / Σ_{k≠i} exp(-||xᵢ-xₖ||²/2σᵢ²)"
          note="σᵢ dipilih adaptif berdasarkan perplexity (umumnya 5-50)"
        />
        <FormulaBox
          label="t-SNE: Distribusi Student-t di Ruang Rendah"
          formula="q_{ij} = (1 + ||yᵢ-yⱼ||²)⁻¹ / Σ_{k≠l} (1 + ||yₖ-yₗ||²)⁻¹"
          note="Tail berat dari distribusi t mencegah crowding problem"
        />

        <SectionTitle icon="🗺️">UMAP: Alternatif Modern t-SNE</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          UMAP (Uniform Manifold Approximation and Projection) lebih cepat dari t-SNE, preserve struktur
          global lebih baik, dan bisa digunakan untuk preprocessing ML karena bisa mentransform data baru.
        </p>

        <SectionTitle icon="🏷️">LDA: Linear Discriminant Analysis</SectionTitle>
        <FormulaBox
          label="LDA: Maximasi Rasio Fisher"
          formula="J(w) = (wᵀ S_B w) / (wᵀ S_W w)    →    S_W⁻¹ S_B w = λw"
          note="S_B = between-class scatter, S_W = within-class scatter. Berbeda dari PCA: LDA bersifat supervised!"
        />

        <CompareTable
          headers={['Metode', 'Linear?', 'Supervised?', 'Tujuan Utama', 'Kelemahan']}
          rows={[
            ['PCA', 'Ya', 'Tidak', 'Maksimalkan variansi', 'Tidak capture struktur non-linear'],
            ['t-SNE', 'Tidak', 'Tidak', 'Visualisasi kluster', 'Lambat, tidak bisa project baru'],
            ['UMAP', 'Tidak', 'Tidak', 'Visualisasi + preprocessing', 'Hyperparameter sensitif'],
            ['LDA', 'Ya', 'Ya', 'Pisahkan kelas', 'Asumsi Gaussian, max k-1 komponen'],
            ['Autoencoder', 'Tidak', 'Tidak', 'Non-linear reduction', 'Butuh neural network'],
            ['Kernel PCA', 'Tidak', 'Tidak', 'PCA di feature space', 'Scalability, pilih kernel'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'Explained Variance', desc: 'Proporsi total variansi yang dijelaskan oleh setiap PC. PC₁ selalu memiliki variansi terbesar.', example: 'PC₁: 72%, PC₂: 18%, PC₃: 6% → 96% dengan 3 PC' },
          { title: 'Scree Plot', desc: 'Plot eigenvalue vs nomor komponen. "Elbow" menunjukkan jumlah PC optimal yang perlu disimpan.', example: 'Pilih k di mana kurva mulai melandai' },
          { title: 'Loadings', desc: 'Koefisien eigenvector menunjukkan kontribusi setiap fitur asli terhadap PC tertentu.', example: 'PC₁ loading: [0.8, -0.2, 0.5, ...]' },
          { title: 'Whitening', desc: 'Setelah PCA, bagi setiap komponen dengan √λ sehingga semua PC memiliki variansi = 1.', example: 'Z_white = Z / √Λ' },
          { title: 'Incremental PCA', desc: 'Untuk dataset besar yang tidak muat di memori, PCA dapat dilakukan secara batch/streaming.', example: 'sklearn.decomposition.IncrementalPCA' },
          { title: 'Sparse PCA', desc: 'Variasi PCA yang menghasilkan loading sparse (banyak nol), sehingga lebih mudah diinterpretasi.', example: 'sklearn.decomposition.SparsePCA' },
        ]} />

        <SectionTitle icon="💻">Implementasi Lengkap</SectionTitle>
        <CodeBlock>{`import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.datasets import load_digits
from sklearn.manifold import TSNE
import umap  # pip install umap-learn

# Load dataset digits (1797 samples, 64 features)
X, y = load_digits(return_X_y=True)
print(f"Shape awal: {X.shape}")  # (1797, 64)

# === STEP 1: Standarisasi ===
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# === STEP 2: PCA ===
pca = PCA()
pca.fit(X_scaled)

# Plot explained variance ratio
cumvar = np.cumsum(pca.explained_variance_ratio_)
plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(cumvar, 'b-o', markersize=3)
plt.axhline(y=0.95, color='r', linestyle='--', label='95% threshold')
plt.xlabel('Jumlah Komponen'); plt.ylabel('Cumulative EVR')
plt.title('Scree Plot PCA'); plt.legend(); plt.grid(True, alpha=0.3)

# Ambil 95% variansi
pca_95 = PCA(n_components=0.95)
X_pca = pca_95.fit_transform(X_scaled)
print(f"Komponen untuk 95% variansi: {pca_95.n_components_}")  # ~29

# === STEP 3: Visualisasi 2D dengan PCA ===
pca_2d = PCA(n_components=2)
X_2d_pca = pca_2d.fit_transform(X_scaled)

plt.subplot(1, 2, 2)
scatter = plt.scatter(X_2d_pca[:, 0], X_2d_pca[:, 1],
                      c=y, cmap='tab10', alpha=0.6, s=10)
plt.colorbar(scatter); plt.title('PCA 2D — Digits Dataset')
plt.xlabel(f'PC1 ({pca_2d.explained_variance_ratio_[0]:.1%})')
plt.ylabel(f'PC2 ({pca_2d.explained_variance_ratio_[1]:.1%})')
plt.tight_layout(); plt.savefig('pca_digits.png', dpi=150)

# === STEP 4: t-SNE ===
tsne = TSNE(n_components=2, perplexity=30, n_iter=1000,
            random_state=42, verbose=0)
X_tsne = tsne.fit_transform(X_scaled)

# === STEP 5: UMAP ===
reducer = umap.UMAP(n_components=2, n_neighbors=15,
                    min_dist=0.1, random_state=42)
X_umap = reducer.fit_transform(X_scaled)

# Bandingkan
fig, axes = plt.subplots(1, 3, figsize=(15, 5))
for ax, X_red, title in zip(axes,
    [X_2d_pca, X_tsne, X_umap],
    ['PCA', 't-SNE (perplexity=30)', 'UMAP']):
    sc = ax.scatter(X_red[:, 0], X_red[:, 1], c=y, cmap='tab10', s=8, alpha=0.7)
    ax.set_title(title, fontsize=12, fontweight='bold')
    ax.axis('off')
plt.colorbar(sc, ax=axes, shrink=0.6)
plt.savefig('dimensionality_comparison.png', dpi=150, bbox_inches='tight')
print("Plot tersimpan!")

# === STEP 6: PCA untuk Preprocessing ML ===
from sklearn.pipeline import Pipeline
from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('pca', PCA(n_components=0.95)),
    ('svm', SVC(kernel='rbf', C=10))
])
scores = cross_val_score(pipeline, X, y, cv=5, scoring='accuracy')
print(f"SVM + PCA CV Accuracy: {scores.mean():.4f} ± {scores.std():.4f}")`}</CodeBlock>

        <TipBox type="warning">
          Selalu lakukan StandardScaler SEBELUM PCA. Jika tidak, fitur dengan skala besar akan mendominasi
          principal components, bukan fitur yang benar-benar informatif.
        </TipBox>
        <TipBox type="success">
          PCA cocok untuk preprocessing: mengurangi noise, menghilangkan multikolinearitas, dan mempercepat
          training. Untuk visualisasi exploratory, gunakan t-SNE atau UMAP karena lebih baik memperlihatkan
          struktur kluster non-linear.
        </TipBox>
      </div>
    ),
  },

  {
    title: '🎲 Gaussian Processes & Bayesian ML',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Gaussian Process (GP) adalah pendekatan non-parametrik Bayesian yang tidak hanya memberikan prediksi
          titik, tetapi juga kuantifikasi ketidakpastian (uncertainty). GP sangat berguna untuk Bayesian
          Optimization, scientific computing, dan situasi di mana data terbatas.
        </p>

        <SectionTitle icon="⚖️">Bayesian vs Frequentist</SectionTitle>
        <CompareTable
          headers={['Aspek', 'Frequentist', 'Bayesian']}
          rows={[
            ['Parameter θ', 'Tetap, tidak diketahui', 'Random variable dengan distribusi'],
            ['Probabilitas', 'Frekuensi jangka panjang', 'Derajat kepercayaan (belief)'],
            ['Inference', 'MLE / point estimate', 'Posterior distribution p(θ|data)'],
            ['Uncertainty', 'Confidence interval', 'Credible interval / posterior variance'],
            ['Prior knowledge', 'Tidak digunakan', 'Encoded dalam prior p(θ)'],
            ['Contoh', 'OLS, MLE, frequentist t-test', 'Bayesian regression, GP, VAE'],
          ]}
        />

        <FormulaBox
          label="Teorema Bayes (Inti Bayesian ML)"
          formula="p(θ|X,y) = p(y|X,θ) × p(θ) / p(y|X)"
          note="Posterior ∝ Likelihood × Prior. p(y|X) = ∫ p(y|X,θ) p(θ) dθ (marginal likelihood / model evidence)"
        />

        <SectionTitle icon="🌊">Gaussian Process: Definisi Formal</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          GP adalah distribusi atas fungsi-fungsi. Setiap finite set evaluasi fungsi memiliki distribusi
          Gaussian bersama (jointly Gaussian). GP sepenuhnya ditentukan oleh mean function dan kernel.
        </p>
        <FormulaBox
          label="Definisi Gaussian Process"
          formula="f(x) ~ GP(m(x), k(x,x'))     ∀ finite subset: [f(x₁),...,f(xₙ)] ~ N(μ, K)"
          note="m(x) = E[f(x)] biasanya = 0. k(x,x') = E[(f(x)-m(x))(f(x')-m(x'))] = kernel/covariance function"
        />
        <FormulaBox
          label="GP Regression: Posterior Prediction"
          formula="f*|X,y,X* ~ N(μ*, Σ*)     dimana:"
          note="μ* = K(X*,X)[K(X,X)+σ²I]⁻¹y     |     Σ* = K(X*,X*) - K(X*,X)[K(X,X)+σ²I]⁻¹K(X,X*)"
        />
        <p className="text-sm text-gray-600 mb-2">
          <strong>μ*</strong> adalah prediksi mean (prediksi titik terbaik), dan <strong>Σ*</strong> diagonal
          memberikan uncertainty (variansi prediksi) di setiap titik test.
        </p>

        <SectionTitle icon="🔑">Kernel Functions</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Kernel menentukan "bentuk" fungsi yang mungkin dipelajari oleh GP — seberapa smooth,
          periodic, atau stationary fungsinya.
        </p>
        <FormulaBox
          label="RBF / Squared Exponential Kernel (paling umum)"
          formula="k_RBF(x,x') = σ_f² × exp(-||x-x'||² / (2l²))"
          note="σ_f² = output variance (amplitudo). l = lengthscale (seberapa cepat fungsi berubah). Infinitely differentiable → sangat smooth."
        />
        <FormulaBox
          label="Matérn Kernel (lebih realistis)"
          formula="k_Mat(x,x') = σ_f² × (2^(1-ν)/Γ(ν)) × (√(2ν)||x-x'||/l)^ν × K_ν(√(2ν)||x-x'||/l)"
          note="ν mengontrol kelancaran: ν=1/2 → Ornstein-Uhlenbeck (tidak smooth), ν=3/2, ν=5/2 (sangat populer di praktik), ν→∞ → RBF"
        />
        <FormulaBox
          label="Periodic Kernel (untuk data musiman)"
          formula="k_Per(x,x') = σ_f² × exp(-2sin²(π|x-x'|/p) / l²)"
          note="p = periode. Berguna untuk data time series dengan pola berulang (cuaca, penjualan, dll.)"
        />

        <DiagramBox>{`
  GP Prior (sebelum melihat data)     GP Posterior (setelah data)
  ┌────────────────────────────┐      ┌────────────────────────────┐
  │   f(x) ~ GP(0, k(x,x'))   │      │  Garis tebal = mean μ*(x)  │
  │                            │      │  Area abu = ±2σ* (95% CI)  │
  │  ~~~~                      │      │                            │
  │      ~~~~  ~~~~            │      │     ★  ★                  │
  │  ~~~~          ~~~~        │  →   │  ★       ★  [data]        │
  │                    ~~~~    │      │    μ*(x) melewati data     │
  │  Banyak fungsi mungkin     │      │  σ* kecil di dekat data    │
  └────────────────────────────┘      │  σ* besar di area kosong   │
                                      └────────────────────────────┘
  Log Marginal Likelihood untuk optimasi hyperparameter:
  log p(y|X) = -½ yᵀ(K+σ²I)⁻¹y - ½log|K+σ²I| - n/2 log(2π)
        `}</DiagramBox>

        <CompareTable
          headers={['Aspek', 'Gaussian Process', 'Neural Network']}
          rows={[
            ['Uncertainty', 'Built-in, principled', 'Butuh MC Dropout / ensemble'],
            ['Data kebutuhan', 'Efisien (sedikit data)', 'Butuh banyak data'],
            ['Scalability', 'O(n³) — buruk untuk n>10000', 'O(n) — sangat scalable'],
            ['Interpretabilitas', 'Kernel mudah diinterpretasi', 'Black box'],
            ['Hyperparameter', 'Optimasi via MLE secara otomatis', 'Grid search / random search'],
            ['Non-linearity', 'Via pilihan kernel', 'Otomatis melalui layer'],
            ['Stationarity', 'Asumsi stasioneritas (umumnya)', 'Tidak perlu asumsi'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'Prior p(f)', desc: 'Keyakinan awal tentang fungsi sebelum melihat data. Ditentukan oleh mean function dan kernel.', example: 'f ~ GP(0, k_RBF)' },
          { title: 'Likelihood p(y|f)', desc: 'Seberapa mungkin data teramati diberikan fungsi f. Untuk regresi: Gaussian noise.', example: 'y = f(x) + ε, ε ~ N(0,σ²)' },
          { title: 'Posterior p(f|y)', desc: 'Distribusi atas fungsi setelah mengintegrasikan informasi dari data.', example: 'f*|data ~ N(μ*, Σ*)' },
          { title: 'Marginal Likelihood', desc: 'Digunakan untuk optimasi hyperparameter kernel (l, σ_f, σ_n) via gradient ascent.', example: 'max_θ log p(y|X,θ)' },
          { title: 'Sparse GP', desc: 'Approximasi untuk dataset besar: pilih m inducing points, O(nm²) training.', example: 'sklearn: not built-in → GPyTorch/GPy' },
          { title: 'GP Classification', desc: 'Output harus diubah ke probabilitas via sigmoid/softmax. Posterior tidak lagi Gaussian → butuh approximasi.', example: 'Laplace approximation, EP' },
        ]} />

        <CodeBlock>{`import numpy as np
import matplotlib.pyplot as plt
from sklearn.gaussian_process import GaussianProcessRegressor
from sklearn.gaussian_process.kernels import (
    RBF, Matern, WhiteKernel, ConstantKernel as C, RationalQuadratic
)

# === Buat Data Sintetis ===
np.random.seed(42)
def f_true(x): return np.sin(x) + 0.3 * np.sin(3*x)

X_train = np.sort(np.random.uniform(0, 2*np.pi, 15)).reshape(-1, 1)
y_train = f_true(X_train.ravel()) + np.random.normal(0, 0.1, len(X_train))
X_test  = np.linspace(-0.5, 2*np.pi + 0.5, 300).reshape(-1, 1)

# === GP dengan berbagai kernel ===
kernels = {
    'RBF': C(1.0) * RBF(length_scale=1.0) + WhiteKernel(0.01),
    'Matern(ν=3/2)': C(1.0) * Matern(length_scale=1.0, nu=1.5) + WhiteKernel(0.01),
    'Matern(ν=5/2)': C(1.0) * Matern(length_scale=1.0, nu=2.5) + WhiteKernel(0.01),
    'RQ': C(1.0) * RationalQuadratic(length_scale=1.0, alpha=1.0) + WhiteKernel(0.01),
}

fig, axes = plt.subplots(2, 2, figsize=(14, 10))
for ax, (name, kernel) in zip(axes.ravel(), kernels.items()):
    gp = GaussianProcessRegressor(kernel=kernel, n_restarts_optimizer=10,
                                  normalize_y=True)
    gp.fit(X_train, y_train)

    mu, sigma = gp.predict(X_test, return_std=True)

    ax.fill_between(X_test.ravel(), mu - 2*sigma, mu + 2*sigma,
                    alpha=0.3, color='blue', label='±2σ (95% CI)')
    ax.plot(X_test, mu, 'b-', lw=2, label='Mean prediksi')
    ax.plot(X_test, f_true(X_test), 'r--', lw=1.5, label='Fungsi asli')
    ax.scatter(X_train, y_train, c='red', s=50, zorder=5, label='Data training')
    ax.set_title(f'GP Kernel: {name}\\nLog-likelihood: {gp.log_marginal_likelihood_value_:.2f}')
    ax.legend(fontsize=8); ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('gaussian_process_kernels.png', dpi=150)
print("Plot GP tersimpan!")

# === Optimasi Hyperparameter Otomatis ===
best_gp = GaussianProcessRegressor(
    kernel=C(1.0) * RBF(length_scale=1.0) + WhiteKernel(0.01),
    n_restarts_optimizer=20, normalize_y=True
)
best_gp.fit(X_train, y_train)
print(f"Kernel setelah optimasi: {best_gp.kernel_}")

# Prediksi dan interval kepercayaan
mu_pred, sigma_pred = best_gp.predict(X_test, return_std=True)
print(f"Rata-rata uncertainty di area data: {sigma_pred[:100].mean():.4f}")
print(f"Rata-rata uncertainty di luar data: {sigma_pred[250:].mean():.4f}")
# → Uncertainty lebih besar di luar data (extrapolation)`}</CodeBlock>

        <TipBox type="tip">
          GP sangat berguna ketika: (1) data terbatas, (2) uncertainty quantification penting,
          (3) fungsi smooth. Batasan utama adalah kompleksitas O(n³) untuk training dan O(n²)
          untuk memory, sehingga tidak praktis untuk n {'>'} 10.000. Gunakan Sparse GP atau
          GPyTorch untuk dataset besar.
        </TipBox>
      </div>
    ),
  },

  {
    title: '⚖️ Bias-Variance Tradeoff & Statistical Learning Theory',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Bias-Variance Tradeoff adalah konsep fundamental dalam statistical learning theory yang menjelaskan
          mengapa model ML tidak sempurna. Memahami dekomposisi ini sangat penting untuk mendiagnosis
          masalah underfitting/overfitting dan memilih strategi regularisasi yang tepat.
        </p>

        <BiasVarianceDiagram />

        <SectionTitle icon="📐">Dekomposisi MSE: Derivasi Lengkap</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Misalkan kita memiliki model f̂(x) yang ditraining pada dataset D, dan fungsi asli y = f(x) + ε
          di mana ε ~ N(0, σ²_noise). Expected prediction error (MSE) untuk titik test x:
        </p>
        <FormulaBox
          label="Dekomposisi MSE (Expected Test Error)"
          formula="E[(y - f̂(x))²] = Bias²[f̂(x)] + Var[f̂(x)] + σ²_noise"
          note="E di sini adalah expected value atas semua kemungkinan dataset training D dan noise ε"
        />
        <FormulaBox
          label="Definisi Bias"
          formula="Bias[f̂(x)] = E_D[f̂(x)] - f(x)"
          note="Seberapa jauh rata-rata prediksi dari nilai asli. Tinggi jika model terlalu sederhana (underfitting)."
        />
        <FormulaBox
          label="Definisi Variance"
          formula="Var[f̂(x)] = E_D[(f̂(x) - E_D[f̂(x)])²]"
          note="Seberapa besar prediksi berubah antar dataset yang berbeda. Tinggi jika model terlalu kompleks (overfitting)."
        />

        <p className="text-sm text-gray-600 mb-2 font-medium">Derivasi Lengkap:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 my-3 font-mono text-xs text-gray-700 leading-relaxed">
          <p>E[(y - f̂)²] = E[(f + ε - f̂)²]</p>
          <p className="mt-1">= E[(f - f̂)²] + 2E[(f - f̂)ε] + E[ε²]</p>
          <p className="mt-1">= E[(f - f̂)²] + 0 + σ²_noise        ← f̂ ⊥ ε</p>
          <p className="mt-1">= E[(f - E[f̂] + E[f̂] - f̂)²] + σ²</p>
          <p className="mt-1">= E[(f - E[f̂])²] + 2(f - E[f̂])E[(E[f̂] - f̂)] + E[(E[f̂] - f̂)²] + σ²</p>
          <p className="mt-1">= (f - E[f̂])² + 0 + Var[f̂] + σ²</p>
          <p className="mt-1 font-bold text-indigo-700">= Bias²[f̂] + Var[f̂] + σ²_noise  ✓</p>
        </div>

        <DiagramBox>{`
  MSE vs Model Complexity (e.g., polynomial degree, depth, neurons)

  Error
    │
    │  ╲                              Total Error = Bias² + Variance + σ²
    │   ╲    Training Error                        ────────────────────
    │    ╲                                          σ²_noise = irreducible
    │     ╲       ╭──────────────
    │      ╲     ╱   Test Error    Bias²  ╲
    │       ╲   ╱                         ╲───── kedua-keduanya selalu ≥ 0
    │  σ²    ╲ ╱                   Var[f̂] ╱
    │  ───────╳────────────────
    │         ↑ Optimal Complexity
    │
    └─────────────────────────────────────────→ Model Complexity

  Bias tinggi:  model terlalu sederhana → underfitting
  Var tinggi:   model terlalu kompleks  → overfitting
  σ² noise:     irreducible error (tidak bisa dikurangi)
        `}</DiagramBox>

        <CompareTable
          headers={['Kondisi', 'Bias', 'Variance', 'Training Error', 'Test Error', 'Solusi']}
          rows={[
            ['Underfitting', 'Tinggi', 'Rendah', 'Tinggi', 'Tinggi', 'Model lebih kompleks, tambah fitur'],
            ['Overfitting', 'Rendah', 'Tinggi', 'Sangat rendah', 'Tinggi', 'Regularisasi, early stopping, dropout'],
            ['Good fit', 'Sedang', 'Sedang', 'Rendah', 'Hampir sama', 'Optimal!'],
            ['Noise tinggi', 'Apapun', 'Apapun', 'Rendah', 'Lebih tinggi', 'Tambah data, feature engineering'],
          ]}
        />

        <SectionTitle icon="🎓">VC Dimension & PAC Learning</SectionTitle>
        <FormulaBox
          label="VC Dimension"
          formula="VC(H) = d     jika H dapat 'shatter' d titik (klasifikasi semua 2^d labeling)"
          note="Contoh: VC(hyperplane di ℝ²) = 3. Linear classifier di ℝ^n: VC = n+1. SVM dengan kernel RBF: VC = ∞"
        />
        <FormulaBox
          label="PAC Learning Bound (Generalization Bound)"
          formula="P[R(f) ≤ R̂(f) + ε] ≥ 1-δ     dimana ε = √(d/n × log(n/d) + log(1/δ)/n)"
          note="R(f) = true risk, R̂(f) = empirical risk (training error). n = ukuran data, d = VC dimension, δ = confidence"
        />

        <TipBox type="info">
          <strong>Intuisi PAC Bound:</strong> Semakin besar VC dimension (model kompleks) atau semakin kecil
          n (sedikit data), generalization gap semakin besar. Ini adalah justifikasi teoretis mengapa
          regularisasi diperlukan: regularisasi secara efektif mengurangi "effective VC dimension."
        </TipBox>

        <SectionTitle icon="📈">Learning Curves</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Learning curve memplot training dan validation error vs ukuran dataset training.
          Sangat berguna untuk mendiagnosis apakah problem adalah high bias atau high variance.
        </p>

        <ConceptGrid items={[
          { title: 'High Bias Pattern', desc: 'Training error tinggi dan validation error juga tinggi. Gap kecil antara keduanya. Model tidak belajar cukup.', example: 'Solusi: model lebih kompleks' },
          { title: 'High Variance Pattern', desc: 'Training error rendah tapi validation error jauh lebih tinggi. Gap besar antara keduanya.', example: 'Solusi: regularisasi, lebih banyak data' },
          { title: 'Regularisasi L2 (Ridge)', desc: 'Menambah penalti ||w||² ke loss. Menyusutkan semua bobot menuju 0 secara seragam.', example: 'J = MSE + λ||w||²' },
          { title: 'Regularisasi L1 (Lasso)', desc: 'Penalti ||w||₁. Menghasilkan sparse solution (banyak bobot = 0). Feature selection built-in.', example: 'J = MSE + λ||w||₁' },
          { title: 'Regularisasi Elastic Net', desc: 'Kombinasi L1 + L2. Trade-off antara sparsity dan grup selection.', example: 'J = MSE + λ₁||w||₁ + λ₂||w||²' },
          { title: 'Early Stopping', desc: 'Hentikan training saat validation loss mulai naik. Secara implisit membatasi kompleksitas model.', example: 'Keras: EarlyStopping(patience=10)' },
        ]} />

        <CodeBlock>{`import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import Ridge, Lasso
from sklearn.pipeline import Pipeline
from sklearn.model_selection import learning_curve, validation_curve
from sklearn.datasets import make_regression

np.random.seed(42)
# Data sinusoidal dengan noise
X_raw = np.linspace(0, 10, 200).reshape(-1, 1)
y = np.sin(X_raw.ravel()) + 0.5 * np.random.randn(200)

# === PLOT 1: Bias-Variance untuk berbagai derajat polinomial ===
degrees = [1, 3, 7, 15]
fig, axes = plt.subplots(1, 4, figsize=(16, 4))

for ax, deg in zip(axes, degrees):
    pipe = Pipeline([
        ('poly', PolynomialFeatures(degree=deg)),
        ('ridge', Ridge(alpha=0.001))
    ])
    pipe.fit(X_raw[:150], y[:150])
    y_pred = pipe.predict(X_raw)

    ax.scatter(X_raw, y, s=5, alpha=0.5, label='Data')
    ax.plot(X_raw, y_pred, 'r-', lw=2, label=f'Degree={deg}')
    ax.set_title(f'Polynomial Degree={deg}')
    ax.legend(fontsize=8)

plt.tight_layout()
plt.savefig('bias_variance_polynomial.png', dpi=150)

# === PLOT 2: Validation Curve (bias-variance vs regularisasi) ===
X_reg, y_reg = make_regression(n_samples=500, n_features=20,
                                noise=30, random_state=42)
alphas = np.logspace(-4, 4, 50)

train_scores, val_scores = validation_curve(
    Ridge(), X_reg, y_reg, param_name='alpha', param_range=alphas,
    cv=5, scoring='neg_mean_squared_error'
)

plt.figure(figsize=(8, 5))
plt.semilogx(alphas, -train_scores.mean(axis=1), 'b-', label='Training MSE')
plt.semilogx(alphas, -val_scores.mean(axis=1), 'r-', label='Validation MSE')
plt.fill_between(alphas,
    -train_scores.mean(1) - train_scores.std(1),
    -train_scores.mean(1) + train_scores.std(1), alpha=0.1, color='blue')
plt.fill_between(alphas,
    -val_scores.mean(1) - val_scores.std(1),
    -val_scores.mean(1) + val_scores.std(1), alpha=0.1, color='red')
plt.xlabel('Alpha (Regularisasi L2)'); plt.ylabel('MSE')
plt.title('Validation Curve Ridge Regression')
plt.legend(); plt.grid(True, alpha=0.3)
plt.savefig('validation_curve.png', dpi=150)

# === PLOT 3: Learning Curves ===
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import make_classification

X_cls, y_cls = make_classification(n_samples=1000, n_features=20,
                                    random_state=42)
train_sizes_abs, train_scores_lc, val_scores_lc = learning_curve(
    DecisionTreeClassifier(max_depth=None),  # overfitting model
    X_cls, y_cls, train_sizes=np.linspace(0.05, 1.0, 20),
    cv=5, scoring='accuracy', shuffle=True, random_state=42
)
plt.figure(figsize=(8, 5))
plt.plot(train_sizes_abs, train_scores_lc.mean(1), 'b-o', ms=5, label='Training')
plt.plot(train_sizes_abs, val_scores_lc.mean(1), 'r-o', ms=5, label='Validation')
plt.fill_between(train_sizes_abs,
    train_scores_lc.mean(1) - train_scores_lc.std(1),
    train_scores_lc.mean(1) + train_scores_lc.std(1), alpha=0.15, color='blue')
plt.xlabel('Training Set Size'); plt.ylabel('Accuracy')
plt.title('Learning Curve: Decision Tree (Unregularized)')
plt.legend(); plt.grid(True, alpha=0.3)
plt.savefig('learning_curve.png', dpi=150)
print("Semua plot disimpan!")`}</CodeBlock>

        <TipBox type="warning">
          Bias² + Variance = bagian yang bisa dikontrol. σ²_noise = irreducible error, tidak bisa
          dikurangi dengan model yang lebih baik. Jika training dan test error keduanya tinggi → high bias.
          Jika training error rendah tapi test error tinggi → high variance.
        </TipBox>
      </div>
    ),
  },

  {
    title: '🎯 Model Calibration & Reliability',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Sebuah model yang "ter-kalibrasi dengan baik" (well-calibrated) adalah model di mana probabilitas
          prediksi benar-benar mencerminkan frekuensi kejadian. Misalnya, ketika model memprediksi 70%
          kemungkinan hujan untuk 100 hari, maka ~70 hari tersebut harus benar-benar hujan.
          Kalibrasi sangat penting untuk aplikasi kesehatan, keuangan, dan hukum.
        </p>

        <SectionTitle icon="📉">Mengapa Accuracy Saja Tidak Cukup?</SectionTitle>
        <CompareTable
          headers={['Skenario', 'Accuracy', 'Kalibrasi', 'Masalah']}
          rows={[
            ['Fraud detection (1% fraud)', '99%', 'Buruk', 'Prediksi "tidak fraud" selalu benar tapi tidak berguna'],
            ['Diagnosis medis', '85%', 'Buruk', 'P(kanker)=0.9 padahal sebenarnya 0.1 → over-treatment'],
            ['Model cuaca', '80%', 'Baik', 'P(hujan)=0.7 → benar-benar hujan 70% kasus'],
            ['Ensemble model', '90%', 'Sangat baik', 'Uncertainty estimate dapat diandalkan'],
            ['Neural network softmax', '88%', 'Buruk (overconfident)', 'Selalu prediksi prob mendekati 0 atau 1'],
          ]}
        />

        <SectionTitle icon="📊">Reliability Diagram & ECE</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Reliability diagram (calibration curve) membagi prediksi probabilitas ke dalam bin-bin,
          lalu memplot fraction of positives vs mean predicted probability per bin.
        </p>
        <DiagramBox>{`
  Reliability Diagram (Calibration Curve)

  Fraction of
  Positives
  1.0 ┤                              ★  ← Poorly calibrated (overconfident)
      │                         ★           ● Perfect calibration (diagonal)
  0.8 ┤                    ●
      │               ● ★
  0.6 ┤          ●
      │     ● ★
  0.4 ┤  ●
      │  ★                       ← Under-confident model di kiri
  0.2 ┤
      │
  0.0 ┼──────────────────────────────
      0.0    0.2    0.4    0.6    0.8    1.0
                  Mean Predicted Probability

  Gap antara ● (ideal) dan ★ (model) = calibration error
        `}</DiagramBox>

        <FormulaBox
          label="Expected Calibration Error (ECE)"
          formula="ECE = Σₘ (|Bₘ|/n) × |acc(Bₘ) - conf(Bₘ)|"
          note="|Bₘ| = jumlah sampel di bin m. acc(Bₘ) = akurasi sebenarnya di bin. conf(Bₘ) = rata-rata probabilitas prediksi di bin."
        />
        <FormulaBox
          label="Maximum Calibration Error (MCE)"
          formula="MCE = max_m |acc(Bₘ) - conf(Bₘ)|"
          note="Worst-case calibration error di semua bin. Penting untuk aplikasi safety-critical."
        />
        <FormulaBox
          label="Brier Score (Proper Scoring Rule)"
          formula="BS = (1/n) Σᵢ (f̂(xᵢ) - yᵢ)²     ∈ [0, 1]"
          note="f̂(xᵢ) = prediksi probabilitas, yᵢ ∈ {0,1}. BS=0 sempurna, BS=1 terburuk. Bisa didekomposisi: BS = reliability - resolution + uncertainty"
        />

        <SectionTitle icon="🔧">Teknik Kalibrasi</SectionTitle>

        <FormulaBox
          label="Platt Scaling"
          formula="P(y=1|f) = σ(A × f + B) = 1/(1 + exp(-(A×f + B)))"
          note="f = raw score dari classifier. A, B dioptimasi via MLE pada validation set. Cocok untuk SVM, Naive Bayes."
        />
        <p className="text-sm text-gray-600 mb-2">
          <strong>Isotonic Regression</strong> menemukan fungsi non-decreasing step function yang meminimalkan
          MSE terhadap label sebenarnya. Lebih fleksibel dari Platt tapi butuh lebih banyak data kalibrasi.
        </p>
        <FormulaBox
          label="Temperature Scaling (untuk Deep Learning)"
          formula="P(y=k|x) = softmax(zₖ/T)     dimana T {'>'} 0 adalah temperature"
          note="T > 1 → 'softer' distribusi (kurangi confidence). T < 1 → 'sharper'. T = 1 → tidak ada perubahan. Optimalkan T via NLL pada val set."
        />

        <ConceptGrid items={[
          { title: 'Overconfidence', desc: 'Model terlalu yakin dengan prediksinya. Khas pada neural network modern. P(pred) >> actual accuracy.', example: 'NN: 95% confidence, actual: 82%' },
          { title: 'Underconfidence', desc: 'Model kurang yakin. Reliability curve di atas diagonal. P(pred) << actual accuracy.', example: 'Naive Bayes: fitur tidak independen' },
          { title: 'Platt Scaling', desc: 'Fit logistic regression pada raw score. Parameter: A (slope), B (intercept). Simple dan efektif.', example: 'CalibratedClassifierCV(method="sigmoid")' },
          { title: 'Isotonic Regression', desc: 'Piecewise constant monotone function. Lebih fleksibel dari Platt. Butuh ~1000+ sampel validasi.', example: 'CalibratedClassifierCV(method="isotonic")' },
          { title: 'Temperature Scaling', desc: 'Satu parameter T yang mengontrol "sharpness" distribusi softmax. State-of-the-art untuk DL.', example: 'Guo et al. 2017, ICML' },
          { title: 'Brier Score Decomposition', desc: 'BS = Reliability (calibration) + Resolution (sharpness) - Uncertainty. Lower is better.', example: 'BS ∈ [0,1], baseline: 0.25' },
        ]} />

        <CodeBlock>{`import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.calibration import CalibratedClassifierCV, calibration_curve
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import brier_score_loss

# === Dataset ===
np.random.seed(42)
X, y = make_classification(n_samples=5000, n_features=20,
                            n_informative=10, random_state=42)
X_tr, X_test, y_tr, y_test = train_test_split(X, y, test_size=0.2)
X_tr_main, X_cal, y_tr_main, y_cal = train_test_split(
    X_tr, y_tr, test_size=0.25)  # kalibrasikan pada 25% training

# === Model-model ===
models_base = {
    'Logistic Regression': LogisticRegression(max_iter=200),
    'Naive Bayes': GaussianNB(),
    'SVM (sigmoid)': SVC(probability=True),
    'Random Forest': RandomForestClassifier(n_estimators=100),
    'Gradient Boosting': GradientBoostingClassifier(n_estimators=100),
}

fig, axes = plt.subplots(1, 2, figsize=(14, 6))

# Plot reliability diagram
ax1, ax2 = axes
ax1.plot([0,1],[0,1],'k--', lw=1.5, label='Perfect calibration')
ax2_data = {}

for name, clf in models_base.items():
    clf.fit(X_tr_main, y_tr_main)
    prob_pos = clf.predict_proba(X_test)[:, 1]

    frac_pos, mean_pred_val = calibration_curve(y_test, prob_pos, n_bins=10)
    ax1.plot(mean_pred_val, frac_pos, 's-', ms=4, label=name)

    bs = brier_score_loss(y_test, prob_pos)
    ax2_data[name] = {'bs': bs, 'raw': prob_pos}

ax1.set_xlabel('Mean Predicted Probability'); ax1.set_ylabel('Fraction of Positives')
ax1.set_title('Reliability Diagram (Before Calibration)')
ax1.legend(fontsize=7); ax1.grid(True, alpha=0.3)

# === Kalibrasi Platt vs Isotonic ===
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_tr_main, y_tr_main)

rf_sigmoid = CalibratedClassifierCV(rf, cv='prefit', method='sigmoid')
rf_isotonic = CalibratedClassifierCV(rf, cv='prefit', method='isotonic')
rf_sigmoid.fit(X_cal, y_cal)
rf_isotonic.fit(X_cal, y_cal)

ax2.plot([0,1],[0,1],'k--', lw=1.5, label='Perfect')
for clf, label in [(rf, 'RF Uncalibrated'),
                   (rf_sigmoid, 'RF + Platt Scaling'),
                   (rf_isotonic, 'RF + Isotonic')]:
    prob = clf.predict_proba(X_test)[:, 1]
    frac_pos, mean_pred = calibration_curve(y_test, prob, n_bins=10)
    bs = brier_score_loss(y_test, prob)
    ax2.plot(mean_pred, frac_pos, 's-', ms=5, label=f'{label} (BS={bs:.4f})')

ax2.set_xlabel('Mean Predicted Probability')
ax2.set_title('Setelah Kalibrasi — Random Forest')
ax2.legend(fontsize=8); ax2.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('calibration_curves.png', dpi=150)
print("Plot kalibrasi tersimpan!")`}</CodeBlock>

        <TipBox type="success">
          Untuk neural network modern: gunakan Temperature Scaling (T {'>'} 1 biasanya). Untuk klasik ML:
          Random Forest dan SVM cenderung poorly calibrated → gunakan CalibratedClassifierCV. Logistic
          Regression biasanya sudah cukup terkalibrasi. Selalu evaluasi kalibrasi dengan reliability diagram
          DAN Brier Score, bukan hanya accuracy!
        </TipBox>
      </div>
    ),
  },

  {
    title: '🔄 Bayesian Optimization & AutoML',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Bayesian Optimization (BO) adalah strategi cerdas untuk optimasi fungsi "black-box" yang mahal
          dievaluasi (seperti training ML model). Berbeda dari Grid/Random Search yang boros, BO
          menggunakan hasil evaluasi sebelumnya untuk memilih hyperparameter berikutnya secara cerdas.
        </p>

        <SectionTitle icon="❌">Mengapa Grid Search Gagal?</SectionTitle>
        <CompareTable
          headers={['Metode', 'Jumlah Evaluasi', 'Dimensi 10 HP', 'Adaptif?', 'Overhead']}
          rows={[
            ['Grid Search', 'k^n eksponensial', '10^10 jika k=10', 'Tidak', 'Sangat rendah'],
            ['Random Search', 'Linear dengan budget', 'OK tapi boros', 'Tidak', 'Rendah'],
            ['Bayesian Opt', 'Sublinear', 'Efisien', 'Ya (exploit+explore)', 'Model surrogate'],
            ['Halving/Hyperband', 'O(n log n)', 'Baik', 'Parsial', 'Rendah'],
            ['Neural Architecture Search', 'Ribuan GPU-hours', 'Sangat tinggi', 'Ya', 'Sangat tinggi'],
          ]}
        />

        <SectionTitle icon="🤖">Surrogate Model: Gaussian Process</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          BO membangun model surrogate dari objective function menggunakan GP. GP memberikan estimasi mean
          f̂(x) dan uncertainty σ(x) di setiap titik, yang kemudian digunakan oleh acquisition function
          untuk memilih titik evaluasi berikutnya.
        </p>
        <DiagramBox>{`
  Bayesian Optimization Loop

  ┌─────────────────────────────────────────────────────────────────┐
  │  1. Inisialisasi: evaluasi n_initial titik acak                 │
  │  2. Fit GP surrogate pada {(xᵢ, f(xᵢ))} yang sudah ada         │
  │  3. Optimalkan acquisition function α(x) untuk cari x_next     │
  │  4. Evaluasi f(x_next) ← training model ML yang SEBENARNYA      │
  │  5. Tambahkan (x_next, f(x_next)) ke dataset                   │
  │  6. Ulangi dari langkah 2 hingga budget habis                   │
  └─────────────────────────────────────────────────────────────────┘

  f(x) ← objective (contoh: -val_accuracy setelah training 30 epoch)

  GP Surrogate          Acquisition Function α(x)
  ┌──────────────────┐  ┌────────────────────────────────┐
  │  f̂(x) = mean     │  │  Tinggi di area:               │
  │  σ(x) = std      │  │  - predicted score tinggi      │
  │                  │  │  - uncertainty tinggi           │
  │  ★ ★             │  │  → Explore-Exploit tradeoff     │
  └──────────────────┘  └────────────────────────────────┘
        `}</DiagramBox>

        <SectionTitle icon="📐">Acquisition Functions</SectionTitle>
        <FormulaBox
          label="Expected Improvement (EI) — Paling Populer"
          formula="EI(x) = E[max(0, f(x) - f*)]  =  (μ(x)-f*-ξ)Φ(Z) + σ(x)φ(Z)"
          note="Z = (μ(x)-f*-ξ)/σ(x). f* = best observed value. ξ≥0 = exploration tradeoff. Φ = CDF normal, φ = PDF normal."
        />
        <FormulaBox
          label="Upper Confidence Bound (UCB)"
          formula="UCB(x) = μ(x) + κ × σ(x)     κ > 0"
          note="κ besar → lebih exploratory. κ kecil → lebih exploitative. Secara teoritis κ = √(2 log(t π²/6δ)) untuk regret bound."
        />
        <FormulaBox
          label="Thompson Sampling"
          formula="x_next = argmax_{x} f̃(x)     dimana f̃ ~ posterior GP"
          note="Sample satu fungsi dari posterior GP, lalu cari maksimumnya. Probabilistically optimal, efisien untuk parallel evaluation."
        />
        <FormulaBox
          label="Probability of Improvement (PI)"
          formula="PI(x) = P(f(x) > f* + ξ) = Φ((μ(x) - f* - ξ) / σ(x))"
          note="Lebih konservatif dari EI. Hanya mempertimbangkan probability of improvement, bukan magnitude."
        />

        <ConceptGrid items={[
          { title: 'Surrogate Model', desc: 'GP (akurat tapi lambat O(n³)), Random Forest (SMAC), TPE (Tree Parzen Estimator) yang digunakan Optuna.', example: 'GP: scikit-optimize, Random Forest: SMAC3' },
          { title: 'Acquisition Function', desc: 'EI paling populer dan seimbang antara exploration dan exploitation. UCB lebih mudah di-tune via κ.', example: 'EI default di BayesSearchCV' },
          { title: 'Warm Starting', desc: 'Mulai BO dari hasil eksperimen sebelumnya. Menghemat waktu signifikan pada repeated experiments.', example: 'Optuna: study.add_trial()' },
          { title: 'Multi-objective BO', desc: 'Optimasi beberapa metrik sekaligus (accuracy vs latency). Cari Pareto front optimal.', example: 'Optuna: multi-objective sampler' },
          { title: 'Hyperband / ASHA', desc: 'Kombinasi early stopping dengan successive halving. Sangat efisien untuk DL.', example: 'Ray Tune: ASHAScheduler' },
          { title: 'Neural Architecture Search', desc: 'BO untuk mencari arsitektur NN optimal (layer, filter, dll.). Sangat mahal komputasinya.', example: 'DARTS, ENAS, EfficientNet via NAS' },
        ]} />

        <SectionTitle icon="🔬">Optuna: Modern HPO Framework</SectionTitle>
        <CodeBlock>{`import optuna
import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import matplotlib.pyplot as plt
import warnings; warnings.filterwarnings('ignore')

# === Dataset ===
X, y = load_breast_cancer(return_X_y=True)

# === Definisi Objective Function ===
def objective(trial):
    # Optuna akan mencari kombinasi HP terbaik
    params = {
        'n_estimators': trial.suggest_int('n_estimators', 50, 500),
        'max_depth': trial.suggest_int('max_depth', 2, 8),
        'learning_rate': trial.suggest_float('learning_rate', 1e-4, 0.5, log=True),
        'subsample': trial.suggest_float('subsample', 0.5, 1.0),
        'min_samples_split': trial.suggest_int('min_samples_split', 2, 20),
        'max_features': trial.suggest_categorical('max_features',
                                                   ['sqrt', 'log2', None]),
    }
    pipe = Pipeline([
        ('scaler', StandardScaler()),
        ('gbc', GradientBoostingClassifier(**params, random_state=42))
    ])
    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    scores = cross_val_score(pipe, X, y, cv=cv,
                              scoring='roc_auc', n_jobs=-1)
    return scores.mean()

# === Jalankan Optimasi ===
# Optuna menggunakan TPE (Tree Parzen Estimator) by default
sampler = optuna.samplers.TPESampler(seed=42)
study = optuna.create_study(direction='maximize',
                             sampler=sampler,
                             study_name='GBC_optimization')

# Pruner: hentikan trial yang promising rendah lebih awal
pruner = optuna.pruners.MedianPruner(n_startup_trials=10, n_warmup_steps=5)
study_pruned = optuna.create_study(direction='maximize',
                                    sampler=sampler, pruner=pruner)

optuna.logging.set_verbosity(optuna.logging.WARNING)
study.optimize(objective, n_trials=100, show_progress_bar=True)

# === Hasil ===
print(f"\\nBest ROC-AUC: {study.best_value:.6f}")
print("Best hyperparameters:")
for k, v in study.best_params.items():
    print(f"  {k}: {v}")

# === Visualisasi Optuna ===
# Optimization history
fig1 = optuna.visualization.plot_optimization_history(study)
fig1.write_image("optuna_history.png")

# Parameter importance
fig2 = optuna.visualization.plot_param_importances(study)
fig2.write_image("optuna_importance.png")

# Parallel coordinate plot
fig3 = optuna.visualization.plot_parallel_coordinate(study)
fig3.write_image("optuna_parallel.png")

# === Training final model dengan best params ===
best_model = Pipeline([
    ('scaler', StandardScaler()),
    ('gbc', GradientBoostingClassifier(**study.best_params, random_state=42))
])
final_scores = cross_val_score(best_model, X, y, cv=5, scoring='roc_auc')
print(f"\\nFinal CV ROC-AUC: {final_scores.mean():.4f} ± {final_scores.std():.4f}")`}</CodeBlock>

        <SectionTitle icon="🏭">AutoML Tools Overview</SectionTitle>
        <CompareTable
          headers={['Tool', 'Backend', 'Task', 'Kelebihan', 'Kekurangan']}
          rows={[
            ['Auto-sklearn', 'sklearn + Bayesian Opt', 'Klasifikasi, regresi', 'Meta-learning, ensembling', 'Lambat, Linux only'],
            ['H2O AutoML', 'Java/H2O', 'Semua task ML', 'Scalable, Stacked Ensemble', 'Memory-intensive'],
            ['Google AutoML', 'Google Cloud TPU', 'Vision, NLP, Tables', 'Production-ready', 'Mahal, cloud-only'],
            ['TPOT', 'Genetic Algorithm', 'Klasifikasi, regresi', 'Pipeline optimization', 'Sangat lambat'],
            ['Optuna', 'TPE/BO', 'HPO saja', 'Fleksibel, cepat, PyTorch-friendly', 'Tidak otomatis model selection'],
            ['MLflow + Optuna', 'Kombinasi', 'End-to-end MLOps', 'Tracking + optimization', 'Setup kompleks'],
          ]}
        />

        <TipBox type="tip">
          Untuk proyek S2/riset: Optuna adalah pilihan terbaik karena fleksibel dan bisa diintegrasikan
          dengan PyTorch, TensorFlow, atau sklearn. Gunakan dengan n_trials=100-300 dan TPE sampler.
          Untuk production baseline cepat: H2O AutoML sangat efektif. Jangan lupa definisikan search
          space yang masuk akal — terlalu lebar bisa membuang banyak evaluasi pada area tidak promising.
        </TipBox>
      </div>
    ),
  },
]
