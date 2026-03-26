import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { ConceptGrid, TipBox, StepList, ExampleBox } from './mathContent.jsx'
import { NeuralNetworkDiagram, CNNDiagram, RNNLSTMDiagram, TransferLearningDiagram, LLMPipelineDiagram, DockerDiagram } from './codingLabDiagrams.jsx'

// ═══════════════════════════════════════════════════════════════
// PART 3: Deep Learning Coding (8 sections)
// ═══════════════════════════════════════════════════════════════

export const deepLearningCodingSections = [
  {
    title: '🧠 TensorFlow & Keras: First Neural Network',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">TensorFlow + Keras adalah framework Deep Learning paling populer. Keras menyediakan API high-level yang mudah dipahami.</p>

        <NeuralNetworkDiagram />

        <SectionTitle icon="📦">Setup</SectionTitle>
        <CodeBlock>{`pip install tensorflow

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np

print(f"TF version: {tf.__version__}")
print(f"GPU available: {tf.config.list_physical_devices('GPU')}")`}</CodeBlock>

        <SectionTitle icon="🚀">Neural Network Pertama: Klasifikasi MNIST</SectionTitle>
        <CodeBlock>{`# ═══ 1. LOAD DATA ═════════════════════════════════
(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()
print(f"Train: {X_train.shape}, Test: {X_test.shape}")
# (60000, 28, 28) — 60K gambar 28x28 pixel

# Normalisasi ke [0, 1]
X_train = X_train.astype("float32") / 255.0
X_test = X_test.astype("float32") / 255.0

# Flatten 28x28 → 784 (untuk Dense layer)
X_train_flat = X_train.reshape(-1, 784)
X_test_flat = X_test.reshape(-1, 784)

# ═══ 2. BUILD MODEL ══════════════════════════════
model = keras.Sequential([
    layers.Dense(128, activation="relu", input_shape=(784,)),
    layers.Dropout(0.2),           # regularisasi
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.2),
    layers.Dense(10, activation="softmax")  # 10 kelas (digit 0-9)
])

model.summary()    # lihat arsitektur & jumlah parameter

# ═══ 3. COMPILE ══════════════════════════════════
model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",  # integer labels
    metrics=["accuracy"]
)

# ═══ 4. TRAIN ═════════════════════════════════════
history = model.fit(
    X_train_flat, y_train,
    epochs=20,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)

# ═══ 5. EVALUATE ══════════════════════════════════
test_loss, test_acc = model.evaluate(X_test_flat, y_test)
print(f"\\nTest Accuracy: {test_acc:.4f}")

# ═══ 6. PREDICT ═══════════════════════════════════
predictions = model.predict(X_test_flat[:5])
for i, pred in enumerate(predictions):
    print(f"Prediksi: {np.argmax(pred)}, Aktual: {y_test[i]}, Confidence: {pred.max():.2%}")`}</CodeBlock>

        <SectionTitle icon="📊">Visualisasi Training History</SectionTitle>
        <CodeBlock>{`import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Loss
axes[0].plot(history.history["loss"], label="Train")
axes[0].plot(history.history["val_loss"], label="Validation")
axes[0].set_title("Loss")
axes[0].legend()

# Accuracy
axes[1].plot(history.history["accuracy"], label="Train")
axes[1].plot(history.history["val_accuracy"], label="Validation")
axes[1].set_title("Accuracy")
axes[1].legend()

plt.tight_layout()
plt.show()
# Jika train ↓ tapi val ↑ → OVERFITTING! Tambah dropout/regularisasi`}</CodeBlock>

        <DiagramBox>{`Neural Network Architecture:
Input (784) → Dense(128, ReLU) → Dropout(0.2) → Dense(64, ReLU) → Dropout(0.2) → Dense(10, Softmax)
   │              │                                  │                               │
 28×28          Hidden Layer 1                  Hidden Layer 2                  Output (0-9)
 pixels         128 neurons                     64 neurons                    10 probabilities`}</DiagramBox>
      </div>
    ),
  },
  {
    title: '🔧 Building Blocks: Layers, Activations & Loss',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Memahami komponen utama neural network: jenis layer, fungsi aktivasi, loss function, dan optimizer.</p>

        <SectionTitle icon="📦">Jenis Layer</SectionTitle>
        <CodeBlock>{`from tensorflow.keras import layers

# ─── Dense (Fully Connected) ──────────────────────
layers.Dense(64, activation="relu")

# ─── Conv2D (untuk gambar) ────────────────────────
layers.Conv2D(32, (3, 3), activation="relu", padding="same")
layers.MaxPooling2D((2, 2))        # kurangi ukuran 2x

# ─── Recurrent (untuk sequence) ───────────────────
layers.LSTM(128, return_sequences=True)
layers.GRU(64)

# ─── Utility layers ──────────────────────────────
layers.Flatten()                    # 2D → 1D
layers.Dropout(0.3)                # matikan 30% neuron (regularisasi)
layers.BatchNormalization()        # stabilkan training

# ─── Embedding (untuk NLP) ───────────────────────
layers.Embedding(input_dim=10000, output_dim=128, input_length=100)`}</CodeBlock>

        <SectionTitle icon="⚡">Fungsi Aktivasi</SectionTitle>
        <CodeBlock>{`# ReLU — default untuk hidden layers (99% kasus)
# f(x) = max(0, x) → cepat, tidak vanishing gradient
layers.Dense(64, activation="relu")

# Sigmoid — output layer untuk binary classification
# f(x) = 1/(1 + e^(-x)) → output [0, 1]
layers.Dense(1, activation="sigmoid")

# Softmax — output layer untuk multiclass
# output = probabilitas per kelas, sum = 1
layers.Dense(10, activation="softmax")

# Tanh — alternatif hidden layer (output [-1, 1])
layers.Dense(64, activation="tanh")`}</CodeBlock>

        <CompareTable
          headers={['Task', 'Output Layer', 'Loss Function', 'Metrics']}
          rows={[
            ['Binary Classification', 'Dense(1, sigmoid)', 'binary_crossentropy', 'accuracy, AUC'],
            ['Multiclass', 'Dense(N, softmax)', 'categorical_crossentropy', 'accuracy'],
            ['Multiclass (int label)', 'Dense(N, softmax)', 'sparse_categorical_crossentropy', 'accuracy'],
            ['Regression', 'Dense(1, linear)', 'mse atau mae', 'mae, mse'],
            ['Multi-label', 'Dense(N, sigmoid)', 'binary_crossentropy', 'AUC per label'],
          ]}
        />

        <SectionTitle icon="🎯">Optimizer</SectionTitle>
        <CodeBlock>{`# Adam — default terbaik untuk hampir semua kasus
model.compile(optimizer="adam", loss="...", metrics=["accuracy"])

# Adam dengan custom learning rate
model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.001),
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

# SGD dengan momentum
model.compile(optimizer=keras.optimizers.SGD(learning_rate=0.01, momentum=0.9))`}</CodeBlock>

        <TipBox title="Aturan Praktis">
          Mulai dengan Adam + ReLU + Dropout. Jika overfit → tambah dropout/regularisasi. Jika underfit → tambah neurons/layers. Jika loss NaN → kurangi learning rate.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🖼️ CNN: Image Classification',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Convolutional Neural Networks (CNN) adalah arsitektur terbaik untuk memproses gambar. Conv2D mengekstrak fitur lokal (edges, textures, patterns).</p>

        <CNNDiagram />

        <SectionTitle icon="🏗️">Arsitektur CNN</SectionTitle>
        <CodeBlock>{`from tensorflow import keras
from tensorflow.keras import layers

# ═══ CNN untuk CIFAR-10 (10 kelas gambar) ════════
model = keras.Sequential([
    # Block 1: Conv + Pool
    layers.Conv2D(32, (3, 3), activation="relu", padding="same", input_shape=(32, 32, 3)),
    layers.Conv2D(32, (3, 3), activation="relu", padding="same"),
    layers.MaxPooling2D((2, 2)),
    layers.Dropout(0.25),

    # Block 2: Conv + Pool
    layers.Conv2D(64, (3, 3), activation="relu", padding="same"),
    layers.Conv2D(64, (3, 3), activation="relu", padding="same"),
    layers.MaxPooling2D((2, 2)),
    layers.Dropout(0.25),

    # Block 3: Conv + Pool
    layers.Conv2D(128, (3, 3), activation="relu", padding="same"),
    layers.MaxPooling2D((2, 2)),
    layers.Dropout(0.25),

    # Classifier head
    layers.Flatten(),
    layers.Dense(256, activation="relu"),
    layers.Dropout(0.5),
    layers.Dense(10, activation="softmax")
])

model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.summary()`}</CodeBlock>

        <SectionTitle icon="🔄">Data Augmentation</SectionTitle>
        <CodeBlock>{`from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Augmentasi — buat variasi gambar untuk mengurangi overfitting
datagen = ImageDataGenerator(
    rotation_range=15,
    width_shift_range=0.1,
    height_shift_range=0.1,
    horizontal_flip=True,
    zoom_range=0.1,
)

# Training dengan augmentasi
history = model.fit(
    datagen.flow(X_train, y_train, batch_size=64),
    epochs=50,
    validation_data=(X_test, y_test),
    callbacks=[
        keras.callbacks.EarlyStopping(patience=5, restore_best_weights=True),
        keras.callbacks.ReduceLROnPlateau(factor=0.5, patience=3),
    ]
)`}</CodeBlock>

        <DiagramBox>{`CNN Architecture:
Input     Conv2D    MaxPool   Conv2D    MaxPool   Flatten   Dense    Output
32×32×3 → 32×32×32 → 16×16×32 → 16×16×64 → 8×8×64 → 4096 → 256 → 10
 Image    Feature    Reduce    Deeper    Reduce   Vector  Hidden  Classes
          Maps       Size      Features  Size`}</DiagramBox>
      </div>
    ),
  },
  {
    title: '📝 RNN & LSTM: Sequence Data',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">RNN dan LSTM memproses data berurutan (teks, time series). LSTM mengatasi masalah vanishing gradient pada long sequences.</p>

        <RNNLSTMDiagram />

        <SectionTitle icon="💬">Sentiment Analysis dengan LSTM</SectionTitle>
        <CodeBlock>{`from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

# ═══ 1. PREPROCESSING TEKS ═══════════════════════
texts = ["film ini sangat bagus", "mengecewakan sekali", ...]
labels = [1, 0, ...]  # 1=positif, 0=negatif

# Tokenisasi: kata → angka
tokenizer = Tokenizer(num_words=10000, oov_token="<OOV>")
tokenizer.fit_on_texts(texts)
sequences = tokenizer.texts_to_sequences(texts)

# Padding: semua sequence panjang sama
max_len = 100
X = pad_sequences(sequences, maxlen=max_len, padding="post", truncating="post")

# ═══ 2. MODEL LSTM ════════════════════════════════
model = keras.Sequential([
    layers.Embedding(10000, 128, input_length=max_len),  # word → vector
    layers.Bidirectional(layers.LSTM(64, return_sequences=True)),
    layers.Bidirectional(layers.LSTM(32)),
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.5),
    layers.Dense(1, activation="sigmoid")   # binary classification
])

model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

# ═══ 3. TRAIN ════════════════════════════════════
history = model.fit(X_train, y_train, epochs=10, batch_size=64,
                    validation_split=0.2)

# ═══ 4. PREDIKSI TEKS BARU ══════════════════════
def predict_sentiment(text):
    seq = tokenizer.texts_to_sequences([text])
    padded = pad_sequences(seq, maxlen=max_len, padding="post")
    prob = model.predict(padded)[0][0]
    return "Positif 😊" if prob > 0.5 else "Negatif 😞", prob

label, conf = predict_sentiment("produk ini sangat recommended!")
print(f"{label} (confidence: {conf:.2%})")`}</CodeBlock>

        <CompareTable
          headers={['Model', 'Kelebihan', 'Kekurangan']}
          rows={[
            ['SimpleRNN', 'Paling sederhana', 'Vanishing gradient, lupa long-term'],
            ['LSTM', '3 gates, ingat long-term', 'Lebih lambat training'],
            ['GRU', '2 gates, lebih simple dari LSTM', 'Performa mirip LSTM, lebih cepat'],
            ['Bidirectional', 'Baca maju + mundur', '2x parameter, 2x waktu'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '🔄 Transfer Learning & Fine-tuning',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Transfer learning menggunakan model pretrained (dilatih di ImageNet 1M+ gambar) dan menyesuaikannya untuk task spesifik. Hemat waktu dan data.</p>

        <TransferLearningDiagram />

        <SectionTitle icon="🚀">Transfer Learning Step by Step</SectionTitle>
        <CodeBlock>{`from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.applications import MobileNetV2

# ═══ 1. LOAD PRETRAINED MODEL ════════════════════
base_model = MobileNetV2(
    weights="imagenet",          # pretrained weights
    include_top=False,           # buang classifier head
    input_shape=(224, 224, 3)
)

# Freeze semua layer pretrained
base_model.trainable = False

# ═══ 2. TAMBAH CUSTOM HEAD ═══════════════════════
model = keras.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(128, activation="relu"),
    layers.Dropout(0.3),
    layers.Dense(5, activation="softmax")   # 5 kelas custom
])

model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])

# ═══ 3. TRAIN (hanya head, base frozen) ══════════
history = model.fit(train_ds, epochs=10, validation_data=val_ds)

# ═══ 4. FINE-TUNING (unfreeze beberapa layer) ════
base_model.trainable = True
# Freeze semua kecuali 20 layer terakhir
for layer in base_model.layers[:-20]:
    layer.trainable = False

# Compile ulang dengan learning rate KECIL!
model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=1e-5),  # 10x lebih kecil
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

history_fine = model.fit(train_ds, epochs=10, validation_data=val_ds)`}</CodeBlock>

        <StepList steps={[
          'Load pretrained model (MobileNetV2, ResNet50, EfficientNet)',
          'Freeze semua layer pretrained (base_model.trainable = False)',
          'Tambah custom classification head (Dense layers)',
          'Train hanya head selama beberapa epoch',
          'Unfreeze beberapa layer terakhir base model',
          'Fine-tune dengan learning rate sangat kecil (1e-5)',
        ]} />

        <TipBox title="Model Pretrained Populer">
          Kecil & cepat: MobileNetV2, EfficientNetB0. Akurat: ResNet50, EfficientNetB4. Terbaru: ConvNeXt, ViT (Vision Transformer). Untuk NLP: BERT, GPT.
        </TipBox>
      </div>
    ),
  },
  {
    title: '📊 Model Evaluation & Callbacks',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Callbacks mengontrol training process secara otomatis — early stopping, save best model, adjust learning rate.</p>

        <SectionTitle icon="🎛️">Essential Callbacks</SectionTitle>
        <CodeBlock>{`from tensorflow import keras

callbacks = [
    # 1. Early Stopping — hentikan jika val_loss tidak membaik
    keras.callbacks.EarlyStopping(
        monitor="val_loss",
        patience=5,                    # tunggu 5 epoch
        restore_best_weights=True      # kembalikan ke bobot terbaik
    ),

    # 2. Model Checkpoint — simpan model terbaik
    keras.callbacks.ModelCheckpoint(
        "best_model.keras",
        monitor="val_accuracy",
        save_best_only=True
    ),

    # 3. Reduce LR — kurangi learning rate jika stagnan
    keras.callbacks.ReduceLROnPlateau(
        monitor="val_loss",
        factor=0.5,                    # LR × 0.5
        patience=3,
        min_lr=1e-7
    ),

    # 4. TensorBoard — visualisasi training
    keras.callbacks.TensorBoard(log_dir="./logs"),
]

# Training dengan callbacks
history = model.fit(
    X_train, y_train,
    epochs=100,                       # set tinggi, early stopping handle
    batch_size=32,
    validation_split=0.2,
    callbacks=callbacks
)

# Load best model
best_model = keras.models.load_model("best_model.keras")`}</CodeBlock>

        <SectionTitle icon="📈">Evaluasi & Confusion Matrix</SectionTitle>
        <CodeBlock>{`import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import confusion_matrix, classification_report
import seaborn as sns

# Prediksi
y_pred_prob = model.predict(X_test)
y_pred = np.argmax(y_pred_prob, axis=1)

# Classification Report
print(classification_report(y_test, y_pred))

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues")
plt.xlabel("Predicted")
plt.ylabel("Actual")
plt.title("Confusion Matrix")
plt.show()`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🤗 Hugging Face Transformers',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Hugging Face menyediakan 200K+ pretrained models untuk NLP, computer vision, dan audio. Pipeline API memungkinkan penggunaan model state-of-the-art hanya dalam 2-3 baris kode.</p>

        <SectionTitle icon="📦">Quick Start dengan Pipeline</SectionTitle>
        <CodeBlock>{`# pip install transformers torch
from transformers import pipeline

# ─── Sentiment Analysis ───────────────────────────
classifier = pipeline("sentiment-analysis")
result = classifier("I love learning about AI!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]

# Batch prediction
results = classifier([
    "This movie is amazing!",
    "What a waste of time.",
    "It was okay, nothing special."
])
for r in results:
    print(f"{r['label']}: {r['score']:.4f}")

# ─── Text Generation ─────────────────────────────
generator = pipeline("text-generation", model="gpt2")
output = generator("Machine learning is", max_length=50, num_return_sequences=1)
print(output[0]["generated_text"])

# ─── NER (Named Entity Recognition) ──────────────
ner = pipeline("ner", grouped_entities=True)
result = ner("Elon Musk founded SpaceX in California")
for entity in result:
    print(f"{entity['word']}: {entity['entity_group']} ({entity['score']:.2f})")

# ─── Zero-shot Classification ────────────────────
classifier = pipeline("zero-shot-classification")
result = classifier(
    "Python is great for data analysis",
    candidate_labels=["programming", "cooking", "sports"]
)
print(result["labels"][0], result["scores"][0])  # programming 0.98`}</CodeBlock>

        <SectionTitle icon="🎯">Fine-tuning BERT</SectionTitle>
        <CodeBlock>{`from transformers import AutoTokenizer, AutoModelForSequenceClassification
from transformers import TrainingArguments, Trainer
import torch

# ═══ 1. LOAD MODEL & TOKENIZER ═══════════════════
model_name = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=2)

# ═══ 2. TOKENIZE DATA ════════════════════════════
def tokenize_function(texts):
    return tokenizer(texts, padding="max_length", truncation=True, max_length=128)

# ═══ 3. TRAINING ═════════════════════════════════
training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=64,
    learning_rate=2e-5,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
)
trainer.train()`}</CodeBlock>

        <TipBox title="Model Populer di Hugging Face">
          NLP: bert-base, roberta, distilbert (cepat), xlm-roberta (multilingual). Vision: google/vit, facebook/deit. Bahasa Indonesia: indobenchmark/indobert-base-p1.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🚀 Model Deployment Basics',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Model ML tidak berguna jika tidak bisa digunakan. Pelajari cara menyimpan, mengekspor, dan men-deploy model.</p>

        <SectionTitle icon="💾">Save & Load Model</SectionTitle>
        <CodeBlock>{`# ─── Keras model ──────────────────────────────────
model.save("my_model.keras")                  # SavedModel format
model = keras.models.load_model("my_model.keras")

# ─── Scikit-learn model ──────────────────────────
import joblib
joblib.dump(model, "model.pkl")
model = joblib.load("model.pkl")

# ─── ONNX export (cross-platform) ────────────────
# pip install tf2onnx onnx
import tf2onnx
spec = (tf.TensorSpec((None, 784), tf.float32, name="input"),)
model_proto, _ = tf2onnx.convert.from_keras(model, input_signature=spec)
with open("model.onnx", "wb") as f:
    f.write(model_proto.SerializeToString())`}</CodeBlock>

        <SectionTitle icon="🌐">FastAPI Serving</SectionTitle>
        <CodeBlock>{`# api.py — REST API untuk model ML
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="ML Prediction API")

# Load model saat startup
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

class PredictionRequest(BaseModel):
    features: list[float]

class PredictionResponse(BaseModel):
    prediction: float
    confidence: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    X = np.array(request.features).reshape(1, -1)
    X_scaled = scaler.transform(X)
    pred = model.predict(X_scaled)[0]
    prob = model.predict_proba(X_scaled).max()
    return PredictionResponse(prediction=float(pred), confidence=float(prob))

@app.get("/health")
async def health():
    return {"status": "healthy"}

# Jalankan: uvicorn api:app --host 0.0.0.0 --port 8000 --reload`}</CodeBlock>

        <SectionTitle icon="🎨">Streamlit Demo App</SectionTitle>
        <CodeBlock>{`# app.py — ML web app dalam 20 baris!
import streamlit as st
import joblib
import numpy as np

st.title("🏠 House Price Predictor")

# Input widgets
rooms = st.slider("Jumlah Kamar", 1, 10, 3)
area = st.number_input("Luas (m²)", 20, 500, 100)
location = st.selectbox("Lokasi", ["Jakarta", "Bandung", "Surabaya"])

# Predict
if st.button("Prediksi Harga"):
    model = joblib.load("model.pkl")
    features = np.array([[rooms, area]])
    prediction = model.predict(features)[0]
    st.success(f"Estimasi Harga: Rp {prediction:,.0f}")
    st.balloons()

# Jalankan: streamlit run app.py`}</CodeBlock>

        <CompareTable
          headers={['Tool', 'Use Case', 'Kecepatan Deploy']}
          rows={[
            ['Streamlit', 'Demo/prototype ML app', '5 menit'],
            ['Gradio', 'Demo model (auto UI)', '3 menit'],
            ['FastAPI', 'Production REST API', '30 menit'],
            ['Flask', 'Simple API/web app', '20 menit'],
            ['Docker + FastAPI', 'Production deployment', '1 jam'],
          ]}
        />
      </div>
    ),
  },
]

// ═══════════════════════════════════════════════════════════════
// PART 3B: AI Tools & Modern AI (5 sections)
// ═══════════════════════════════════════════════════════════════

export const aiToolsSections = [
  {
    title: '🤖 OpenAI API & LLM Integration',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Pelajari cara menggunakan API OpenAI (GPT-4, dll) untuk membangun aplikasi AI — chatbot, summarizer, code assistant, dll.</p>

        <LLMPipelineDiagram />

        <SectionTitle icon="📦">Setup</SectionTitle>
        <CodeBlock>{`# pip install openai
from openai import OpenAI

client = OpenAI(api_key="sk-...")   # atau set env: OPENAI_API_KEY`}</CodeBlock>

        <SectionTitle icon="💬">Chat Completion</SectionTitle>
        <CodeBlock>{`# ─── Basic Chat ───────────────────────────────────
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "Kamu adalah asisten Data Scientist yang ramah."},
        {"role": "user", "content": "Jelaskan apa itu overfitting dalam 2 kalimat."}
    ],
    temperature=0.3,         # 0=deterministik, 1=kreatif
    max_tokens=200
)

print(response.choices[0].message.content)

# ─── Multi-turn Conversation ─────────────────────
messages = [
    {"role": "system", "content": "Kamu tutor Python yang sabar."}
]

def chat(user_message):
    messages.append({"role": "user", "content": user_message})
    response = client.chat.completions.create(
        model="gpt-4",
        messages=messages,
        temperature=0.7
    )
    reply = response.choices[0].message.content
    messages.append({"role": "assistant", "content": reply})
    return reply

print(chat("Apa itu list comprehension?"))
print(chat("Beri contoh dengan filter angka genap"))

# ─── Function Calling ─────────────────────────────
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Ambil data cuaca untuk kota tertentu",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "Nama kota"}
            },
            "required": ["city"]
        }
    }
}]

response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Cuaca di Jakarta hari ini?"}],
    tools=tools
)
# Model akan memanggil get_weather(city="Jakarta")
# KITA yang execute fungsinya, lalu kirim hasilnya balik ke model`}</CodeBlock>

        <TipBox title="Temperature Guide">
          0.0 = jawaban faktual/konsisten (code generation, Q&A). 0.3-0.5 = balanced. 0.7-1.0 = kreatif (brainstorming, writing). Untuk coding, selalu gunakan temperature rendah.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🔗 LangChain Basics',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">LangChain menyederhanakan pembuatan aplikasi LLM — prompt management, memory, chains, agents, dan RAG pipelines.</p>

        <SectionTitle icon="🚀">Getting Started</SectionTitle>
        <CodeBlock>{`# pip install langchain langchain-openai chromadb
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.schema.output_parser import StrOutputParser

# ═══ 1. SIMPLE CHAIN ═════════════════════════════
llm = ChatOpenAI(model="gpt-4", temperature=0.3)

prompt = ChatPromptTemplate.from_messages([
    ("system", "Kamu adalah ahli {topic} yang menjelaskan dalam Bahasa Indonesia."),
    ("user", "{question}")
])

chain = prompt | llm | StrOutputParser()

result = chain.invoke({
    "topic": "machine learning",
    "question": "Apa perbedaan supervised dan unsupervised learning?"
})
print(result)

# ═══ 2. RAG — Retrieval-Augmented Generation ═════
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chains import RetrievalQA

# Load & split dokumen
loader = TextLoader("knowledge_base.txt")
docs = loader.load()
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(docs)

# Buat vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

# RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    return_source_documents=True
)

result = qa_chain.invoke({"query": "Jelaskan tentang gradient descent"})
print(result["result"])`}</CodeBlock>

        <DiagramBox>{`RAG Pipeline:
┌─────────┐   ┌──────────┐   ┌──────────┐   ┌─────┐   ┌──────────┐
│ Document│ → │  Split   │ → │ Embed &  │   │Query│ → │ Retrieve │
│ Loader  │   │ Chunks   │   │ Store in │   │     │   │ Top-K    │
│         │   │          │   │ VectorDB │   │     │   │ Chunks   │
└─────────┘   └──────────┘   └──────────┘   └─────┘   └────┬─────┘
                                                             │
                                              ┌──────────────▼──────┐
                                              │  LLM generates     │
                                              │  answer using       │
                                              │  retrieved context  │
                                              └─────────────────────┘`}</DiagramBox>
      </div>
    ),
  },
  {
    title: '📊 Streamlit: Build ML Web Apps',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Streamlit mengubah Python script menjadi web app interaktif — tanpa HTML/CSS/JavaScript. Ideal untuk demo ML, dashboard, dan prototype.</p>

        <SectionTitle icon="🚀">Quick Start</SectionTitle>
        <CodeBlock>{`# pip install streamlit
# Jalankan: streamlit run app.py

import streamlit as st
import pandas as pd
import plotly.express as px

# ─── Layout & Text ────────────────────────────────
st.title("📊 Data Explorer App")
st.markdown("Upload CSV dan eksplorasi data secara interaktif!")

# ─── File Upload ──────────────────────────────────
uploaded = st.file_uploader("Upload CSV", type=["csv"])
if uploaded:
    df = pd.read_csv(uploaded)
    st.write(f"Shape: {df.shape}")

    # Tabs
    tab1, tab2, tab3 = st.tabs(["📋 Data", "📊 Visualisasi", "📈 Statistik"])

    with tab1:
        st.dataframe(df, use_container_width=True)

    with tab2:
        col = st.selectbox("Pilih kolom numerik", df.select_dtypes("number").columns)
        fig = px.histogram(df, x=col, title=f"Distribusi {col}")
        st.plotly_chart(fig, use_container_width=True)

    with tab3:
        st.write(df.describe())

# ─── Sidebar ──────────────────────────────────────
with st.sidebar:
    st.header("⚙️ Settings")
    theme = st.radio("Theme", ["Light", "Dark"])
    n_rows = st.slider("Rows to show", 5, 100, 10)

# ─── ML Prediction Demo ──────────────────────────
st.header("🤖 Prediksi")
col1, col2 = st.columns(2)
with col1:
    feature1 = st.number_input("Feature 1", 0.0, 100.0, 50.0)
with col2:
    feature2 = st.number_input("Feature 2", 0.0, 100.0, 50.0)

if st.button("Predict!", type="primary"):
    # prediction = model.predict([[feature1, feature2]])
    st.success(f"Prediksi: 85.3%")
    st.balloons()`}</CodeBlock>

        <TipBox title="Deploy Streamlit">
          Deploy gratis di Streamlit Cloud: push ke GitHub → streamlit.io/cloud → connect repo → deploy. Atau: Docker, Heroku, AWS.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🐳 Docker untuk ML',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Docker menjamin environment ML kamu identik di mana saja — development, staging, production. "Works on my machine" problem solved.</p>

        <DockerDiagram />

        <SectionTitle icon="📄">Dockerfile untuk ML App</SectionTitle>
        <CodeBlock>{`# Dockerfile
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Expose port
EXPOSE 8000

# Run app
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8000"]`}</CodeBlock>

        <SectionTitle icon="⚡">Build & Run</SectionTitle>
        <CodeBlock>{`# Build image
docker build -t ml-api .

# Run container
docker run -p 8000:8000 ml-api

# Dengan environment variables
docker run -p 8000:8000 -e API_KEY=xxx ml-api

# Docker Compose (multi-container)
# docker-compose.yml
# version: "3"
# services:
#   api:
#     build: .
#     ports: ["8000:8000"]
#   redis:
#     image: redis:7
#     ports: ["6379:6379"]

# Jalankan: docker-compose up -d`}</CodeBlock>

        <TipBox title="Tips Docker ML">
          Gunakan <code>python:3.10-slim</code> (bukan full) untuk image lebih kecil. Tambahkan <code>.dockerignore</code> untuk exclude data/, __pycache__, .git. Layer caching: COPY requirements.txt dulu, baru COPY code.
        </TipBox>
      </div>
    ),
  },
  {
    title: '☁️ Cloud ML: Google Colab & Kaggle',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Platform cloud gratis untuk belajar dan bereksperimen dengan ML — GPU gratis, pre-installed libraries, kolaborasi.</p>

        <SectionTitle icon="📓">Google Colab Tips</SectionTitle>
        <CodeBlock>{`# ═══ GPU Setup ═════════════════════════════════════
# Runtime → Change runtime type → GPU (T4)
import torch
print(f"GPU: {torch.cuda.is_available()}")
print(f"Device: {torch.cuda.get_device_name(0)}")

# ═══ Mount Google Drive ═══════════════════════════
from google.colab import drive
drive.mount("/content/drive")

# Akses file dari Drive
import pandas as pd
df = pd.read_csv("/content/drive/MyDrive/data/dataset.csv")

# Simpan model ke Drive (persisten!)
model.save("/content/drive/MyDrive/models/my_model.keras")

# ═══ Install packages ═════════════════════════════
!pip install -q transformers datasets accelerate

# ═══ Upload file dari komputer ════════════════════
from google.colab import files
uploaded = files.upload()     # dialog upload

# ═══ Download file ke komputer ════════════════════
files.download("output.csv")

# ═══ Secrets (API keys, dll) ═════════════════════
from google.colab import userdata
api_key = userdata.get("OPENAI_API_KEY")  # set di Colab Secrets

# ═══ Bash commands ════════════════════════════════
!nvidia-smi                  # cek GPU
!pip list | grep torch       # cek installed packages
!wget https://url/data.csv   # download file`}</CodeBlock>

        <SectionTitle icon="🏆">Kaggle</SectionTitle>
        <CodeBlock>{`# ═══ Kaggle CLI ═══════════════════════════════════
# pip install kaggle
# Simpan kaggle.json di ~/.kaggle/

# Download competition data
!kaggle competitions download -c titanic
!unzip titanic.zip

# Download dataset
!kaggle datasets download -d username/dataset-name

# Submit prediction
!kaggle competitions submit -c titanic -f submission.csv -m "My submission"

# ═══ Kaggle Notebook Tips ═════════════════════════
# - GPU: Settings → Accelerator → GPU T4 x2
# - 30 jam GPU/minggu (gratis)
# - Internet harus ON untuk install packages
# - Dataset bisa di-attach langsung ke notebook
# - Output otomatis tersimpan di /kaggle/working/`}</CodeBlock>

        <CompareTable
          headers={['', 'Google Colab', 'Kaggle Notebooks']}
          rows={[
            ['GPU Gratis', 'T4 (12 jam max)', 'T4 x2 (30 jam/minggu)'],
            ['Storage', 'Google Drive', 'Kaggle Datasets'],
            ['Pre-installed', 'Banyak', 'ML-focused (lebih lengkap)'],
            ['Kolaborasi', 'Google Docs style', 'Fork & share'],
            ['Kelebihan', 'Fleksibel, Drive integration', 'Competitions, datasets, community'],
            ['Kekurangan', 'Session disconnect', 'Internet wajib on'],
          ]}
        />

        <TipBox title="Workflow Rekomendasi">
          Eksplorasi & prototyping → Colab/Kaggle. Training berat → Kaggle (GPU lebih lama). Production → Docker + Cloud (AWS/GCP). Kompetisi → Kaggle Notebooks.
        </TipBox>
      </div>
    ),
  },
]
