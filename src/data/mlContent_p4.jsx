// Chapter 4: NLP & Chapter 5: Data Science Workflow
import { TipBox, ConceptGrid } from './mathContent.jsx'
import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { WordEmbeddingDiagram, FeatureEngineeringDiagram } from './mlDiagrams.jsx'

export const nlpSections = [
  {
    title: '📝 Text Preprocessing & Tokenization',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Preprocessing teks adalah langkah kritis dalam NLP — "garbage in, garbage out". Kualitas preprocessing sangat menentukan performa model.</p>
        <DiagramBox>{`NLP Preprocessing Pipeline:

  Raw Text
  "The cats are RUNNING quickly!!!"
       │
       ▼ Lowercasing
  "the cats are running quickly!!!"
       │
       ▼ Punctuation Removal
  "the cats are running quickly"
       │
       ▼ Tokenization
  ["the", "cats", "are", "running", "quickly"]
       │
       ▼ Stopword Removal
  ["cats", "running", "quickly"]
       │
       ▼ Stemming/Lemmatization
  ["cat", "run", "quick"]
       │
       ▼ Vectorization (BoW / TF-IDF / Embeddings)
  [0.2, 0.0, 0.8, ...]  ← numerical representation`}</DiagramBox>

        <CodeBlock>{`import re, nltk, spacy
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer, WordNetLemmatizer

# Download NLTK data (sekali saja)
nltk.download(["punkt","stopwords","wordnet","averaged_perceptron_tagger"])

# ── Full Preprocessing Function ────────────────────────
def preprocess(text, use_lemma=True):
    # 1. Lowercase
    text = text.lower()
    # 2. Hapus HTML tags
    text = re.sub(r"<[^>]+>", " ", text)
    # 3. Hapus URL
    text = re.sub(r"http\S+|www\S+", "", text)
    # 4. Hapus karakter non-alfanumerik
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    # 5. Hapus whitespace berlebih
    text = re.sub(r"\s+", " ", text).strip()

    # 6. Tokenisasi
    tokens = word_tokenize(text)

    # 7. Hapus stopwords
    sw = set(stopwords.words("english"))
    tokens = [t for t in tokens if t not in sw and len(t) > 2]

    # 8. Lemmatization vs Stemming
    if use_lemma:
        lemmatizer = WordNetLemmatizer()
        tokens = [lemmatizer.lemmatize(t, pos="v") for t in tokens]
    else:
        stemmer = PorterStemmer()
        tokens = [stemmer.stem(t) for t in tokens]

    return " ".join(tokens)

# ── spaCy (lebih canggih) ─────────────────────────────
nlp = spacy.load("en_core_web_sm")  # python -m spacy download en_core_web_sm
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")

# Tokens dengan metadata
for token in doc:
    print(f"{token.text:15} {token.lemma_:15} {token.pos_:10} {token.is_stop}")

# Named Entities
for ent in doc.ents:
    print(f"{ent.text} → {ent.label_}")`}</CodeBlock>

        <CompareTable
          headers={['Teknik','Cara Kerja','Contoh','Kapan Digunakan']}
          rows={[
            ['Stemming','Potong akhiran kata (rule-based)','running → run, better → better','Cepat, tidak perlu akurasi tinggi'],
            ['Lemmatization','Kembalikan ke bentuk kamus','running → run, better → good','NLP task yang perlu akurasi'],
            ['Subword (BPE)','Pecah kata jadi sub-unit','unhappy → un + happy','BERT, GPT tokenizer'],
            ['WordPiece','Variasi BPE','playing → play + ##ing','BERT default'],
            ['SentencePiece','Language-agnostic','Baik untuk multilingual','T5, ALBERT, XLNet'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '📦 Bag of Words & TF-IDF',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">BoW dan TF-IDF adalah metode klasik untuk merepresentasikan teks sebagai vektor numerik — sederhana tapi masih efektif untuk banyak task.</p>

        <FormulaBox label="Term Frequency (TF)" formula="TF(t, d) = count(t, d) / total_words(d)" note="Frekuensi kemunculan term t dalam dokumen d, dinormalisasi" />
        <FormulaBox label="Inverse Document Frequency (IDF)" formula="IDF(t) = log(N / (1 + df(t)))" note="N = total dokumen, df(t) = jumlah dokumen yang mengandung t. +1 untuk smoothing" />
        <FormulaBox label="TF-IDF Score" formula="TF-IDF(t, d) = TF(t, d) × IDF(t)" note="Tinggi jika kata sering muncul di dokumen ini tapi jarang di dokumen lain → kata penting" />

        <CodeBlock>{`from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report

corpus = [
    "machine learning is amazing for data analysis",
    "deep learning neural networks for computer vision",
    "natural language processing text classification",
    "reinforcement learning game playing AI",
]

# ── Bag of Words ───────────────────────────────────────
cv = CountVectorizer(
    max_features=10000,
    ngram_range=(1, 2),   # unigram + bigram
    min_df=2,             # abaikan term yang muncul < 2 dokumen
    max_df=0.95,          # abaikan term yang muncul > 95% dokumen
    stop_words="english"
)
X_bow = cv.fit_transform(corpus)
print("BoW shape:", X_bow.shape)
print("Feature names:", cv.get_feature_names_out()[:20])

# ── TF-IDF ─────────────────────────────────────────────
tfidf = TfidfVectorizer(
    max_features=50000,
    ngram_range=(1, 2),
    sublinear_tf=True,    # gunakan log(1+tf) untuk mengurangi dominasi kata sangat sering
    min_df=2, max_df=0.95,
    stop_words="english"
)
X_tfidf = tfidf.fit_transform(corpus)

# Top terms dengan TF-IDF score tertinggi per dokumen
import numpy as np
def top_tfidf_terms(tfidf_matrix, feature_names, doc_idx, n=10):
    row = tfidf_matrix[doc_idx]
    scores = zip(row.indices, row.data)
    sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)[:n]
    return [(feature_names[i], round(s, 4)) for i, s in sorted_scores]

# ── Text Classification Pipeline ──────────────────────
pipeline = Pipeline([
    ("tfidf", TfidfVectorizer(max_features=20000, ngram_range=(1,2), sublinear_tf=True)),
    ("clf",   MultinomialNB(alpha=0.1))
])
pipeline.fit(X_train, y_train)
print(classification_report(y_test, pipeline.predict(X_test)))`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🔤 Word Embeddings: Word2Vec, GloVe & FastText',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Word embeddings merepresentasikan kata sebagai vektor dense dalam ruang semantik — kata-kata yang bermakna mirip akan memiliki vektor yang berdekatan.</p>

        <WordEmbeddingDiagram />

        <FormulaBox label="Cosine Similarity antara Dua Vektor" formula="cos(θ) = (A · B) / (||A|| · ||B||)" note="1.0 = identik, 0.0 = ortogonal, -1.0 = berlawanan. Ukuran kemiripan semantik" />

        <DiagramBox>{`Word2Vec — Semantic Space:

  king ─────────────────────────────────────►
  queen ──────────────────────────────────►
  man ─────────────────────────────────────►
  woman ──────────────────────────────────►

  king - man + woman ≈ queen  ✓
  Paris - France + Germany ≈ Berlin  ✓

  Dua metode training:
  CBOW:  [context] → [target word]
  Skip-gram: [target] → [context words]`}</DiagramBox>

        <CodeBlock>{`from gensim.models import Word2Vec, FastText
from gensim.models import KeyedVectors
import numpy as np

# ── Word2Vec dari scratch ──────────────────────────────
sentences = [
    ["machine", "learning", "is", "fascinating"],
    ["deep", "learning", "neural", "network"],
    ["natural", "language", "processing", "nlp"],
    # ... ribuan kalimat
]

w2v = Word2Vec(
    sentences=sentences,
    vector_size=200,      # dimensi embedding
    window=5,             # context window
    min_count=2,          # abaikan kata < 2 kemunculan
    workers=4,            # paralel training
    sg=1,                 # 0=CBOW, 1=Skip-gram
    epochs=20
)

# Operasi semantik
print(w2v.wv.most_similar("machine", topn=5))
print(w2v.wv.similarity("cat", "dog"))
# Analogi: king - man + woman = ?
result = w2v.wv.most_similar(positive=["king","woman"], negative=["man"], topn=1)

# ── GloVe Pre-trained (download) ──────────────────────
# glove.6B.100d.txt dari Stanford NLP
def load_glove(path, dim=100):
    embeddings = {}
    with open(path, encoding="utf-8") as f:
        for line in f:
            vals = line.split()
            word = vals[0]
            embeddings[word] = np.array(vals[1:], dtype="float32")
    return embeddings

glove = load_glove("glove.6B.100d.txt")

# ── FastText — handles OOV (out-of-vocabulary) ────────
ft = FastText(sentences, vector_size=200, window=5, min_count=1,
              workers=4, epochs=20)
# FastText bisa handle kata yang tidak ada di training data
# karena menggunakan subword n-grams

# ── Embedding Matrix untuk Keras ──────────────────────
def create_embedding_matrix(tokenizer, embedding_dict, vocab_size, embed_dim):
    matrix = np.zeros((vocab_size + 1, embed_dim))
    for word, idx in tokenizer.word_index.items():
        if idx <= vocab_size and word in embedding_dict:
            matrix[idx] = embedding_dict[word]
    return matrix

embed_matrix = create_embedding_matrix(tokenizer, glove, vocab_size=20000, embed_dim=100)

# Gunakan di Keras sebagai pre-trained embedding
embedding_layer = tf.keras.layers.Embedding(
    vocab_size + 1, 100,
    weights=[embed_matrix],
    trainable=False   # freeze embeddings
)`}</CodeBlock>

        <CompareTable
          headers={['Model','Training Data','Dimensi','OOV?','Kelebihan']}
          rows={[
            ['Word2Vec','Custom / Wikipedia','50-300','Tidak','Cepat, analogis bagus'],
            ['GloVe','Common Crawl (840B)','50-300','Tidak','Global co-occurrence statistics'],
            ['FastText','Wikipedia + web','100-300','Ya (subword)','Handle kata baru, morfologi'],
            ['BERT','Wikipedia + BookCorpus','768','Ya (WordPiece)','Contextual, bidirectional'],
            ['GPT','WebText','768-12288','Ya (BPE)','Generative, GPT-like tasks'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '🔄 Sequence Models untuk NLP',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">Arsitektur sequence-to-sequence (Seq2Seq) digunakan untuk task yang input dan output keduanya berupa sekuens (machine translation, summarization).</p>

        <DiagramBox>{`Seq2Seq dengan Attention — Machine Translation:
  Input: "I love machine learning"

  ENCODER                    DECODER
  ┌────┐  ┌────┐  ┌────┐    ┌─────────────────────────┐
  │ I  │→ │love│→ │ ML │→   │ Attention weights tiap  │
  └──┬─┘  └──┬─┘  └──┬─┘    │ decode step memilih     │
     h₁      h₂      h₃     │ encoder state mana yang │
     │        │        │     │ paling relevan          │
     └────────┴────────┘     └─────────────────────────┘
           Context                    │
          ┌──────────────────────────►│
          │                          ▼
          │  ┌──────┐  ┌──────┐  ┌──────┐
          │  │ Saya │→ │ suka │→ │  ML  │
          └─►│  h₁  │  │  h₂  │  │  h₃  │
             └──────┘  └──────┘  └──────┘
         Output: "Saya suka machine learning"`}</DiagramBox>

        <CodeBlock>{`from tensorflow.keras import layers, models
import tensorflow as tf

# ── Text Classification: CNN + LSTM hybrid ────────────
def build_text_cnn_lstm(vocab_size, embed_dim, maxlen, n_classes):
    inp = tf.keras.Input(shape=(maxlen,))
    x   = layers.Embedding(vocab_size, embed_dim, input_length=maxlen)(inp)
    x   = layers.SpatialDropout1D(0.2)(x)

    # CNN path
    cnn = layers.Conv1D(128, 5, activation="relu", padding="same")(x)
    cnn = layers.GlobalMaxPooling1D()(cnn)

    # LSTM path
    lstm = layers.Bidirectional(layers.LSTM(64))(x)

    # Merge
    merged = layers.Concatenate()([cnn, lstm])
    merged = layers.Dense(128, activation="relu")(merged)
    merged = layers.Dropout(0.3)(merged)
    out    = layers.Dense(n_classes, activation="softmax")(merged)

    return models.Model(inp, out)

# ── Seq2Seq dengan Attention (Keras) ──────────────────
# Encoder
encoder_in  = tf.keras.Input(shape=(None,))
enc_emb     = layers.Embedding(src_vocab, 256)(encoder_in)
encoder_out, state_h, state_c = layers.LSTM(256, return_state=True)(enc_emb)
encoder_states = [state_h, state_c]

# Decoder
decoder_in  = tf.keras.Input(shape=(None,))
dec_emb     = layers.Embedding(tgt_vocab, 256)(decoder_in)
dec_lstm    = layers.LSTM(256, return_sequences=True, return_state=True)
decoder_out, _, _ = dec_lstm(dec_emb, initial_state=encoder_states)

# Attention
attn = layers.Attention()([decoder_out, tf.expand_dims(encoder_out, 1)])
attn = layers.Concatenate()([decoder_out, attn])

# Output
decoder_dense = layers.Dense(tgt_vocab, activation="softmax")
output = decoder_dense(attn)

model = models.Model([encoder_in, decoder_in], output)`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '😊 Sentiment Analysis & Text Classification',
    body: (
      <div>
        <CodeBlock>{`# ── Approach 1: Traditional ML + TF-IDF ──────────────
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC
from sklearn.feature_extraction.text import TfidfVectorizer

pipe = Pipeline([
    ("tfidf", TfidfVectorizer(max_features=30000, ngram_range=(1,3), sublinear_tf=True)),
    ("clf",   LogisticRegression(C=5.0, max_iter=1000))
])
pipe.fit(X_train, y_train)
print(f"Accuracy: {pipe.score(X_test, y_test):.4f}")

# ── Approach 2: LSTM dengan Pre-trained Embeddings ────
from tensorflow.keras import layers, models
import numpy as np

model = models.Sequential([
    layers.Embedding(vocab_size+1, 100, weights=[embed_matrix],
                     input_length=maxlen, trainable=False),
    layers.SpatialDropout1D(0.2),
    layers.Bidirectional(layers.LSTM(128, dropout=0.2)),
    layers.Dense(64, activation="relu"),
    layers.Dropout(0.3),
    layers.Dense(1, activation="sigmoid")
])
model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

# ── Approach 3: BERT Fine-tuning (BEST) ───────────────
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from transformers import Trainer, TrainingArguments
import torch

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
model_bert = AutoModelForSequenceClassification.from_pretrained(
    "distilbert-base-uncased", num_labels=3)   # positive/neutral/negative

def tokenize_function(examples):
    return tokenizer(examples["text"], truncation=True,
                     padding="max_length", max_length=128)

# TextBlob untuk quick sentiment (tanpa training)
from textblob import TextBlob
texts = ["I love this product!", "This is terrible.", "It's okay I guess."]
for text in texts:
    blob = TextBlob(text)
    print(f"'{text}' → polarity={blob.sentiment.polarity:.2f}")`}</CodeBlock>

        <TipBox type="info">Urutan pendekatan yang disarankan: 1) TextBlob/VADER untuk prototyping cepat, 2) TF-IDF + Logistic Regression untuk baseline yang kuat, 3) BERT fine-tuning untuk akurasi maksimum.</TipBox>
      </div>
    ),
  },
  {
    title: '🏷️ Named Entity Recognition (NER)',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">NER mengidentifikasi dan mengklasifikasikan entitas dalam teks (nama orang, organisasi, lokasi, tanggal, dll).</p>
        <CodeBlock>{`import spacy
from transformers import pipeline

# ── spaCy NER (cepat, production-ready) ───────────────
nlp = spacy.load("en_core_web_lg")  # atau trf untuk transformer-based
doc = nlp("Apple Inc. was founded by Steve Jobs in Cupertino, California in 1976.")

for ent in doc.ents:
    print(f"{ent.text:20} → {ent.label_:10} ({spacy.explain(ent.label_)})")
# Output:
# Apple Inc.           → ORG        (Companies, agencies, institutions)
# Steve Jobs           → PERSON     (People, including fictional)
# Cupertino            → GPE        (Countries, cities, states)
# California           → GPE
# 1976                 → DATE       (Absolute or relative dates or periods)

# Visualisasi NER
from spacy import displacy
displacy.render(doc, style="ent", jupyter=True)

# ── Hugging Face NER ──────────────────────────────────
ner_pipeline = pipeline("ner",
    model="dbmdz/bert-large-cased-finetuned-conll03-english",
    aggregation_strategy="simple")

entities = ner_pipeline("Bill Gates founded Microsoft in Albuquerque, New Mexico.")
for e in entities:
    print(f"{e['word']:20} → {e['entity_group']:10} (score={e['score']:.4f})")

# ── Training Custom NER dengan spaCy ──────────────────
import spacy
from spacy.training import Example

nlp = spacy.blank("en")
ner = nlp.add_pipe("ner")

# Tambah label custom
ner.add_label("PRODUCT")
ner.add_label("DISEASE")

# Format training data
TRAIN_DATA = [
    ("I love my MacBook Pro for machine learning", {"entities": [(12,23,"PRODUCT")]}),
    ("COVID-19 is caused by SARS-CoV-2", {"entities": [(0,8,"DISEASE")]}),
]`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🌐 Machine Translation & Seq2Seq',
    body: (
      <div>
        <CodeBlock>{`from transformers import MarianMTModel, MarianTokenizer, pipeline

# ── MarianMT: 1000+ language pairs ────────────────────
model_name = "Helsinki-NLP/opus-mt-en-id"  # English → Indonesian
tokenizer  = MarianTokenizer.from_pretrained(model_name)
model      = MarianMTModel.from_pretrained(model_name)

texts = ["Machine learning is revolutionizing healthcare.",
         "I would like to learn Python programming."]

inputs  = tokenizer(texts, return_tensors="pt", padding=True, truncation=True)
outputs = model.generate(**inputs, max_length=100, num_beams=5, early_stopping=True)
translated = tokenizer.batch_decode(outputs, skip_special_tokens=True)

for orig, trans in zip(texts, translated):
    print(f"EN: {orig}")
    print(f"ID: {trans}"); print()

# ── M2M100: Multilingual (100 bahasa) ─────────────────
from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer
m2m_tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")
m2m_model     = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")

m2m_tokenizer.src_lang = "en"
inputs = m2m_tokenizer("Hello, how are you?", return_tensors="pt")
outputs = m2m_model.generate(**inputs,
    forced_bos_token_id=m2m_tokenizer.get_lang_id("id"))
print(m2m_tokenizer.batch_decode(outputs, skip_special_tokens=True))`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '❓ Question Answering & Summarization',
    body: (
      <div>
        <CodeBlock>{`from transformers import pipeline

# ── Extractive QA ──────────────────────────────────────
qa = pipeline("question-answering",
              model="deepset/roberta-base-squad2")

context = """
Python is a high-level, general-purpose programming language.
Its design philosophy emphasizes code readability with the use of significant indentation.
Python was created by Guido van Rossum and first released in 1991.
"""
questions = [
    "Who created Python?",
    "When was Python first released?",
    "What does Python's design philosophy emphasize?",
]
for q in questions:
    result = qa(question=q, context=context)
    print(f"Q: {q}")
    print(f"A: {result['answer']} (score={result['score']:.4f})")
    print()

# ── Abstractive Summarization ─────────────────────────
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

article = """
Artificial intelligence (AI) is intelligence demonstrated by machines,
as opposed to natural intelligence displayed by animals including humans.
AI research has been defined as the field of study of intelligent agents,
which refers to any system that perceives its environment and takes actions
that maximize its chance of achieving its goals.
"""
summary = summarizer(article, max_length=100, min_length=30, do_sample=False)
print("Summary:", summary[0]["summary_text"])

# ── T5 — Text-to-Text Transformer ─────────────────────
from transformers import T5ForConditionalGeneration, T5Tokenizer

t5_tokenizer = T5Tokenizer.from_pretrained("t5-base")
t5_model     = T5ForConditionalGeneration.from_pretrained("t5-base")

# T5 menggunakan prefix untuk menentukan task
tasks = [
    "summarize: " + article,
    "translate English to German: Hello, how are you?",
    "question: What is AI? context: AI is machine intelligence.",
]
for task in tasks:
    inputs  = t5_tokenizer(task, return_tensors="pt", max_length=512, truncation=True)
    outputs = t5_model.generate(inputs.input_ids, max_length=150, num_beams=4)
    print(t5_tokenizer.decode(outputs[0], skip_special_tokens=True))`}</CodeBlock>
      </div>
    ),
  },
]

// ════════════════════════════════════════════════════════════════════════════
// CHAPTER 5 — DATA SCIENCE WORKFLOW
// ════════════════════════════════════════════════════════════════════════════
export const datascienceSections = [
  {
    title: '🔍 EDA & Data Profiling',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">EDA (Exploratory Data Analysis) adalah proses memahami data sebelum modeling. Kualitas EDA menentukan pilihan preprocessing dan model yang tepat.</p>

        <DiagramBox>{`EDA Checklist:

  📦 Shape & Types:    df.shape | df.dtypes | df.info()
  🔍 Missing Values:   df.isnull().sum() | heatmap
  📊 Distribution:     df.describe() | histplot | KDE
  🔗 Correlations:     df.corr() | heatmap | pairplot
  📦 Outliers:         boxplot | IQR method | z-score
  ⚖️ Class Balance:    df["target"].value_counts() | countplot
  🔤 Categorical:      value_counts() | bar charts
  🔢 Numerical:        distribution, skewness, kurtosis`}</DiagramBox>

        <CodeBlock>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv("dataset.csv")

# ── 1. Shape & Types ──────────────────────────────────
print(f"Shape: {df.shape}")
print(f"Dtypes:\n{df.dtypes}")
print(f"Unique counts:\n{df.nunique()}")

# ── 2. Missing Values ─────────────────────────────────
missing = df.isnull().sum()
missing_pct = (missing / len(df) * 100).sort_values(ascending=False)
missing_df = pd.DataFrame({"count": missing, "pct": missing_pct})
print(missing_df[missing_df["count"] > 0])

plt.figure(figsize=(12, 4))
missing_pct[missing_pct > 0].plot(kind="bar", color="coral")
plt.title("Missing Values %"); plt.ylabel("%"); plt.show()

# ── 3. Distribution Analysis ──────────────────────────
num_cols = df.select_dtypes(include=[np.number]).columns
fig, axes = plt.subplots(len(num_cols)//3+1, 3, figsize=(18, 6*len(num_cols)//3))
for ax, col in zip(axes.flatten(), num_cols):
    df[col].hist(bins=30, ax=ax, color="steelblue", edgecolor="white")
    ax.set_title(f"{col} (skew={df[col].skew():.2f})")
plt.tight_layout(); plt.show()

# ── 4. Correlation Matrix ─────────────────────────────
plt.figure(figsize=(14, 10))
mask = np.triu(np.ones_like(df.corr(), dtype=bool))
sns.heatmap(df.corr(), mask=mask, annot=True, fmt=".2f",
            cmap="coolwarm", center=0, square=True, linewidths=0.5)
plt.title("Correlation Matrix"); plt.show()

# ── 5. Automated EDA ──────────────────────────────────
# pip install ydata-profiling
from ydata_profiling import ProfileReport
profile = ProfileReport(df, title="EDA Report", explorative=True)
profile.to_file("eda_report.html")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '⚙️ Feature Engineering',
    body: (
      <div>
        <FeatureEngineeringDiagram />

        <CompareTable
          headers={['Teknik','Tujuan','Contoh','sklearn / pandas']}
          rows={[
            ['One-Hot Encoding','Konversi kategori ke binary','Kota → [Jakarta=1, Bandung=0]','OneHotEncoder / pd.get_dummies'],
            ['Label Encoding','Ordinal integer encoding','Low/Med/High → 0/1/2','LabelEncoder'],
            ['Target Encoding','Mean target per kategori','Kota → avg(target) per kota','category_encoders'],
            ['MinMax Scaling','Normalisasi ke [0,1]','(x-min)/(max-min)','MinMaxScaler'],
            ['Standard Scaling','Z-score normalisasi','(x-μ)/σ','StandardScaler'],
            ['Polynomial Features','Fitur interaksi/kuadrat','x1, x2, x1², x1·x2','PolynomialFeatures'],
            ['Log Transform','Kurangi skewness','log(1+x) untuk skewed','np.log1p'],
            ['Binning','Numerik → kategori','umur → [muda,dewasa,tua]','pd.cut / pd.qcut'],
          ]}
        />

        <CodeBlock>{`import pandas as pd
import numpy as np
from sklearn.preprocessing import (
    StandardScaler, MinMaxScaler, RobustScaler,
    LabelEncoder, OneHotEncoder, PolynomialFeatures
)
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# ── Encoding Kategorikal ──────────────────────────────
# One-Hot Encoding
ohe = OneHotEncoder(drop="first", sparse_output=False, handle_unknown="ignore")
X_cat_encoded = ohe.fit_transform(df[cat_features])

# Target Encoding (lebih baik untuk high-cardinality)
# pip install category_encoders
import category_encoders as ce
te = ce.TargetEncoder(cols=cat_features)
df_encoded = te.fit_transform(df[cat_features], y_train)

# ── Scaling Numerik ───────────────────────────────────
# StandardScaler: mean=0, std=1 (default untuk ML)
# MinMaxScaler: range [0,1] (untuk NN)
# RobustScaler: menggunakan median+IQR (tahan outlier)
robust = RobustScaler()
X_scaled = robust.fit_transform(df[num_features])

# ── Feature Creation ──────────────────────────────────
df["ratio_a_b"] = df["a"] / (df["b"] + 1e-8)
df["log_income"] = np.log1p(df["income"])   # log transform
df["age_squared"] = df["age"] ** 2           # polynomial

# ── ColumnTransformer: kombinasi preprocessing ────────
preprocessor = ColumnTransformer([
    ("num",  StandardScaler(), num_features),
    ("cat",  OneHotEncoder(drop="first", handle_unknown="ignore"), cat_features),
], remainder="drop")

full_pipeline = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier",   RandomForestClassifier(n_estimators=200))
])
full_pipeline.fit(X_train, y_train)
print(f"Accuracy: {full_pipeline.score(X_test, y_test):.4f}")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🔬 Feature Selection Methods',
    body: (
      <div>
        <CompareTable
          headers={['Metode','Tipe','Cara Kerja','Kapan Digunakan']}
          rows={[
            ['Variance Threshold','Filter','Hapus fitur dengan variance rendah','Fitur konstan/hampir konstan'],
            ['Correlation Filter','Filter','Hapus fitur berkorelasi tinggi','Multikolinearitas'],
            ['Mutual Information','Filter','I(X;Y) antara fitur dan target','Non-linear relationships'],
            ['SelectKBest / SelectPercentile','Filter','F-test, chi2, MI score','Quick baseline'],
            ['L1 Lasso','Embedded','Koefisien → 0 otomatis','Linear models'],
            ['Feature Importance','Embedded','Mean decrease impurity (tree)','Tree-based models'],
            ['SHAP values','Embedded','Shapley value per fitur','Model-agnostic, interpretable'],
            ['RFE','Wrapper','Backward elimination + CV','Akurasi tinggi, lambat'],
          ]}
        />

        <CodeBlock>{`from sklearn.feature_selection import (
    SelectKBest, f_classif, mutual_info_classif,
    RFE, RFECV, VarianceThreshold, SelectFromModel
)
from sklearn.ensemble import RandomForestClassifier
import shap

# ── Filter Methods ─────────────────────────────────────
# Variance threshold
vt = VarianceThreshold(threshold=0.01)
X_vt = vt.fit_transform(X)

# Mutual Information
mi_scores = mutual_info_classif(X, y, random_state=42)
mi_series = pd.Series(mi_scores, index=feature_names).sort_values(ascending=False)
mi_series.head(20).plot(kind="barh", title="Mutual Information Scores")

# SelectKBest
kb = SelectKBest(mutual_info_classif, k=20)
X_best = kb.fit_transform(X_train, y_train)
selected = np.array(feature_names)[kb.get_support()]

# ── Embedded: Tree Feature Importance ─────────────────
rf = RandomForestClassifier(n_estimators=200, random_state=42)
rf.fit(X_train, y_train)
feat_imp = pd.Series(rf.feature_importances_, index=feature_names)
feat_imp.nlargest(20).plot(kind="barh", title="RF Feature Importance")

# ── SHAP Values (model-agnostic, interpretable) ────────
explainer = shap.TreeExplainer(rf)
shap_values = explainer.shap_values(X_test)

shap.summary_plot(shap_values[1], X_test, feature_names=feature_names)
shap.dependence_plot("feature_name", shap_values[1], X_test)

# ── RFE dengan CV ──────────────────────────────────────
rfecv = RFECV(estimator=RandomForestClassifier(n_estimators=100),
              step=1, cv=5, scoring="f1", n_jobs=-1, min_features_to_select=5)
rfecv.fit(X_train, y_train)
print(f"Optimal features: {rfecv.n_features_}")
print(f"Selected: {np.array(feature_names)[rfecv.support_]}")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '⚖️ Handling Imbalanced Data',
    body: (
      <div>
        <DiagramBox>{`Imbalanced Dataset — Contoh Fraud Detection:

  Kelas 0 (Normal):  ████████████████████████████████ 99%
  Kelas 1 (Fraud):   █                                  1%

  Masalah: Model hanya prediksi "Normal" terus → Accuracy 99% ✓ tapi useless!
  Solusi:  Gunakan F1, Recall, PR-AUC bukan Accuracy
           + Resampling atau class_weight`}</DiagramBox>

        <CompareTable
          headers={['Teknik','Cara Kerja','Kapan','Library']}
          rows={[
            ['Class Weight','Penalti lebih besar untuk kelas minoritas','Sederhana, efektif','class_weight="balanced"'],
            ['Random Oversampling','Duplikasi sampel minoritas','Simple baseline','RandomOverSampler'],
            ['SMOTE','Generate sampel sintetis interpolasi','Tabular data standar','imblearn.over_sampling'],
            ['ADASYN','SMOTE adaptif — fokus area sulit','Complex boundaries','imblearn.over_sampling'],
            ['Random Undersampling','Hapus sampel mayoritas','Data sangat besar','RandomUnderSampler'],
            ['TomekLinks','Hapus pair overlap mayoritas-minoritas','Cleaning decision boundary','TomekLinks'],
            ['SMOTETomek','SMOTE + TomekLinks kombinasi','Robust, combined','SMOTETomek'],
          ]}
        />

        <CodeBlock>{`from imblearn.over_sampling import SMOTE, ADASYN, RandomOverSampler
from imblearn.under_sampling import RandomUnderSampler, TomekLinks
from imblearn.combine import SMOTETomek
from imblearn.pipeline import Pipeline as ImbPipeline
from sklearn.metrics import classification_report, roc_auc_score
import numpy as np

# ── Cek distribusi kelas ───────────────────────────────
print("Class distribution:", np.bincount(y))
print("Ratio:", np.bincount(y)[0] / np.bincount(y)[1])

# ── SMOTE ──────────────────────────────────────────────
smote = SMOTE(sampling_strategy=0.3, k_neighbors=5, random_state=42)
X_res, y_res = smote.fit_resample(X_train, y_train)
print("After SMOTE:", np.bincount(y_res))

# ── SMOTETomek (recommended) ──────────────────────────
smt = SMOTETomek(random_state=42)
X_res, y_res = smt.fit_resample(X_train, y_train)

# ── Class Weight di sklearn ───────────────────────────
from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier(
    n_estimators=200,
    class_weight="balanced",   # auto-hitung weight
    random_state=42
)
rf.fit(X_train, y_train)

# ── Pipeline dengan imblearn ──────────────────────────
pipe = ImbPipeline([
    ("smote", SMOTE(random_state=42)),
    ("scaler", StandardScaler()),
    ("clf", XGBClassifier(scale_pos_weight=99, random_state=42))  # ratio negatif/positif
])
pipe.fit(X_train, y_train)

# ── Evaluasi untuk imbalanced ─────────────────────────
y_prob = pipe.predict_proba(X_test)[:, 1]
print(f"PR-AUC: {average_precision_score(y_test, y_prob):.4f}")
print(f"ROC-AUC: {roc_auc_score(y_test, y_prob):.4f}")
print(classification_report(y_test, pipe.predict(X_test)))`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🎯 Hyperparameter Tuning',
    body: (
      <div>
        <CompareTable
          headers={['Metode','Cara Kerja','Kelebihan','Kekurangan']}
          rows={[
            ['Grid Search','Coba semua kombinasi','Exhaustive, reproducible','Lambat O(n^params)'],
            ['Random Search','Sample kombinasi random','3-10x lebih efisien dari grid','Tidak exhaustive'],
            ['Bayesian (Optuna)','Update prior dengan hasil sebelumnya','Efisien, adaptif','Lebih kompleks'],
            ['Hyperband','Early stopping + successive halving','Sangat cepat untuk DL','Butuh banyak resources'],
          ]}
        />

        <CodeBlock>{`from sklearn.model_selection import GridSearchCV, RandomizedSearchCV
import optuna
from scipy.stats import randint, uniform

# ── GridSearchCV ──────────────────────────────────────
param_grid = {
    "n_estimators": [100, 200, 500],
    "max_depth": [3, 5, 7, None],
    "min_samples_split": [2, 5, 10],
    "min_samples_leaf": [1, 2, 4],
}
grid = GridSearchCV(RandomForestClassifier(random_state=42),
                    param_grid, cv=5, scoring="f1_weighted",
                    n_jobs=-1, verbose=1)
grid.fit(X_train, y_train)
print(f"Best params: {grid.best_params_}")
print(f"Best CV F1:  {grid.best_score_:.4f}")

# ── RandomizedSearchCV (lebih efisien) ────────────────
param_dist = {
    "n_estimators":    randint(100, 1000),
    "max_depth":       randint(3, 15),
    "min_samples_split": randint(2, 20),
    "max_features":    uniform(0.1, 0.9),
    "learning_rate":   uniform(0.01, 0.3),
}
rand = RandomizedSearchCV(XGBClassifier(random_state=42),
                          param_dist, n_iter=100, cv=5,
                          scoring="roc_auc", n_jobs=-1, random_state=42)
rand.fit(X_train, y_train)

# ── Optuna — Bayesian Optimization (BEST) ─────────────
def objective(trial):
    params = {
        "n_estimators":      trial.suggest_int("n_estimators", 100, 1000),
        "max_depth":         trial.suggest_int("max_depth", 3, 12),
        "learning_rate":     trial.suggest_float("learning_rate", 1e-4, 0.3, log=True),
        "subsample":         trial.suggest_float("subsample", 0.5, 1.0),
        "colsample_bytree":  trial.suggest_float("colsample_bytree", 0.5, 1.0),
        "reg_alpha":         trial.suggest_float("reg_alpha", 1e-8, 10, log=True),
        "reg_lambda":        trial.suggest_float("reg_lambda", 1e-8, 10, log=True),
    }
    model = XGBClassifier(**params, random_state=42, n_jobs=-1)
    score = cross_val_score(model, X_train, y_train, cv=5, scoring="roc_auc").mean()
    return score

study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=100, timeout=3600, n_jobs=4)
print(f"Best ROC-AUC: {study.best_value:.4f}")
print(f"Best params: {study.best_params}")`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🔄 Cross-Validation Strategies',
    body: (
      <div>
        <DiagramBox>{`K-Fold Cross Validation (k=5):

  Fold 1: [VAL][TRA][TRA][TRA][TRA]  → score₁
  Fold 2: [TRA][VAL][TRA][TRA][TRA]  → score₂
  Fold 3: [TRA][TRA][VAL][TRA][TRA]  → score₃
  Fold 4: [TRA][TRA][TRA][VAL][TRA]  → score₄
  Fold 5: [TRA][TRA][TRA][TRA][VAL]  → score₅

  Final Score = mean(score₁...score₅) ± std

  Variants:
  • Stratified K-Fold: maintain class ratio (imbalanced)
  • Time Series Split: respect temporal order
  • Leave-One-Out (LOO): k = n (expensive!)
  • Group K-Fold: samples dari group tidak overlap`}</DiagramBox>

        <CodeBlock>{`from sklearn.model_selection import (
    KFold, StratifiedKFold, TimeSeriesSplit,
    cross_val_score, cross_validate, learning_curve
)
import numpy as np, matplotlib.pyplot as plt

# ── Stratified K-Fold (RECOMMENDED untuk classification) ──
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_validate(
    RandomForestClassifier(n_estimators=200, random_state=42),
    X, y, cv=skf,
    scoring=["accuracy", "f1_weighted", "roc_auc"],
    n_jobs=-1
)
for metric in ["test_accuracy", "test_f1_weighted", "test_roc_auc"]:
    print(f"{metric}: {scores[metric].mean():.4f} ± {scores[metric].std():.4f}")

# ── Time Series Split ──────────────────────────────────
tscv = TimeSeriesSplit(n_splits=5, gap=0)
for fold, (train_idx, val_idx) in enumerate(tscv.split(X)):
    X_tr, X_val = X[train_idx], X[val_idx]
    y_tr, y_val = y[train_idx], y[val_idx]
    # train and evaluate...

# ── Learning Curve — diagnosa underfitting/overfitting ──
train_sizes, train_scores, val_scores = learning_curve(
    RandomForestClassifier(n_estimators=100), X, y,
    train_sizes=np.linspace(0.1, 1.0, 10),
    cv=5, scoring="accuracy", n_jobs=-1
)
plt.figure(figsize=(10, 5))
plt.plot(train_sizes, train_scores.mean(1), "b-o", label="Training")
plt.plot(train_sizes, val_scores.mean(1), "r-o", label="Validation")
plt.fill_between(train_sizes, train_scores.mean(1)-train_scores.std(1),
                 train_scores.mean(1)+train_scores.std(1), alpha=0.1, color="b")
plt.fill_between(train_sizes, val_scores.mean(1)-val_scores.std(1),
                 val_scores.mean(1)+val_scores.std(1), alpha=0.1, color="r")
plt.xlabel("Training Size"); plt.ylabel("Accuracy")
plt.title("Learning Curve"); plt.legend(); plt.grid(True)
plt.show()`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🔍 Model Interpretability: SHAP & LIME',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Model interpretability penting untuk kepercayaan, debugging, regulatory compliance, dan memahami pola yang dipelajari model.</p>
        <CodeBlock>{`import shap
import lime
import lime.lime_tabular
import matplotlib.pyplot as plt

# ══════════════════════════════════════════
# SHAP — SHapley Additive exPlanations
# ══════════════════════════════════════════
# Penjelasan global + lokal yang konsisten

# Tree-based models (cepat)
explainer = shap.TreeExplainer(xgb_model)
shap_values = explainer.shap_values(X_test)

# 1. Summary plot — global feature importance
shap.summary_plot(shap_values, X_test, feature_names=feature_names,
                  plot_type="bar")          # bar atau dot (beeswarm)

# 2. Dependence plot — efek satu fitur
shap.dependence_plot("age", shap_values, X_test,
                     interaction_index="income")

# 3. Force plot — penjelasan 1 prediksi
shap.force_plot(explainer.expected_value, shap_values[0], X_test[0],
                feature_names=feature_names, matplotlib=True)

# 4. Waterfall plot — kontribusi per fitur untuk 1 sampel
shap.waterfall_plot(shap.Explanation(
    values=shap_values[0],
    base_values=explainer.expected_value,
    data=X_test[0], feature_names=feature_names))

# Model-agnostic SHAP
explainer_kmeans = shap.KernelExplainer(model.predict_proba,
                                         shap.kmeans(X_train, 10))
shap_vals = explainer_kmeans.shap_values(X_test[:100], nsamples=100)

# ══════════════════════════════════════════
# LIME — Local Interpretable Model-agnostic Explanations
# ══════════════════════════════════════════
lime_explainer = lime.lime_tabular.LimeTabularExplainer(
    X_train,
    feature_names=feature_names,
    class_names=class_names,
    mode="classification"
)

# Explain satu prediksi
exp = lime_explainer.explain_instance(
    X_test[0], model.predict_proba,
    num_features=10, num_samples=1000
)
exp.show_in_notebook()
exp.as_pyplot_figure()
plt.tight_layout(); plt.show()`}</CodeBlock>
      </div>
    ),
  },
  {
    title: '🚀 Deployment & MLOps',
    body: (
      <div>
        <DiagramBox>{`ML Deployment Pipeline:

  Training                     Production
  ──────────                   ──────────
  Data → Model                 Request
  Train → Evaluate             │
  Tune → Best Model            ▼ API endpoint
  │                       ┌────────────────┐
  ▼                       │  Flask/FastAPI │
  Save model ─────────────► model.predict()│
  joblib.dump()           │                │
  mlflow.log()            └────────────────┘
  │                            │
  ▼                            ▼ Response
  Docker Image                JSON result
  │
  ▼
  CI/CD → Deploy (Cloud)      Monitor
  AWS/GCP/Azure/Vercel        Data Drift
                              Performance`}</DiagramBox>

        <CodeBlock>{`# ── 1. Save & Load Model ─────────────────────────────
import joblib, pickle

joblib.dump(model, "model.pkl")          # save
joblib.dump(scaler, "scaler.pkl")        # save preprocessor
model_loaded = joblib.load("model.pkl") # load

# Keras model
model.save("model.keras")               # save
model_loaded = tf.keras.models.load_model("model.keras")

# ── 2. Flask API ──────────────────────────────────────
from flask import Flask, request, jsonify
import numpy as np

app = Flask(__name__)
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    features = np.array(data["features"]).reshape(1, -1)
    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)[0]
    probability = model.predict_proba(features_scaled)[0].tolist()
    return jsonify({
        "prediction": int(prediction),
        "probability": probability,
        "class": class_names[int(prediction)]
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=False)

# ── 3. FastAPI (lebih modern) ─────────────────────────
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="ML Model API")

class PredictRequest(BaseModel):
    features: list[float]

@app.post("/predict")
async def predict(req: PredictRequest):
    X = np.array(req.features).reshape(1, -1)
    pred = model.predict(scaler.transform(X))[0]
    return {"prediction": int(pred), "label": class_names[pred]}

# ── 4. MLflow Experiment Tracking ────────────────────
import mlflow, mlflow.sklearn

with mlflow.start_run(run_name="RandomForest_v1"):
    mlflow.log_param("n_estimators", 200)
    mlflow.log_param("max_depth", 7)
    mlflow.log_metric("accuracy", accuracy_score(y_test, y_pred))
    mlflow.log_metric("f1", f1_score(y_test, y_pred, average="weighted"))
    mlflow.log_metric("roc_auc", roc_auc_score(y_test, y_prob))
    mlflow.sklearn.log_model(model, "model")
    mlflow.log_artifact("feature_importance.png")

# mlflow ui  →  http://localhost:5000

# ── 5. Dockerfile untuk ML model ─────────────────────
dockerfile = """
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY model.pkl scaler.pkl app.py ./
EXPOSE 8080
CMD ["python", "app.py"]
"""

# ── 6. Model Monitoring (data drift) ──────────────────
from evidently.report import Report
from evidently.metric_preset import DataDriftPreset

report = Report(metrics=[DataDriftPreset()])
report.run(reference_data=train_df, current_data=production_df)
report.save_html("drift_report.html")`}</CodeBlock>

        <TipBox type="success">MLOps stack yang umum digunakan: <strong>MLflow</strong> (tracking), <strong>DVC</strong> (data versioning), <strong>FastAPI</strong> (serving), <strong>Docker + Kubernetes</strong> (deployment), <strong>Evidently</strong> (monitoring). Mulai sederhana dengan Flask + joblib sebelum ke Kubernetes.</TipBox>
      </div>
    ),
  },
]
