// Chapter 3b: Deep Learning — Advanced Topics
import { TipBox, ConceptGrid } from './mathContent.jsx'
import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { DiffusionModelDiagram, GNNDiagram } from './mlDiagrams.jsx'

export const deeplearningSectionsB = [
  {
    title: '📐 Advanced Optimization & Learning Rate Scheduling',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Optimizer dan learning rate scheduler adalah dua komponen paling kritis dalam melatih neural network.
          Pilihan optimizer yang tepat dapat membuat perbedaan antara model yang konvergen dalam 10 epoch
          versus 100 epoch, atau bahkan perbedaan antara konvergen dan divergen.
        </p>

        <SectionTitle icon="⚙️">SGD dengan Momentum</SectionTitle>
        <FormulaBox
          label="SGD + Momentum (Polyak Momentum)"
          formula="v_t = β × v_{t-1} + ∇L(θ_{t-1})     |     θ_t = θ_{t-1} - η × v_t"
          note="β ∈ [0,1) = momentum factor (umumnya 0.9). Mengakumulasi gradient masa lalu. Bayangkan bola menggelinding di lembah."
        />
        <FormulaBox
          label="Nesterov Accelerated Gradient (NAG)"
          formula="v_t = β × v_{t-1} + ∇L(θ_{t-1} - β × v_{t-1})     |     θ_t = θ_{t-1} - η × v_t"
          note="Perbedaan: gradient dihitung di posisi 'look-ahead'. Konvergensi lebih cepat daripada momentum biasa untuk konveks."
        />

        <SectionTitle icon="📊">RMSProp</SectionTitle>
        <FormulaBox
          label="RMSProp (Hinton, 2012)"
          formula="v_t = β × v_{t-1} + (1-β) × (∇L)²     |     θ_t = θ_{t-1} - (η / √(v_t + ε)) × ∇L"
          note="v_t = exponential moving average dari gradient kuadrat. Adaptif per-parameter. β=0.99, ε=1e-8 biasanya."
        />

        <SectionTitle icon="🔥">Adam Optimizer (4 Persamaan Lengkap)</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Adam (Adaptive Moment Estimation) menggabungkan momentum (first moment) dan RMSProp
          (second moment). Saat ini optimizer default untuk sebagian besar deep learning.
        </p>
        <FormulaBox
          label="Adam Persamaan 1: First Moment (Momentum)"
          formula="m_t = β₁ × m_{t-1} + (1-β₁) × ∇L(θ_{t-1})"
          note="m_t = exponential moving average dari gradient. β₁=0.9 default."
        />
        <FormulaBox
          label="Adam Persamaan 2: Second Moment (RMSProp)"
          formula="v_t = β₂ × v_{t-1} + (1-β₂) × (∇L(θ_{t-1}))²"
          note="v_t = exponential moving average dari gradient kuadrat. β₂=0.999 default."
        />
        <FormulaBox
          label="Adam Persamaan 3: Bias Correction"
          formula="m̂_t = m_t / (1-β₁ᵗ)     |     v̂_t = v_t / (1-β₂ᵗ)"
          note="Di awal training (t kecil), m_t dan v_t bias menuju 0. Koreksi ini sangat penting di beberapa epoch pertama."
        />
        <FormulaBox
          label="Adam Persamaan 4: Parameter Update"
          formula="θ_t = θ_{t-1} - η × m̂_t / (√v̂_t + ε)"
          note="η = learning rate (default 1e-3). ε=1e-8 untuk stabilitas numeris. Efektif learning rate per parameter: η × m̂/√v̂"
        />

        <SectionTitle icon="🛡️">AdamW: Decoupled Weight Decay</SectionTitle>
        <FormulaBox
          label="AdamW (Loshchilov & Hutter, 2019)"
          formula="θ_t = θ_{t-1} - η × [m̂_t / (√v̂_t + ε) + λ × θ_{t-1}]"
          note="Perbedaan kunci: weight decay λ diterapkan LANGSUNG pada parameter, bukan pada gradient. Ini yang membedakan AdamW dari Adam + L2."
        />
        <TipBox type="warning">
          Adam dengan L2 regularisasi (weight decay di loss) TIDAK sama dengan AdamW! Dalam Adam, L2
          masuk ke gradient lalu diskalakan oleh v̂_t, sehingga pengaruh weight decay tidak seragam
          antar parameter. AdamW memisahkan keduanya — inilah mengapa AdamW lebih disukai untuk
          transformers dan vision models.
        </TipBox>

        <SectionTitle icon="📈">Learning Rate Schedulers</SectionTitle>
        <FormulaBox
          label="Cosine Annealing"
          formula="η_t = η_min + (η_max - η_min) × (1 + cos(π × t/T)) / 2"
          note="t = current step, T = total steps per cycle. Smooth decay + restart (warm restart). Sangat populer di DL modern."
        />
        <FormulaBox
          label="Linear Warmup + Cosine Decay (Transformer Default)"
          formula="η(t) = η_max × min(t/T_warm, (T-t)/(T-T_warm))"
          note="T_warm = warmup steps (biasanya 4-10% dari total). Warmup mencegah divergence di awal training."
        />
        <FormulaBox
          label="OneCycleLR (Smith, 2019)"
          formula="η: 0 → η_max → η_min     dan     momentum: M_max → M_min → M_max"
          note="LR dan momentum bergerak berlawanan arah. Terbukti sangat efektif untuk transfer learning dan fine-tuning."
        />

        <DiagramBox>{`
  Learning Rate Schedule Comparison

  LR
  ↑
  │    ╭────╮                       ╭────╮        ← Cosine Annealing + Warm Restart
  │   ╱      ╲                     ╱      ╲
  │  ╱          ╲╱╲___/╲          ╱          ╲...
  │ ╱                   ╲────────╱
  │─────────────────────────────────────────────→ t

  │  ╱─────╲                                      ← OneCycleLR
  │ ╱        ╲____________
  │─────────────────────────────────────────────→ t

  │   ╱╲____╱╲____╱╲____                          ← Cyclical LR (triangular)
  │  ╱
  │─────────────────────────────────────────────→ t

  Warmup: η naik linear selama T_warm step → mencegah divergence di awal
        `}</DiagramBox>

        <CompareTable
          headers={['Optimizer', 'Adaptive?', 'Memory', 'Cocok untuk', 'Masalah Utama']}
          rows={[
            ['SGD + Momentum', 'Tidak', '1× gradient', 'Large-scale vision, final fine-tuning', 'Sensitif LR, butuh tuning lama'],
            ['AdaGrad', 'Ya', '2× gradient', 'Sparse data, NLP', 'LR turun ke 0 (akumulatif)'],
            ['RMSProp', 'Ya', '2× gradient', 'RNN, online learning', 'Tidak ada bias correction'],
            ['Adam', 'Ya', '3× gradient', 'Default pilihan, semua task', 'Generalisasi kadang < SGD'],
            ['AdamW', 'Ya', '3× gradient', 'Transformers, fine-tuning', 'Same as Adam'],
            ['LAMB', 'Ya', '4× gradient', 'Large batch training (BERT)', 'Kompleks, jarang tersedia'],
          ]}
        />

        <ConceptGrid items={[
          { title: 'Learning Rate', desc: 'Hyperparameter paling penting. Terlalu besar → diverge. Terlalu kecil → sangat lambat. Umumnya 1e-3 (Adam), 0.01-0.1 (SGD).', example: 'LR Range Test: train dengan LR=1e-7→10' },
          { title: 'Warm Restarts', desc: 'Reset LR ke η_max setelah setiap T epoch (SGDR). Membantu model keluar dari local minimum.', example: 'CosineAnnealingWarmRestarts' },
          { title: 'Gradient Clipping', desc: 'Clip norm gradient agar tidak explode. Krusial untuk RNN/LSTM. ||g|| = min(||g||, c).', example: 'torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)' },
          { title: 'Weight Decay', desc: 'L2 regularisasi pada parameter. AdamW mengimplementasinya dengan benar (decoupled).', example: 'AdamW(lr=1e-3, weight_decay=0.01)' },
          { title: 'Gradient Accumulation', desc: 'Simulasi batch besar dengan mengakumulasi gradient dari beberapa mini-batch sebelum update.', example: 'Berguna jika GPU memory terbatas' },
          { title: 'Mixed Precision', desc: 'Training dengan FP16 untuk komputasi, FP32 untuk akumulasi gradient. 2× speedup, memory lebih kecil.', example: 'torch.cuda.amp.autocast()' },
        ]} />

        <CodeBlock>{`import torch
import torch.nn as nn
import torch.optim as optim
from torch.optim.lr_scheduler import (
    CosineAnnealingLR, OneCycleLR, LinearLR, SequentialLR,
    CosineAnnealingWarmRestarts
)
import matplotlib.pyplot as plt
import numpy as np

# === Model sederhana ===
class SimpleNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Linear(784, 512), nn.ReLU(), nn.Dropout(0.3),
            nn.Linear(512, 256), nn.ReLU(), nn.Dropout(0.3),
            nn.Linear(256, 10)
        )
    def forward(self, x): return self.layers(x)

model = SimpleNet()
total_steps = 1000  # simulasi

# === Perbandingan Optimizer ===
optimizers = {
    'SGD+Momentum': optim.SGD(model.parameters(), lr=0.1, momentum=0.9,
                               weight_decay=1e-4),
    'Adam': optim.Adam(model.parameters(), lr=1e-3, betas=(0.9, 0.999),
                       eps=1e-8, weight_decay=1e-4),
    'AdamW': optim.AdamW(model.parameters(), lr=1e-3, betas=(0.9, 0.999),
                          eps=1e-8, weight_decay=0.01),
}

# === Perbandingan LR Schedulers ===
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

schedulers_config = {
    'CosineAnnealing': lambda opt: CosineAnnealingLR(opt, T_max=total_steps, eta_min=1e-6),
    'CosineAnnealingWarmRestart': lambda opt: CosineAnnealingWarmRestarts(opt, T_0=200),
    'OneCycleLR': lambda opt: OneCycleLR(opt, max_lr=0.1, total_steps=total_steps,
                                          pct_start=0.3, div_factor=25,
                                          final_div_factor=1e4),
    'LinearWarmup+Cosine': lambda opt: SequentialLR(opt,
        schedulers=[
            LinearLR(opt, start_factor=0.01, end_factor=1.0, total_iters=100),
            CosineAnnealingLR(opt, T_max=total_steps-100, eta_min=1e-7),
        ], milestones=[100])
}

for ax, (name, sched_fn) in zip(axes.ravel(), schedulers_config.items()):
    model_copy = SimpleNet()
    opt = optim.SGD(model_copy.parameters(), lr=0.1)
    sched = sched_fn(opt)
    lrs = []
    for step in range(total_steps):
        lrs.append(opt.param_groups[0]['lr'])
        opt.step()
        sched.step()
    ax.plot(lrs, lw=2)
    ax.set_title(name, fontweight='bold')
    ax.set_xlabel('Step'); ax.set_ylabel('Learning Rate')
    ax.grid(True, alpha=0.3)

plt.suptitle('Perbandingan Learning Rate Schedulers', fontsize=14, fontweight='bold')
plt.tight_layout()
plt.savefig('lr_schedulers.png', dpi=150)
print("Plot LR schedulers tersimpan!")

# === Training Loop dengan AdamW + OneCycleLR ===
model_train = SimpleNet()
optimizer = optim.AdamW(model_train.parameters(), lr=1e-3, weight_decay=0.01)
scheduler = OneCycleLR(optimizer, max_lr=1e-2, total_steps=100,
                        pct_start=0.3, anneal_strategy='cos')
criterion = nn.CrossEntropyLoss(label_smoothing=0.1)

for step in range(5):  # ilustrasi
    x = torch.randn(32, 784)
    target = torch.randint(0, 10, (32,))
    optimizer.zero_grad()
    output = model_train(x)
    loss = criterion(output, target)
    loss.backward()
    # Gradient clipping
    torch.nn.utils.clip_grad_norm_(model_train.parameters(), max_norm=1.0)
    optimizer.step()
    scheduler.step()
    print(f"Step {step+1}: loss={loss.item():.4f}, lr={optimizer.param_groups[0]['lr']:.6f}")`}</CodeBlock>

        <TipBox type="success">
          Rekomendasi praktis: Gunakan AdamW dengan cosine annealing + linear warmup untuk semua
          transformer/vision task. Untuk fine-tuning: OneCycleLR sangat efektif. Untuk SGD, momentum
          0.9 + cosine annealing sering mengalahkan Adam dalam accuracy akhir (terutama ResNet di ImageNet),
          tapi butuh tuning LR lebih hati-hati.
        </TipBox>
      </div>
    ),
  },

  {
    title: '🔬 Batch Normalization, Layer Norm & Regularization',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Normalisasi dan regularisasi adalah teknik-teknik yang membuat training deep network lebih stabil,
          cepat, dan generalizable. Pilihan teknik yang tepat sangat bergantung pada arsitektur dan task.
        </p>

        <SectionTitle icon="📊">Batch Normalization (Ioffe & Szegedy, 2015)</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Batch Norm menormalisasi aktivasi dalam setiap mini-batch, kemudian melakukan scale dan shift
          yang dapat dipelajari. Mengatasi masalah <em>internal covariate shift</em> (distribusi aktivasi
          berubah seiring training) dan memungkinkan learning rate lebih besar.
        </p>
        <FormulaBox
          label="Batch Norm — Langkah 1: Normalisasi per Mini-batch"
          formula="μ_B = (1/m) Σᵢ xᵢ     |     σ²_B = (1/m) Σᵢ (xᵢ - μ_B)²"
          note="m = ukuran mini-batch. Dihitung per feature/channel. Pada inference: gunakan running mean/var dari training."
        />
        <FormulaBox
          label="Batch Norm — Langkah 2: Normalize"
          formula="x̂ᵢ = (xᵢ - μ_B) / √(σ²_B + ε)"
          note="ε = 1e-5 untuk stabilitas numeris. x̂ᵢ ≈ N(0,1) untuk setiap feature dalam batch."
        />
        <FormulaBox
          label="Batch Norm — Langkah 3: Scale dan Shift (Learnable)"
          formula="yᵢ = γ × x̂ᵢ + β"
          note="γ (scale) dan β (shift) adalah parameter yang dipelajari via backprop. Memungkinkan model membatalkan normalisasi jika perlu."
        />

        <DiagramBox>{`
  Perbandingan Normalization Techniques
  Input tensor shape: [Batch (N), Channels (C), Height (H), Width (W)]

  Batch Norm:    Normalisasi sepanjang dimensi N
  ┌───┬───┬───┬───┐  ← setiap "kolom" (feature/channel) dinormalisasi
  │ ▓ │   │   │   │     ▓ = dimensi yang di-average
  │ ▓ │   │   │   │  → stat: mean & var per channel, over batch
  │ ▓ │   │   │   │  → sensitif terhadap batch size kecil
  └───┴───┴───┴───┘

  Layer Norm:    Normalisasi sepanjang dimensi C (dan H,W)
  ┌─────────────┐  ← setiap "baris" (instance) dinormalisasi sendiri
  │ ▓ ▓ ▓ ▓ ▓  │  → stat per sample, over all features
  ├─────────────┤  → tidak bergantung batch size → ideal untuk Transformer
  │             │
  └─────────────┘

  Instance Norm: Normalisasi per sample per channel (H×W saja)
  → Ideal untuk style transfer (mempertahankan style per gambar)

  Group Norm:    Split C ke G groups, normalisasi per group per sample
  → Kompromi BN dan LN; bekerja baik untuk batch size kecil
        `}</DiagramBox>

        <CompareTable
          headers={['Metode', 'Norm Dimensi', 'Batch Dep.', 'Cocok untuk', 'Kekurangan']}
          rows={[
            ['Batch Norm', 'N (batch)', 'Ya', 'CNN, ResNet, besar batch', 'Buruk di batch kecil, RNN'],
            ['Layer Norm', 'C,H,W (features)', 'Tidak', 'Transformer, RNN, NLP', 'Lebih lambat di CNN'],
            ['Instance Norm', 'H,W per channel', 'Tidak', 'Style transfer, GAN', 'Kehilangan info inter-channel'],
            ['Group Norm', 'Group of channels', 'Tidak', 'Object detection, kecil batch', 'Perlu tune G'],
            ['RMS Norm', 'Features (no mean)', 'Tidak', 'LLaMA, GPT modern', 'Lebih sederhana dari LN'],
          ]}
        />

        <SectionTitle icon="🎲">Dropout (Srivastava et al., 2014)</SectionTitle>
        <FormulaBox
          label="Dropout: Bernoulli Mask"
          formula="r_j ~ Bernoulli(p)     |     ỹ = r ⊙ y     |     z = W × ỹ + b"
          note="p = retention probability (umumnya 0.5-0.8). Setiap neuron dimatikan independen per forward pass."
        />
        <FormulaBox
          label="Inverted Dropout (Implementasi Modern)"
          formula="y_train = (r ⊙ x) / p     |     y_test = x     (tanpa scaling)"
          note="Membagi dengan p saat training sehingga expected activation sama di training dan test. Standar di PyTorch/TF."
        />

        <SectionTitle icon="🏷️">Label Smoothing</SectionTitle>
        <FormulaBox
          label="Label Smoothing (Szegedy et al., 2016)"
          formula="y_smooth = (1-ε) × y_hard + ε/K"
          note="ε = smoothing factor (umumnya 0.1). K = jumlah kelas. Mengganti hard label [0,1] dengan soft target. Mencegah overconfidence."
        />

        <SectionTitle icon="🧩">DropBlock & MixUp</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          <strong>DropBlock</strong> (Ghiasi et al., 2018): Daripada membuang neuron acak, DropBlock
          membuang blok spasial yang berdekatan. Lebih efektif untuk CNN karena fitur spasial berkorelasi
          tinggi — Dropout biasa tidak cukup memaksa model belajar fitur non-lokal.
        </p>
        <FormulaBox
          label="MixUp Data Augmentation (Zhang et al., 2018)"
          formula="x̃ = λxᵢ + (1-λ)xⱼ     |     ỹ = λyᵢ + (1-λ)yⱼ     |     λ ~ Beta(α,α)"
          note="Interpolasi linear input DAN label. α ∈ {0.2, 0.4, 1.0}. Mendorong model belajar prediksi linear antara kelas."
        />

        <ConceptGrid items={[
          { title: 'Internal Covariate Shift', desc: 'Distribusi input ke setiap layer berubah selama training karena parameter layer sebelumnya berubah. BN menyelesaikan ini.', example: 'BN → LR bisa 10× lebih besar' },
          { title: 'Weight Decay (L2)', desc: 'Tambah λ||w||² ke loss. Dalam optimizer: w ← w(1-ηλ) - η∇L. Mencegah bobot membesar, mengurangi overfitting.', example: 'AdamW(weight_decay=0.01)' },
          { title: 'Spatial Dropout', desc: 'Untuk CNN: matikan seluruh feature map (channel) daripada pixel individual. Lebih efektif karena korelasi spasial.', example: 'nn.Dropout2d(p=0.1)' },
          { title: 'Stochastic Depth', desc: 'Secara acak "skip" seluruh residual block selama training. Ekivalen dengan ensemble jaringan dengan kedalaman berbeda.', example: 'Digunakan di ResNets besar' },
          { title: 'CutMix', desc: 'Potong dan tempel patch dari dua gambar. Label sebanding dengan luas patch. Lebih efektif dari MixUp untuk fine-grained recognition.', example: 'CutMix α=1.0 → improve +1.5%' },
          { title: 'Spectral Norm', desc: 'Normalisasi matriks bobot dengan singular value terbesar. Mengontrol Lipschitz constant. Krusial untuk GAN training.', example: 'nn.utils.spectral_norm(layer)' },
        ]} />

        <CodeBlock>{`import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import matplotlib.pyplot as plt

# === Custom Batch Norm (untuk pemahaman) ===
class ManualBatchNorm(nn.Module):
    def __init__(self, num_features, eps=1e-5, momentum=0.1):
        super().__init__()
        self.gamma = nn.Parameter(torch.ones(num_features))
        self.beta  = nn.Parameter(torch.zeros(num_features))
        self.eps = eps
        self.momentum = momentum
        self.register_buffer('running_mean', torch.zeros(num_features))
        self.register_buffer('running_var', torch.ones(num_features))

    def forward(self, x):
        if self.training:
            mean = x.mean(dim=0)
            var  = x.var(dim=0, unbiased=False)
            # Update running statistics
            self.running_mean = (1-self.momentum)*self.running_mean + self.momentum*mean
            self.running_var  = (1-self.momentum)*self.running_var  + self.momentum*var
        else:
            mean, var = self.running_mean, self.running_var
        x_norm = (x - mean) / torch.sqrt(var + self.eps)
        return self.gamma * x_norm + self.beta

# === MixUp Implementation ===
def mixup_data(x, y, alpha=0.4):
    if alpha > 0:
        lam = np.random.beta(alpha, alpha)
    else:
        lam = 1.0
    batch_size = x.size(0)
    index = torch.randperm(batch_size)
    mixed_x = lam * x + (1 - lam) * x[index]
    y_a, y_b = y, y[index]
    return mixed_x, y_a, y_b, lam

def mixup_criterion(criterion, pred, y_a, y_b, lam):
    return lam * criterion(pred, y_a) + (1-lam) * criterion(pred, y_b)

# === Network dengan berbagai Norm ===
class NormCompareNet(nn.Module):
    def __init__(self, norm_type='batch'):
        super().__init__()
        self.fc1 = nn.Linear(784, 512)
        self.fc2 = nn.Linear(512, 256)
        self.fc3 = nn.Linear(256, 10)
        self.drop1 = nn.Dropout(0.3)
        self.drop2 = nn.Dropout(0.3)

        if norm_type == 'batch':
            self.norm1 = nn.BatchNorm1d(512)
            self.norm2 = nn.BatchNorm1d(256)
        elif norm_type == 'layer':
            self.norm1 = nn.LayerNorm(512)
            self.norm2 = nn.LayerNorm(256)
        elif norm_type == 'none':
            self.norm1 = nn.Identity()
            self.norm2 = nn.Identity()

    def forward(self, x):
        x = self.drop1(F.relu(self.norm1(self.fc1(x))))
        x = self.drop2(F.relu(self.norm2(self.fc2(x))))
        return self.fc3(x)

# === Visualisasi distribusi aktivasi ===
fig, axes = plt.subplots(1, 3, figsize=(15, 5))
x_input = torch.randn(64, 784)

for ax, norm_type in zip(axes, ['none', 'batch', 'layer']):
    net = NormCompareNet(norm_type=norm_type)
    net.eval()
    with torch.no_grad():
        out1 = F.relu(net.fc1(x_input))
        out1_norm = net.norm1(out1)
        acts = out1_norm.detach().numpy().flatten()

    ax.hist(acts, bins=50, color='steelblue', alpha=0.7, edgecolor='white')
    ax.set_title(f'Distribusi Aktivasi\\nNorm Type: {norm_type}', fontweight='bold')
    ax.set_xlabel('Nilai Aktivasi'); ax.set_ylabel('Count')
    stats_txt = f'mean={acts.mean():.3f}\\nstd={acts.std():.3f}'
    ax.text(0.7, 0.85, stats_txt, transform=ax.transAxes, fontsize=9,
            bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.5))
    ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('normalization_comparison.png', dpi=150)
print("Perbandingan normalisasi tersimpan!")

# === Label Smoothing Loss ===
criterion_ls = nn.CrossEntropyLoss(label_smoothing=0.1)
criterion_hard = nn.CrossEntropyLoss()
logits = torch.randn(32, 10)
targets = torch.randint(0, 10, (32,))
loss_hard = criterion_hard(logits, targets)
loss_smooth = criterion_ls(logits, targets)
print(f"Hard label loss: {loss_hard.item():.4f}")
print(f"Smooth label loss: {loss_smooth.item():.4f}")`}</CodeBlock>

        <TipBox type="tip">
          Untuk CNN besar (batch size ≥ 32): BatchNorm adalah pilihan default. Untuk Transformer dan
          task dengan batch size kecil: LayerNorm. Untuk object detection (batch size 1-2): GroupNorm
          dengan G=32. Dropout 0.1-0.3 untuk hidden layers, hindari Dropout tepat sebelum output layer.
        </TipBox>
      </div>
    ),
  },

  {
    title: '🕸️ Graph Neural Networks (GNN)',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Graph Neural Networks memungkinkan deep learning diterapkan pada data berstruktur graph —
          seperti molekul kimia, jaringan sosial, knowledge graph, traffic network, dan protein structures.
          GNN belajar representasi node/edge dengan mengaggregasi informasi dari tetangga (neighborhood).
        </p>

        <GNNDiagram />

        <SectionTitle icon="🌐">Representasi Graph</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Graph G = (V, E) terdiri dari V node dan E edge. Dalam GNN, kita merepresentasikan:
        </p>
        <FormulaBox
          label="Representasi Graph"
          formula="A ∈ ℝ^(N×N) = Adjacency Matrix     |     X ∈ ℝ^(N×F) = Node Feature Matrix"
          note="A_{ij}=1 jika ada edge (i,j). X_i = feature vector node i (F-dimensional). Degree matrix D: D_{ii} = Σⱼ A_{ij}"
        />

        <DiagramBox>{`
  Contoh Graph (Molekul Air H₂O)

       H ──── O ──── H
       i      j      k

  Adjacency Matrix A:          Node Features X:
  ┌         ┐                  ┌           ┐
  │  0  1  0 │ ← H_i           │ [1,0,1,…] │ ← H: atomic num, charge, ...
  │  1  0  1 │ ← O_j           │ [0,1,6,…] │ ← O: oxygen features
  │  0  1  0 │ ← H_k           │ [1,0,1,…] │ ← H
  └         ┘                  └           ┘

  Message Passing Framework (MPF):
  ┌────────────────────────────────────────────────────────────────┐
  │  Untuk setiap node i di setiap layer l:                        │
  │                                                                │
  │  1. MESSAGE:    m_ij = MSG(h_i^l, h_j^l, e_ij)   ∀j∈N(i)     │
  │  2. AGGREGATE:  a_i = AGG({m_ij : j ∈ N(i)})                  │
  │  3. UPDATE:     h_i^(l+1) = UPDATE(h_i^l, a_i)               │
  │                                                                │
  │  AGG bisa: sum, mean, max, attention-weighted sum              │
  └────────────────────────────────────────────────────────────────┘
        `}</DiagramBox>

        <SectionTitle icon="🧮">Graph Convolutional Network (GCN)</SectionTitle>
        <FormulaBox
          label="GCN Layer (Kipf & Welling, 2017)"
          formula="H^(l+1) = σ(D̃^(-1/2) Ã D̃^(-1/2) H^(l) W^(l))"
          note="Ã = A + I (self-loops). D̃ = degree matrix dari Ã. W^(l) = learnable weight matrix. Normalisasi simetris mempertahankan skala."
        />
        <p className="text-sm text-gray-600 mb-2">
          Intuisi: Setiap node meng-aggregate fitur dari dirinya sendiri dan tetangganya,
          dinormalisasi oleh degree untuk mencegah gradient exploding/vanishing.
        </p>
        <FormulaBox
          label="GCN Simplified: Per Node"
          formula="h_i^(l+1) = σ(W^(l) × Σ_{j∈N(i)∪{i}} h_j^(l) / √(d_i × d_j))"
          note="d_i = degree node i. Aggregasi mean ternormalisasi dari semua tetangga + diri sendiri."
        />

        <SectionTitle icon="🔀">GraphSAGE (Hamilton et al., 2017)</SectionTitle>
        <FormulaBox
          label="GraphSAGE: Sample dan Aggregate"
          formula="h^k_{N(v)} = AGG_k({h^(k-1)_u : u ∈ N(v)})     |     h^k_v = σ(W^k · CONCAT(h^(k-1)_v, h^k_{N(v)}))"
          note="Sample subset tetangga (bukan semua). AGG: Mean, LSTM, atau Max Pooling. Inductive: bisa generalize ke node baru!"
        />

        <SectionTitle icon="👁️">Graph Attention Network (GAT)</SectionTitle>
        <FormulaBox
          label="GAT Attention Coefficient"
          formula="e_{ij} = a(W h_i ‖ W h_j)     |     α_{ij} = softmax_j(e_{ij}) = exp(e_{ij}) / Σ_{k∈N(i)} exp(e_{ik})"
          note="a = single-layer feedforward network dengan LeakyReLU. ‖ = concatenation. α_{ij} = bobot perhatian edge (i,j)."
        />
        <FormulaBox
          label="GAT: Aggregasi dengan Multi-head Attention"
          formula="h'_i = ‖_{k=1}^{K} σ(Σ_{j∈N(i)} α^k_{ij} W^k h_j)"
          note="K = jumlah attention head. Concatenate output K head. Untuk layer terakhir: average (bukan concat) K head."
        />

        <CompareTable
          headers={['Model', 'Aggregasi', 'Inductive?', 'Keunggulan', 'Kompleksitas']}
          rows={[
            ['GCN', 'Normalized sum', 'Tidak (transductive)', 'Sederhana, efektif', 'O(|E| × F)'],
            ['GraphSAGE', 'Sample + mean/LSTM/max', 'Ya', 'Scalable, generalize', 'O(batch × k × F)'],
            ['GAT', 'Attention-weighted sum', 'Ya', 'Interpretable attention', 'O(|E| × K × F)'],
            ['GIN', 'Sum + MLP', 'Ya', 'Paling ekspresif (WL test)', 'O(|E| × F × L)'],
            ['MPNN', 'Message passing', 'Ya', 'Edge features explicitly', 'O(|E| × F)'],
            ['Graph Transformer', 'Global attention', 'Ya', 'Long-range dependency', 'O(N² × F)'],
          ]}
        />

        <SectionTitle icon="🏊">Graph Pooling</SectionTitle>
        <FormulaBox
          label="Global Mean/Sum/Max Pooling (Graph Classification)"
          formula="h_G = READOUT({h^L_v : v ∈ V}) = (1/|V|) Σ_v h^L_v"
          note="Untuk klasifikasi graph: agregasi semua node menjadi satu vektor representasi graph."
        />

        <ConceptGrid items={[
          { title: 'Homophily', desc: 'Asumsi bahwa node yang terhubung cenderung mirip (contoh: teman di media sosial). GCN bekerja baik bila asumsi ini terpenuhi.', example: 'Cora, Citeseer citation graphs' },
          { title: 'Over-smoothing', desc: 'Dengan terlalu banyak layer GCN, representasi semua node konvergen ke nilai sama. Batasi ke 2-4 layer.', example: 'Solusi: residual connection, JK-Net' },
          { title: 'Heterogeneous Graph', desc: 'Graph dengan berbagai tipe node dan edge. Contoh: knowledge graph (Entitas -[relasi]→ Entitas).', example: 'R-GCN, HAN, HGT' },
          { title: 'Temporal Graph', desc: 'Graph yang berevolusi seiring waktu. Contoh: transaksi keuangan, social interaction.', example: 'TGN, JODIE, DyRep' },
          { title: 'PyTorch Geometric', desc: 'Library Python untuk GNN. Menyediakan dataset, model (GCN, GAT, GIN), dan message passing framework.', example: 'pip install torch-geometric' },
          { title: 'WL Graph Isomorphism Test', desc: 'Batas ekspresivitas GNN: GNN tidak bisa lebih ekspresif dari Weisfeiler-Lehman test (kecuali GIN).', example: 'GIN menyetarakan WL 1-dim test' },
        ]} />

        <CodeBlock>{`import torch
import torch.nn as nn
import torch.nn.functional as F

# === Manual GCN Layer tanpa PyG (untuk pemahaman) ===
class GCNLayerManual(nn.Module):
    def __init__(self, in_features, out_features):
        super().__init__()
        self.W = nn.Linear(in_features, out_features, bias=False)

    def forward(self, H, A):
        # A_tilde = A + I (self-loops)
        N = A.shape[0]
        A_tilde = A + torch.eye(N, device=A.device)
        # D_tilde^(-1/2)
        D_tilde = torch.diag(A_tilde.sum(dim=1))
        D_inv_sqrt = torch.diag(1.0 / torch.sqrt(D_tilde.diagonal() + 1e-8))
        # Normalized Laplacian: D^(-1/2) A_tilde D^(-1/2)
        A_norm = D_inv_sqrt @ A_tilde @ D_inv_sqrt
        return F.relu(A_norm @ self.W(H))

# === GCN untuk node classification ===
class GCN(nn.Module):
    def __init__(self, in_dim, hidden_dim, out_dim, dropout=0.5):
        super().__init__()
        self.gcn1 = GCNLayerManual(in_dim, hidden_dim)
        self.gcn2 = GCNLayerManual(hidden_dim, out_dim)
        self.dropout = nn.Dropout(dropout)

    def forward(self, X, A):
        h = self.dropout(self.gcn1(X, A))
        return self.gcn2(h, A)

# === GAT Attention Layer ===
class GATLayer(nn.Module):
    def __init__(self, in_dim, out_dim, heads=4, dropout=0.6):
        super().__init__()
        self.heads = heads
        self.out_dim = out_dim
        self.W = nn.Linear(in_dim, heads * out_dim, bias=False)
        self.a = nn.Parameter(torch.zeros(1, heads, 2 * out_dim))
        self.leaky_relu = nn.LeakyReLU(0.2)
        self.dropout = nn.Dropout(dropout)
        nn.init.xavier_uniform_(self.a)

    def forward(self, H, adj):
        N = H.shape[0]
        Wh = self.W(H).view(N, self.heads, self.out_dim)  # [N, heads, out_dim]
        # Attention coefficients
        e = (torch.cat([Wh.unsqueeze(1).expand(-1,N,-1,-1),
                         Wh.unsqueeze(0).expand(N,-1,-1,-1)], dim=-1)
             * self.a).sum(-1)  # [N, N, heads]
        e = self.leaky_relu(e)
        mask = (adj == 0).unsqueeze(-1).expand_as(e)
        e = e.masked_fill(mask, -1e9)
        alpha = F.softmax(e, dim=1)  # [N, N, heads]
        alpha = self.dropout(alpha)
        # Aggregation
        out = (alpha.unsqueeze(-1) * Wh.unsqueeze(0)).sum(1)  # [N, heads, out_dim]
        return out.view(N, self.heads * self.out_dim)

# === Demo dengan graph sintetis ===
torch.manual_seed(42)
N, F_in, F_hidden, F_out = 100, 16, 32, 4

X = torch.randn(N, F_in)
A = (torch.rand(N, N) > 0.85).float()
A = (A + A.T).clamp(0, 1)  # symmetric (undirected)

gcn = GCN(F_in, F_hidden, F_out)
gat = GATLayer(F_in, 8, heads=4)

with torch.no_grad():
    out_gcn = gcn(X, A)
    out_gat = gat(X, A)
    print(f"GCN output shape: {out_gcn.shape}")   # [100, 4]
    print(f"GAT output shape: {out_gat.shape}")   # [100, 32]

# === Dengan PyTorch Geometric (jika installed) ===
try:
    from torch_geometric.nn import GCNConv, GATConv, global_mean_pool
    class GCN_PyG(nn.Module):
        def __init__(self):
            super().__init__()
            self.conv1 = GCNConv(16, 64)
            self.conv2 = GCNConv(64, 32)
            self.classifier = nn.Linear(32, 4)
        def forward(self, x, edge_index, batch):
            x = F.relu(self.conv1(x, edge_index))
            x = F.dropout(x, p=0.5, training=self.training)
            x = F.relu(self.conv2(x, edge_index))
            x = global_mean_pool(x, batch)
            return self.classifier(x)
    print("PyTorch Geometric tersedia!")
except ImportError:
    print("Install: pip install torch-geometric")`}</CodeBlock>

        <TipBox type="info">
          GNN sangat cocok untuk: prediksi properti molekul (drug discovery), deteksi fraud
          (transaction graph), rekomendasi (user-item graph), knowledge graph completion, dan
          computer vision 3D (point clouds as graph). Untuk node classification: GCN/GAT (2-3 layer).
          Untuk graph classification: GIN + global pooling.
        </TipBox>
      </div>
    ),
  },

  {
    title: '🎭 Self-Supervised & Contrastive Learning',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Self-supervised learning (SSL) memungkinkan model belajar representasi yang kaya dari data
          tidak berlabel — yang jumlahnya jauh lebih banyak dari data berlabel. SSL telah merevolusi
          NLP (BERT, GPT) dan kini semakin mendominasi computer vision dan multimodal learning.
        </p>

        <SectionTitle icon="🔄">Supervised vs Self-Supervised</SectionTitle>
        <CompareTable
          headers={['Aspek', 'Supervised Learning', 'Self-Supervised Learning']}
          rows={[
            ['Label', 'Anotasi manual (mahal)', 'Sinyal dari data itu sendiri'],
            ['Data', 'Butuh labeled data', 'Belajar dari unlabeled data'],
            ['Representasi', 'Task-specific', 'General, transferable'],
            ['Contoh', 'ImageNet classification', 'SimCLR, BERT, CLIP'],
            ['Fine-tuning', 'Tidak perlu', 'Linear probe / full fine-tune'],
            ['Skalabilitas', 'Terbatas oleh labeling', 'Unlimited (internet-scale data)'],
          ]}
        />

        <SectionTitle icon="🧩">Pretext Tasks</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">
          Pretext task adalah tugas "buatan" yang menggunakan data sebagai label dirinya sendiri,
          memaksa model belajar representasi bermakna sebagai side effect.
        </p>
        <DiagramBox>{`
  Contoh Pretext Tasks:

  1. Rotation Prediction (RotNet)          2. Jigsaw Puzzle
     ┌───────┐    rotate 0°/90°/180°/270°    ┌─┬─┬─┐  acak posisi
     │  🐱   │  → predict rotation angle     │1│4│2│  → predict
     └───────┘                               │3│6│5│    permutasi
     Label = sudut rotasi (self-generated)   └─┴─┴─┘

  3. Inpainting / Masked Autoencoder (MAE)  4. Contrastive (SimCLR)
     ┌──────────┐  mask 75%                  [Augment 1] [Augment 2]
     │ ░ 🐱 ░ ░ │  → reconstruct              ↓            ↓
     └──────────┘     masked patches         z₁  ←close→  z₂ (same image)
     Loss = MSE pada patch yang di-mask      z₁  ←far→    z₃ (different image)
        `}</DiagramBox>

        <SectionTitle icon="🔗">SimCLR Framework (Chen et al., 2020)</SectionTitle>
        <FormulaBox
          label="NT-Xent Loss (Normalized Temperature-scaled Cross Entropy)"
          formula="ℓ(i,j) = -log[ exp(sim(zᵢ,zⱼ)/τ) / Σ_{k=1}^{2N} 𝟙[k≠i] exp(sim(zᵢ,zₖ)/τ) ]"
          note="sim(u,v) = cosine similarity = uᵀv/(||u||||v||). τ = temperature (0.07-0.5). i,j = pasangan augmentasi yang sama (positive pair). 2N-2 pasangan negatif."
        />
        <FormulaBox
          label="Total SimCLR Loss"
          formula="L = (1/2N) Σ_{k=1}^{N} [ℓ(2k-1, 2k) + ℓ(2k, 2k-1)]"
          note="Rata-ratakan loss dari dua arah untuk setiap pasangan positif dalam batch size 2N."
        />

        <DiagramBox>{`
  SimCLR Framework

  Input x ────┬──── augment t₁ ──→ f(·) encoder ──→ g(·) projection ──→ z₁
              │                    (ResNet-50)        (2-layer MLP)
              └──── augment t₂ ──→ f(·) encoder ──→ g(·) projection ──→ z₂
              [weight sharing]

  Augmentasi: random crop+resize, color jitter, grayscale, Gaussian blur
  Loss: maksimalkan similarity(z₁,z₂), minimasi similarity(z₁,z₃) ∀ z₃≠z₂

  Setelah pre-training: buang g(·), gunakan f(·) sebagai feature extractor
  Fine-tune dengan linear probe (hanya train head) atau full fine-tuning

  MoCo v2         BYOL              CLIP
  ┌──────────┐    ┌────────────┐    ┌──────────────────┐
  │ Momentum │    │ No negative│    │ Image-Text pairs  │
  │ encoder  │    │ samples!   │    │ 400M pairs        │
  │ Queue    │    │ Bootstrap  │    │ Contrastive I-T   │
  └──────────┘    └────────────┘    └──────────────────┘
        `}</DiagramBox>

        <FormulaBox
          label="BYOL: Bootstrap Your Own Latent (Grill et al., 2020)"
          formula="L_BYOL = ||q_θ(z_θ) - z'_ξ||²₂     s.t. z'_ξ dari momentum encoder ξ = τ·ξ + (1-τ)·θ"
          note="Tidak ada negative samples! Online network θ belajar memprediksi target network ξ. Stop gradient pada ξ sangat krusial untuk stabilitas."
        />
        <FormulaBox
          label="CLIP: Contrastive Language-Image Pre-training"
          formula="L_CLIP = -(1/N)[Σᵢ log(exp(sᵢᵢ/τ)/Σⱼ exp(sᵢⱼ/τ)) + Σᵢ log(exp(sᵢᵢ/τ)/Σⱼ exp(sⱼᵢ/τ))]"
          note="s_{ij} = cosine_sim(image_i_embed, text_j_embed). Simetris: maksimalkan diagonal, minimasi off-diagonal."
        />

        <ConceptGrid items={[
          { title: 'Positive Pair', desc: 'Dua augmentasi dari gambar yang sama. Model harus memetakannya ke representasi yang dekat dalam embedding space.', example: '(crop1(x), crop2(x)) → positive' },
          { title: 'Negative Pair', desc: 'Augmentasi dari gambar yang berbeda. Model harus memetakannya ke representasi yang jauh.', example: '(augment(x), augment(y)) → negative' },
          { title: 'Temperature τ', desc: 'Mengontrol "sharpness" distribusi softmax. τ kecil → sangat sharp, hard negatives. τ=0.07 SimCLR default.', example: 'Tuning τ sangat penting!' },
          { title: 'Projection Head', desc: 'MLP tambahan setelah encoder. Representasi di lapisan sebelum head (h) lebih baik untuk downstream tasks.', example: 'SimCLR: 2-layer MLP projection' },
          { title: 'Linear Probing', desc: 'Evaluasi kualitas representasi: freeze encoder, train hanya linear classifier. Metrik standar SSL benchmark.', example: 'Top-1 acc, ImageNet linear probe' },
          { title: 'MAE', desc: 'Masked Autoencoder: mask 75% patch, reconstruct. Efisien karena hanya encode visible patches. State-of-the-art vision SSL.', example: 'He et al. 2022 (ViT-L: 86.9% linear)' },
        ]} />

        <CodeBlock>{`import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision.transforms as transforms
import numpy as np
import matplotlib.pyplot as plt

# === Augmentasi SimCLR ===
class SimCLRAugmentation:
    def __init__(self, size=32, s=1.0):
        color_jitter = transforms.ColorJitter(0.8*s, 0.8*s, 0.8*s, 0.2*s)
        self.transform = transforms.Compose([
            transforms.RandomResizedCrop(size, scale=(0.2, 1.0)),
            transforms.RandomHorizontalFlip(p=0.5),
            transforms.RandomApply([color_jitter], p=0.8),
            transforms.RandomGrayscale(p=0.2),
            transforms.GaussianBlur(kernel_size=int(0.1*size)|1),
            transforms.ToTensor(),
            transforms.Normalize((0.5,), (0.5,)),
        ])

    def __call__(self, x):
        return self.transform(x), self.transform(x)

# === NT-Xent Loss ===
class NTXentLoss(nn.Module):
    def __init__(self, temperature=0.07, device='cpu'):
        super().__init__()
        self.tau = temperature
        self.device = device

    def forward(self, z1, z2):
        N = z1.shape[0]
        # Normalize embeddings
        z1 = F.normalize(z1, dim=1)
        z2 = F.normalize(z2, dim=1)
        # Cosine similarity matrix [2N, 2N]
        z = torch.cat([z1, z2], dim=0)
        sim = torch.matmul(z, z.T) / self.tau
        # Mask self-similarity (diagonal)
        mask = torch.eye(2*N, dtype=bool, device=self.device)
        sim = sim.masked_fill(mask, -1e9)
        # Labels: positive pair indices
        labels = torch.arange(N, device=self.device)
        labels = torch.cat([labels + N, labels])
        loss = F.cross_entropy(sim, labels)
        return loss

# === SimCLR Encoder ===
class SimCLREncoder(nn.Module):
    def __init__(self, base_dim=512, proj_dim=128):
        super().__init__()
        # Simplified encoder (gunakan ResNet-50 untuk real use)
        self.backbone = nn.Sequential(
            nn.Conv2d(3, 64, 3, padding=1), nn.BatchNorm2d(64), nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(64, 128, 3, padding=1), nn.BatchNorm2d(128), nn.ReLU(),
            nn.MaxPool2d(2),
            nn.AdaptiveAvgPool2d(4),
            nn.Flatten(),
        )
        self.projector = nn.Sequential(
            nn.Linear(128 * 16, base_dim), nn.ReLU(),
            nn.Linear(base_dim, proj_dim)
        )

    def forward(self, x):
        h = self.backbone(x)    # representation
        z = self.projector(h)   # projection
        return h, z

# === BYOL Momentum Update ===
def update_momentum_encoder(online_enc, target_enc, tau=0.999):
    for param_online, param_target in zip(
        online_enc.parameters(), target_enc.parameters()
    ):
        param_target.data = tau * param_target.data + (1-tau) * param_online.data

# === Demo Training Step ===
device = 'cuda' if torch.cuda.is_available() else 'cpu'
encoder = SimCLREncoder().to(device)
criterion = NTXentLoss(temperature=0.07, device=device)
optimizer = torch.optim.AdamW(encoder.parameters(), lr=3e-4, weight_decay=1e-4)

# Simulasi satu training step
batch_size = 64
x1 = torch.randn(batch_size, 3, 32, 32).to(device)
x2 = torch.randn(batch_size, 3, 32, 32).to(device)

optimizer.zero_grad()
_, z1 = encoder(x1)
_, z2 = encoder(x2)
loss = criterion(z1, z2)
loss.backward()
optimizer.step()

print(f"SimCLR Loss: {loss.item():.4f}")
print(f"Projection dim: {z1.shape}")

# === Evaluasi dengan Linear Probing ===
def linear_probe_accuracy(encoder, X_train, y_train, X_test, y_test):
    encoder.eval()
    with torch.no_grad():
        h_train, _ = encoder(X_train)
        h_test,  _ = encoder(X_test)
    classifier = nn.Linear(h_train.shape[1], 10).to(device)
    opt_probe = torch.optim.Adam(classifier.parameters(), lr=1e-3)
    for epoch in range(100):
        logits = classifier(h_train)
        loss_p = F.cross_entropy(logits, y_train)
        opt_probe.zero_grad(); loss_p.backward(); opt_probe.step()
    with torch.no_grad():
        preds = classifier(h_test).argmax(dim=1)
        acc = (preds == y_test).float().mean()
    return acc.item()

print("SimCLR framework berhasil diinisialisasi!")`}</CodeBlock>

        <TipBox type="tip">
          Untuk praktik di S2/riset: mulai dengan SimCLR atau BYOL untuk vision task. Untuk NLP:
          gunakan pre-trained BERT/RoBERTa dan fine-tune. CLIP sangat berguna untuk zero-shot
          classification dan multimodal tasks. Batch size sangat penting untuk contrastive learning —
          lebih besar lebih baik (SimCLR best dengan batch 4096-8192).
        </TipBox>
      </div>
    ),
  },

  {
    title: '🌊 Diffusion Models & Generative AI Deep Dive',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Diffusion models adalah keluarga model generatif yang saat ini mencapai state-of-the-art dalam
          image synthesis, audio generation, dan molecular design. Model ini bekerja dengan belajar
          membalik proses "penambahan noise" secara bertahap — dari gambar bersih menjadi noise murni,
          kemudian belajar langkah-langkah denoising untuk menghasilkan gambar baru.
        </p>

        <DiffusionModelDiagram />

        <SectionTitle icon="➡️">Forward Process: Penambahan Noise Bertahap</SectionTitle>
        <FormulaBox
          label="Forward Process q(x_t | x_{t-1}) — Gaussian Noise"
          formula="q(x_t | x_{t-1}) = N(x_t; √(1-β_t) x_{t-1}, β_t I)"
          note="β_t = noise schedule (misal linear: β₁=1e-4 hingga β_T=0.02). Setiap langkah menambah sedikit Gaussian noise."
        />
        <FormulaBox
          label="Forward Process dalam Satu Langkah (Reparameterization)"
          formula="x_t = √ᾱ_t × x₀ + √(1-ᾱ_t) × ε     dimana ε ~ N(0,I)"
          note="ᾱ_t = Πₛ₌₁ᵗ (1-βₛ). Sangat berguna karena bisa sample x_t langsung dari x₀ tanpa loop. ᾱ_T ≈ 0 (noise murni)."
        />

        <DiagramBox>{`
  Diffusion Process (T=1000 steps)

  x₀ (gambar asli)   x_{T/4}        x_{T/2}        x_T (noise murni)
  ┌──────────┐       ┌──────────┐   ┌──────────┐   ┌──────────┐
  │  🐱      │  →→→  │ 🐱+noise │→→→│ ░░░░░░░░ │→→→│ Gaussian │
  │ (clean)  │ q(x_t)│ (slight) │   │ (noisy)  │   │  noise   │
  └──────────┘       └──────────┘   └──────────┘   └──────────┘
      ↑                                                    ↓
  x̂₀ (rekonstruksi) ←←← Reverse Process p_θ ←←←←←←←←←←←

  Model θ belajar:  ε_θ(x_t, t) → prediksi noise yang ditambahkan

  Setelah training: mulai dari x_T ~ N(0,I), iteratif denoise ke x₀

  U-Net Architecture untuk ε_θ:
  ┌─────────────────────────────────────────────────────────────┐
  │  x_t + t_embedding                                          │
  │  ↓                                                          │
  │  DownBlock₁ → DownBlock₂ → DownBlock₃                      │
  │  (ResNet + SelfAttn)   [skip connections]                   │
  │              ↓                                              │
  │          MiddleBlock (ResNet + CrossAttn w/ text)           │
  │              ↓                                              │
  │  UpBlock₃ ← UpBlock₂ ← UpBlock₁                            │
  │  (concat skip)                                              │
  │  ↓                                                          │
  │  ε_θ(x_t, t, c)  ← predicted noise (c = text conditioning) │
  └─────────────────────────────────────────────────────────────┘
        `}</DiagramBox>

        <SectionTitle icon="🔁">Reverse Process & Training Objective</SectionTitle>
        <FormulaBox
          label="Reverse Process p_θ(x_{t-1} | x_t)"
          formula="p_θ(x_{t-1}|x_t) = N(x_{t-1}; μ_θ(x_t,t), Σ_θ(x_t,t))"
          note="Distribusi Gaussian yang parameternya diprediksi oleh neural network. Kita belajar μ_θ dengan memprediksi noise ε_θ."
        />
        <FormulaBox
          label="DDPM Training Objective (Ho et al., 2020) — Simplified Loss"
          formula="L_simple = E_{t,x₀,ε}[ ||ε - ε_θ(√ᾱ_t x₀ + √(1-ᾱ_t) ε, t)||² ]"
          note="Sangat sederhana! Ambil x₀, sample t dan ε, hitung x_t, prediksi ε, hitung MSE. Ini sudah cukup untuk generate gambar berkualitas tinggi."
        />
        <FormulaBox
          label="DDPM Sampling Step (Reverse)"
          formula="x_{t-1} = (1/√α_t)(x_t - β_t/√(1-ᾱ_t) × ε_θ(x_t,t)) + √β_t × z"
          note="z ~ N(0,I) untuk t > 1, z = 0 untuk t = 1. α_t = 1-β_t. Butuh T=1000 langkah → lambat!"
        />

        <SectionTitle icon="⚡">DDIM: Faster Sampling</SectionTitle>
        <FormulaBox
          label="DDIM Deterministic Sampling (Song et al., 2021)"
          formula="x_{t-1} = √ᾱ_{t-1} × x̂₀ + √(1-ᾱ_{t-1}) × ε_θ(x_t,t)"
          note="x̂₀ = (x_t - √(1-ᾱ_t) ε_θ(x_t,t)) / √ᾱ_t. Deterministik (z=0). Bisa sample dengan hanya 50-200 step!"
        />

        <SectionTitle icon="🎨">Stable Diffusion Architecture</SectionTitle>
        <CompareTable
          headers={['Komponen', 'Fungsi', 'Detail Arsitektur']}
          rows={[
            ['VAE Encoder', 'Compress gambar 512×512 → 64×64 latent', 'ResNet blocks + downsampling × 4'],
            ['VAE Decoder', 'Decode latent → gambar resolusi asli', 'ResNet blocks + upsampling × 4'],
            ['CLIP Text Encoder', 'Encode text prompt → text embedding', 'ViT-L/14, 768-dim embeddings'],
            ['U-Net', 'Denoising di latent space', 'ResNet + CrossAttn tiap DownBlock'],
            ['Time Embedding', 'Encode timestep t ke U-Net', 'Sinusoidal + MLP → 512-dim'],
            ['ControlNet', 'Conditional control (pose, depth, edge)', 'Frozen copy U-Net + zero-conv'],
          ]}
        />

        <DiagramBox>{`
  Stable Diffusion Pipeline

  Prompt: "a photo of a cat"
      ↓
  CLIP Text Encoder → text_emb [77, 768]
                                    ↘
  x_T ~ N(0,I) [1,4,64,64]          ↓
      ↓                        U-Net ε_θ(x_t, t, text_emb)
  DDIM reverse x_T → x_{T-1} → ... → x₀  [1,4,64,64]
      ↓
  VAE Decoder
      ↓
  Output image  [1,3,512,512]

  Latent Diffusion: diffusion di latent space (4×64×64) bukan pixel space (3×512×512)
  → 48× lebih efisien dalam memory dan komputasi!

  Classifier-Free Guidance (CFG):
  ε_guided = ε_uncond + w × (ε_cond - ε_uncond)    w = guidance scale (7-15)
  → Lebih adherent ke prompt tapi kurang diversity
        `}</DiagramBox>

        <ConceptGrid items={[
          { title: 'Noise Schedule', desc: 'βₜ menentukan seberapa cepat noise ditambahkan. Linear (DDPM), cosine (improved DDPM), atau learned schedule.', example: 'Cosine: ᾱₜ = cos²(πt/2T) → lebih smooth' },
          { title: 'Latent Diffusion', desc: 'Jalankan diffusion di compressed latent space (VAE) bukan pixel space. Drastis mengurangi komputasi.', example: 'SD: 4×64×64 vs 3×512×512 pixel' },
          { title: 'Classifier-Free Guidance', desc: 'Train model dengan dan tanpa conditioning. Inference: interpolasi dua prediksi. Tidak butuh classifier terpisah.', example: 'w=7.5: balance quality vs diversity' },
          { title: 'ControlNet', desc: 'Kondisikan generasi dengan sinyal tambahan (pose, depth, edge map). Copy U-Net + zero-initialized conv.', example: 'OpenPose → character pose control' },
          { title: 'Score Matching', desc: 'Fondasi matematis diffusion: belajar score function ∇_x log p(x). DDPM ≡ belajar denoising score matching.', example: 'Song & Ermon, NeurIPS 2019' },
          { title: 'Flow Matching', desc: 'Alternatif modern diffusion: belajar straight-line flow dari noise ke data. Lebih sederhana dan efisien dari DDPM.', example: 'Stable Diffusion 3, Flux.1 (2024)' },
        ]} />

        <CodeBlock>{`# Inference dengan HuggingFace Diffusers
# pip install diffusers transformers accelerate

import torch
from diffusers import (
    StableDiffusionPipeline,
    DDIMScheduler,
    DPMSolverMultistepScheduler,
    StableDiffusionImg2ImgPipeline,
    StableDiffusionInpaintPipeline,
)
from diffusers.utils import load_image
import matplotlib.pyplot as plt
import numpy as np

# === Text-to-Image Generation ===
model_id = "runwayml/stable-diffusion-v1-5"
device = "cuda" if torch.cuda.is_available() else "cpu"
dtype  = torch.float16 if device == "cuda" else torch.float32

# Load pipeline dengan DDIM scheduler (50 steps, deterministic)
pipe = StableDiffusionPipeline.from_pretrained(
    model_id, torch_dtype=dtype,
    scheduler=DDIMScheduler.from_pretrained(model_id, subfolder="scheduler")
)
pipe = pipe.to(device)

# Memory optimization (untuk GPU kecil)
pipe.enable_attention_slicing()
# pipe.enable_model_cpu_offload()  # jika VRAM < 8GB

# Generate gambar
prompt = "a photorealistic cat sitting on a book, studio lighting, 4k"
negative_prompt = "blurry, low quality, distorted, cartoon"

result = pipe(
    prompt=prompt,
    negative_prompt=negative_prompt,
    num_inference_steps=50,        # 50 DDIM steps
    guidance_scale=7.5,            # CFG scale
    width=512, height=512,
    generator=torch.manual_seed(42)
)
image = result.images[0]
image.save("generated_cat.png")
print(f"Gambar disimpan: 512×512, {len(result.images)} gambar")

# === Faster sampling dengan DPM-Solver++ (20 steps) ===
pipe.scheduler = DPMSolverMultistepScheduler.from_pretrained(
    model_id, subfolder="scheduler"
)
result_fast = pipe(prompt=prompt, num_inference_steps=20,
                    guidance_scale=7.5, generator=torch.manual_seed(42))
result_fast.images[0].save("generated_fast.png")
print("Generasi cepat (20 steps) tersimpan!")

# === Visualisasi Noise Schedule ===
import numpy as np
T = 1000
betas_linear = np.linspace(1e-4, 0.02, T)
betas_cosine = 1 - np.array([
    np.cos(((t/T + 0.008)/(1+0.008)) * np.pi/2)**2 /
    np.cos((0.008/(1+0.008)) * np.pi/2)**2
    for t in range(1, T+1)
])
alpha_bar_linear = np.cumprod(1 - betas_linear)
alpha_bar_cosine = np.cumprod(1 - betas_cosine.clip(0, 0.999))

plt.figure(figsize=(10, 4))
plt.subplot(1, 2, 1)
plt.plot(alpha_bar_linear, label='Linear schedule', lw=2)
plt.plot(alpha_bar_cosine, label='Cosine schedule', lw=2)
plt.xlabel('Timestep t'); plt.ylabel('ᾱₜ (signal fraction)')
plt.title('Noise Schedule Comparison'); plt.legend(); plt.grid(True, alpha=0.3)

plt.subplot(1, 2, 2)
snr_linear = alpha_bar_linear / (1 - alpha_bar_linear + 1e-8)
snr_cosine = alpha_bar_cosine / (1 - alpha_bar_cosine + 1e-8)
plt.semilogy(snr_linear, label='Linear SNR', lw=2)
plt.semilogy(snr_cosine, label='Cosine SNR', lw=2)
plt.xlabel('Timestep t'); plt.ylabel('Signal-to-Noise Ratio')
plt.title('SNR vs Timestep'); plt.legend(); plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('noise_schedule.png', dpi=150)
print("Plot noise schedule tersimpan!")`}</CodeBlock>

        <TipBox type="info">
          <strong>Perkembangan terkini (2024-2025):</strong> Stable Diffusion 3 dan Flux.1 menggunakan
          Flow Matching (lebih efisien dari DDPM). DiT (Diffusion Transformer) menggantikan U-Net
          dengan Vision Transformer. Konsistensi Model (Consistency Models) bisa generate dalam 1-4
          steps. Untuk riset: pelajari score matching dan flow matching sebagai fondasi matematisnya.
        </TipBox>
        <TipBox type="success">
          Untuk proyek S2 yang melibatkan generative AI: HuggingFace Diffusers adalah library terbaik.
          Untuk fine-tuning pada domain spesifik: DreamBooth (3-5 gambar referensi), LoRA (efisien VRAM),
          atau Textual Inversion. Untuk evaluasi kualitas generasi: FID (Fréchet Inception Distance),
          IS (Inception Score), dan CLIP score.
        </TipBox>
      </div>
    ),
  },
]
