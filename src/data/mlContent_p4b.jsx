// Chapter 4b: NLP Advanced + Chapter 5b: Data Science Advanced
import { TipBox, ConceptGrid } from './mathContent.jsx'
import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { RAGDiagram, SHAPDiagram, MLOpsPipelineDiagram } from './mlDiagrams.jsx'

// ─────────────────────────────────────────────────────────────
//  NLP ADVANCED SECTIONS (5 baru)
// ─────────────────────────────────────────────────────────────

export const nlpSectionsB = [
  // ── Section 1: Transformer Math ────────────────────────────
  {
    title: '🔢 Transformer Math — Attention Deep Dive',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          Transformer (Vaswani et al., 2017 — "Attention is All You Need") merevolusi NLP dengan menggantikan RNN/LSTM secara total.
          Kunci keunggulannya adalah <strong>paralelisasi penuh</strong> saat training dan kemampuan menangkap dependensi jarak jauh dengan lebih efisien.
        </p>

        <SectionTitle icon="⚡">Mengapa Transformer Menggantikan RNN?</SectionTitle>
        <CompareTable
          headers={['Aspek', 'RNN/LSTM', 'Transformer']}
          rows={[
            ['Paralelisasi', 'Sequential — tidak bisa diparalel', 'Penuh paralel di semua token'],
            ['Dependensi jarak jauh', 'Gradien hilang saat sequence panjang', 'O(1) — semua token langsung terhubung'],
            ['Kompleksitas', 'O(n) per layer', 'O(n²·d) per layer (attention matrix)'],
            ['Memory', 'Proporsional sequence', 'O(n²) untuk attention matrix'],
            ['Training speed', 'Lambat (bottleneck sekuensial)', 'Jauh lebih cepat dengan GPU'],
          ]}
        />

        <SectionTitle icon="🔑">Konsep Query, Key, Value (QKV)</SectionTitle>
        <p className="text-sm text-gray-600 mb-3">
          Bayangkan sebuah <em>database</em>: setiap token memiliki tiga representasi. <strong>Query (Q)</strong> adalah "pertanyaan" token saat ini — apa yang ia cari.
          <strong> Key (K)</strong> adalah "label" setiap token — apa yang ditawarkannya. <strong>Value (V)</strong> adalah konten aktual yang akan diambil.
          Attention score mengukur kecocokan Q dengan setiap K, lalu mengambil rata-rata tertimbang dari V.
        </p>

        <DiagramBox>{`Mekanisme Scaled Dot-Product Attention:

  Input sequence: ["Kucing", "itu", "berlari", "cepat"]
  Setiap token diproyeksikan ke 3 vektor:

  Token "berlari"          Token "Kucing"        Token "itu"
  ┌─────────┐              ┌─────────┐           ┌─────────┐
  │  Q_i    │◄─── "apa ───►│  K_j    │           │  K_k    │
  │ (query) │   yang ada?" │  (key)  │           │  (key)  │
  └────┬────┘              └────┬────┘           └────┬────┘
       │                        │                     │
       │   score = Q·Kᵀ / √d_k  │                     │
       │◄───────────────────────┘                     │
       │                                              │
       ▼  softmax([score_j, score_k, ...])
  attention weights: [0.7, 0.1, 0.2, ...]   ← sum=1
       │
       ▼  weighted sum of Values
  output_i = Σ weight_j · V_j

  Multi-Head: lakukan N kali dengan proyeksi berbeda, lalu concat!

  [Head₁ | Head₂ | ... | Head_h] → Linear → Output`}</DiagramBox>

        <FormulaBox
          label="Scaled Dot-Product Attention"
          formula="Attention(Q, K, V) = softmax( Q·Kᵀ / √d_k ) · V"
          note="Q ∈ ℝ^{n×d_k}, K ∈ ℝ^{m×d_k}, V ∈ ℝ^{m×d_v} — output ∈ ℝ^{n×d_v}"
        />
        <FormulaBox
          label="Mengapa dibagi √d_k ?"
          formula="Var(Q·K) = d_k   →   dibagi √d_k   →   Var = 1"
          note="Dot product berdimensi tinggi cenderung memiliki nilai besar, membuat softmax jenuh (gradient ≈ 0). Skala √d_k menstabilkan gradien."
        />
        <FormulaBox
          label="Multi-Head Attention"
          formula="MultiHead(Q,K,V) = Concat(head₁,...,head_h) · W^O  |  head_i = Attention(Q·W_i^Q, K·W_i^K, V·W_i^V)"
          note="h = jumlah head. d_k = d_v = d_model/h. Setiap head belajar pola berbeda (sintaks, semantik, koreference)."
        />
        <FormulaBox
          label="Positional Encoding (Sinusoidal)"
          formula="PE(pos, 2i)   = sin(pos / 10000^(2i/d_model))  |  PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))"
          note="pos = posisi token, i = dimensi. Transformer tidak punya urutan bawaan — PE menyuntikkan informasi posisi."
        />

        <SectionTitle icon="🏗️">Arsitektur Encoder vs Decoder</SectionTitle>
        <DiagramBox>{`Full Transformer Architecture:

  INPUT TOKENS                          OUTPUT TOKENS (shifted right)
       │                                        │
  ┌────┴────────────────┐              ┌────────┴──────────────┐
  │  Input Embedding    │              │  Output Embedding     │
  │  + Positional Enc   │              │  + Positional Enc     │
  └────────┬────────────┘              └──────────┬────────────┘
           │                                      │
  ┌────────▼────────────┐              ┌──────────▼────────────┐
  │  ENCODER (×N=6)     │              │  DECODER (×N=6)       │
  │  ┌─────────────┐    │              │  ┌─────────────────┐  │
  │  │ Multi-Head  │    │              │  │ Masked Multi-   │  │
  │  │ Self-Attn   │    │   encoder    │  │ Head Self-Attn  │  │
  │  └──────┬──────┘    │   output ──►│  └────────┬────────┘  │
  │  ┌──────▼──────┐    │              │  ┌────────▼────────┐  │
  │  │ Add & Norm  │    │              │  │  Cross-Attention│  │
  │  └──────┬──────┘    │              │  │  (Q←Decoder,    │  │
  │  ┌──────▼──────┐    │              │  │   K,V←Encoder)  │  │
  │  │ Feed Forward│    │              │  └────────┬────────┘  │
  │  │ (2-layer MLP│    │              │  ┌────────▼────────┐  │
  │  └──────┬──────┘    │              │  │  Feed Forward   │  │
  │  ┌──────▼──────┐    │              │  └────────┬────────┘  │
  │  │ Add & Norm  │    │              └───────────┼───────────┘
  └──│─────────────│────┘                          │
     │  Encoder    │                        ┌──────▼──────┐
     │  Output     │                        │  Linear +   │
     └─────────────┘                        │  Softmax    │
                                            └─────────────┘
  ENCODER: bidirectional, semua token lihat semua token.
  DECODER: masked — token hanya lihat token SEBELUMNYA (autoregressive).`}</DiagramBox>

        <TipBox type="warning">
          <strong>Masked Attention di Decoder:</strong> Saat training, decoder mendapat seluruh output sekaligus (teacher forcing), tetapi mask segitiga bawah mencegah token ke-t melihat token ke-t+1, t+2, dst. Ini mensimulasikan perilaku autoregressive saat inferensi.
        </TipBox>

        <SectionTitle icon="💻">Implementasi Multi-Head Attention dari Nol (PyTorch)</SectionTitle>
        <CodeBlock>{`import torch
import torch.nn as nn
import torch.nn.functional as F
import math

class MultiHeadAttention(nn.Module):
    """Multi-Head Self-Attention seperti dalam Transformer asli."""

    def __init__(self, d_model: int, num_heads: int, dropout: float = 0.1):
        super().__init__()
        assert d_model % num_heads == 0, "d_model harus habis dibagi num_heads"

        self.d_model    = d_model
        self.num_heads  = num_heads
        self.d_k        = d_model // num_heads  # dimensi per head

        # Proyeksi linear untuk Q, K, V dan output
        self.W_q = nn.Linear(d_model, d_model, bias=False)
        self.W_k = nn.Linear(d_model, d_model, bias=False)
        self.W_v = nn.Linear(d_model, d_model, bias=False)
        self.W_o = nn.Linear(d_model, d_model, bias=False)
        self.dropout = nn.Dropout(dropout)

    def scaled_dot_product_attention(self, Q, K, V, mask=None):
        """
        Q: (batch, heads, seq_len, d_k)
        K: (batch, heads, seq_len, d_k)
        V: (batch, heads, seq_len, d_k)
        mask: (batch, 1, seq_len, seq_len) opsional
        """
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        # scores: (batch, heads, seq_len, seq_len)

        if mask is not None:
            # Isi posisi yang di-mask dengan -inf agar softmax → 0
            scores = scores.masked_fill(mask == 0, float('-inf'))

        attn_weights = F.softmax(scores, dim=-1)
        attn_weights = self.dropout(attn_weights)

        output = torch.matmul(attn_weights, V)
        return output, attn_weights

    def split_heads(self, x, batch_size):
        """Reshape (batch, seq, d_model) → (batch, heads, seq, d_k)"""
        x = x.view(batch_size, -1, self.num_heads, self.d_k)
        return x.transpose(1, 2)

    def forward(self, x, mask=None):
        batch_size, seq_len, _ = x.shape

        # Linear projections
        Q = self.split_heads(self.W_q(x), batch_size)  # (B, H, S, d_k)
        K = self.split_heads(self.W_k(x), batch_size)
        V = self.split_heads(self.W_v(x), batch_size)

        # Attention
        attn_out, attn_weights = self.scaled_dot_product_attention(Q, K, V, mask)

        # Concat heads: (B, H, S, d_k) → (B, S, d_model)
        attn_out = attn_out.transpose(1, 2).contiguous()
        attn_out = attn_out.view(batch_size, seq_len, self.d_model)

        # Final linear
        output = self.W_o(attn_out)
        return output, attn_weights


# ── Uji coba ─────────────────────────────────────────────────
if __name__ == "__main__":
    batch, seq, d_model, heads = 2, 10, 512, 8
    mha = MultiHeadAttention(d_model=d_model, num_heads=heads)
    x   = torch.randn(batch, seq, d_model)

    # Causal mask (lower triangular) untuk decoder
    causal_mask = torch.tril(torch.ones(seq, seq)).unsqueeze(0).unsqueeze(0)

    out, weights = mha(x, mask=causal_mask)
    print(f"Output shape : {out.shape}")       # (2, 10, 512)
    print(f"Attn weights : {weights.shape}")   # (2, 8, 10, 10)
    print(f"Param count  : {sum(p.numel() for p in mha.parameters()):,}")`}</CodeBlock>

        <ConceptGrid items={[
          { title: 'Query (Q)', desc: 'Representasi "apa yang dicari" oleh token saat ini. Diproyeksikan dari input dengan W_Q.', example: 'Q = X · W_Q' },
          { title: 'Key (K)', desc: 'Representasi "apa yang ditawarkan" oleh setiap token. Digunakan untuk menghitung relevansi.', example: 'K = X · W_K' },
          { title: 'Value (V)', desc: 'Konten informasi aktual yang akan diagregasi setelah bobot attention dihitung.', example: 'V = X · W_V' },
          { title: 'Multi-Head', desc: 'Jalankan attention h kali dengan proyeksi berbeda. Setiap head belajar aspek linguistik berbeda.', example: 'h=8 untuk BERT-base' },
          { title: 'Add & Norm', desc: 'Residual connection (x + sublayer(x)) + Layer Normalization. Mencegah vanishing gradient.', example: 'LayerNorm(x + Attn(x))' },
          { title: 'FFN', desc: 'Feed-Forward Network 2 layer setelah attention. Proyeksi ke dimensi lebih besar (4×d_model), lalu kembali.', example: 'FFN(x)=ReLU(xW₁+b₁)W₂+b₂' },
        ]} />
      </div>
    ),
  },

  // ── Section 2: BERT ─────────────────────────────────────────
  {
    title: '🤖 BERT Deep Dive — Pre-training & Fine-tuning',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          BERT (Bidirectional Encoder Representations from Transformers, Devlin et al. 2018) adalah model bahasa pra-latih yang merevolusi hampir semua benchmark NLP.
          Idenya sederhana namun powerful: latih encoder transformer secara bidireksional pada teks tidak berlabel dalam jumlah masif.
        </p>

        <SectionTitle icon="🏗️">Arsitektur BERT</SectionTitle>
        <CompareTable
          headers={['Varian', 'Layer (L)', 'Hidden (H)', 'Heads (A)', 'Parameter']}
          rows={[
            ['BERT-base', '12', '768', '12', '110 juta'],
            ['BERT-large', '24', '1024', '16', '340 juta'],
            ['DistilBERT', '6', '768', '12', '66 juta (40% lebih kecil)'],
            ['RoBERTa-base', '12', '768', '12', '125 juta'],
            ['ALBERT-base', '12', '768', '12', '12 juta (parameter sharing)'],
            ['DeBERTa-base', '12', '768', '12', '139 juta'],
          ]}
        />

        <SectionTitle icon="📚">Dua Tugas Pre-training</SectionTitle>
        <DiagramBox>{`Pre-training BERT — Dua Tugas Simultan:

  ┌─────────────────── TUGAS 1: MLM (Masked Language Modeling) ─────────────────┐
  │                                                                               │
  │  Input : "Kucing [MASK] duduk di [MASK] tikar."                              │
  │  Target: Prediksi token yang di-mask                                          │
  │                                                                               │
  │  Strategi masking 15% token:                                                 │
  │    ├─ 80% → diganti [MASK]  : "Kucing" → "[MASK]"                           │
  │    ├─ 10% → diganti random  : "duduk"  → "terbang" (random token)           │
  │    └─ 10% → tidak diganti   : "tikar"  → "tikar"  (unchanged, tetap predict)│
  │                                                                               │
  │  Kenapa tidak 100% [MASK]? Agar model tidak overly dependent pada [MASK]     │
  │  token yang tidak muncul saat fine-tuning (train-test mismatch).            │
  └───────────────────────────────────────────────────────────────────────────────┘

  ┌─────────────────── TUGAS 2: NSP (Next Sentence Prediction) ─────────────────┐
  │                                                                               │
  │  Input A: [CLS] Kucing duduk di tikar. [SEP]                                 │
  │  Input B: [SEP] Ia tampak lelah hari ini. [SEP]                              │
  │                                                                               │
  │  Label: IsNext (50%) atau NotNext (50% — kalimat random dari corpus)         │
  │                                                                               │
  │  [CLS] token → representasi pasangan kalimat → klasifikasi biner             │
  │                                                                               │
  │  Catatan: RoBERTa menghapus NSP — ternyata MLM saja lebih baik!             │
  └───────────────────────────────────────────────────────────────────────────────┘`}</DiagramBox>

        <SectionTitle icon="🔤">Input Representation BERT</SectionTitle>
        <FormulaBox
          label="Input Embedding BERT"
          formula="E_final = E_token + E_segment + E_position"
          note="Ketiga embedding dijumlahkan (bukan concat). E_segment ∈ {E_A, E_B} membedakan kalimat pertama/kedua."
        />

        <DiagramBox>{`Input: [CLS] Saya suka [MASK] [SEP] Hari ini panas [SEP]

  Token IDs:  [101]  [1234] [5678] [103]  [102]  [2345] [6789] [1111] [102]
              [CLS]  Saya   suka  [MASK] [SEP]   Hari   ini   panas  [SEP]

  Segment:    [ A ]  [ A ]  [ A ]  [ A ]  [ A ]  [ B ]  [ B ]  [ B ]  [ B ]

  Position:   [  0 ] [  1 ] [  2 ] [  3 ] [  4 ] [  5 ] [  6 ] [  7 ] [  8 ]

                              ↓ Dijumlahkan ↓

  Final Embedding setiap token = Token_Emb + Segment_Emb + Position_Emb`}</DiagramBox>

        <FormulaBox
          label="Fine-tuning: Klasifikasi Teks (pakai [CLS])"
          formula="y = softmax( W · h_[CLS] + b )   di mana h_[CLS] ∈ ℝ^H"
          note="Tambahkan linear layer kecil di atas [CLS] output. Freeze atau fine-tune semua layer BERT."
        />
        <FormulaBox
          label="Fine-tuning: Token Classification (NER)"
          formula="y_i = softmax( W · h_i + b )   untuk setiap token i"
          note="Setiap token mendapat prediksi label (B-PER, I-PER, O, B-LOC, dst.)"
        />

        <TipBox type="info">
          <strong>[CLS] Token:</strong> Token spesial yang selalu berada di posisi pertama. Setelah pre-training, representasi [CLS] mengandung informasi kontekstual seluruh sequence — digunakan sebagai sentence embedding untuk klasifikasi.
        </TipBox>

        <SectionTitle icon="💻">Fine-tuning BERT dengan HuggingFace</SectionTitle>
        <CodeBlock>{`from transformers import (
    AutoTokenizer, AutoModelForSequenceClassification,
    TrainingArguments, Trainer
)
from datasets import load_dataset
import numpy as np
from sklearn.metrics import accuracy_score, f1_score

# ── 1. Load dataset & tokenizer ─────────────────────────────
dataset   = load_dataset("imdb")
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

def tokenize_fn(examples):
    return tokenizer(
        examples["text"],
        truncation=True,
        padding="max_length",
        max_length=512,
    )

tokenized = dataset.map(tokenize_fn, batched=True)

# ── 2. Load model dengan classification head ────────────────
model = AutoModelForSequenceClassification.from_pretrained(
    "bert-base-uncased",
    num_labels=2,          # positif / negatif
)

# ── 3. Metrics ──────────────────────────────────────────────
def compute_metrics(eval_pred):
    logits, labels = eval_pred
    preds = np.argmax(logits, axis=-1)
    return {
        "accuracy": accuracy_score(labels, preds),
        "f1":       f1_score(labels, preds, average="binary"),
    }

# ── 4. Training arguments ───────────────────────────────────
args = TrainingArguments(
    output_dir          = "./bert-imdb",
    num_train_epochs    = 3,
    per_device_train_batch_size = 16,
    per_device_eval_batch_size  = 32,
    warmup_steps        = 500,
    weight_decay        = 0.01,
    learning_rate       = 2e-5,   # kecil — fine-tuning LR
    evaluation_strategy = "epoch",
    save_strategy       = "epoch",
    load_best_model_at_end = True,
    fp16                = True,   # mixed precision untuk GPU
)

# ── 5. Trainer ──────────────────────────────────────────────
trainer = Trainer(
    model           = model,
    args            = args,
    train_dataset   = tokenized["train"],
    eval_dataset    = tokenized["test"],
    compute_metrics = compute_metrics,
)
trainer.train()
trainer.save_model("./bert-imdb-final")

# ── 6. Inferensi ────────────────────────────────────────────
from transformers import pipeline
clf = pipeline("text-classification", model="./bert-imdb-final",
               tokenizer=tokenizer)
print(clf("Film ini sangat mengecewakan dan membosankan."))`}</CodeBlock>

        <CompareTable
          headers={['Model', 'Arsitektur', 'Perbedaan Utama', 'Keunggulan']}
          rows={[
            ['BERT', 'Encoder 12L', 'MLM + NSP, WordPiece', 'Baseline NLU yang kuat'],
            ['RoBERTa', 'Encoder 12L', 'No NSP, dynamic masking, lebih banyak data', 'BERT lebih baik, sering jadi pilihan'],
            ['DistilBERT', 'Encoder 6L', 'Knowledge distillation dari BERT', '40% lebih kecil, 97% performa BERT'],
            ['ALBERT', 'Encoder 12L', 'Parameter sharing antar layer, SOP vs NSP', '12M param, skalabel'],
            ['DeBERTa', 'Encoder 12L', 'Disentangled attention (konten & posisi terpisah)', 'SOTA di banyak benchmark NLU'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'Pre-training', desc: 'Latih pada corpus masif (Wikipedia + BooksCorpus) dengan MLM dan NSP. Tidak butuh label.', example: '3.3 miliar kata' },
          { title: 'Fine-tuning', desc: 'Sesuaikan BERT ke task spesifik dengan sedikit data berlabel. Hanya perlu 2-3 epoch.', example: 'lr=2e-5, 3 epochs' },
          { title: 'WordPiece Tokenizer', desc: 'Bagi kata tidak dikenal menjadi subword. "playing" → ["play", "##ing"]. OOV minimal.', example: '"unhappiness" → 3 token' },
          { title: 'CLS Token', desc: 'Token pertama yang mewakili seluruh sequence. Digunakan untuk klasifikasi dan sentence similarity.', example: 'h_[CLS] → linear → label' },
          { title: 'Attention Mask', desc: 'Binary mask (1=token real, 0=padding). Mencegah attention ke token padding.', example: '[1,1,1,0,0,0]' },
          { title: 'Layer Freezing', desc: 'Strategi: freeze bottom layer (fitur umum), fine-tune top layer (fitur task-spesifik).', example: 'Freeze layer 0-6, train 7-12' },
        ]} />
      </div>
    ),
  },

  // ── Section 3: GPT & LLM ────────────────────────────────────
  {
    title: '🚀 GPT & Large Language Models',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          GPT (Generative Pre-trained Transformer) menggunakan arsitektur decoder-only dan dilatih dengan objective Language Modeling kausal.
          Skalanya yang masif memunculkan kemampuan yang tidak pernah diantisipasi — yang disebut <em>emergent abilities</em>.
        </p>

        <SectionTitle icon="📐">Autoregressive Language Modeling</SectionTitle>
        <FormulaBox
          label="Objective Fungsi GPT"
          formula="L = -Σ_{t=1}^{T} log P(x_t | x₁, x₂, ..., x_{t-1}; θ)"
          note="Maksimalkan log-likelihood token berikutnya berdasarkan semua token sebelumnya. Ini berbeda dengan BERT yang masked (bidirektional)."
        />
        <FormulaBox
          label="Perplexity (metrik evaluasi LM)"
          formula="PPL = exp( -1/T · Σ_{t=1}^{T} log P(x_t | x_{<t}) )"
          note="Semakin rendah perplexity, semakin baik model memprediksi teks. GPT-4 memiliki PPL sangat rendah pada teks umum."
        />

        <SectionTitle icon="📊">Evolusi GPT — Scaling Laws</SectionTitle>
        <CompareTable
          headers={['Model', 'Parameter', 'Training Tokens', 'Kemampuan Kunci']}
          rows={[
            ['GPT-1 (2018)', '117 juta', '~1 miliar', 'Transfer learning NLP dasar'],
            ['GPT-2 (2019)', '1.5 miliar', '40 miliar', 'Generasi teks koheren, zero-shot dasar'],
            ['GPT-3 (2020)', '175 miliar', '300 miliar', 'Few-shot learning, in-context learning kuat'],
            ['GPT-4 (2023)', '~1.8 triliun*', '>1 triliun*', 'Multimodal, reasoning kompleks, coding'],
            ['LLaMA-3 (2024)', '8B / 70B', '15 triliun', 'Open-source, efisien, benchmark kompetitif'],
            ['Gemini Ultra', '~1 triliun*', 'N/A', 'Multimodal native, Google ecosystem'],
          ]}
        />

        <DiagramBox>{`RLHF (Reinforcement Learning from Human Feedback) — 3 Tahap:

  ┌──────────────── TAHAP 1: Supervised Fine-Tuning (SFT) ────────────────────┐
  │  Pretrained GPT  +  Dataset instruksi-respons berkualitas tinggi           │
  │  → Fine-tune dengan supervised learning biasa                              │
  │  → Model bisa mengikuti instruksi sederhana                                │
  └───────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
  ┌──────────────── TAHAP 2: Reward Model Training ────────────────────────────┐
  │  Hasilkan beberapa respons untuk prompt yang sama                          │
  │  Human annotator memberi ranking: respons A > B > C                        │
  │  Latih Reward Model (RM) untuk memprediksi skor preferensi manusia         │
  │  RM(prompt, respons) → scalar reward                                       │
  └───────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
  ┌──────────────── TAHAP 3: PPO (Proximal Policy Optimization) ───────────────┐
  │  Policy (SFT model) menghasilkan respons                                   │
  │  RM memberikan reward                                                       │
  │  PPO memaksimalkan: E[r(x,y)] - β·KL[π_RL || π_SFT]                      │
  │    • r(x,y) = reward dari RM                                                │
  │    • β·KL = penalti jika terlalu jauh dari SFT (mencegah reward hacking)  │
  │  → Model belajar menghasilkan output yang disukai manusia                  │
  └───────────────────────────────────────────────────────────────────────────┘`}</DiagramBox>

        <FormulaBox
          label="PPO Objective dalam RLHF"
          formula="J(θ) = E_{x~D, y~π_θ}[ r_φ(x,y) ] - β · KL[ π_θ(y|x) || π_ref(y|x) ]"
          note="π_θ = policy saat ini, π_ref = SFT model, r_φ = reward model. KL-penalty mencegah distribusi terlalu jauh dari reference."
        />

        <SectionTitle icon="🧠">In-Context Learning & Prompting</SectionTitle>
        <TipBox type="info">
          <strong>Emergent Abilities:</strong> Kemampuan yang muncul tiba-tiba pada skala tertentu tanpa dilatih secara eksplisit: aritmatika multi-digit, chain-of-thought reasoning, code generation. Fenomena ini hanya terjadi di atas threshold parameter tertentu (~100 miliar).
        </TipBox>

        <SectionTitle icon="💻">Text Generation dengan HuggingFace — Sampling Strategies</SectionTitle>
        <CodeBlock>{`from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id  = "meta-llama/Meta-Llama-3-8B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model     = AutoModelForCausalLM.from_pretrained(
    model_id, torch_dtype=torch.bfloat16, device_map="auto"
)

prompt = """<|system|>
Kamu adalah asisten AI yang membantu.
<|user|>
Jelaskan konsep gradient descent dalam 3 kalimat.
<|assistant|>"""

inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

# ── Greedy Decoding (deterministik, tapi repetitif) ─────────
greedy_out = model.generate(
    **inputs, max_new_tokens=200, do_sample=False
)

# ── Temperature Sampling (kontrol kreativitas) ───────────────
# temperature < 1: lebih konservatif | temperature > 1: lebih random
temp_out = model.generate(
    **inputs, max_new_tokens=200,
    do_sample=True, temperature=0.7,
)

# ── Top-k Sampling ───────────────────────────────────────────
# Hanya sampel dari k token teratas
topk_out = model.generate(
    **inputs, max_new_tokens=200,
    do_sample=True, top_k=50, temperature=0.8,
)

# ── Top-p / Nucleus Sampling ─────────────────────────────────
# Sampel dari token terkecil yang jumlah probabilitasnya ≥ p
topp_out = model.generate(
    **inputs, max_new_tokens=200,
    do_sample=True, top_p=0.92, temperature=0.9,
)

# ── Beam Search (kualitas lebih tinggi, lebih lambat) ────────
beam_out = model.generate(
    **inputs, max_new_tokens=200,
    num_beams=5, early_stopping=True, no_repeat_ngram_size=3,
)

# Decode output
for name, out in [("Greedy", greedy_out), ("Nucleus", topp_out),
                  ("Beam", beam_out)]:
    text = tokenizer.decode(out[0], skip_special_tokens=True)
    print(f"=== {name} ===")
    print(text[len(prompt):].strip())
    print()`}</CodeBlock>

        <CompareTable
          headers={['Model', 'Developer', 'Arsitektur', 'Open?', 'Keunggulan']}
          rows={[
            ['GPT-4o', 'OpenAI', 'Decoder-only (MoE?)', 'Tidak', 'API terbaik, multimodal, code'],
            ['Gemini 1.5 Pro', 'Google', 'Decoder-only', 'Tidak', 'Context window 1M token, multimodal'],
            ['Claude 3.5 Sonnet', 'Anthropic', 'Decoder-only', 'Tidak', 'Reasoning, safety, long context'],
            ['LLaMA 3.1 70B', 'Meta', 'Decoder-only', 'Ya (weights)', 'Open-source terkuat, bisa di-fine-tune'],
            ['Mistral 7B', 'Mistral AI', 'Decoder + GQA', 'Ya', 'Sangat efisien, SWA attention'],
            ['Qwen2.5 72B', 'Alibaba', 'Decoder-only', 'Ya', 'Multibahasa, coding & math kuat'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'Zero-shot', desc: 'Langsung minta model tanpa contoh. Bergantung pada pengetahuan pre-training.', example: '"Klasifikasikan: Positif/Negatif: Film ini bagus"' },
          { title: 'Few-shot', desc: 'Berikan 2-5 contoh input→output sebelum pertanyaan asli. Dramatically meningkatkan akurasi.', example: '"Positif: Bagus sekali\\nNegatif: Buruk\\n→ Mengecewakan:"' },
          { title: 'Chain-of-Thought', desc: 'Minta model "berpikir step by step". Sangat efektif untuk reasoning dan matematika.', example: '"...mari pikirkan langkah demi langkah"' },
          { title: 'RLHF', desc: 'Align model dengan preferensi manusia menggunakan reward model + PPO. ChatGPT menggunakan ini.', example: 'SFT → Reward Model → PPO' },
          { title: 'Instruction Tuning', desc: 'Fine-tune pada dataset instruksi beragam. Menghasilkan model yang lebih "nurut" perintah.', example: 'FLAN-T5, Alpaca, Vicuna' },
          { title: 'Constitutional AI', desc: 'Anthropic: latih model dengan prinsip (konstitusi) untuk critique dan revisi outputnya sendiri.', example: 'Self-critique → Revision → RLAIF' },
        ]} />
      </div>
    ),
  },

  // ── Section 4: RAG ──────────────────────────────────────────
  {
    title: '🔍 RAG — Retrieval-Augmented Generation',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          RAG menggabungkan kekuatan retrieval (mencari dokumen relevan) dengan generasi (LLM). Solusi elegan untuk dua kelemahan utama LLM: knowledge cutoff dan halusinasi faktual.
        </p>

        <RAGDiagram />

        <SectionTitle icon="❓">Mengapa RAG Diperlukan?</SectionTitle>
        <CompareTable
          headers={['Masalah LLM', 'Gejala', 'Solusi RAG']}
          rows={[
            ['Knowledge cutoff', 'Tidak tahu kejadian setelah training', 'Retriev dokumen terbaru saat query'],
            ['Halusinasi', 'Membuat fakta yang tidak benar', 'Berikan konteks faktual dari sumber terpercaya'],
            ['Spesialisasi domain', 'Kurang akurat pada domain khusus (hukum, medis)', 'Retrieve dari knowledge base domain spesifik'],
            ['Source attribution', 'Tidak bisa cite sumber', 'Retrieval memberikan dokumen sumber secara eksplisit'],
            ['Biaya fine-tuning', 'Fine-tune mahal & perlu diulang tiap update', 'Update knowledge base tanpa re-train model'],
          ]}
        />

        <DiagramBox>{`Arsitektur RAG (Retrieval-Augmented Generation):

  USER QUERY
  "Apa kebijakan terbaru perusahaan soal cuti?"
       │
       ▼
  ┌─────────────────────────────────────────────────────────┐
  │  RETRIEVER                                               │
  │                                                         │
  │  Query → Embedding Model → query_vector                 │
  │                            ↓                           │
  │  Vector DB ────────────────┘                           │
  │  (Chroma/Pinecone/FAISS)                               │
  │  cosine_similarity(query_vec, doc_vecs)                │
  │  → Top-k dokumen relevan (k=3~5)                       │
  └──────────────────────┬──────────────────────────────────┘
                         │  Dokumen relevan:
                         │  [Doc1: "Cuti tahunan 12 hari..."]
                         │  [Doc2: "Prosedur pengajuan cuti..."]
                         ▼
  ┌─────────────────────────────────────────────────────────┐
  │  AUGMENTED PROMPT                                        │
  │                                                         │
  │  Context: [Doc1] [Doc2] [Doc3]                          │
  │  Question: Apa kebijakan terbaru perusahaan soal cuti?  │
  │  Answer:                                                │
  └──────────────────────┬──────────────────────────────────┘
                         │
                         ▼
  ┌─────────────────────────────────────────────────────────┐
  │  GENERATOR (LLM)                                         │
  │  GPT-4 / Claude / LLaMA                                 │
  │  → Jawaban akurat berdasarkan dokumen yang diretrieval   │
  └─────────────────────────────────────────────────────────┘`}</DiagramBox>

        <SectionTitle icon="📐">Sparse vs Dense Retrieval</SectionTitle>
        <FormulaBox
          label="BM25 (Sparse Retrieval — Best Match 25)"
          formula="BM25(t,d) = IDF(t) × [TF(t,d)·(k₁+1)] / [TF(t,d) + k₁·(1 - b + b·|d|/avgdl)]"
          note="IDF(t) = log((N-df+0.5)/(df+0.5)+1). k₁≈1.2 (saturasi TF), b≈0.75 (normalisasi panjang dokumen). Tidak perlu GPU!"
        />
        <FormulaBox
          label="Dense Retrieval (Cosine Similarity)"
          formula="sim(q, d) = (E_q · E_d) / (||E_q|| · ||E_d||) = cos(θ)"
          note="E_q = embedding query, E_d = embedding dokumen dari model seperti sentence-transformers. Lebih semantik dari BM25."
        />
        <FormulaBox
          label="Hybrid Retrieval (kombinasi sparse + dense)"
          formula="score_hybrid = α · score_BM25 + (1-α) · score_dense"
          note="α ∈ [0,1] adalah hyperparameter. Hybrid sering lebih baik dari keduanya secara individual."
        />

        <TipBox type="tip">
          <strong>Kapan pakai BM25 vs Dense?</strong> BM25 sangat baik untuk exact keyword match (nama produk, kode). Dense retrieval lebih baik untuk pencarian semantik ("cara menghilangkan rasa sakit" menemukan dokumen tentang "pain relief"). Hybrid = terbaik dari keduanya.
        </TipBox>

        <SectionTitle icon="💻">Implementasi RAG dengan LangChain</SectionTitle>
        <CodeBlock>{`from langchain_community.document_loaders import DirectoryLoader, PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# ── 1. Load & Split Dokumen ──────────────────────────────────
loader   = DirectoryLoader("./docs/", glob="**/*.pdf",
                            loader_cls=PyPDFLoader)
documents = loader.load()

splitter  = RecursiveCharacterTextSplitter(
    chunk_size    = 512,    # karakter per chunk
    chunk_overlap = 64,     # overlap antar chunk (konteks)
    separators    = ["\n\n", "\n", ".", " ", ""],
)
chunks = splitter.split_documents(documents)
print(f"Total chunks: {len(chunks)}")

# ── 2. Buat Embeddings & Vector Store ───────────────────────
embedding_model = HuggingFaceEmbeddings(
    model_name = "sentence-transformers/all-MiniLM-L6-v2",
    model_kwargs = {"device": "cpu"},
)
vectorstore = Chroma.from_documents(
    documents   = chunks,
    embedding   = embedding_model,
    persist_directory = "./chroma_db",
)

# ── 3. Retriever dengan Re-ranking ──────────────────────────
retriever = vectorstore.as_retriever(
    search_type = "mmr",           # Maximum Marginal Relevance
    search_kwargs = {"k": 5, "fetch_k": 20},  # ambil 20, rerank ke 5
)

# ── 4. Custom Prompt Template ────────────────────────────────
template = """Gunakan konteks berikut untuk menjawab pertanyaan.
Jika tidak tahu, katakan "Saya tidak menemukan informasi tersebut."
Jangan mengarang jawaban.

Konteks:
{context}

Pertanyaan: {question}

Jawaban (dalam Bahasa Indonesia):"""

prompt = PromptTemplate(
    input_variables=["context", "question"],
    template=template,
)

# ── 5. RAG Chain ─────────────────────────────────────────────
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
rag_chain = RetrievalQA.from_chain_type(
    llm            = llm,
    chain_type     = "stuff",   # "map_reduce" untuk konteks panjang
    retriever      = retriever,
    chain_type_kwargs = {"prompt": prompt},
    return_source_documents = True,
)

# ── 6. Query ─────────────────────────────────────────────────
result = rag_chain.invoke({"query": "Apa kebijakan cuti tahunan?"})
print("Jawaban:", result["result"])
print("\nSumber:")
for doc in result["source_documents"]:
    print(f"  - {doc.metadata.get('source', 'unknown')} p.{doc.metadata.get('page', '?')}")`}</CodeBlock>

        <CompareTable
          headers={['Aspek', 'RAG', 'Fine-tuning']}
          rows={[
            ['Biaya update knowledge', 'Murah — update vector DB', 'Mahal — retrain/re-finetune'],
            ['Transparansi sumber', 'Tinggi — bisa cite dokumen', 'Rendah — knowledge terimplisit'],
            ['Kemampuan reasoning', 'Bergantung base LLM', 'Bisa diimprove dengan data task'],
            ['Data yang dibutuhkan', 'Hanya dokumen (tidak berlabel)', 'Pasangan instruksi-respons berlabel'],
            ['Latensi inference', 'Lebih tinggi (retrieval + LLM)', 'Hanya LLM forward pass'],
            ['Kapan pakai', 'Knowledge dinamis, banyak dokumen', 'Style/behavior/skill tertentu'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'Chunking Strategy', desc: 'Bagaimana memotong dokumen: fixed-size, recursive, semantic, atau per-paragraf. Chunk size mempengaruhi kualitas retrieval.', example: 'chunk_size=512, overlap=64' },
          { title: 'Vector Database', desc: 'Database khusus untuk menyimpan dan mencari vektor embedding. Mendukung approximate nearest neighbor search.', example: 'Chroma, Pinecone, Weaviate, FAISS' },
          { title: 'Re-ranking', desc: 'Cross-encoder memberikan skor akurasi lebih tinggi setelah retrieval awal. Lambat tapi akurat untuk top-k kecil.', example: 'cross-encoder/ms-marco-MiniLM-L-6-v2' },
          { title: 'HyDE', desc: 'Hypothetical Document Embeddings: generate jawaban hipotetis dulu, lalu embed untuk retrieval. Meningkatkan recall.', example: 'Query → LLM → Hipotesis → Embed → Retrieve' },
          { title: 'MMR', desc: 'Maximum Marginal Relevance: pilih dokumen relevan sekaligus diverse. Menghindari retrieval dokumen yang redundan.', example: 'search_type="mmr"' },
          { title: 'Contextual Compression', desc: 'Kompres/filter bagian dokumen yang tidak relevan sebelum masuk ke LLM. Mengurangi token dan noise.', example: 'ContextualCompressionRetriever' },
        ]} />
      </div>
    ),
  },

  // ── Section 5: Prompt Engineering & LoRA ────────────────────
  {
    title: '📝 Prompt Engineering & LLM Optimization',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          Prompt engineering adalah seni dan ilmu merancang input untuk memaksimalkan kualitas output LLM — tanpa mengubah parameter model.
          LoRA dan QLoRA memungkinkan fine-tuning efisien dengan resource terbatas.
        </p>

        <SectionTitle icon="📐">Anatomi Prompt yang Baik</SectionTitle>
        <DiagramBox>{`Struktur Prompt Optimal:

  ┌─────────────────────── SYSTEM ──────────────────────────┐
  │ Kamu adalah asisten analisis keuangan senior dengan     │
  │ 10 tahun pengalaman. Jawab dengan presisi dan data.     │
  └─────────────────────────────────────────────────────────┘

  ┌─────────────────────── CONTEXT ─────────────────────────┐
  │ Data laporan keuangan Q3 2024:                          │
  │ Revenue: Rp 2.3T (+15% YoY)                            │
  │ Operating margin: 18.5%                                 │
  │ Net income: Rp 425M                                     │
  └─────────────────────────────────────────────────────────┘

  ┌─────────────────────── TASK ────────────────────────────┐
  │ Analisis kesehatan finansial perusahaan berdasarkan     │
  │ data di atas. Identifikasi 3 kekuatan utama dan         │
  │ 2 area yang perlu perhatian.                            │
  └─────────────────────────────────────────────────────────┘

  ┌─────────────────────── FORMAT ──────────────────────────┐
  │ Format output:                                          │
  │ ## Ringkasan Eksekutif (2 kalimat)                     │
  │ ## Kekuatan (3 poin dengan bullet)                     │
  │ ## Area Perhatian (2 poin dengan rekomendasi)          │
  │ ## Skor Kesehatan Finansial: X/10                       │
  └─────────────────────────────────────────────────────────┘`}</DiagramBox>

        <SectionTitle icon="🔗">Chain-of-Thought & Teknik Lanjutan</SectionTitle>
        <CompareTable
          headers={['Teknik', 'Cara Kerja', 'Terbaik Untuk', 'Contoh Trigger']}
          rows={[
            ['Zero-shot CoT', 'Tambah "Pikirkan langkah demi langkah"', 'Reasoning, math', '"...mari kita pikirkan step by step"'],
            ['Few-shot CoT', 'Berikan contoh dengan reasoning', 'Reasoning dengan pola tetap', 'Q: ... Reasoning: ... A: ...'],
            ['Tree of Thought', 'Eksplorasi beberapa jalur reasoning sekaligus', 'Problem kompleks, game theory', 'LLM sebagai "thought evaluator"'],
            ['ReAct', 'Reason → Act (panggil tool) → Observe → repeat', 'Agent, information seeking', '"Thought: ... Action: Search[...]"'],
            ['Self-consistency', 'Sample beberapa reasoning paths, vote majority', 'Math, faktual QA', 'Jalankan N kali, ambil jawaban terbanyak'],
            ['Structured output', 'Paksa output JSON/XML via instruksi/mode', 'Parsing, downstream tasks', '"Jawab dalam format JSON: {}"'],
          ]}
        />

        <SectionTitle icon="🔧">LoRA — Parameter-Efficient Fine-Tuning</SectionTitle>
        <FormulaBox
          label="LoRA: Low-Rank Adaptation"
          formula="W_new = W₀ + ΔW = W₀ + B·A   di mana B ∈ ℝ^{d×r}, A ∈ ℝ^{r×k}, r ≪ min(d,k)"
          note="W₀ di-freeze. Hanya A dan B yang dilatih. r=rank (biasanya 4-64). Jumlah parameter: r·(d+k) vs d·k untuk full fine-tuning."
        />
        <FormulaBox
          label="Penghematan Parameter LoRA"
          formula="Savings = 1 - 2r/(d+k)   |   Contoh: d=k=4096, r=16 → Savings = 99.6%"
          note="Untuk LLaMA-7B: full FT ~7 miliar param, LoRA r=16 hanya ~4 juta param yang dilatih!"
        />
        <FormulaBox
          label="QLoRA: 4-bit Quantization + LoRA"
          formula="W_q = quantize(W₀, NF4)  →  dequantize untuk forward  +  LoRA adapters float16"
          note="NF4 (NormalFloat4): quantization yang optimal untuk distribusi normal bobot model. Memungkinkan fine-tune 70B model di 1× A100 80GB."
        />

        <TipBox type="warning">
          <strong>LoRA Scaling Factor (α):</strong> Parameter penting yang sering diabaikan. Output LoRA diskala dengan α/r sebelum dijumlahkan ke W₀. Default α=r memberikan skala=1. Banyak praktisi set α=2r (skala=2) untuk learning rate efektif lebih tinggi pada adapter.
        </TipBox>

        <SectionTitle icon="💻">Fine-tuning dengan LoRA menggunakan PEFT</SectionTitle>
        <CodeBlock>{`from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments
from peft import LoraConfig, get_peft_model, TaskType, prepare_model_for_kbit_training
from trl import SFTTrainer
from datasets import load_dataset
import torch
from transformers import BitsAndBytesConfig

# ── 1. Konfigurasi 4-bit Quantization (QLoRA) ───────────────
bnb_config = BitsAndBytesConfig(
    load_in_4bit              = True,
    bnb_4bit_use_double_quant = True,   # double quantization
    bnb_4bit_quant_type       = "nf4",  # NormalFloat4
    bnb_4bit_compute_dtype    = torch.bfloat16,
)

# ── 2. Load Model dalam 4-bit ────────────────────────────────
model_id = "meta-llama/Meta-Llama-3-8B"
model    = AutoModelForCausalLM.from_pretrained(
    model_id,
    quantization_config = bnb_config,
    device_map          = "auto",
    trust_remote_code   = True,
)
tokenizer = AutoTokenizer.from_pretrained(model_id)
tokenizer.pad_token = tokenizer.eos_token

# Siapkan model untuk k-bit training (gradient checkpointing, dll.)
model = prepare_model_for_kbit_training(model)

# ── 3. LoRA Config ───────────────────────────────────────────
lora_config = LoraConfig(
    r              = 16,           # rank — lebih besar = lebih ekspresif
    lora_alpha     = 32,           # α (skala = α/r = 2)
    target_modules = [             # lapisan yang di-LoRA
        "q_proj", "k_proj", "v_proj", "o_proj",
        "gate_proj", "up_proj", "down_proj",
    ],
    lora_dropout   = 0.05,
    bias           = "none",
    task_type      = TaskType.CAUSAL_LM,
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 4,194,304 || all params: 8,034,693,120
#         trainable%: 0.052%

# ── 4. Dataset ──────────────────────────────────────────────
dataset = load_dataset("tatsu-lab/alpaca", split="train[:5000]")

def format_instruction(example):
    if example["input"]:
        return f"### Instruksi:\n{example['instruction']}\n\n### Input:\n{example['input']}\n\n### Respons:\n{example['output']}"
    return f"### Instruksi:\n{example['instruction']}\n\n### Respons:\n{example['output']}"

# ── 5. Training ──────────────────────────────────────────────
trainer = SFTTrainer(
    model            = model,
    tokenizer        = tokenizer,
    train_dataset    = dataset,
    formatting_func  = format_instruction,
    max_seq_length   = 1024,
    args = TrainingArguments(
        output_dir              = "./llama3-lora-alpaca",
        num_train_epochs        = 3,
        per_device_train_batch_size = 4,
        gradient_accumulation_steps = 4,   # effective batch = 16
        learning_rate           = 2e-4,
        fp16                    = False,
        bf16                    = True,
        logging_steps           = 50,
        save_steps              = 200,
        warmup_ratio            = 0.05,
    ),
)
trainer.train()

# ── 6. Simpan & Merge ────────────────────────────────────────
trainer.save_model("./llama3-lora-final")
# Merge LoRA ke base model untuk deployment:
merged = model.merge_and_unload()
merged.save_pretrained("./llama3-merged")`}</CodeBlock>

        <CompareTable
          headers={['Metode PEFT', 'Pendekatan', 'Parameter', 'Performa', 'Use Case']}
          rows={[
            ['Full Fine-tuning', 'Update semua parameter', '100%', 'Terbaik', 'Cukup GPU & data'],
            ['LoRA', 'Low-rank matrices di attention', '0.1-1%', 'Sangat baik', 'Standard fine-tuning'],
            ['QLoRA', 'LoRA + 4-bit quantization', '0.05%', 'Sangat baik', 'GPU terbatas (<24GB)'],
            ['Prefix Tuning', 'Tambah prefix trainable', '0.1%', 'Baik', 'NLG tasks'],
            ['Prompt Tuning', 'Soft prompts trainable', '<0.01%', 'Cukup', 'Sangat sedikit GPU'],
            ['Adapter', 'Insert bottleneck layers', '0.5-3%', 'Baik', 'Multi-task learning'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'LoRA Rank (r)', desc: 'Hyperparameter utama LoRA. r=4 cukup untuk style transfer, r=64 untuk task kompleks. Lebih besar = lebih ekspresif = lebih lambat.', example: 'r=16 adalah sweet spot umum' },
          { title: 'Target Modules', desc: 'Layer mana yang ditambah LoRA adapter. Attention (q,k,v) paling penting. FFN (gate, up, down) membantu untuk task faktual.', example: 'q_proj, v_proj minimal' },
          { title: 'NF4 Quantization', desc: 'Normal Float 4-bit: distribusi quantization yang optimal untuk bobot model yang terdistribusi normal. Lebih baik dari INT4 biasa.', example: 'bnb_4bit_quant_type="nf4"' },
          { title: 'Gradient Checkpointing', desc: 'Trade-off: hemat memory dengan menghitung ulang aktivasi saat backward pass. Lambat 20-30% tapi menghemat memory 4-5x.', example: 'gradient_checkpointing=True' },
          { title: 'Instruction Tuning', desc: 'Fine-tune pada data instruksi (instruksi → respons). Mengubah pretrained model jadi model yang "nurut" perintah.', example: 'Alpaca, ShareGPT, FLAN' },
          { title: 'Merge & Unload', desc: 'Setelah training, gabungkan LoRA weights ke base model: W = W₀ + BA. Tidak ada overhead inference.', example: 'model.merge_and_unload()' },
        ]} />
      </div>
    ),
  },
]

// ─────────────────────────────────────────────────────────────
//  DATA SCIENCE ADVANCED SECTIONS (5 baru)
// ─────────────────────────────────────────────────────────────

export const datascienceSectionsB = [
  // ── Section 1: Time Series ──────────────────────────────────
  {
    title: '📈 Time Series Analysis & Forecasting',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          Time series adalah data yang diindeks berdasarkan waktu. Tantangan utamanya adalah memahami struktur temporal (tren, musiman) dan membuat prediksi tanpa data leakage.
        </p>

        <SectionTitle icon="📊">Komponen Time Series</SectionTitle>
        <DiagramBox>{`Dekomposisi Time Series (Additive):

  Y(t) = Trend(t) + Seasonal(t) + Cyclical(t) + Irregular(t)

  Contoh: Penjualan Minuman Es Setiap Bulan (2020-2024)

  Y(t) ↑
  2000 │          ╭─╮  ╭─╮  ╭─╮  ╭─╮  ← Seasonal (musim panas naik)
  1500 │       ╭──╯  ╰─╯  ╰─╯  ╰─╯
  1000 │    ╭──╯                           ← Trend (naik tiap tahun)
   500 │───╯
       └──────────────────────────► t

  Dekomposisi:
  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
  │    Trend     │ + │  Seasonal    │ + │  Cyclical    │ + │  Irregular   │
  │ Kenaikan     │   │ Pola bulanan │   │ Siklus bisnis│   │ Noise acak   │
  │ jangka panjang│  │ /tahunan     │   │ (multi-tahun)│   │ (residu)     │
  └──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘

  Multiplicative: Y(t) = T(t) × S(t) × C(t) × I(t)  — pakai saat seasonal ∝ level`}</DiagramBox>

        <SectionTitle icon="📏">Stasioneritas & Uji Statistik</SectionTitle>
        <FormulaBox
          label="Augmented Dickey-Fuller (ADF) Test"
          formula="ΔY_t = α + βt + γY_{t-1} + Σ_{i=1}^{p} δᵢΔY_{t-i} + ε_t"
          note="H₀: γ=0 (unit root ada, series non-stasioner). H₁: γ<0 (stasioner). Tolak H₀ jika p-value < 0.05."
        />
        <FormulaBox
          label="Differencing untuk Stasioneritas"
          formula="ΔY_t = Y_t - Y_{t-1}  (orde 1)  |  Δ²Y_t = ΔY_t - ΔY_{t-1}  (orde 2)"
          note="ARIMA(p,d,q): d = jumlah differencing yang diperlukan. Seasonal differencing: Δ_s Y_t = Y_t - Y_{t-s}."
        />
        <FormulaBox
          label="ARIMA(p,d,q) Model"
          formula="ΔᵈY_t = c + Σ_{i=1}^{p} φᵢΔᵈY_{t-i} + ε_t + Σ_{j=1}^{q} θⱼε_{t-j}"
          note="AR(p): autoregressive p lag. I(d): integrated (differencing). MA(q): moving average q lag. Identifikasi p,q dari ACF/PACF plot."
        />

        <TipBox type="warning">
          <strong>Data Leakage dalam Time Series CV:</strong> JANGAN gunakan KFold biasa! Ini mencampur masa depan ke data training. Selalu gunakan TimeSeriesSplit (expanding window) atau sliding window CV agar tidak ada informasi masa depan yang bocor ke training set.
        </TipBox>

        <SectionTitle icon="📉">Metrik Evaluasi Forecast</SectionTitle>
        <CompareTable
          headers={['Metrik', 'Formula', 'Kelebihan', 'Kekurangan']}
          rows={[
            ['MAE', 'mean(|Yᵢ - Ŷᵢ|)', 'Interpretable, robust outlier', 'Tidak scale-independent'],
            ['RMSE', '√mean((Yᵢ-Ŷᵢ)²)', 'Penalti kesalahan besar', 'Sensitif outlier'],
            ['MAPE', 'mean(|Yᵢ-Ŷᵢ|/|Yᵢ|)×100%', 'Persentase, mudah dijelaskan', 'Explode saat Yᵢ≈0'],
            ['SMAPE', '2·mean(|Yᵢ-Ŷᵢ|/(|Yᵢ|+|Ŷᵢ|))×100%', 'Symmetric, bounded [0,200%]', 'Interpretasi berbeda arah'],
            ['MASE', 'MAE / MAE_naïve', 'Scale-free, <1 = lebih baik dari naïve', 'Membutuhkan baseline'],
          ]}
        />

        <SectionTitle icon="💻">ARIMA + LSTM untuk Time Series (Python)</SectionTitle>
        <CodeBlock>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.stattools import adfuller
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import mean_absolute_error
from sklearn.preprocessing import MinMaxScaler
import warnings; warnings.filterwarnings('ignore')

# ── 1. Load & Eksplorasi Data ────────────────────────────────
df = pd.read_csv("sales.csv", parse_dates=["date"], index_col="date")
df = df.sort_index()
series = df["sales"]

# ── 2. Uji Stasioneritas (ADF) ───────────────────────────────
def adf_test(series, name="Series"):
    result = adfuller(series.dropna())
    print(f"ADF Test: {name}")
    print(f"  ADF Statistic : {result[0]:.4f}")
    print(f"  p-value       : {result[1]:.4f}")
    print(f"  Stasioner     : {'Ya' if result[1] < 0.05 else 'Tidak — perlu differencing'}")

adf_test(series, "Sales asli")
adf_test(series.diff().dropna(), "Sales (diff-1)")

# ── 3. ARIMA Model ───────────────────────────────────────────
# Identifikasi p,q dari ACF/PACF
# ACF cut off lag q → MA(q) | PACF cut off lag p → AR(p)
train = series[:-30]
test  = series[-30:]

# Auto-ARIMA (pakai pmdarima jika tersedia)
model = ARIMA(train, order=(2, 1, 2))  # p=2, d=1, q=2
fitted = model.fit()
print(fitted.summary())

# Forecast
forecast = fitted.forecast(steps=30)
mae = mean_absolute_error(test, forecast)
print(f"\nARIMA MAE: {mae:.2f}")

# ── 4. TimeSeriesSplit CV ────────────────────────────────────
tscv = TimeSeriesSplit(n_splits=5)
cv_maes = []
for fold, (train_idx, val_idx) in enumerate(tscv.split(series)):
    tr, va = series.iloc[train_idx], series.iloc[val_idx]
    m = ARIMA(tr, order=(2, 1, 2)).fit()
    pred = m.forecast(steps=len(va))
    cv_maes.append(mean_absolute_error(va, pred))
    print(f"  Fold {fold+1}: MAE = {cv_maes[-1]:.2f}")
print(f"  Mean CV MAE: {np.mean(cv_maes):.2f}")

# ── 5. LSTM untuk Time Series ────────────────────────────────
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

def create_sequences(data, lookback=30):
    X, y = [], []
    for i in range(len(data) - lookback):
        X.append(data[i:i+lookback])
        y.append(data[i+lookback])
    return np.array(X), np.array(y)

scaler = MinMaxScaler()
scaled = scaler.fit_transform(series.values.reshape(-1, 1)).flatten()
X, y   = create_sequences(scaled, lookback=30)
X      = X.reshape(-1, 30, 1)   # (samples, timesteps, features)

lstm_model = Sequential([
    LSTM(64, return_sequences=True, input_shape=(30, 1)),
    Dropout(0.2),
    LSTM(32),
    Dropout(0.2),
    Dense(1),
])
lstm_model.compile(optimizer="adam", loss="mse")
lstm_model.fit(X[:-30], y[:-30], epochs=50, batch_size=32,
               validation_split=0.1, verbose=0)
print("LSTM training selesai.")`}</CodeBlock>

        <ConceptGrid items={[
          { title: 'ACF (Autocorrelation)', desc: 'Korelasi series dengan lag dirinya sendiri. Lag q pertama yang tidak signifikan → order MA(q) untuk ARIMA.', example: 'acf[1]=0.8, acf[2]=0.3, acf[3]≈0 → q=2' },
          { title: 'PACF (Partial ACF)', desc: 'Korelasi setelah menghilangkan efek lag antara. Lag p pertama tidak signifikan → order AR(p).', example: 'pacf[1]=0.7, pacf[2]≈0 → p=1' },
          { title: 'SARIMA', desc: 'ARIMA + seasonal component: SARIMA(p,d,q)(P,D,Q)s. s=musim (12=bulanan, 4=kuartalan).', example: 'SARIMA(1,1,1)(1,1,0)12' },
          { title: 'Prophet', desc: 'Facebook/Meta library untuk forecasting dengan komponen tren+seasonal+holiday. Intuitif, robust outlier.', example: 'Prophet().fit(df).predict(future)' },
          { title: 'Lookback Window', desc: 'Berapa timestep terakhir digunakan sebagai input LSTM. Terlalu kecil = kurang konteks, terlalu besar = noise.', example: 'lookback=30 hari → predict hari ke-31' },
          { title: 'TimeSeriesSplit', desc: 'CV yang aman untuk time series: training selalu sebelum validasi. Mencegah data leakage temporal.', example: 'TimeSeriesSplit(n_splits=5)' },
        ]} />
      </div>
    ),
  },

  // ── Section 2: A/B Testing & Causal Inference ───────────────
  {
    title: '🧪 A/B Testing & Causal Inference',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          A/B testing adalah metode eksperimental untuk mengukur dampak kausal perubahan — bukan hanya korelasi. Tanpa eksperimen yang benar, kita tidak bisa membedakan kausalitas dari kebetulan.
        </p>

        <SectionTitle icon="📐">Desain Eksperimen A/B Test</SectionTitle>
        <DiagramBox>{`Alur A/B Testing yang Benar:

  ┌─────────────────────────────────────────────────────────┐
  │  1. FORMULASI HIPOTESIS                                  │
  │  H₀: μ_kontrol = μ_treatment  (tidak ada efek)         │
  │  H₁: μ_kontrol ≠ μ_treatment  (ada efek — two-tailed)  │
  │  α = 0.05 (tingkat signifikansi)                        │
  │  β = 0.20 (power = 1-β = 80%)                          │
  └─────────────────────────┬───────────────────────────────┘
                            │
  ┌─────────────────────────▼───────────────────────────────┐
  │  2. HITUNG SAMPLE SIZE (sebelum eksperimen!)            │
  │  n = 2·(z_{α/2} + z_β)² · σ² / δ²                    │
  │  δ = minimum detectable effect (MDE)                    │
  └─────────────────────────┬───────────────────────────────┘
                            │
  ┌─────────────────────────▼───────────────────────────────┐
  │  3. RANDOMISASI & JALANKAN EKSPERIMEN                   │
  │  Random assignment user → Kontrol (A) atau Treatment (B)│
  │  Tunggu sampai n tercapai — JANGAN stop early!          │
  └─────────────────────────┬───────────────────────────────┘
                            │
  ┌─────────────────────────▼───────────────────────────────┐
  │  4. ANALISIS STATISTIK                                  │
  │  Hitung p-value → Bandingkan dengan α                   │
  │  Hitung confidence interval untuk effect size           │
  └─────────────────────────────────────────────────────────┘`}</DiagramBox>

        <FormulaBox
          label="Sample Size Formula (Two-sample, Two-tailed)"
          formula="n = 2 · (z_{α/2} + z_β)² · σ² / δ²   per group"
          note="z_{α/2}=1.96 (α=0.05), z_β=0.84 (power=80%). δ=effect size minimum yang ingin dideteksi. σ=standar deviasi."
        />
        <FormulaBox
          label="Z-test untuk Proporsi (konversi rate)"
          formula="z = (p̂_B - p̂_A) / √(p̂(1-p̂)·(1/n_A + 1/n_B))   di mana p̂ = (x_A+x_B)/(n_A+n_B)"
          note="Gunakan untuk metrik biner (klik/tidak, beli/tidak). Tolak H₀ jika |z| > z_{α/2} = 1.96."
        />
        <FormulaBox
          label="Bonferroni Correction (Multiple Testing)"
          formula="α_adjusted = α / m   di mana m = jumlah test simultan"
          note="Jika test 5 metrik sekaligus dengan α=0.05 → α_adj = 0.01. Mencegah false positive akibat multiple comparisons."
        />

        <TipBox type="warning">
          <strong>Bahaya Peeking:</strong> Jangan lihat p-value sebelum sample size tercapai dan ambil keputusan! Ini disebut "optional stopping" dan menggelembungkan False Positive Rate hingga 30%+. Tetapkan sample size sebelum eksperimen, jalankan penuh, baru analisis.
        </TipBox>

        <SectionTitle icon="🔬">Causal Inference Beyond A/B Test</SectionTitle>
        <CompareTable
          headers={['Metode', 'Konteks', 'Asumsi Kunci', 'Contoh Aplikasi']}
          rows={[
            ['A/B Test (RCT)', 'Bisa randomisasi', 'Random assignment valid', 'UI test, pricing test'],
            ['Diff-in-Diff (DiD)', 'Quasi-experiment, panel data', 'Parallel trends pre-treatment', 'Kebijakan publik, rollout bertahap'],
            ['Propensity Score Matching', 'Observational, confounding', 'No unmeasured confounders', 'Efek program non-random'],
            ['Instrumental Variable', 'Endogeneity ada', 'Instrumen relevan & exogenous', 'Efek pendidikan pada income'],
            ['Regression Discontinuity', 'Threshold/cutoff ada', 'Continuity di titik cutoff', 'Efek beasiswa nilai ≥ 3.5'],
            ['Synthetic Control', '1 unit treatment, banyak kontrol', 'Kontrol representatif', 'Dampak kebijakan satu kota'],
          ]}
        />

        <SectionTitle icon="💻">A/B Test Analysis dengan Python</SectionTitle>
        <CodeBlock>{`import numpy as np
import pandas as pd
from scipy import stats
from statsmodels.stats.power import TTestIndPower, NormalIndPower
from statsmodels.stats.proportion import proportions_ztest, proportion_confint
import matplotlib.pyplot as plt

# ── 1. Hitung Sample Size ────────────────────────────────────
# Skenario: CR saat ini 5%, ingin deteksi kenaikan 1% (ke 6%)
p_baseline = 0.05    # conversion rate baseline
p_target   = 0.06    # target minimal detectable effect
alpha      = 0.05
power      = 0.80

# Menggunakan NormalIndPower untuk proporsi
effect_size = (p_target - p_baseline) / np.sqrt(
    (p_baseline*(1-p_baseline) + p_target*(1-p_target)) / 2
)
analysis   = NormalIndPower()
n_required = analysis.solve_power(
    effect_size=effect_size, alpha=alpha, power=power, alternative='two-sided'
)
print(f"Sample size per group: {int(np.ceil(n_required))}")

# ── 2. Simulasi Hasil Eksperimen ─────────────────────────────
np.random.seed(42)
n_per_group = int(np.ceil(n_required))
n_A = n_per_group
n_B = n_per_group

# Konversi (beli=1, tidak=0)
conversions_A = np.random.binomial(n_A, 0.05)  # CR=5%
conversions_B = np.random.binomial(n_B, 0.062) # CR=6.2% (sedikit di atas MDE)

print(f"\nGrup A: {conversions_A}/{n_A} = {conversions_A/n_A:.3%}")
print(f"Grup B: {conversions_B}/{n_B} = {conversions_B/n_B:.3%}")

# ── 3. Z-test untuk Proporsi ─────────────────────────────────
count    = np.array([conversions_B, conversions_A])
nobs     = np.array([n_B, n_A])
z_stat, p_value = proportions_ztest(count, nobs, alternative='two-sided')

print(f"\nZ-statistic : {z_stat:.4f}")
print(f"P-value     : {p_value:.4f}")
print(f"Signifikan  : {'Ya ✓' if p_value < alpha else 'Tidak ✗'}")

# ── 4. Confidence Interval untuk Effect ──────────────────────
ci_A = proportion_confint(conversions_A, n_A, alpha=0.05, method='wilson')
ci_B = proportion_confint(conversions_B, n_B, alpha=0.05, method='wilson')
uplift = (conversions_B/n_B - conversions_A/n_A) / (conversions_A/n_A) * 100

print(f"\n95% CI Grup A: [{ci_A[0]:.3%}, {ci_A[1]:.3%}]")
print(f"95% CI Grup B: [{ci_B[0]:.3%}, {ci_B[1]:.3%}]")
print(f"Uplift       : {uplift:.1f}%")

# ── 5. Bonferroni Correction ─────────────────────────────────
metrics = ["CTR", "Conversion Rate", "Revenue per User",
           "Bounce Rate", "Session Duration"]
alpha_bonferroni = alpha / len(metrics)
print(f"\nBonferroni α (m={len(metrics)}): {alpha_bonferroni:.4f}")`}</CodeBlock>

        <ConceptGrid items={[
          { title: 'Type I Error (α)', desc: 'Menolak H₀ padahal benar (false positive). "Ada efek padahal tidak ada." Dikendalikan dengan significance level.', example: 'α=0.05 → 5% chance false positive' },
          { title: 'Type II Error (β)', desc: 'Gagal tolak H₀ padahal salah (false negative). "Tidak ada efek padahal ada." Power = 1-β.', example: 'β=0.2 → power 80%' },
          { title: 'MDE (Minimum Detectable Effect)', desc: 'Efek terkecil yang ingin bisa dideteksi. Semakin kecil MDE, semakin besar sample size yang dibutuhkan.', example: 'MDE=1% CR uplift → n besar' },
          { title: 'Novelty Effect', desc: 'User bereaksi berbeda hanya karena melihat sesuatu yang baru. Bisa inflate hasil. Pertimbangkan run lebih lama.', example: 'CTR naik minggu 1, turun lagi minggu 3' },
          { title: 'Network Effects', desc: 'Contamination: treatment mempengaruhi kontrol melalui interaksi sosial. Perlu cluster randomization.', example: 'Rekomendasi sosial media memengaruhi teman' },
          { title: 'Parallel Trends (DiD)', desc: 'Asumsi kritis untuk Difference-in-Differences: tanpa treatment, treatment dan kontrol punya tren paralel.', example: 'Plot pre-period untuk validasi' },
        ]} />
      </div>
    ),
  },

  // ── Section 3: Feature Engineering Advanced ─────────────────
  {
    title: '🏗️ Feature Engineering Advanced',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          "Fitur yang baik mengalahkan model yang baik." Feature engineering adalah proses mentransformasi data mentah menjadi representasi yang lebih informatif bagi model ML.
          Teknik yang tepat bisa meningkatkan performa model secara dramatis.
        </p>

        <SectionTitle icon="🔢">Numerical Feature Transformations</SectionTitle>
        <DiagramBox>{`Kapan Menggunakan Transformasi Numerik:

  DISTRIBUSI MIRING (Skewed):
  ┌──────────────────────────────────────────────────────┐
  │  Log Transform:  x' = log(x + 1)                    │
  │  Gunakan bila: right-skewed (income, harga rumah)    │
  │                                                      │
  │  Box-Cox:  x' = (x^λ - 1)/λ  (λ≠0) atau log(x)    │
  │  Otomatis cari λ optimal untuk normalitas            │
  │                                                      │
  │  Yeo-Johnson: Seperti Box-Cox tapi support x < 0    │
  └──────────────────────────────────────────────────────┘

  OUTLIER HANDLING:
  ┌──────────────────────────────────────────────────────┐
  │  Winsorizing: clip nilai di percentile ke-5 & ke-95  │
  │  Binning: bagi numerik menjadi kategori ordinal      │
  │           [0-25k, 25-50k, 50-100k, 100k+]           │
  └──────────────────────────────────────────────────────┘

  POLYNOMIAL & INTERACTION:
  ┌──────────────────────────────────────────────────────┐
  │  x₁, x₂  →  x₁², x₂², x₁·x₂                       │
  │  Berguna saat hubungan non-linear atau ada interaksi │
  └──────────────────────────────────────────────────────┘`}</DiagramBox>

        <FormulaBox
          label="Target Encoding (untuk fitur kategorikal high-cardinality)"
          formula="TE(cat) = (count(y=1 | x=cat) + α · global_mean) / (count(x=cat) + α)"
          note="α = smoothing parameter (biasanya 10-20). Tanpa smoothing: overfitting untuk kategori dengan sedikit sampel. Selalu gunakan CV untuk menghindari leakage!"
        />
        <FormulaBox
          label="Weight of Evidence (WoE) — Credit Risk"
          formula="WoE(bin) = ln( P(y=1|bin) / P(y=0|bin) ) = ln( (Events_bin/Total_Events) / (Non-Events_bin/Total_Non-Events) )"
          note="Selalu dipakai bersama IV (Information Value). IV > 0.3 berarti fitur sangat prediktif."
        />
        <FormulaBox
          label="Cyclical Encoding untuk Fitur Waktu"
          formula="month_sin = sin(2π·month/12)  |  month_cos = cos(2π·month/12)"
          note="Desember (12) dan Januari (1) secara numerik jauh, tapi secara siklus bertetangga. Sin+cos menjaga kedekatan ini."
        />

        <TipBox type="tip">
          <strong>Target Encoding + Cross-Validation:</strong> Selalu encode target di dalam loop CV! Gunakan nilai rata-rata fold training untuk encode fold validasi. Jangan pernah encode menggunakan seluruh dataset — ini data leakage yang subtle dan berbahaya.
        </TipBox>

        <SectionTitle icon="💻">Full Feature Engineering Pipeline (pandas + sklearn)</SectionTitle>
        <CodeBlock>{`import pandas as pd
import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import (
    StandardScaler, MinMaxScaler, PowerTransformer,
    OneHotEncoder, OrdinalEncoder
)
from sklearn.impute import SimpleImputer, KNNImputer
from category_encoders import TargetEncoder, WOEEncoder
from sklearn.model_selection import cross_val_score, StratifiedKFold
import xgboost as xgb

# ── Contoh Dataset ───────────────────────────────────────────
# Fitur: age, income, job_title (high cardinality), city, month_joined
df = pd.read_csv("credit_data.csv")
X, y = df.drop("default", axis=1), df["default"]

# ── 1. Cyclical Encoding untuk fitur waktu ───────────────────
df["month"]       = pd.to_datetime(df["join_date"]).dt.month
df["month_sin"]   = np.sin(2 * np.pi * df["month"] / 12)
df["month_cos"]   = np.cos(2 * np.pi * df["month"] / 12)
df["day_of_week"] = pd.to_datetime(df["join_date"]).dt.dayofweek
df["dow_sin"]     = np.sin(2 * np.pi * df["day_of_week"] / 7)
df["dow_cos"]     = np.cos(2 * np.pi * df["day_of_week"] / 7)

# ── 2. Lag features untuk agregasi historis ──────────────────
df = df.sort_values(["customer_id", "date"])
df["prev_balance_1m"] = df.groupby("customer_id")["balance"].shift(1)
df["prev_balance_3m"] = df.groupby("customer_id")["balance"].shift(3)
df["balance_change"]  = df["balance"] - df["prev_balance_1m"]
df["rolling_mean_3m"] = df.groupby("customer_id")["balance"]\
                          .transform(lambda x: x.rolling(3).mean())

# ── 3. Interaction features ──────────────────────────────────
df["age_income_interaction"] = df["age"] * np.log1p(df["income"])
df["debt_to_income"]         = df["debt"] / (df["income"] + 1)

# ── 4. ColumnTransformer Pipeline ────────────────────────────
num_features = ["age", "income", "balance", "debt_to_income",
                "age_income_interaction", "month_sin", "month_cos"]
cat_low      = ["city", "gender", "education"]        # low cardinality
cat_high     = ["job_title", "employer_name"]         # high cardinality

num_pipeline = Pipeline([
    ("imputer", KNNImputer(n_neighbors=5)),
    ("scaler",  PowerTransformer(method="yeo-johnson")),  # normalkan distribusi
])
cat_low_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("encoder", OneHotEncoder(handle_unknown="ignore", sparse_output=False)),
])
cat_high_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("encoder", TargetEncoder(smoothing=10)),   # target encoding
])

preprocessor = ColumnTransformer([
    ("num",      num_pipeline,      num_features),
    ("cat_low",  cat_low_pipeline,  cat_low),
    ("cat_high", cat_high_pipeline, cat_high),
])

# ── 5. Full Pipeline dengan Model ────────────────────────────
full_pipeline = Pipeline([
    ("preprocessor", preprocessor),
    ("model",        xgb.XGBClassifier(n_estimators=300, max_depth=6,
                                        eval_metric="auc", random_state=42)),
])

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(full_pipeline, X, y, cv=cv, scoring="roc_auc")
print(f"CV AUC: {scores.mean():.4f} ± {scores.std():.4f}")`}</CodeBlock>

        <CompareTable
          headers={['Tipe Fitur', 'Teknik', 'Library', 'Catatan Penting']}
          rows={[
            ['Numerik miring', 'Log, Box-Cox, Yeo-Johnson', 'sklearn PowerTransformer', 'Cek distribusi dulu dengan histogram'],
            ['Kategorik kardinalitas rendah', 'OneHotEncoding', 'sklearn OHE', 'Hindari dummy variable trap'],
            ['Kategorik kardinalitas tinggi', 'Target Encoding', 'category_encoders', 'Selalu dalam loop CV!'],
            ['Datetime', 'Sin/Cos cyclical, lag, rolling', 'pandas + numpy', 'Perhatikan timezone dan holidays'],
            ['Teks pendek', 'TF-IDF, Hash', 'sklearn TfidfVectorizer', 'max_features=5000-50000'],
            ['Teks semantik', 'Sentence embedding avg', 'sentence-transformers', 'mean(BERT embeddings) per doc'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'Featuretools', desc: 'Library automated feature engineering. Otomatis membuat aggregation dan transform features dari relational data.', example: 'ft.dfs(entityset=es, target_dataframe_name="customers")' },
          { title: 'Polynomial Features', desc: 'Buat fitur interaksi x₁·x₂ dan pangkat x₁². Penting: gunakan dengan regularisasi kuat (L1/L2) karena dimensi meledak.', example: 'PolynomialFeatures(degree=2, interaction_only=False)' },
          { title: 'Binning', desc: 'Ubah numerik jadi ordinal bins. Robust terhadap outlier. KBinsDiscretizer dengan strategy="quantile" paling sering dipakai.', example: 'KBinsDiscretizer(n_bins=5, strategy="quantile")' },
          { title: 'WoE & IV', desc: 'Weight of Evidence dan Information Value — standar industri di credit scoring. IV > 0.3: sangat prediktif, IV < 0.02: tidak berguna.', example: 'category_encoders.WOEEncoder()' },
          { title: 'Imputation Strategy', desc: 'Missing value: SimpleImputer (mean/median/mode), KNNImputer (k=5), IterativeImputer (MICE — paling akurat).', example: 'IterativeImputer(max_iter=10, random_state=42)' },
          { title: 'Feature Selection', desc: 'Setelah FE, seleksi fitur paling penting: SHAP, RFE, Lasso, mutual_info_classif. Hindari curse of dimensionality.', example: 'SelectFromModel(LassoCV())' },
        ]} />
      </div>
    ),
  },

  // ── Section 4: SHAP & Interpretability ──────────────────────
  {
    title: '🔍 SHAP & Model Interpretability Deep Dive',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          Model ML yang tidak dapat dijelaskan sulit dipercaya, diaudit, atau diregulasi. Interpretabilitas bukan hanya akademik — ini kebutuhan bisnis dan hukum (GDPR mensyaratkan "right to explanation").
        </p>

        <SHAPDiagram />

        <SectionTitle icon="⚖️">Black-box vs White-box Models</SectionTitle>
        <CompareTable
          headers={['Aspek', 'White-box (Interpretable)', 'Black-box (Kompleks)']}
          rows={[
            ['Contoh', 'Logistic Reg, Decision Tree', 'XGBoost, Neural Net, Random Forest'],
            ['Akurasi', 'Biasanya lebih rendah', 'Lebih tinggi (pada data kompleks)'],
            ['Interpretabilitas', 'Intrinsik (langsung dipahami)', 'Butuh post-hoc tools (SHAP, LIME)'],
            ['Deployment regulasi', 'Mudah (kredit, medis)', 'Perlu justifikasi tambahan'],
            ['Debugging', 'Mudah', 'Sulit — perlu tools khusus'],
            ['Rekomendasi penggunaan', 'High-stake, highly regulated', 'Akurasi prioritas, low-stakes'],
          ]}
        />

        <SectionTitle icon="🎮">SHAP — Shapley Values dari Game Theory</SectionTitle>
        <FormulaBox
          label="Shapley Value (definisi eksak)"
          formula="φᵢ = Σ_{S⊆N\\{i}} [ |S|!(n-|S|-1)! / n! ] · [ f(S∪{i}) - f(S) ]"
          note="φᵢ = kontribusi fitur i. S = subset fitur. f(S) = prediksi menggunakan subset S. Iterasi atas semua kemungkinan koalisi."
        />
        <FormulaBox
          label="SHAP Additive Property"
          formula="f(x) = φ₀ + Σᵢ φᵢ(x)   di mana φ₀ = E[f(X)] (baseline/expected value)"
          note="Output model = nilai rata-rata + jumlah kontribusi setiap fitur. Sifat ini menjamin konsistensi dan efisiensi Shapley."
        />

        <TipBox type="info">
          <strong>Mengapa SHAP Lebih Baik dari Feature Importance Biasa?</strong> Feature importance (Gini atau permutation) hanya memberi ranking global dan tidak konsisten. SHAP menjamin tiga properti Shapley: efficiency (kontribusi habis dibagi), symmetry (fitur dengan kontribusi sama dapat nilai sama), dan dummy (fitur tidak berkontribusi dapat nilai 0).
        </TipBox>

        <DiagramBox>{`SHAP Value Plots — Panduan Interpretasi:

  1. SUMMARY PLOT (global + lokal sekaligus):
  ┌────────────────────────────────────────────────────────────┐
  │  Feature     SHAP Value (impact on model output)           │
  │  income   ●●●●●●●●●●●●●●●●●●●●●●●  [-3    0    +3]      │
  │  age      ●●●●●●●●●●●●●●●●●                               │
  │  debt     ●●●●●●●●●●                                       │
  │  city     ●●●●●                                            │
  │                 ↑                  ↑                        │
  │             biru=nilai rendah  merah=nilai tinggi           │
  │  Setiap dot = 1 observasi                                  │
  └────────────────────────────────────────────────────────────┘

  2. WATERFALL PLOT (1 prediksi, dijelaskan per fitur):
  ┌────────────────────────────────────────────────────────────┐
  │  E[f(x)] = 0.12 (baseline)                                │
  │  + income=50jt    → +0.23  ████████░░                     │
  │  + age=25         → +0.15  █████░░░                        │
  │  + debt=200jt     → -0.18  ░░░░░░██████                   │
  │  + city=Jakarta   → +0.05  ██░                             │
  │  = f(x) = 0.37   ← prediksi akhir untuk observasi ini    │
  └────────────────────────────────────────────────────────────┘

  3. DEPENDENCE PLOT: SHAP(income) vs income (+ interaksi warna)`}</DiagramBox>

        <FormulaBox
          label="LIME — Local Linear Approximation"
          formula="explanation = argmin_g [ L(f, g, π_x) + Ω(g) ]"
          note="f=model asli, g=model linear lokal, π_x=bobot sampel berdasarkan jarak ke x. L=fidelity loss, Ω=complexity penalty."
        />

        <SectionTitle icon="💻">SHAP Analysis Lengkap dengan Python</SectionTitle>
        <CodeBlock>{`import shap
import xgboost as xgb
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split

# ── 1. Train Model ───────────────────────────────────────────
df = pd.read_csv("credit_data.csv")
X  = df.drop("default", axis=1)
y  = df["default"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

model = xgb.XGBClassifier(n_estimators=200, max_depth=5,
                            learning_rate=0.1, random_state=42)
model.fit(X_train, y_train,
          eval_set=[(X_test, y_test)], verbose=False)

# ── 2. SHAP TreeExplainer (efisien untuk tree models) ────────
explainer    = shap.TreeExplainer(model)
shap_values  = explainer(X_test)   # objek Explanation baru
shap_values_legacy = explainer.shap_values(X_test)  # array lama

print(f"SHAP values shape: {shap_values_legacy.shape}")
print(f"Expected value (baseline): {explainer.expected_value:.4f}")

# ── 3. Global Feature Importance ────────────────────────────
shap.summary_plot(shap_values_legacy, X_test, plot_type="bar",
                  max_display=15, show=False)
plt.title("SHAP Feature Importance (Global)")
plt.tight_layout()
plt.savefig("shap_bar.png", dpi=150)
plt.close()

# Summary plot (beeswarm — lokal + global sekaligus)
shap.summary_plot(shap_values_legacy, X_test, max_display=15,
                  show=False)
plt.savefig("shap_summary.png", dpi=150); plt.close()

# ── 4. Individual Prediction Explanation (Waterfall) ────────
idx = 42   # observasi yang ingin dijelaskan
shap.plots.waterfall(shap_values[idx], max_display=10, show=False)
plt.savefig(f"shap_waterfall_obs{idx}.png", dpi=150); plt.close()

# ── 5. Dependence Plot (hubungan SHAP vs nilai fitur) ────────
shap.dependence_plot("income", shap_values_legacy, X_test,
                     interaction_index="age",  # warna berdasarkan age
                     show=False)
plt.savefig("shap_dependence_income.png", dpi=150); plt.close()

# ── 6. LIME untuk single prediction ─────────────────────────
import lime.lime_tabular

lime_explainer = lime.lime_tabular.LimeTabularExplainer(
    training_data    = X_train.values,
    feature_names    = X_train.columns.tolist(),
    class_names      = ["No Default", "Default"],
    mode             = "classification",
    discretize_continuous = True,
    random_state     = 42,
)

lime_exp = lime_explainer.explain_instance(
    data_row           = X_test.iloc[idx].values,
    predict_fn         = model.predict_proba,
    num_features       = 10,
    num_samples        = 5000,
)
lime_exp.save_to_file(f"lime_obs{idx}.html")
print(lime_exp.as_list())

# ── 7. Partial Dependence Plot (PDP) ─────────────────────────
from sklearn.inspection import PartialDependenceDisplay
fig, ax = plt.subplots(figsize=(12, 4))
PartialDependenceDisplay.from_estimator(
    model, X_test, features=["income", "age", ("income", "age")],
    kind="both",   # PDP + ICE lines
    ax=ax,
)
plt.savefig("pdp_income_age.png", dpi=150); plt.close()
print("Semua plot tersimpan.")`}</CodeBlock>

        <ConceptGrid items={[
          { title: 'TreeSHAP', desc: 'Algoritma efisien O(TLD²) untuk pohon keputusan (XGBoost, LightGBM, Random Forest). Jauh lebih cepat dari SHAP naïf O(TL2^M).', example: 'shap.TreeExplainer(xgb_model)' },
          { title: 'DeepSHAP', desc: 'SHAP untuk neural network. Gabungkan DeepLIFT + Shapley. Approximate tapi scalable untuk deep learning.', example: 'shap.DeepExplainer(nn_model, background)' },
          { title: 'SHAP Interaction', desc: 'Nilai interaksi φᵢⱼ mengukur efek interaksi dua fitur. Mendeteksi fitur yang saling menguatkan/melemahkan.', example: 'shap.dependence_plot(col, shap_vals, X, interaction_index="auto")' },
          { title: 'PDP vs ICE', desc: 'Partial Dependence Plot = rata-rata semua observasi. ICE (Individual Conditional Expectation) = setiap observasi. ICE mengungkap heterogenitas.', example: 'kind="both" di PartialDependenceDisplay' },
          { title: 'LIME', desc: 'Fit model linear lokal di sekitar titik yang ingin dijelaskan. Sampel perturbasi, beri bobot berdasarkan jarak, fit linear regression.', example: 'lime.lime_tabular.LimeTabularExplainer' },
          { title: 'SHAP Cohort', desc: 'Bandingkan SHAP values antar subgrup (misal: nasabah muda vs tua). Deteksi apakah model berperilaku berbeda untuk kelompok berbeda.', example: 'shap.plots.bar(shap_vals[mask])' },
        ]} />
      </div>
    ),
  },

  // ── Section 5: MLOps & Production ML ────────────────────────
  {
    title: '🚀 MLOps & Production ML Systems',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">
          MLOps (Machine Learning Operations) adalah praktik membawa model dari Jupyter Notebook ke sistem produksi yang reliable, reproducible, dan scalable.
          Riset menunjukkan hanya ~22% proyek ML yang berhasil sampai produksi — MLOps adalah kuncinya.
        </p>

        <MLOpsPipelineDiagram />

        <SectionTitle icon="🏗️">Arsitektur Sistem ML End-to-End</SectionTitle>
        <DiagramBox>{`ML System Architecture:

  DATA SOURCES                   FEATURE STORE            MODEL REGISTRY
  ┌──────────┐   ┌──────────┐   ┌──────────────┐   ┌────────────────────┐
  │  Database │──►│  Data    │──►│ Feast/Tecton │   │  MLflow Model      │
  │  S3/GCS   │   │ Pipeline │   │ Offline Store│   │  Registry          │
  │  Kafka    │   │ (Spark,  │   │ Online Store │   │  v1.0, v1.1, v2.0  │
  │  API      │   │  dbt)    │   │ (Redis/DDB)  │   │  Production/Staging│
  └──────────┘   └────┬─────┘   └──────┬───────┘   └─────────┬──────────┘
                       │                │                      │
                       ▼                ▼                      ▼
                  ┌──────────────────────────────────────────────────┐
                  │           TRAINING PIPELINE                      │
                  │  Versioning (DVC) → Experiment Tracking (MLflow) │
                  │  → Validation → Model Selection                  │
                  └──────────────────────────┬───────────────────────┘
                                             │
                   CI/CD (GitHub Actions) ───►│
                                             ▼
                  ┌──────────────────────────────────────────────────┐
                  │           SERVING LAYER                          │
                  │  ┌───────────┐  ┌──────────┐  ┌─────────────┐  │
                  │  │ REST API  │  │  Batch   │  │  Streaming  │  │
                  │  │ (FastAPI) │  │ (Spark)  │  │  (Kafka)    │  │
                  │  │  gRPC     │  │  Airflow │  │  Flink      │  │
                  │  └───────────┘  └──────────┘  └─────────────┘  │
                  └──────────────────────────┬───────────────────────┘
                                             │
                                             ▼
                  ┌──────────────────────────────────────────────────┐
                  │           MONITORING                             │
                  │  Data Drift (KL Div, PSI) + Model Performance   │
                  │  Alerting → Retraining Trigger                  │
                  └──────────────────────────────────────────────────┘`}</DiagramBox>

        <SectionTitle icon="📐">Monitoring: Data Drift Detection</SectionTitle>
        <FormulaBox
          label="KL Divergence (Kullback-Leibler) — Data Drift"
          formula="D_KL(P || Q) = Σᵢ P(i) · log( P(i) / Q(i) )"
          note="P = distribusi training (referensi), Q = distribusi production saat ini. D_KL > 0.1 perlu investigasi, > 0.2 perlu retrain."
        />
        <FormulaBox
          label="PSI (Population Stability Index)"
          formula="PSI = Σᵢ (A_i% - E_i%) · ln(A_i% / E_i%)"
          note="A_i = proporsi aktual, E_i = proporsi ekspektasi (training). PSI < 0.1: stabil, 0.1-0.2: monitor lebih ketat, > 0.2: retrain."
        />
        <FormulaBox
          label="Kolmogorov-Smirnov Test (Distribusi Kontinu)"
          formula="KS = max_{x} |F_train(x) - F_prod(x)|"
          note="F_train dan F_prod adalah CDF empiris. KS → nilai besar berarti distribusi berbeda signifikan. Lebih sensitive dari PSI untuk tail."
        />

        <TipBox type="info">
          <strong>Dua Jenis Drift:</strong> (1) <strong>Data drift / covariate shift</strong> — distribusi input X berubah tapi P(y|x) tetap. (2) <strong>Concept drift</strong> — hubungan P(y|x) berubah (pola dunia berubah). Concept drift lebih berbahaya karena tidak langsung terdeteksi dari data saja.
        </TipBox>

        <SectionTitle icon="💻">FastAPI Model Serving + MLflow</SectionTitle>
        <CodeBlock>{`# ── 1. MLflow Experiment Tracking ───────────────────────────
import mlflow
import mlflow.sklearn
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import roc_auc_score, f1_score
import pandas as pd, numpy as np

mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("credit-default-prediction")

with mlflow.start_run(run_name="GBM_v2_tuned"):
    # Hyperparameters
    params = {"n_estimators": 300, "max_depth": 5,
              "learning_rate": 0.05, "subsample": 0.8}
    mlflow.log_params(params)

    model = GradientBoostingClassifier(**params)
    model.fit(X_train, y_train)

    # Metrics
    auc = roc_auc_score(y_test, model.predict_proba(X_test)[:,1])
    f1  = f1_score(y_test, model.predict(X_test))
    mlflow.log_metrics({"AUC": auc, "F1": f1})

    # Artifacts
    mlflow.sklearn.log_model(model, "model",
        registered_model_name="CreditDefaultModel")
    mlflow.log_artifact("feature_importance.png")
    print(f"AUC={auc:.4f}, F1={f1:.4f}")


# ── 2. FastAPI Serving ──────────────────────────────────────
# Simpan sebagai: api/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import mlflow.pyfunc
import pandas as pd
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app   = FastAPI(title="Credit Default Prediction API", version="2.0")

# Load model saat startup
MODEL_URI = "models:/CreditDefaultModel/Production"
model     = mlflow.pyfunc.load_model(MODEL_URI)
logger.info(f"Model loaded: {MODEL_URI}")

class PredictionRequest(BaseModel):
    age:    float = Field(..., ge=18, le=100, description="Usia nasabah")
    income: float = Field(..., ge=0, description="Pendapatan bulanan (Rp)")
    debt:   float = Field(..., ge=0, description="Total utang (Rp)")
    city:   str   = Field(..., description="Kota domisili")
    months_employed: int = Field(..., ge=0, description="Lama bekerja (bulan)")

class PredictionResponse(BaseModel):
    customer_id:   str
    default_prob:  float
    risk_category: str
    explanation:   dict

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest, customer_id: str):
    try:
        # Convert ke DataFrame
        features = pd.DataFrame([request.model_dump()])

        # Predict
        prob = float(model.predict(features)[0])

        # Risk categorization
        risk = "Rendah" if prob < 0.3 else ("Sedang" if prob < 0.7 else "Tinggi")

        # Log prediction untuk monitoring
        logger.info(f"Prediction: customer={customer_id}, prob={prob:.4f}, risk={risk}")

        return PredictionResponse(
            customer_id   = customer_id,
            default_prob  = round(prob, 4),
            risk_category = risk,
            explanation   = {"model_version": "2.0", "threshold": 0.5},
        )
    except Exception as e:
        logger.error(f"Prediction error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy", "model": MODEL_URI}

# Jalankan: uvicorn api.main:app --host 0.0.0.0 --port 8080 --reload`}</CodeBlock>

        <CompareTable
          headers={['Platform', 'Managed Training', 'Serving', 'Feature Store', 'Kelebihan']}
          rows={[
            ['AWS SageMaker', 'SageMaker Training', 'Endpoints (RT, Batch)', 'SageMaker FS', 'Integrasi AWS penuh, auto-scaling'],
            ['GCP Vertex AI', 'Vertex Training', 'Prediction Endpoints', 'Vertex FS', 'AutoML, BigQuery terintegrasi'],
            ['Azure ML', 'Azure Compute Clusters', 'Managed Endpoints', 'Azure FS', 'Enterprise, Active Directory'],
            ['Databricks', 'MLflow + Spark', 'MLflow Serving', 'Databricks FS', 'Best untuk data engineering + ML'],
            ['Self-hosted', 'Kubeflow, Argo', 'Selfish (FastAPI, Triton)', 'Feast', 'Full control, tapi ops overhead besar'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'DVC (Data Version Control)', desc: 'Git untuk data dan model. Track perubahan dataset, model besar, dan eksperimen. Kompatibel dengan S3/GCS/Azure.', example: 'dvc add data/train.csv && dvc push' },
          { title: 'MLflow', desc: 'Experiment tracking, model registry, dan deployment. Log parameter, metrik, artifact. Model versioning dan staging (None→Staging→Production).', example: 'mlflow.log_metric("auc", 0.95)' },
          { title: 'Feature Store', desc: 'Centralized repo fitur yang dapat digunakan ulang. Point-in-time correct retrieval untuk training. Low-latency serving untuk inferensi online.', example: 'Feast, Tecton, Databricks FS' },
          { title: 'CI/CD untuk ML', desc: 'GitHub Actions: otomatis test kode, validasi data schema, re-train jika metric turun, deploy ke staging → production.', example: '.github/workflows/ml-pipeline.yml' },
          { title: 'Model Monitoring', desc: 'Monitor: data drift (PSI/KS), prediction drift (distribusi output), dan business metrics (konversi, revenue). Alert jika menyimpang dari baseline.', example: 'Evidently, WhyLogs, Arize AI' },
          { title: 'Shadow Deployment', desc: 'Jalankan model baru paralel dengan model lama — tapi hanya model lama yang melayani user. Bandingkan prediksi tanpa risiko. Sebelum A/B test atau gradual rollout.', example: 'Route 100% traffic ke old + shadow call new' },
        ]} />
      </div>
    ),
  },
]
