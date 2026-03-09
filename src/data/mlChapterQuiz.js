// Bank soal Machine Learning, Data Science & AI — berbasis pola ujian masuk S2 / technical interview
// 15 soal per bab, sistem random 5 soal setiap sesi
export const mlChapterQuiz = {
  python: [
    {
      id: 'py1',
      question: "Apa output dari kode berikut?\nimport numpy as np\na = np.array([1, 2, 3, 4, 5])\nprint(a[1:4])",
      options: ["[1, 2, 3]", "[2, 3, 4]", "[1, 2, 3, 4]", "[2, 3, 4, 5]"],
      correctAnswer: 1,
      explanation: "Slicing a[1:4] mengambil elemen dengan index 1, 2, 3 (tidak termasuk 4). Hasilnya [2, 3, 4]."
    },
    {
      id: 'py2',
      question: "Fungsi NumPy mana yang digunakan untuk menghitung dot product dari dua array?",
      options: ["np.cross(a, b)", "np.dot(a, b)", "np.multiply(a, b)", "np.sum(a * b)"],
      correctAnswer: 1,
      explanation: "np.dot(a, b) menghitung dot product. np.multiply melakukan perkalian element-wise, bukan dot product."
    },
    {
      id: 'py3',
      question: "Apa perbedaan utama antara df.loc[] dan df.iloc[] di Pandas?",
      options: [
        "loc untuk kolom, iloc untuk baris",
        "loc menggunakan label/nama index, iloc menggunakan posisi integer",
        "loc lebih cepat dari iloc",
        "Tidak ada perbedaan, keduanya identik"
      ],
      correctAnswer: 1,
      explanation: "df.loc[] mengakses data berdasarkan label index/kolom, sedangkan df.iloc[] menggunakan posisi integer (0-based)."
    },
    {
      id: 'py4',
      question: "Apa output dari:\nimport pandas as pd\ndf = pd.DataFrame({'A': [1,2,None], 'B': [4,None,6]})\nprint(df.isnull().sum())",
      options: [
        "A    1\nB    1\ndtype: int64",
        "2",
        "A    0\nB    0",
        "True"
      ],
      correctAnswer: 0,
      explanation: "df.isnull().sum() menghitung jumlah nilai null per kolom. Kolom A memiliki 1 null, kolom B memiliki 1 null."
    },
    {
      id: 'py5',
      question: "Dalam Matplotlib, apa fungsi plt.subplot(2, 3, 4)?",
      options: [
        "Membuat grid 2x3 dan mengaktifkan subplot ke-4",
        "Membuat grid 4x6 subplot",
        "Membuat 2 baris, 3 kolom, dan subplot ke-4 dari atas",
        "Membuat subplot dengan ukuran 2x3 inci"
      ],
      correctAnswer: 0,
      explanation: "plt.subplot(nrows, ncols, index) — membuat grid 2 baris × 3 kolom, dan mengaktifkan subplot ke-4 (baris 2, kolom 1)."
    },
    {
      id: 'py6',
      question: "Apa yang dilakukan np.reshape(a, (3, -1))?",
      options: [
        "Mengubah array a menjadi 3 kolom, baris dihitung otomatis",
        "Mengubah array a menjadi 3 baris, jumlah kolom dihitung otomatis dari total elemen",
        "Menghapus 3 elemen dari akhir array",
        "Mengembalikan error karena -1 tidak valid"
      ],
      correctAnswer: 1,
      explanation: "Nilai -1 di reshape berarti NumPy menghitung dimensi itu secara otomatis. (3, -1) berarti 3 baris, kolom = total_elemen / 3."
    },
    {
      id: 'py7',
      question: "Metode Pandas mana yang paling tepat untuk menggabungkan dua DataFrame berdasarkan kolom kunci (seperti SQL JOIN)?",
      options: ["pd.concat()", "pd.merge()", "df.append()", "df.join() dengan on parameter"],
      correctAnswer: 1,
      explanation: "pd.merge() adalah padanan SQL JOIN untuk Pandas. pd.concat() menggabungkan secara vertikal/horizontal tanpa key matching."
    },
    {
      id: 'py8',
      question: "Apa output dari:\nimport numpy as np\na = np.array([[1,2],[3,4]])\nprint(a.T)",
      options: [
        "[[1, 3], [2, 4]]",
        "[[1, 2], [3, 4]]",
        "[[4, 3], [2, 1]]",
        "[[2, 1], [4, 3]]"
      ],
      correctAnswer: 0,
      explanation: "a.T adalah transpose dari matrix. Baris menjadi kolom dan sebaliknya: [[1,2],[3,4]]^T = [[1,3],[2,4]]."
    },
    {
      id: 'py9',
      question: "Dalam scikit-learn, apa urutan yang benar saat membangun pipeline preprocessing?",
      options: [
        "fit_transform() pada train dan test, kemudian train model",
        "fit() pada train, transform() pada train dan test secara terpisah",
        "transform() pada train, fit() pada test",
        "fit_transform() pada keseluruhan dataset sebelum split"
      ],
      correctAnswer: 1,
      explanation: "Harus fit() hanya pada training set, lalu transform() pada train dan test. Ini mencegah data leakage dari test set ke scaler/encoder."
    },
    {
      id: 'py10',
      question: "Apa yang dimaksud dengan broadcasting di NumPy?",
      options: [
        "Mengirim array ke beberapa prosesor sekaligus",
        "Kemampuan NumPy melakukan operasi aritmatika pada array dengan shape berbeda secara otomatis",
        "Mencetak array ke layar",
        "Konversi tipe data array secara otomatis"
      ],
      correctAnswer: 1,
      explanation: "Broadcasting memungkinkan NumPy melakukan operasi element-wise pada array dengan shape berbeda, misalnya array (3,1) + array (1,3) menghasilkan (3,3)."
    },
    {
      id: 'py11',
      question: "Apa fungsi df.groupby('kategori').agg({'nilai': ['mean', 'std']}) di Pandas?",
      options: [
        "Mengelompokkan data dan menghitung mean dan standar deviasi kolom 'nilai' per kategori",
        "Membuat pivot table dari kolom kategori",
        "Menghapus duplikat berdasarkan kolom kategori",
        "Mengurutkan data berdasarkan kategori lalu nilai"
      ],
      correctAnswer: 0,
      explanation: "groupby().agg() mengelompokkan baris berdasarkan 'kategori', lalu menghitung agregasi (mean, std) untuk kolom 'nilai' di setiap group."
    },
    {
      id: 'py12',
      question: "Manakah cara yang SALAH untuk menghindari data leakage saat menggunakan StandardScaler?",
      options: [
        "scaler.fit(X_train); scaler.transform(X_test)",
        "scaler.fit_transform(X_train); scaler.transform(X_test)",
        "scaler.fit_transform(X) sebelum train_test_split",
        "Memasukkan scaler ke dalam sklearn Pipeline"
      ],
      correctAnswer: 2,
      explanation: "Melakukan fit_transform pada seluruh X sebelum split akan menyebabkan data leakage — statistik (mean, std) dari test set bocor ke proses pelatihan."
    },
    {
      id: 'py13',
      question: "Apa output dari:\nimport numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(np.concatenate([a, b]))",
      options: ["[1, 2, 3, 4, 5, 6]", "[[1,2,3],[4,5,6]]", "[5, 7, 9]", "Error"],
      correctAnswer: 0,
      explanation: "np.concatenate() menggabungkan array secara berurutan dalam axis=0 (default). Hasilnya array 1D [1,2,3,4,5,6]."
    },
    {
      id: 'py14',
      question: "Metode mana yang digunakan untuk melihat distribusi frekuensi dari sebuah kolom kategorik di Pandas?",
      options: ["df['col'].describe()", "df['col'].value_counts()", "df['col'].count()", "df['col'].unique()"],
      correctAnswer: 1,
      explanation: "value_counts() mengembalikan jumlah kemunculan setiap nilai unik, diurutkan dari yang paling sering. Cocok untuk analisis kolom kategorik."
    },
    {
      id: 'py15',
      question: "Dalam sklearn, apa perbedaan antara Pipeline dan ColumnTransformer?",
      options: [
        "Pipeline untuk preprocessing, ColumnTransformer untuk modeling",
        "Pipeline mengeksekusi langkah secara sekuensial, ColumnTransformer menerapkan transformasi berbeda pada kolom berbeda secara paralel",
        "Tidak ada perbedaan, keduanya saling menggantikan",
        "ColumnTransformer hanya untuk data numerik, Pipeline untuk semua tipe"
      ],
      correctAnswer: 1,
      explanation: "Pipeline menjalankan langkah (estimator) secara berurutan (chain). ColumnTransformer memungkinkan transformasi berbeda diterapkan ke subset kolom yang berbeda secara paralel."
    },
  ],

  ml: [
    {
      id: 'ml1',
      question: "Dalam regresi linear, apa yang diminimalkan oleh metode Ordinary Least Squares (OLS)?",
      options: [
        "Jumlah nilai absolut residual",
        "Jumlah kuadrat residual (SSE)",
        "Mean Absolute Error",
        "Standar deviasi residual"
      ],
      correctAnswer: 1,
      explanation: "OLS meminimalkan Sum of Squared Errors (SSE) = Σ(yᵢ - ŷᵢ)². Ini menghasilkan solusi closed-form dan sensitif terhadap outlier."
    },
    {
      id: 'ml2',
      question: "Kapan Random Forest lebih disukai dibandingkan Decision Tree tunggal?",
      options: [
        "Saat data sangat kecil (< 100 sampel)",
        "Saat kita butuh interpretabilitas tinggi dan kecepatan prediksi",
        "Saat kita ingin mengurangi variance (overfitting) dari model yang kompleks",
        "Saat semua fitur kategorik"
      ],
      correctAnswer: 2,
      explanation: "Random Forest adalah ensemble dari banyak Decision Tree. Dengan averaging prediksi, ia mengurangi variance (tidak mengurangi bias), sehingga lebih robust dan kurang overfit."
    },
    {
      id: 'ml3',
      question: "Apa yang dimaksud dengan Bias-Variance Tradeoff?",
      options: [
        "Model yang akurat selalu memiliki bias dan variance tinggi",
        "Menurunkan bias cenderung menaikkan variance, dan sebaliknya — perlu keseimbangan",
        "Bias dan variance selalu bergerak searah",
        "Variance hanya relevan untuk model linear"
      ],
      correctAnswer: 1,
      explanation: "Model sederhana (underfitting) = high bias, low variance. Model kompleks (overfitting) = low bias, high variance. Optimal ada di titik keseimbangan (sweet spot) keduanya."
    },
    {
      id: 'ml4',
      question: "Dalam Support Vector Machine (SVM), apa yang dimaksud dengan 'margin'?",
      options: [
        "Jumlah support vectors",
        "Jarak antara hyperplane dan titik data terdekat dari setiap kelas",
        "Nilai fungsi kernel",
        "Tingkat regularisasi parameter C"
      ],
      correctAnswer: 1,
      explanation: "Margin adalah jarak antara hyperplane pemisah dan support vectors (titik data terdekat dari masing-masing kelas). SVM memaksimalkan margin ini."
    },
    {
      id: 'ml5',
      question: "Formula untuk F1-Score adalah...",
      options: [
        "(Precision + Recall) / 2",
        "2 × (Precision × Recall) / (Precision + Recall)",
        "TP / (TP + FP + FN)",
        "Precision / Recall"
      ],
      correctAnswer: 1,
      explanation: "F1-Score adalah harmonic mean dari Precision dan Recall: 2PR/(P+R). Digunakan saat ada class imbalance dan keduanya sama pentingnya."
    },
    {
      id: 'ml6',
      question: "Apa perbedaan utama antara Gradient Boosting dan Random Forest?",
      options: [
        "Random Forest menggunakan decision trees, Gradient Boosting tidak",
        "Random Forest membangun pohon secara paralel, Gradient Boosting membangun secara sekuensial untuk memperbaiki residual",
        "Gradient Boosting selalu lebih cepat dari Random Forest",
        "Tidak ada perbedaan signifikan, keduanya ensemble method"
      ],
      correctAnswer: 1,
      explanation: "Random Forest: pohon dibangun paralel secara independent (bagging). Gradient Boosting: setiap pohon baru memperbaiki kesalahan (residual) dari pohon sebelumnya secara sekuensial."
    },
    {
      id: 'ml7',
      question: "Dalam algoritma K-Nearest Neighbors (KNN), apa dampak dari memilih nilai K yang sangat besar?",
      options: [
        "Model menjadi sangat sensitif terhadap noise (overfitting)",
        "Model menjadi terlalu smooth dan underfitting karena mengabaikan pola lokal",
        "Waktu training menjadi sangat lama",
        "Akurasi selalu meningkat seiring K yang lebih besar"
      ],
      correctAnswer: 1,
      explanation: "K besar → model lebih smooth (high bias, low variance). K kecil (misal K=1) → sangat sensitif terhadap noise (low bias, high variance). K optimal biasanya dicari via cross-validation."
    },
    {
      id: 'ml8',
      question: "Apa yang dimaksud dengan regularisasi L1 (Lasso) vs L2 (Ridge)?",
      options: [
        "L1 menambahkan penalti Σ|wᵢ| dan mendorong sparsity (beberapa koefisien = 0); L2 menambahkan Σwᵢ² dan menyusutkan semua koefisien",
        "L1 untuk klasifikasi, L2 untuk regresi",
        "L2 menghasilkan model yang lebih sparse dibanding L1",
        "Keduanya identik, hanya beda nama"
      ],
      correctAnswer: 0,
      explanation: "Lasso (L1) menambah Σ|wᵢ| ke loss → fitur tidak penting bisa menjadi tepat 0 (feature selection). Ridge (L2) menambah Σwᵢ² → semua koefisien dikecilkan tapi jarang nol."
    },
    {
      id: 'ml9',
      question: "ROC-AUC score sebesar 0.5 menunjukkan...",
      options: [
        "Model sempurna",
        "Model yang setara dengan random guessing",
        "Model sangat buruk, lebih buruk dari random",
        "Model memiliki 50% akurasi"
      ],
      correctAnswer: 1,
      explanation: "AUC = 0.5 berarti model tidak lebih baik dari menebak secara acak (diagonal line di ROC curve). AUC = 1.0 adalah model sempurna, AUC < 0.5 lebih buruk dari random."
    },
    {
      id: 'ml10',
      question: "Algoritma mana yang paling cocok untuk clustering data tanpa label dan jumlah cluster tidak diketahui sebelumnya?",
      options: [
        "K-Means Clustering",
        "DBSCAN",
        "Gaussian Mixture Model",
        "Hierarchical Clustering dengan dendrogram"
      ],
      correctAnswer: 1,
      explanation: "DBSCAN tidak memerlukan jumlah cluster sebelumnya dan bisa menemukan cluster berbentuk arbitrary. K-Means dan GMM memerlukan jumlah cluster K yang ditentukan."
    },
    {
      id: 'ml11',
      question: "Apa yang menyebabkan multicollinearity dalam regresi linear, dan bagaimana dampaknya?",
      options: [
        "Fitur berkorelasi tinggi satu sama lain → koefisien menjadi tidak stabil dan sulit diinterpretasikan",
        "Fitur tidak berkorelasi dengan target → model tidak prediktif",
        "Data tidak terdistribusi normal → residual tidak valid",
        "Terlalu banyak sampel → model overfit"
      ],
      correctAnswer: 0,
      explanation: "Multicollinearity: fitur-fitur input berkorelasi tinggi. Akibatnya koefisien regresi menjadi tidak stabil, standar error besar, sulit menentukan pengaruh tiap fitur. Deteksi via VIF."
    },
    {
      id: 'ml12',
      question: "Dalam konteks imbalanced dataset (misalnya 95% negatif, 5% positif), metrik evaluasi mana yang paling informatif?",
      options: [
        "Accuracy",
        "Precision-Recall AUC atau F1-Score",
        "R² score",
        "Mean Squared Error"
      ],
      correctAnswer: 1,
      explanation: "Accuracy bisa menyesatkan (model prediksi semua negatif → 95% akurat). Precision-Recall curve atau F1-Score lebih baik untuk imbalanced dataset karena fokus pada kelas minoritas."
    },
    {
      id: 'ml13',
      question: "Apa yang membedakan algoritma klasifikasi Logistic Regression dari Linear Regression?",
      options: [
        "Logistic Regression memprediksi probabilitas (0-1) menggunakan fungsi sigmoid, bukan nilai kontinu",
        "Logistic Regression lebih cepat dari Linear Regression",
        "Logistic Regression tidak memerlukan data berlabel",
        "Logistic Regression hanya untuk masalah binary, Linear untuk multi-class"
      ],
      correctAnswer: 0,
      explanation: "Logistic Regression menerapkan fungsi sigmoid σ(z) = 1/(1+e^(-z)) pada output linear, menghasilkan probabilitas antara 0 dan 1. Dioptimasi dengan Maximum Likelihood, bukan OLS."
    },
    {
      id: 'ml14',
      question: "Apa yang dimaksud dengan 'information gain' dalam Decision Tree?",
      options: [
        "Jumlah node yang dikurangi setelah pemangkasan",
        "Pengurangan entropy setelah membagi dataset berdasarkan fitur tertentu",
        "Akurasi peningkatan setelah menambah satu fitur baru",
        "Selisih antara training dan test accuracy"
      ],
      correctAnswer: 1,
      explanation: "Information Gain = Entropy(parent) - Σ(weight × Entropy(child)). Decision Tree memilih fitur dengan Information Gain tertinggi untuk splitting di setiap node."
    },
    {
      id: 'ml15',
      question: "Kapan kita sebaiknya menggunakan SVM dengan kernel RBF dibanding kernel linear?",
      options: [
        "Ketika data linearly separable di ruang fitur asli",
        "Ketika jumlah fitur lebih banyak dari jumlah sampel",
        "Ketika data tidak linearly separable — boundary keputusan non-linear",
        "Kernel RBF selalu lebih baik, tidak perlu pertimbangan"
      ],
      correctAnswer: 2,
      explanation: "Kernel linear cocok saat data (hampir) linearly separable atau high-dimensional sparse. Kernel RBF memetakan data ke dimensi lebih tinggi, cocok untuk batas keputusan non-linear."
    },
  ],

  deeplearning: [
    {
      id: 'dl1',
      question: "Apa fungsi activation ReLU (Rectified Linear Unit)?",
      options: [
        "f(x) = 1 / (1 + e^(-x)), range [0, 1]",
        "f(x) = max(0, x), output 0 untuk input negatif",
        "f(x) = (e^x - e^(-x)) / (e^x + e^(-x)), range (-1, 1)",
        "f(x) = x untuk semua nilai x"
      ],
      correctAnswer: 1,
      explanation: "ReLU: f(x) = max(0, x). Sangat populer karena sederhana, efisien, dan membantu mitigasi vanishing gradient. Kelemahannya: 'dying ReLU' untuk neuron dengan input selalu negatif."
    },
    {
      id: 'dl2',
      question: "Apa yang dimaksud dengan vanishing gradient problem dalam neural network?",
      options: [
        "Gradient menjadi sangat besar sehingga training tidak stabil",
        "Gradient menjadi sangat kecil saat backpropagation melalui banyak layer, sehingga layer awal hampir tidak belajar",
        "Model kehilangan data training saat epoch berlanjut",
        "Learning rate menjadi nol secara otomatis"
      ],
      correctAnswer: 1,
      explanation: "Saat backpropagation melalui banyak layer dengan sigmoid/tanh, gradient dikali nilai < 1 berulang kali → exponentially kecil. Layer awal hampir tidak update. Solusi: ReLU, batch norm, residual connections."
    },
    {
      id: 'dl3',
      question: "Dalam CNN (Convolutional Neural Network), apa fungsi operasi Pooling?",
      options: [
        "Menambahkan non-linearitas ke jaringan",
        "Mengurangi dimensi spasial (downsampling), mengurangi komputasi dan membuat model lebih robust terhadap translasi",
        "Menghubungkan semua neuron dari layer sebelumnya",
        "Menginisialisasi bobot jaringan"
      ],
      correctAnswer: 1,
      explanation: "Pooling (Max/Average) mengurangi width dan height feature map. Manfaat: mengurangi parameter, kontrol overfitting, translational invariance — representasi tetap valid meski objek bergeser sedikit."
    },
    {
      id: 'dl4',
      question: "Apa perbedaan antara optimizer SGD (Stochastic Gradient Descent) dan Adam?",
      options: [
        "SGD menggunakan semua data per update, Adam menggunakan mini-batch",
        "Adam mengadaptasi learning rate per parameter menggunakan estimasi momen pertama dan kedua; SGD menggunakan learning rate tetap",
        "SGD lebih cepat dari Adam untuk semua kasus",
        "Adam tidak bisa digunakan untuk deep learning"
      ],
      correctAnswer: 1,
      explanation: "Adam (Adaptive Moment Estimation) menggunakan moving average gradient (m) dan squared gradient (v) untuk mengadaptasi learning rate tiap parameter. Lebih cepat konvergen, tapi bisa kurang general dari SGD dengan momentum."
    },
    {
      id: 'dl5',
      question: "Apa fungsi Batch Normalization dalam deep learning?",
      options: [
        "Mengurangi ukuran batch untuk hemat memori",
        "Menormalisasi aktivasi di setiap mini-batch, menstabilkan training, mengurangi ketergantungan pada inisialisasi bobot",
        "Menggabungkan beberapa batch menjadi satu",
        "Hanya digunakan di layer output"
      ],
      correctAnswer: 1,
      explanation: "Batch Norm menormalisasi input setiap layer (mean 0, std 1 per batch), lalu scale/shift dengan parameter yang dipelajari. Efek: training lebih cepat/stabil, bisa gunakan learning rate lebih besar, efek regularisasi ringan."
    },
    {
      id: 'dl6',
      question: "Dalam LSTM (Long Short-Term Memory), apa peran 'forget gate'?",
      options: [
        "Menentukan informasi baru mana yang akan disimpan ke cell state",
        "Menentukan bagian mana dari cell state sebelumnya yang harus dilupakan/dibuang",
        "Menghasilkan output dari cell state saat ini",
        "Menginisialisasi hidden state ke nol"
      ],
      correctAnswer: 1,
      explanation: "Forget gate (fₜ = σ(Wf·[hₜ₋₁, xₜ] + bf)) menghasilkan nilai 0-1 per elemen cell state — nilai mendekati 0 berarti 'lupakan', nilai mendekati 1 berarti 'pertahankan' informasi lama."
    },
    {
      id: 'dl7',
      question: "Apa yang dimaksud dengan Dropout dalam neural network dan bagaimana mencegah overfitting?",
      options: [
        "Menghapus neuron dengan bobot paling kecil secara permanen",
        "Secara acak menonaktifkan sebagian neuron selama training, sehingga jaringan tidak terlalu bergantung pada neuron tertentu",
        "Mengurangi jumlah epoch training",
        "Teknik untuk mempercepat inference"
      ],
      correctAnswer: 1,
      explanation: "Dropout dengan probabilitas p menonaktifkan tiap neuron secara acak setiap forward pass. Ini memaksa jaringan belajar representasi redundant/robust dan tidak overfit pada pola spesifik. Dimatikan saat inference."
    },
    {
      id: 'dl8',
      question: "Dalam transformer, apa yang dihitung oleh mekanisme Self-Attention?",
      options: [
        "Konvolusi pada sekuens input",
        "Weighted sum dari value vectors, di mana bobot berasal dari dot product antara query dan key vectors",
        "LSTM hidden state untuk setiap token",
        "Frekuensi kemunculan setiap token dalam sekuens"
      ],
      correctAnswer: 1,
      explanation: "Self-Attention: Attention(Q,K,V) = softmax(QKᵀ/√dk)V. Setiap posisi mengkondensasi informasi dari seluruh sekuens berbobot relevansi (similarity query-key), memungkinkan modeling dependensi jarak jauh."
    },
    {
      id: 'dl9',
      question: "Fungsi loss mana yang paling tepat untuk multi-class classification?",
      options: [
        "Binary Cross-Entropy",
        "Mean Squared Error",
        "Categorical Cross-Entropy (Softmax + Cross-Entropy)",
        "Hinge Loss"
      ],
      correctAnswer: 2,
      explanation: "Categorical Cross-Entropy: L = -Σ yᵢ log(p̂ᵢ). Dikombinasikan dengan softmax di output layer untuk menghasilkan distribusi probabilitas over semua kelas. Binary CE untuk 2 kelas, Hinge Loss untuk SVM."
    },
    {
      id: 'dl10',
      question: "Apa perbedaan antara RNN standar dan LSTM dalam menangani long-range dependencies?",
      options: [
        "Tidak ada perbedaan, keduanya sama-sama buruk",
        "LSTM memiliki cell state dan gating mechanism yang memungkinkan informasi bertahan lebih lama dan mengatasi vanishing gradient",
        "RNN lebih baik untuk sekuens panjang karena lebih sederhana",
        "LSTM hanya untuk data teks, RNN untuk data time series"
      ],
      correctAnswer: 1,
      explanation: "RNN standar menderita vanishing gradient — informasi lama menghilang. LSTM menambahkan cell state (memory jangka panjang) dan tiga gate (forget, input, output) untuk mengontrol aliran informasi secara selektif."
    },
    {
      id: 'dl11',
      question: "Apa yang dimaksud dengan Transfer Learning dalam deep learning?",
      options: [
        "Memindahkan model dari satu server ke server lain",
        "Menggunakan bobot model yang sudah dilatih pada tugas/dataset besar sebagai starting point untuk tugas baru",
        "Mengkompres model untuk deployment",
        "Melatih ulang model dari awal dengan dataset yang berbeda"
      ],
      correctAnswer: 1,
      explanation: "Transfer Learning: pre-trained model (misal ResNet, BERT) digunakan sebagai feature extractor atau fine-tuned untuk tugas spesifik. Sangat efektif saat data labeled terbatas."
    },
    {
      id: 'dl12',
      question: "Dalam backpropagation, apa yang dihitung dengan chain rule?",
      options: [
        "Forward pass melalui setiap layer",
        "Gradien loss terhadap setiap parameter jaringan, dengan mengalikan gradien secara berantai dari output ke input",
        "Nilai aktivasi setiap neuron",
        "Learning rate yang optimal untuk setiap layer"
      ],
      correctAnswer: 1,
      explanation: "Backpropagation menerapkan chain rule kalkulus: ∂L/∂wᵢ = ∂L/∂aₗ × ∂aₗ/∂wᵢ. Gradien dihitung dari layer output ke input secara berantai, memungkinkan update bobot via gradient descent."
    },
    {
      id: 'dl13',
      question: "Apa itu weight initialization dan mengapa Xavier/Glorot initialization penting?",
      options: [
        "Memilih learning rate awal yang optimal",
        "Menginisialisasi bobot agar variance aktivasi konsisten di seluruh layer, mencegah vanishing/exploding gradient di awal training",
        "Teknik untuk mempercepat konvergensi setelah overfitting",
        "Metode untuk menginisialisasi bias jaringan saja"
      ],
      correctAnswer: 1,
      explanation: "Xavier init: W ~ Uniform(-√(6/(nᵢₙ+nₒᵤₜ)), +√(6/(nᵢₙ+nₒᵤₜ))). Memastikan variance sinyal konsisten forward/backward pass, mengurangi risiko vanishing/exploding gradient di awal training."
    },
    {
      id: 'dl14',
      question: "Apa keunggulan utama arsitektur ResNet (Residual Network) dibandingkan CNN konvensional?",
      options: [
        "ResNet lebih ringan dan lebih cepat dari CNN biasa",
        "Residual/skip connections memungkinkan pelatihan jaringan yang sangat dalam (100+ layer) dengan mengatasi vanishing gradient",
        "ResNet tidak memerlukan batch normalization",
        "ResNet hanya digunakan untuk NLP, bukan image"
      ],
      correctAnswer: 1,
      explanation: "Skip connections di ResNet: H(x) = F(x) + x. Gradien dapat mengalir langsung melalui shortcut, memungkinkan pelatihan jaringan sangat dalam tanpa degradasi akurasi karena vanishing gradient."
    },
    {
      id: 'dl15',
      question: "Apa fungsi dari layer Embedding dalam model NLP (misalnya untuk text classification)?",
      options: [
        "Menghapus stop words dari teks",
        "Mengonversi token/kata (integer index) menjadi dense vector representation yang dipelajari, mengkodekan makna semantik",
        "Melakukan tokenisasi teks menjadi karakter",
        "Menghitung TF-IDF dari teks"
      ],
      correctAnswer: 1,
      explanation: "Embedding layer memetakan indeks integer kata ke dense vector (misal 128 dimensi) yang dipelajari saat training. Kata semantis serupa memiliki representasi vektor yang dekat. Lebih efisien dari one-hot encoding."
    },
  ],

  datascience: [
    {
      id: 'ds1',
      question: "Apa yang dimaksud dengan data leakage dalam machine learning dan mengapa berbahaya?",
      options: [
        "Data training bocor ke publik melalui internet",
        "Informasi dari test set atau masa depan bocor ke proses training, menyebabkan evaluasi metrik terlalu optimis",
        "Data hilang akibat kesalahan penyimpanan",
        "Model bocor bobot ke kompetitor"
      ],
      correctAnswer: 1,
      explanation: "Data leakage: model 'melihat' informasi yang seharusnya tidak tersedia saat training (misal future data, test set statistics). Hasilnya performa on-paper sangat baik tapi gagal di production."
    },
    {
      id: 'ds2',
      question: "Apa perbedaan antara Stratified K-Fold Cross Validation dan K-Fold biasa?",
      options: [
        "Stratified lebih lambat dari K-Fold biasa",
        "Stratified memastikan proporsi kelas di setiap fold mencerminkan distribusi kelas di dataset keseluruhan",
        "K-Fold biasa lebih akurat untuk imbalanced data",
        "Stratified hanya bisa digunakan untuk regresi"
      ],
      correctAnswer: 1,
      explanation: "Pada K-Fold biasa, fold bisa memiliki distribusi kelas yang tidak merata. Stratified K-Fold mempertahankan proporsi kelas yang sama di setiap fold — penting untuk imbalanced dataset."
    },
    {
      id: 'ds3',
      question: "Teknik feature engineering mana yang paling tepat untuk fitur kategorik dengan cardinality sangat tinggi (misal ID produk)?",
      options: [
        "One-Hot Encoding",
        "Label Encoding",
        "Target Encoding atau Embedding Representation",
        "MinMax Scaling"
      ],
      correctAnswer: 2,
      explanation: "One-Hot Encoding menghasilkan terlalu banyak dimensi untuk high-cardinality features. Target Encoding (mean target per kategori) atau embedding representation lebih cocok. Label Encoding tidak cocok untuk nominal data."
    },
    {
      id: 'ds4',
      question: "Apa itu SMOTE dan kapan digunakan?",
      options: [
        "Teknik feature selection berbasis mutual information",
        "Synthetic Minority Over-sampling Technique — membuat sampel sintetis dari kelas minoritas untuk menangani class imbalance",
        "Metode regularisasi untuk neural network",
        "Algoritma clustering berbasis density"
      ],
      correctAnswer: 1,
      explanation: "SMOTE membuat sampel baru kelas minoritas dengan interpolasi antara sampel minoritas yang ada (bukan duplikasi). Digunakan saat ada class imbalance signifikan dalam dataset."
    },
    {
      id: 'ds5',
      question: "Dalam proses EDA (Exploratory Data Analysis), apa fungsi utama box plot?",
      options: [
        "Menampilkan distribusi dua variabel bersamaan",
        "Menampilkan 5-number summary (min, Q1, median, Q3, max) dan mengidentifikasi outlier secara visual",
        "Menunjukkan korelasi antar fitur",
        "Memplot time series data"
      ],
      correctAnswer: 1,
      explanation: "Box plot menampilkan min, Q1, median (Q2), Q3, max, dan outlier (titik di luar 1.5×IQR). Sangat berguna untuk melihat distribusi, skewness, dan outlier secara cepat."
    },
    {
      id: 'ds6',
      question: "Apa yang dimaksud dengan Hyperparameter Tuning dan apa perbedaannya dengan parameter model?",
      options: [
        "Tidak ada perbedaan, keduanya sama",
        "Hyperparameter ditetapkan sebelum training (misal learning rate, n_estimators), parameter dipelajari dari data saat training (bobot, bias)",
        "Hyperparameter hanya untuk deep learning",
        "Parameter model ditetapkan manual, hyperparameter dipelajari otomatis"
      ],
      correctAnswer: 1,
      explanation: "Parameter model (bobot, bias) dipelajari selama training. Hyperparameter (learning rate, max_depth, regularization strength) ditetapkan sebelum training dan mengontrol proses pembelajaran itu sendiri."
    },
    {
      id: 'ds7',
      question: "Apa kelebihan RandomizedSearchCV dibandingkan GridSearchCV untuk hyperparameter tuning?",
      options: [
        "RandomizedSearchCV selalu menemukan kombinasi hyperparameter terbaik",
        "Dengan budget komputasi terbatas, RandomizedSearchCV menjelajahi ruang hyperparameter lebih efisien karena sampling acak — tidak semua kombinasi dievaluasi",
        "GridSearchCV tidak bisa digunakan dengan Pipeline",
        "RandomizedSearchCV hanya cocok untuk model sederhana"
      ],
      correctAnswer: 1,
      explanation: "GridSearchCV mengevaluasi semua kombinasi (eksponensial). RandomizedSearchCV memilih kombinasi acak sejumlah n_iter yang ditentukan — lebih efisien dan sering menemukan solusi yang cukup baik dengan waktu jauh lebih singkat."
    },
    {
      id: 'ds8',
      question: "Apa itu MLOps dan mengapa penting dalam siklus hidup ML?",
      options: [
        "Singkatan dari Machine Learning Operations — praktik untuk mengotomatisasi dan memantau deployment, versioning, dan monitoring model ML di production",
        "Library Python untuk machine learning",
        "Metodologi untuk mengajarkan ML kepada tim non-teknis",
        "Teknik optimasi model untuk mobile devices"
      ],
      correctAnswer: 0,
      explanation: "MLOps menggabungkan ML dengan DevOps — mencakup CI/CD untuk model, versioning data/model, monitoring data drift dan model degradation, dan otomatisasi retraining pipeline di production."
    },
    {
      id: 'ds9',
      question: "Apa yang dimaksud dengan 'concept drift' dalam model ML yang sudah di-deploy?",
      options: [
        "Bug yang muncul setelah deployment ke production",
        "Perubahan statistik distribusi data input atau hubungan input-output seiring waktu, sehingga model lama menjadi tidak akurat",
        "Model yang terlalu besar sehingga lambat di production",
        "Kurang memori saat melayani banyak request"
      ],
      correctAnswer: 1,
      explanation: "Concept drift: distribusi data atau pola yang dipelajari model berubah seiring waktu (misal perilaku konsumen berubah). Ini menyebabkan degradasi performa model. Solusi: monitoring, retraining periodik, atau online learning."
    },
    {
      id: 'ds10',
      question: "Dalam feature selection, apa perbedaan antara filter methods dan wrapper methods?",
      options: [
        "Filter methods lebih akurat dari wrapper methods",
        "Filter methods mengevaluasi fitur secara independen berdasarkan statistik (misal correlation, mutual information); wrapper methods menggunakan performa model sebagai kriteria seleksi",
        "Wrapper methods tidak menggunakan model ML",
        "Filter methods hanya untuk data numerik"
      ],
      correctAnswer: 1,
      explanation: "Filter: seleksi fitur berdasarkan skor statistik (variance, chi-square, mutual info) tanpa model — cepat. Wrapper (RFE, forward selection): evaluasi subset fitur berdasarkan performa model — lebih akurat tapi mahal secara komputasi."
    },
    {
      id: 'ds11',
      question: "Apa yang sebaiknya dilakukan saat menghadapi missing values pada fitur penting?",
      options: [
        "Selalu hapus baris yang mengandung missing values",
        "Imputasi menggunakan mean/median/mode atau model-based imputation (KNN, MICE), tergantung distribusi data dan mekanisme missing",
        "Ganti semua missing values dengan nilai 0",
        "Abaikan saja karena model ML bisa menanganinya otomatis"
      ],
      correctAnswer: 1,
      explanation: "Strategi bergantung mekanisme missing (MCAR/MAR/MNAR). Mean/median untuk numerik, mode untuk kategorik. KNN atau MICE untuk data kompleks. Menghapus baris mengurangi data; isi 0 bisa bias. Perhatikan data leakage saat imputasi."
    },
    {
      id: 'ds12',
      question: "Apa fungsi Principal Component Analysis (PCA) dalam pipeline data science?",
      options: [
        "Algoritma supervised learning untuk klasifikasi",
        "Teknik dimensionality reduction yang mentransformasi fitur ke komponen ortogonal yang menjelaskan variance terbesar",
        "Metode untuk menghapus outlier",
        "Teknik oversampling untuk imbalanced dataset"
      ],
      correctAnswer: 1,
      explanation: "PCA menemukan eigenvectors dari covariance matrix fitur (principal components). Data diproyeksikan ke subspace dengan dimensi lebih rendah yang memaksimalkan variance yang dipertahankan. Berguna untuk visualisasi dan mengurangi curse of dimensionality."
    },
    {
      id: 'ds13',
      question: "Apa yang dimaksud dengan model interpretability vs model explainability?",
      options: [
        "Keduanya identik, istilah yang dapat dipertukarkan",
        "Interpretability: model transparan secara inherent (linear regression, decision tree); Explainability: teknik post-hoc untuk menjelaskan model black-box (SHAP, LIME)",
        "Interpretability hanya untuk regresi, explainability untuk klasifikasi",
        "Explainability adalah subset dari interpretability"
      ],
      correctAnswer: 1,
      explanation: "Interpretable model (linear, tree) bisa dipahami langsung dari strukturnya. Explainability mencakup metode seperti SHAP (feature importance berbasis game theory) dan LIME (local approximation linear) untuk model black-box seperti neural network."
    },
    {
      id: 'ds14',
      question: "Apa perbedaan antara validation set dan test set dalam ML workflow?",
      options: [
        "Validation set lebih besar dari test set",
        "Validation set digunakan untuk tuning hyperparameter dan pemilihan model; test set digunakan SEKALI untuk estimasi performa akhir yang tidak bias",
        "Test set digunakan selama training, validation set setelah deployment",
        "Keduanya digunakan secara bergantian untuk tujuan yang sama"
      ],
      correctAnswer: 1,
      explanation: "Validation set digunakan iteratif untuk model selection dan hyperparameter tuning — bisa 'dilihat' berulang kali. Test set adalah estimasi performa akhir yang objektif, harus digunakan SEKALI saja untuk menghindari optimistic bias."
    },
    {
      id: 'ds15',
      question: "Apa yang dimaksud dengan 'feature importance' dalam Random Forest dan bagaimana cara kerjanya?",
      options: [
        "Koefisien fitur yang mirip dengan regresi linear",
        "Mean decrease in impurity (Gini/entropy) yang disebabkan oleh tiap fitur di seluruh pohon ensemble",
        "Korelasi Pearson antara fitur dan target",
        "Jumlah kali suatu fitur muncul dalam dataset"
      ],
      correctAnswer: 1,
      explanation: "Feature importance RF dihitung sebagai rata-rata penurunan impuritas (Gini/entropy) akibat split menggunakan fitur tersebut, dirata-ratakan atas semua pohon. Fitur dengan importance tinggi membuat split yang paling informatif."
    },
  ],
}
