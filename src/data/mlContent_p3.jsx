// Chapter 3: Deep Learning & Neural Networks
import { TipBox, ConceptGrid } from './mathContent.jsx'
import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { ActivationFunctionsDiagram, BackpropDiagram, CNNArchDiagram, LSTMCellDiagram, AttentionMechDiagram, TransformerArchDiagram, GANDiagram } from './mlDiagrams.jsx'

export const deeplearningSections = [
  {
    title: '🧠 Arsitektur Neural Network & MLP',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Neural Network terinspirasi dari otak manusia — neuron buatan terhubung dalam lapisan, masing-masing menerapkan transformasi linear + aktivasi non-linear.</p>
        <DiagramBox>{`Multi-Layer Perceptron (MLP):

  Input Layer    Hidden Layer 1   Hidden Layer 2    Output
  (4 neurons)    (6 neurons)      (4 neurons)      (3 neurons)

    x₁ ──────── h₁₁ ──────── h₂₁
    x₂ ──────── h₁₂ ──────── h₂₂ ──── ŷ₁
    x₃ ──────── h₁₃ ──────── h₂₃ ──── ŷ₂
    x₄ ──────── h₁₄ ──────── h₂₄ ──── ŷ₃
                h₁₅ ──────── ...
                h₁₆

  Setiap koneksi memiliki bobot w.
  Output neuron = f(Σ wᵢ·xᵢ + b)`}</DiagramBox>

        <FormulaBox label="Forward Pass — Single Neuron" formula="z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b = Wx + b" note="z = pre-activation, kemudian a = f(z) = post-activation" />
        <FormulaBox label="Layer Output" formula="A⁽ˡ⁾ = f(W⁽ˡ⁾ · A⁽ˡ⁻¹⁾ + b⁽ˡ⁾)" note="A⁽⁰⁾ = X (input). Ulangi untuk setiap layer l = 1,...,L" />

        <CodeBlock>{`import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

# ── Keras Sequential API ───────────────────────────────
model = keras.Sequential([
    layers.Input(shape=(input_dim,)),
    layers.Dense(256, activation="relu"),
    layers.BatchNormalization(),
    layers.Dropout(0.3),
    layers.Dense(128, activation="relu"),
    layers.BatchNormalization(),
    layers.Dropout(0.2),
    layers.Dense(64, activation="relu"),
    layers.Dense(n_classes, activation="softmax")  # multiclass
])

model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.001),
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

model.summary()  # lihat jumlah parameter

# ── Training ───────────────────────────────────────────
callbacks = [
    keras.callbacks.EarlyStopping(monitor="val_loss", patience=10, restore_best_weights=True),
    keras.callbacks.ReduceLROnPlateau(factor=0.5, patience=5, min_lr=1e-6),
    keras.callbacks.ModelCheckpoint("best_model.keras", save_best_only=True)
]

history = model.fit(
    X_train, y_train,
    epochs=100, batch_size=64,
    validation_split=0.2,
    callbacks=callbacks, verbose=1
)

# Plot training curves
import matplotlib.pyplot as plt
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
ax1.plot(history.history["loss"], label="Train"); ax1.plot(history.history["val_loss"], label="Val")
ax1.set_title("Loss"); ax1.legend()
ax2.plot(history.history["accuracy"], label="Train"); ax2.plot(history.history["val_accuracy"], label="Val")
ax2.set_title("Accuracy"); ax2.legend()
plt.show()`}</CodeBlock>

        <ConceptGrid items={[
          { title: '⚖️ Weights (W)', desc: 'Parameter yang dipelajari — menentukan kekuatan koneksi antar neuron.', example: 'W.shape = (n_input, n_neurons)' },
          { title: '➕ Bias (b)', desc: 'Shift tambahan — memungkinkan aktivasi meskipun input = 0.', example: 'b.shape = (n_neurons,)' },
          { title: '📚 Epoch', desc: 'Satu kali pass seluruh training data melalui model.', example: 'epochs=100' },
          { title: '📦 Batch Size', desc: 'Jumlah sampel per update gradient. Trade-off antara kecepatan dan stabilitas.', example: 'batch_size=32' },
        ]} />
      </div>
    ),
  },
  {
    title: '⚡ Activation Functions',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Activation function memberikan non-linearitas pada neural network — tanpanya, jaringan hanya bisa belajar transformasi linear.</p>
        <ActivationFunctionsDiagram />

        <CompareTable
          headers={['Fungsi','Formula','Range','Digunakan Untuk','Kelemahan']}
          rows={[
            ['ReLU','max(0, x)','[0, ∞)','Hidden layers (default)','Dying ReLU: neuron mati jika input selalu negatif'],
            ['Leaky ReLU','max(αx, x), α=0.01','(-∞, ∞)','Hidden layers','α adalah hyperparameter'],
            ['ELU','x jika x>0, α(eˣ-1) jika x≤0','(-α, ∞)','Hidden layers (smooth)','Lambat dihitung'],
            ['Sigmoid','1/(1+e⁻ˣ)','(0, 1)','Output binary clf','Vanishing gradient untuk |x|>5'],
            ['Tanh','(eˣ-e⁻ˣ)/(eˣ+e⁻ˣ)','(-1, 1)','Hidden (RNN), LSTM gates','Vanishing gradient'],
            ['Softmax','eˣⁱ/Σeˣʲ','(0, 1) sum=1','Output multiclass','Hanya untuk output layer'],
            ['GELU','x·Φ(x)','≈(-0.17, ∞)','Transformers (BERT, GPT)','Lebih kompleks'],
          ]}
        />

        <DiagramBox>{`Activation Functions — Shape Comparison:

  ReLU:          Sigmoid:        Tanh:
  y│  /          y│  ──          y│  ──
   │ /            │ /             │ /
   │/             │/              │/
  ─┼──── x       ─┼──── x       ─┼──── x
   │              │          ────┤
  f(x)=max(0,x)  f=1/(1+e⁻ˣ)  f=(eˣ-e⁻ˣ)/(eˣ+e⁻ˣ)`}</DiagramBox>

        <CodeBlock>{`import tensorflow as tf
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt

# Visualisasi semua activation functions
x = np.linspace(-5, 5, 200)

activations = {
    "ReLU":       tf.nn.relu(x).numpy(),
    "Leaky ReLU": tf.nn.leaky_relu(x, alpha=0.1).numpy(),
    "Sigmoid":    tf.nn.sigmoid(x).numpy(),
    "Tanh":       tf.nn.tanh(x).numpy(),
    "ELU":        tf.nn.elu(x).numpy(),
    "GELU":       tf.nn.gelu(x).numpy(),
}

fig, axes = plt.subplots(2, 3, figsize=(15, 8))
for ax, (name, y) in zip(axes.flatten(), activations.items()):
    ax.plot(x, y, lw=2.5, color="steelblue")
    ax.axhline(0, color="gray", lw=0.5); ax.axvline(0, color="gray", lw=0.5)
    ax.set_title(f"⚡ {name}", fontsize=12, fontweight="bold")
    ax.grid(True, alpha=0.3); ax.set_xlim(-5, 5)
plt.tight_layout(); plt.suptitle("Activation Functions", y=1.02, fontsize=14)
plt.show()

# Penggunaan dalam Keras
model = keras.Sequential([
    layers.Dense(256, activation="relu"),      # atau "leaky_relu", "elu", "gelu"
    layers.Dense(1, activation="sigmoid"),     # binary output
    # atau
    layers.Dense(n, activation="softmax"),     # multiclass output
])`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🔄 Backpropagation & Gradient Descent',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Backpropagation adalah algoritma untuk menghitung gradien loss terhadap semua parameter menggunakan chain rule kalkulus.</p>
        <BackpropDiagram />

        <FormulaBox label="Chain Rule — Backprop" formula="∂L/∂W⁽ˡ⁾ = ∂L/∂A⁽ˡ⁾ · ∂A⁽ˡ⁾/∂Z⁽ˡ⁾ · ∂Z⁽ˡ⁾/∂W⁽ˡ⁾" note="Gradien mengalir mundur dari output layer ke input layer" />
        <FormulaBox label="Weight Update (SGD)" formula="W := W - α · ∂L/∂W" note="α = learning rate. Terlalu besar = diverge, terlalu kecil = lambat" />
        <FormulaBox label="Adam Optimizer" formula="mₜ = β₁mₜ₋₁ + (1-β₁)gₜ  |  vₜ = β₂vₜ₋₁ + (1-β₂)gₜ²" note="W := W - α · m̂ₜ/(√v̂ₜ + ε)  |  Default: α=0.001, β₁=0.9, β₂=0.999" />

        <CompareTable
          headers={['Optimizer','Kelebihan','Kekurangan','Gunakan Jika']}
          rows={[
            ['SGD','Sederhana, generalisasi baik','Lambat, sensitif LR','Image classification (dengan momentum)'],
            ['SGD + Momentum','Lebih cepat dari SGD','Masih perlu tuning LR','Computer vision standard'],
            ['RMSprop','Adaptive LR, baik untuk RNN','Tidak ada momentum','RNN, LSTM'],
            ['Adam','Cepat, default choice','Bisa overfit','Default untuk hampir semua tugas'],
            ['AdamW','Adam + weight decay bawaan','Butuh tune weight_decay','Transformers, BERT fine-tuning'],
          ]}
        />

        <CodeBlock>{`import tensorflow as tf
from tensorflow import keras

# Berbagai optimizer
optimizers = {
    "SGD":      keras.optimizers.SGD(lr=0.01, momentum=0.9, nesterov=True),
    "Adam":     keras.optimizers.Adam(lr=0.001, beta_1=0.9, beta_2=0.999),
    "AdamW":    keras.optimizers.AdamW(lr=0.001, weight_decay=0.01),
    "RMSprop":  keras.optimizers.RMSprop(lr=0.001, rho=0.9),
}

# Learning Rate Scheduler
lr_schedule = keras.optimizers.schedules.CosineDecayRestarts(
    initial_learning_rate=0.001,
    first_decay_steps=1000,
    t_mul=2.0, m_mul=0.9
)
optimizer = keras.optimizers.Adam(learning_rate=lr_schedule)

# Custom training loop (manual backprop)
@tf.function
def train_step(x_batch, y_batch):
    with tf.GradientTape() as tape:
        predictions = model(x_batch, training=True)
        loss = loss_fn(y_batch, predictions)

    gradients = tape.gradient(loss, model.trainable_variables)
    optimizer.apply_gradients(zip(gradients, model.trainable_variables))
    return loss`}</CodeBlock>

        <TipBox type="tip">Gunakan <strong>Adam</strong> sebagai default optimizer. Jika overfitting, coba <strong>AdamW</strong> dengan weight_decay. Untuk fine-tuning pre-trained model, gunakan learning rate kecil (1e-5 hingga 1e-4).</TipBox>
      </div>
    ),
  },
  {
    title: '🖼️ CNN — Convolutional Neural Networks',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">CNN dirancang untuk data grid (gambar, audio, video) — menggunakan konvolusi untuk mendeteksi pola lokal seperti tepi, tekstur, dan bentuk.</p>
        <CNNArchDiagram />

        <DiagramBox>{`CNN Architecture untuk Image Classification:

  Input Image     Conv + ReLU    Pooling       Conv + ReLU    Flatten    FC Layers
  (32×32×3)  ──►  (30×30×32) ──► (15×15×32) ──► (13×13×64) ──► (10816) ──► 128 ──► 10
                  [32 filters]   [MaxPool 2×2]   [64 filters]   flatten   Dense  Softmax
                   3×3 kernel

  Tiap Conv layer belajar feature detector:
  Layer 1: tepi, sudut
  Layer 2: kurva, pola sederhana
  Layer 3+: wajah, objek, dll`}</DiagramBox>

        <FormulaBox label="Output Size Conv Layer" formula="W_out = (W_in - F + 2P) / S + 1" note="W=width, F=filter size, P=padding, S=stride. Height analog." />
        <FormulaBox label="Jumlah Parameter Conv Layer" formula="Params = (F × F × C_in + 1) × C_out" note="F×F×C_in = filter weights per filter, +1 = bias, C_out = jumlah filter" />

        <CodeBlock>{`from tensorflow.keras import layers, models
import tensorflow as tf

# ── CNN untuk CIFAR-10 (10 kelas) ─────────────────────
def build_cnn(input_shape=(32, 32, 3), n_classes=10):
    model = models.Sequential([
        # Block 1
        layers.Conv2D(32, (3,3), activation="relu", padding="same", input_shape=input_shape),
        layers.BatchNormalization(),
        layers.Conv2D(32, (3,3), activation="relu", padding="same"),
        layers.MaxPooling2D(2, 2),
        layers.Dropout(0.25),

        # Block 2
        layers.Conv2D(64, (3,3), activation="relu", padding="same"),
        layers.BatchNormalization(),
        layers.Conv2D(64, (3,3), activation="relu", padding="same"),
        layers.MaxPooling2D(2, 2),
        layers.Dropout(0.25),

        # Block 3
        layers.Conv2D(128, (3,3), activation="relu", padding="same"),
        layers.BatchNormalization(),
        layers.MaxPooling2D(2, 2),
        layers.Dropout(0.25),

        # Classifier
        layers.Flatten(),
        layers.Dense(512, activation="relu"),
        layers.BatchNormalization(),
        layers.Dropout(0.5),
        layers.Dense(n_classes, activation="softmax")
    ])
    return model

model = build_cnn()
model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.summary()

# Data Augmentation untuk mencegah overfitting
datagen = tf.keras.preprocessing.image.ImageDataGenerator(
    rotation_range=15, width_shift_range=0.1, height_shift_range=0.1,
    horizontal_flip=True, zoom_range=0.1
)
datagen.fit(X_train)
history = model.fit(datagen.flow(X_train, y_train, batch_size=64),
                    steps_per_epoch=len(X_train)//64, epochs=50,
                    validation_data=(X_test, y_test), callbacks=callbacks)`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🏗️ Advanced CNN: VGG, ResNet, EfficientNet',
    body: (
      <div>
        <CompareTable
          headers={['Model','Tahun','Depth','Top-1 (ImageNet)','Params','Keunikan']}
          rows={[
            ['VGG-16','2014','16','71.3%','138M','Sederhana: hanya Conv 3×3 + MaxPool'],
            ['ResNet-50','2015','50','76.0%','25.6M','Residual connections → training sangat dalam'],
            ['InceptionV3','2016','48','77.9%','23.8M','Parallel filters ukuran beda dalam satu block'],
            ['DenseNet-121','2017','121','74.9%','8M','Tiap layer terhubung ke semua layer berikutnya'],
            ['MobileNetV2','2018','53','71.8%','3.4M','Depthwise separable conv → mobile/edge'],
            ['EfficientNet-B0','2019','~18','77.3%','5.3M','Compound scaling width/depth/resolution'],
            ['EfficientNet-B7','2019','~66','84.3%','66M','State-of-art waktu rilis'],
            ['ConvNeXt-L','2022','-','87.5%','198M','Conv modernisasi à la Vision Transformer'],
          ]}
        />

        <FormulaBox label="ResNet — Residual Connection" formula="H(x) = F(x) + x  →  F(x) = H(x) - x (residual)" note="Skip connection mencegah vanishing gradient pada jaringan sangat dalam (100+ layers)" />

        <DiagramBox>{`ResNet Residual Block:

  x ────────────────────────────────────────────┐
  │                                             │
  ▼                                             │ (identity shortcut)
  Conv 1×1 (reduce channels)                   │
  ↓                                             │
  Conv 3×3 (feature extraction)                │
  ↓                                             │
  Conv 1×1 (restore channels)                  │
  ↓                                             │
  BatchNorm                                     │
  ↓                                             ▼
  ──────────────────── (+) ────────────────────►
                        ↓
                      ReLU → output`}</DiagramBox>

        <CodeBlock>{`import tensorflow as tf
from tensorflow.keras.applications import (
    VGG16, ResNet50, EfficientNetB0, MobileNetV2, InceptionV3
)
from tensorflow.keras import layers, models

# ── Transfer Learning dengan ResNet50 ─────────────────
base_model = ResNet50(
    weights="imagenet",    # pre-trained pada ImageNet
    include_top=False,     # hapus classifier terakhir
    input_shape=(224, 224, 3)
)

# Fase 1: Freeze base model, train head saja
base_model.trainable = False

inputs = tf.keras.Input(shape=(224, 224, 3))
x = base_model(inputs, training=False)
x = layers.GlobalAveragePooling2D()(x)
x = layers.Dense(256, activation="relu")(x)
x = layers.Dropout(0.5)(x)
outputs = layers.Dense(n_classes, activation="softmax")(x)
model = models.Model(inputs, outputs)

model.compile(optimizer=tf.keras.optimizers.Adam(1e-3),
              loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.fit(X_train, y_train, epochs=10, validation_data=(X_val, y_val))

# Fase 2: Unfreeze top layers, fine-tune dengan LR kecil
base_model.trainable = True
for layer in base_model.layers[:-30]:   # freeze semua kecuali 30 layer terakhir
    layer.trainable = False

model.compile(optimizer=tf.keras.optimizers.Adam(1e-5),  # LR SANGAT kecil!
              loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.fit(X_train, y_train, epochs=20, validation_data=(X_val, y_val))

# ── EfficientNet (recommended default) ────────────────
base = EfficientNetB0(weights="imagenet", include_top=False, input_shape=(224,224,3))
# rest sama seperti di atas`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🔁 RNN & GRU',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">RNN didesain untuk data sekuensial (teks, time series, audio) — memiliki hidden state yang diteruskan ke timestep berikutnya.</p>

        <FormulaBox label="RNN Forward Pass" formula="hₜ = tanh(Wₕ · hₜ₋₁ + Wₓ · xₜ + b)" note="hₜ = hidden state saat t, xₜ = input saat t. Masalah: vanishing gradient pada sekuens panjang" />
        <FormulaBox label="GRU — Gated Recurrent Unit" formula="zₜ = σ(Wz·[hₜ₋₁, xₜ])  |  rₜ = σ(Wr·[hₜ₋₁, xₜ])" note="z = update gate, r = reset gate. Lebih efisien dari LSTM (lebih sedikit parameter)" />

        <DiagramBox>{`RNN — Unrolled Through Time:

  x₁ ──► [RNN] ──h₁──► [RNN] ──h₂──► [RNN] ──h₃──► [RNN] ──h₄──► output
           ↑              ↑              ↑              ↑
  x₂ ────────────────────────────────────────────────────► (shared weights W!)

  GRU Gates:
  Update gate z: seberapa banyak info lama dipertahankan
  Reset gate r:  seberapa banyak info lama dilupakan`}</DiagramBox>

        <CodeBlock>{`from tensorflow.keras import layers, models

# ── SimpleRNN (jarang digunakan, vanishing gradient) ──
model_rnn = models.Sequential([
    layers.Embedding(vocab_size, 64, input_length=max_len),
    layers.SimpleRNN(64, return_sequences=True),
    layers.SimpleRNN(32),
    layers.Dense(1, activation="sigmoid")
])

# ── GRU (lebih efisien dari LSTM) ─────────────────────
model_gru = models.Sequential([
    layers.Embedding(vocab_size, 128, input_length=max_len),
    layers.GRU(128, return_sequences=True, dropout=0.2),
    layers.GRU(64, dropout=0.2),
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.3),
    layers.Dense(n_classes, activation="softmax")
])

# ── Time Series dengan GRU ─────────────────────────────
# Input shape: (batch, timesteps, features)
model_ts = models.Sequential([
    layers.GRU(64, return_sequences=True, input_shape=(window_size, n_features)),
    layers.GRU(32),
    layers.Dense(16, activation="relu"),
    layers.Dense(forecast_horizon)  # regression output
])

model_ts.compile(optimizer="adam", loss="mse", metrics=["mae"])
model_ts.fit(X_train, y_train, epochs=50, batch_size=32, validation_split=0.2)`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🔮 LSTM & Bi-LSTM',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">LSTM mengatasi masalah vanishing gradient RNN dengan 3 gate yang mengontrol aliran informasi. Bi-LSTM memproses sekuens dari dua arah sekaligus.</p>
        <LSTMCellDiagram />

        <FormulaBox label="LSTM — Forget Gate" formula="fₜ = σ(Wf · [hₜ₋₁, xₜ] + bf)" note="Seberapa banyak cell state lama yang 'dilupakan' (0=lupa semua, 1=ingat semua)" />
        <FormulaBox label="LSTM — Input Gate" formula="iₜ = σ(Wi · [hₜ₋₁, xₜ] + bi)  |  C̃ₜ = tanh(WC · [hₜ₋₁, xₜ] + bC)" note="iₜ = info baru mana yang masuk, C̃ₜ = candidate values" />
        <FormulaBox label="LSTM — Cell & Output" formula="Cₜ = fₜ ⊙ Cₜ₋₁ + iₜ ⊙ C̃ₜ  |  oₜ = σ(Wo · [hₜ₋₁, xₜ] + bo)" note="hₜ = oₜ ⊙ tanh(Cₜ). ⊙ = element-wise multiply (Hadamard product)" />

        <DiagramBox>{`LSTM Cell — Information Flow:

  Cₜ₋₁ ──────────────────────────────── (+) ──► Cₜ ──►
           ↑ fₜ⊙Cₜ₋₁    ↑ iₜ⊙C̃ₜ         │
  hₜ₋₁ ──►[f gate]──►  [i gate]──►[C gate] │
  xₜ  ──►     σ     ──►    σ    ──►  tanh  │
                                            ▼
                               oₜ = σ(...) → hₜ = oₜ⊙tanh(Cₜ)

  Bi-LSTM — dua arah:
  Forward:  x₁ → x₂ → x₃ → x₄ → h_f
  Backward: x₄ → x₃ → x₂ → x₁ → h_b
  Output:   concat(h_f, h_b) di tiap timestep`}</DiagramBox>

        <CodeBlock>{`from tensorflow.keras import layers, models

# ── Stacked LSTM ──────────────────────────────────────
model_lstm = models.Sequential([
    layers.Embedding(vocab_size, 128, input_length=max_len),
    layers.LSTM(256, return_sequences=True, dropout=0.2, recurrent_dropout=0.1),
    layers.LSTM(128, return_sequences=True, dropout=0.2, recurrent_dropout=0.1),
    layers.LSTM(64, dropout=0.2),
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.3),
    layers.Dense(1, activation="sigmoid")
])

# ── Bidirectional LSTM ────────────────────────────────
model_bilstm = models.Sequential([
    layers.Embedding(vocab_size, 128, input_length=max_len),
    layers.Bidirectional(layers.LSTM(128, return_sequences=True, dropout=0.2)),
    layers.Bidirectional(layers.LSTM(64, dropout=0.2)),
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.3),
    layers.Dense(n_classes, activation="softmax")
])

model_bilstm.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

# ── LSTM untuk Time Series Forecasting ────────────────
def create_sequences(data, window=60, horizon=1):
    X, y = [], []
    for i in range(len(data) - window - horizon + 1):
        X.append(data[i:i+window])
        y.append(data[i+window:i+window+horizon])
    return np.array(X), np.array(y)

# Multi-step forecasting
model_forecast = models.Sequential([
    layers.LSTM(128, return_sequences=True, input_shape=(window_size, n_features)),
    layers.Dropout(0.2),
    layers.LSTM(64),
    layers.Dropout(0.2),
    layers.Dense(32, activation="relu"),
    layers.Dense(forecast_steps)
])
model_forecast.compile(optimizer="adam", loss="mse", metrics=["mae"])`}</CodeBlock>

        <TipBox type="tip"><strong>Kapan pakai LSTM vs GRU?</strong> GRU lebih cepat dan lebih sedikit parameter — mulai dengan GRU. Jika performa kurang memuaskan, coba LSTM. Bi-LSTM untuk task NLP dimana konteks dua arah penting (tidak bisa untuk real-time/streaming).</TipBox>
      </div>
    ),
  },
  {
    title: '🎯 Attention Mechanism',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Attention memungkinkan model "memperhatikan" bagian input yang paling relevan saat menghasilkan setiap output — mengatasi bottleneck context vector pada Seq2Seq.</p>
        <AttentionMechDiagram />

        <FormulaBox label="Attention Score (Bahdanau)" formula="eₜₛ = v · tanh(Wₕ·hₜ₋₁ + Wₛ·sₛ)" note="eₜₛ = seberapa relevan encoder state sₛ untuk menghasilkan output ke-t" />
        <FormulaBox label="Attention Weights" formula="αₜₛ = softmax(eₜₛ) = exp(eₜₛ) / Σₛ' exp(eₜₛ')" note="αₜₛ ≥ 0 dan Σₛ αₜₛ = 1 — distribusi probabilitas atas encoder states" />
        <FormulaBox label="Context Vector" formula="cₜ = Σₛ αₜₛ · sₛ" note="Weighted sum dari semua encoder states — dynamic per timestep output" />
        <FormulaBox label="Scaled Dot-Product Attention (Transformer)" formula="Attention(Q, K, V) = softmax(Q·Kᵀ / √d_k) · V" note="Q=Query, K=Key, V=Value. Dibagi √d_k untuk mencegah dot product terlalu besar" />

        <DiagramBox>{`Self-Attention — "The cat sat on the mat because it was tired"

  Saat memproses "it":
  Attention weights: [0.02, 0.78, 0.03, 0.01, 0.02, 0.01, 0.13]
                      The   cat   sat   on   the   mat  because

  "it" memperhatikan "cat" (0.78) paling banyak → it = cat ✓

  Query  Key     Value
  ┌───┐  ┌───┐   ┌───┐
  │ Q │  │ K │   │ V │
  └─┬─┘  └─┬─┘   └─┬─┘
    │       │       │
    └──→ QKᵀ/√d_k  │
           ↓        │
        softmax     │
           ↓        │
        weights     │
           └──── × V → context`}</DiagramBox>

        <CodeBlock>{`import tensorflow as tf
from tensorflow.keras import layers

# ── Multi-Head Self-Attention Layer ───────────────────
class MultiHeadSelfAttention(layers.Layer):
    def __init__(self, embed_dim, num_heads):
        super().__init__()
        self.num_heads = num_heads
        self.head_dim  = embed_dim // num_heads
        self.W_qkv = layers.Dense(3 * embed_dim)
        self.W_o   = layers.Dense(embed_dim)

    def call(self, x):
        B, T, C = tf.shape(x)[0], tf.shape(x)[1], x.shape[-1]
        qkv = self.W_qkv(x)
        q, k, v = tf.split(qkv, 3, axis=-1)
        # Scale dot-product attention
        scale   = tf.math.sqrt(tf.cast(self.head_dim, tf.float32))
        scores  = tf.matmul(q, k, transpose_b=True) / scale
        weights = tf.nn.softmax(scores, axis=-1)
        out = tf.matmul(weights, v)
        return self.W_o(out)

# Atau gunakan built-in Keras
attention = layers.MultiHeadAttention(num_heads=8, key_dim=64)
output = attention(query=x, key=x, value=x)  # self-attention`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🤖 Transformers Architecture',
    body: (
      <div>
        <TransformerArchDiagram />
        <DiagramBox>{`Transformer Architecture (Vaswani et al., 2017):

  ENCODER:                          DECODER:
  ┌─────────────────┐              ┌─────────────────────┐
  │ Input Embedding │              │  Output Embedding   │
  │  + Pos Encoding │              │   + Pos Encoding    │
  └────────┬────────┘              └──────────┬──────────┘
           │  (×N)                             │  (×N)
  ┌────────▼────────┐              ┌──────────▼──────────┐
  │ Multi-Head      │              │ Masked Multi-Head   │
  │ Self-Attention  │              │ Self-Attention      │
  ├─────────────────┤              ├─────────────────────┤
  │ Add & LayerNorm │              │ Add & LayerNorm     │
  ├─────────────────┤              ├─────────────────────┤
  │ Feed-Forward    │              │ Cross-Attention     │
  │ Network (FFN)   │◄────────────►│ (Q from dec, K/V    │
  ├─────────────────┤              │  from encoder)      │
  │ Add & LayerNorm │              ├─────────────────────┤
  └─────────────────┘              │ Feed-Forward (FFN)  │
           │                       ├─────────────────────┤
           └──────────────────────►│ Linear + Softmax    │
                                   └─────────────────────┘`}</DiagramBox>

        <FormulaBox label="Positional Encoding" formula="PE(pos,2i) = sin(pos/10000^(2i/d_model))  |  PE(pos,2i+1) = cos(...)" note="Karena Transformer tidak punya recurrence, PE memberikan informasi posisi token" />

        <CodeBlock>{`import tensorflow as tf
from tensorflow.keras import layers

class TransformerBlock(layers.Layer):
    def __init__(self, embed_dim, num_heads, ff_dim, dropout_rate=0.1):
        super().__init__()
        self.attention   = layers.MultiHeadAttention(num_heads=num_heads, key_dim=embed_dim//num_heads)
        self.ffn         = tf.keras.Sequential([
            layers.Dense(ff_dim, activation="relu"),
            layers.Dense(embed_dim)
        ])
        self.layernorm1  = layers.LayerNormalization(epsilon=1e-6)
        self.layernorm2  = layers.LayerNormalization(epsilon=1e-6)
        self.dropout1    = layers.Dropout(dropout_rate)
        self.dropout2    = layers.Dropout(dropout_rate)

    def call(self, x, training=False):
        # Self-attention + residual
        attn_out = self.attention(x, x)
        attn_out = self.dropout1(attn_out, training=training)
        out1 = self.layernorm1(x + attn_out)

        # FFN + residual
        ffn_out = self.ffn(out1)
        ffn_out = self.dropout2(ffn_out, training=training)
        return self.layernorm2(out1 + ffn_out)

# Text Classification dengan Transformer
vocab_size, maxlen, embed_dim = 20000, 200, 128
inputs  = tf.keras.Input(shape=(maxlen,))
x       = layers.Embedding(vocab_size, embed_dim)(inputs)
x       = TransformerBlock(embed_dim, num_heads=4, ff_dim=256)(x)
x       = layers.GlobalAveragePooling1D()(x)
x       = layers.Dropout(0.1)(x)
outputs = layers.Dense(1, activation="sigmoid")(x)

model = tf.keras.Model(inputs, outputs)
model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🤗 BERT, GPT & Large Language Models',
    body: (
      <div>
        <CompareTable
          headers={['Model','Tahun','Jenis','Pre-training Task','Terbaik Untuk']}
          rows={[
            ['BERT','2018','Encoder-only','Masked LM + Next Sentence Pred.','Classification, NER, QA'],
            ['GPT-2/3','2019/2020','Decoder-only','Causal LM (next token pred)','Text generation'],
            ['RoBERTa','2019','Encoder-only','BERT + lebih banyak data/epochs','BERT tasks, lebih baik'],
            ['T5','2020','Encoder-Decoder','Text-to-text','Translation, Summarization'],
            ['GPT-4','2023','Decoder-only','RLHF fine-tuned','General AI assistant'],
            ['LLaMA-2','2023','Decoder-only','Causal LM','Open-source LLM'],
            ['Gemma','2024','Decoder-only','Causal LM','Lightweight open-source'],
          ]}
        />

        <CodeBlock>{`from transformers import (
    AutoTokenizer, AutoModelForSequenceClassification,
    pipeline, Trainer, TrainingArguments
)
import torch

# ── Inference dengan HuggingFace Pipelines ────────────
# Sentiment analysis
sentiment = pipeline("sentiment-analysis",
                     model="distilbert-base-uncased-finetuned-sst-2-english")
result = sentiment("This movie is absolutely fantastic!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]

# Named Entity Recognition
ner = pipeline("ner", aggregation_strategy="simple")
entities = ner("Elon Musk founded Tesla in Silicon Valley.")

# Text Generation
generator = pipeline("text-generation", model="gpt2")
output = generator("Machine learning is", max_length=50, num_return_sequences=3)

# Zero-shot Classification
classifier = pipeline("zero-shot-classification",
                      model="facebook/bart-large-mnli")
result = classifier("This tutorial is about neural networks",
                    candidate_labels=["education", "politics", "technology"])

# ── Fine-tuning BERT untuk Klasifikasi ────────────────
model_name = "bert-base-uncased"
tokenizer  = AutoTokenizer.from_pretrained(model_name)
model      = AutoModelForSequenceClassification.from_pretrained(
                 model_name, num_labels=2)

# Tokenize dataset
def tokenize(examples):
    return tokenizer(examples["text"], truncation=True, max_length=512, padding="max_length")

tokenized_dataset = dataset.map(tokenize, batched=True)

training_args = TrainingArguments(
    output_dir="./results", num_train_epochs=3,
    per_device_train_batch_size=16, learning_rate=2e-5,
    weight_decay=0.01, warmup_steps=500,
    evaluation_strategy="epoch", save_strategy="epoch",
    load_best_model_at_end=True
)
trainer = Trainer(model=model, args=training_args,
                  train_dataset=tokenized_dataset["train"],
                  eval_dataset=tokenized_dataset["test"])
trainer.train()`}</CodeBlock>

        <TipBox type="tip">Untuk fine-tuning LLM dengan resource terbatas, gunakan <strong>LoRA / QLoRA</strong> (peft library dari HuggingFace) — hanya melatih sebagian kecil parameter namun hasil mendekati full fine-tuning.</TipBox>
      </div>
    ),
  },
  {
    title: '🎯 Object Detection: YOLO & R-CNN',
    body: (
      <div>
        <CompareTable
          headers={['Model','Kecepatan','Akurasi','Pendekatan','Digunakan Untuk']}
          rows={[
            ['R-CNN (2014)','Sangat lambat (~47s/img)','Tinggi','Region proposal + CNN','Research baseline'],
            ['Fast R-CNN (2015)','Lebih cepat (2.3s/img)','Tinggi','RoI pooling','Research'],
            ['Faster R-CNN (2015)','Cepat (0.2s/img)','Tinggi','RPN integrated','Production, high accuracy'],
            ['YOLO v1 (2016)','Real-time (45fps)','Medium','Grid-based single-pass','Real-time detection'],
            ['YOLOv8 (2023)','Sangat cepat','Tinggi','Anchor-free','Edge + production'],
            ['DETR (2020)','Medium','Tinggi','Transformer-based','Panoptic segmentation'],
          ]}
        />

        <CodeBlock>{`# YOLOv8 — paling mudah digunakan
# pip install ultralytics

from ultralytics import YOLO
import cv2

# Load pre-trained model
model = YOLO("yolov8n.pt")   # n=nano, s=small, m=medium, l=large, x=xlarge

# Inference pada gambar
results = model("image.jpg")
results[0].show()             # tampilkan deteksi
results[0].save("output.jpg") # simpan ke file

# Inference pada video
results = model.predict("video.mp4", save=True, conf=0.5, iou=0.45)

# Fine-tuning pada dataset custom
# Siapkan dataset format YOLO: images/ + labels/ (.txt)
model = YOLO("yolov8m.pt")
model.train(
    data="dataset.yaml",   # path ke konfigurasi dataset
    epochs=100,
    imgsz=640,
    batch=16,
    name="custom_detector"
)

# Evaluasi
metrics = model.val()
print(f"mAP50: {metrics.box.map50:.4f}")
print(f"mAP50-95: {metrics.box.map:.4f}")

# Export model
model.export(format="onnx")  # untuk deployment
model.export(format="tflite")  # untuk mobile`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🎨 Generative AI: GAN, VAE & Diffusion Models',
    body: (
      <div>
        <GANDiagram />
        <CompareTable
          headers={['Model','Cara Kerja','Output Quality','Training','Contoh Aplikasi']}
          rows={[
            ['GAN','Generator vs Discriminator (adversarial)','Sangat realistis','Tidak stabil (mode collapse)','StyleGAN, DeepFake, CycleGAN'],
            ['VAE','Encode ke latent space + decode','Blur, tapi controllable','Stabil','Image generation, anomaly detection'],
            ['Diffusion','Tambah noise → reverse noise step by step','Terbaik saat ini','Lambat inference','DALL-E 3, Stable Diffusion, Midjourney'],
          ]}
        />

        <FormulaBox label="GAN Loss" formula="min_G max_D V(D,G) = E[log D(x)] + E[log(1 - D(G(z)))]" note="Generator ingin 'tipu' Discriminator, Discriminator ingin bedakan real vs fake" />
        <FormulaBox label="VAE Loss (ELBO)" formula="L = E[log p(x|z)] - KL(q(z|x) || p(z))" note="Rekonstruksi loss + KL divergence untuk regularisasi latent space" />

        <CodeBlock>{`import tensorflow as tf
from tensorflow.keras import layers

# ── Simple DCGAN ──────────────────────────────────────
def make_generator(noise_dim=100):
    return tf.keras.Sequential([
        layers.Dense(7*7*256, use_bias=False, input_shape=(noise_dim,)),
        layers.BatchNormalization(), layers.LeakyReLU(),
        layers.Reshape((7, 7, 256)),
        layers.Conv2DTranspose(128, 5, strides=1, padding="same", use_bias=False),
        layers.BatchNormalization(), layers.LeakyReLU(),
        layers.Conv2DTranspose(64, 5, strides=2, padding="same", use_bias=False),
        layers.BatchNormalization(), layers.LeakyReLU(),
        layers.Conv2DTranspose(1, 5, strides=2, padding="same",
                               activation="tanh"),   # output 28×28×1
    ])

def make_discriminator():
    return tf.keras.Sequential([
        layers.Conv2D(64, 5, strides=2, padding="same", input_shape=(28,28,1)),
        layers.LeakyReLU(), layers.Dropout(0.3),
        layers.Conv2D(128, 5, strides=2, padding="same"),
        layers.LeakyReLU(), layers.Dropout(0.3),
        layers.Flatten(), layers.Dense(1)
    ])

# Menggunakan Stable Diffusion (Keras CV)
# pip install keras-cv
import keras_cv
model = keras_cv.models.StableDiffusion(img_width=512, img_height=512)
images = model.text_to_image(
    "A futuristic city with flying cars at sunset, photorealistic",
    batch_size=1, num_steps=50
)

# Atau Hugging Face Diffusers
from diffusers import StableDiffusionPipeline
pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5",
                                                torch_dtype=torch.float16)
image = pipe("a photo of a cat in space").images[0]
image.save("cat_space.png")`}</CodeBlock>
      </div>
    ),
  },
]
