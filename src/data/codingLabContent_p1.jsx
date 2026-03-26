import { CodeBlock, SectionTitle, FormulaBox, CompareTable, DiagramBox } from './mlContent_p1.jsx'
import { ConceptGrid, TipBox, StepList, ExampleBox } from './mathContent.jsx'
import { PythonDataTypesTree, ControlFlowDiagram, OOPDiagram, NumpyArrayDiagram, PandasDiagram, DataCleaningPipeline } from './codingLabDiagrams.jsx'

// ═══════════════════════════════════════════════════════════════
// PART 1: Python Fundamentals (8 sections)
// ═══════════════════════════════════════════════════════════════

export const pythonBasicsSections = [
  {
    title: '🐍 Pengenalan Python & Setup Environment',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Python adalah bahasa pemrograman paling populer untuk Data Science, Machine Learning, dan AI. Mari mulai dari instalasi hingga program pertama.</p>

        <SectionTitle icon="💻">Instalasi Python</SectionTitle>
        <StepList steps={[
          'Download Python dari python.org (pilih versi 3.10+)',
          'Centang "Add Python to PATH" saat instalasi',
          'Verifikasi: buka terminal → ketik python --version',
          'Install VS Code sebagai IDE (gratis, ringan, banyak extension)',
        ]} />

        <SectionTitle icon="📦">Virtual Environment</SectionTitle>
        <p className="text-sm text-gray-600 mb-2">Virtual environment mengisolasi package setiap project agar tidak saling bentrok.</p>
        <CodeBlock>{`# Buat virtual environment
python -m venv myenv

# Aktivasi (Windows)
myenv\\Scripts\\activate

# Aktivasi (Mac/Linux)
source myenv/bin/activate

# Install package
pip install numpy pandas matplotlib

# Simpan daftar package
pip freeze > requirements.txt

# Install dari requirements.txt (di komputer lain)
pip install -r requirements.txt

# Deaktivasi
deactivate`}</CodeBlock>

        <SectionTitle icon="🚀">Program Pertama</SectionTitle>
        <CodeBlock>{`# Hello World!
print("Hello, Data Scientist! 🎉")

# print() bisa mencetak berbagai tipe data
print(42)                    # integer
print(3.14)                  # float
print(True)                  # boolean
print([1, 2, 3])             # list

# Beberapa argumen sekaligus
print("Nama:", "Budi", "| Umur:", 25)

# Separator dan end
print("A", "B", "C", sep=" → ")     # A → B → C
print("Baris 1", end=" ")
print("masih baris 1")              # Baris 1 masih baris 1

# Input dari user
nama = input("Masukkan nama: ")
umur = int(input("Masukkan umur: "))   # convert ke integer
print(f"Halo {nama}, umur kamu {umur} tahun!")`}</CodeBlock>

        <TipBox title="Jupyter Notebook">
          Untuk belajar, gunakan Jupyter Notebook — bisa jalankan kode per sel dan lihat output langsung. Install: <code>pip install jupyter</code>, jalankan: <code>jupyter notebook</code>. Atau gunakan Google Colab (gratis, di browser).
        </TipBox>

        <SectionTitle icon="🔢">Tipe Data Dasar</SectionTitle>
        <CodeBlock>{`# Integer — bilangan bulat
umur = 25
jumlah = -10

# Float — bilangan desimal
tinggi = 175.5
pi = 3.14159

# String — teks
nama = "Budi Santoso"
kota = 'Jakarta'

# Boolean — True/False
aktif = True
lulus = False

# None — kosong/belum diisi
data = None

# Cek tipe data
print(type(umur))     # <class 'int'>
print(type(tinggi))   # <class 'float'>
print(type(nama))     # <class 'str'>
print(type(aktif))    # <class 'bool'>`}</CodeBlock>

        <ConceptGrid items={[
          { title: 'Python', desc: 'Bahasa pemrograman high-level, mudah dibaca, ekosistem DS/ML paling lengkap.', example: 'print("Hello")' },
          { title: 'pip', desc: 'Package manager Python untuk install library dari PyPI.', example: 'pip install numpy' },
          { title: 'Virtual Env', desc: 'Isolasi dependencies per project — hindari konflik versi.', example: 'python -m venv env' },
          { title: 'Jupyter', desc: 'Notebook interaktif — jalankan kode per sel, ideal untuk eksplorasi data.', example: 'jupyter notebook' },
        ]} />
      </div>
    ),
  },
  {
    title: '📊 Variabel, Tipe Data & Operator',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Memahami tipe data dan operator adalah fondasi pemrograman. Python memiliki tipe data yang kaya dan operator yang intuitif.</p>

        <PythonDataTypesTree />

        <SectionTitle icon="📦">Struktur Data Python</SectionTitle>
        <CodeBlock>{`# ─── LIST (mutable, ordered) ───────────────────────
buah = ["apel", "jeruk", "mangga"]
buah.append("anggur")       # tambah di akhir
buah.insert(1, "pisang")    # tambah di posisi 1
buah.pop()                  # hapus terakhir → "anggur"
buah.remove("jeruk")        # hapus berdasarkan nilai
print(buah[0])              # "apel" (index mulai 0)
print(buah[-1])             # elemen terakhir
print(buah[1:3])            # slicing: index 1 sampai 2
print(len(buah))            # jumlah elemen

# ─── TUPLE (immutable, ordered) ────────────────────
koordinat = (3.5, 7.2)
x, y = koordinat            # unpacking
# koordinat[0] = 5          # ERROR! tuple tidak bisa diubah

# ─── DICTIONARY (key-value pairs) ──────────────────
mahasiswa = {
    "nama": "Budi",
    "umur": 22,
    "jurusan": "Informatika",
    "ipk": 3.75
}
print(mahasiswa["nama"])           # "Budi"
print(mahasiswa.get("email", "-")) # "-" (default jika key tidak ada)
mahasiswa["semester"] = 7          # tambah key baru
del mahasiswa["ipk"]               # hapus key

# Loop dictionary
for key, value in mahasiswa.items():
    print(f"{key}: {value}")

# ─── SET (unik, unordered) ─────────────────────────
angka = {1, 2, 3, 2, 1}     # → {1, 2, 3} (duplikat dihapus)
angka.add(4)
angka.discard(2)
set_a = {1, 2, 3}
set_b = {2, 3, 4}
print(set_a & set_b)         # intersection: {2, 3}
print(set_a | set_b)         # union: {1, 2, 3, 4}
print(set_a - set_b)         # difference: {1}`}</CodeBlock>

        <SectionTitle icon="➕">Operator</SectionTitle>
        <CodeBlock>{`# ─── Aritmatika ────────────────────────────────────
a, b = 17, 5
print(a + b)    # 22  (penjumlahan)
print(a - b)    # 12  (pengurangan)
print(a * b)    # 85  (perkalian)
print(a / b)    # 3.4 (pembagian float)
print(a // b)   # 3   (pembagian bulat / floor division)
print(a % b)    # 2   (modulo / sisa bagi)
print(a ** b)   # 1419857 (pangkat)

# ─── Perbandingan (return True/False) ──────────────
print(5 == 5)   # True   (sama dengan)
print(5 != 3)   # True   (tidak sama)
print(5 > 3)    # True   (lebih besar)
print(5 <= 5)   # True   (kurang dari atau sama)

# ─── Logika ────────────────────────────────────────
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# ─── Membership & Identity ─────────────────────────
print(3 in [1, 2, 3])       # True (ada di dalam list)
print("a" not in "hello")   # True
print(5 is 5)               # True (identitas objek)

# ─── Type Casting ──────────────────────────────────
x = int("42")       # string → int
y = float("3.14")   # string → float
z = str(100)         # int → string
w = list("abc")      # string → list: ['a', 'b', 'c']
n = bool(0)          # 0 → False, non-zero → True`}</CodeBlock>

        <CompareTable
          headers={['Tipe', 'Mutable?', 'Ordered?', 'Duplikat?', 'Contoh']}
          rows={[
            ['list', 'Ya', 'Ya', 'Ya', '[1, 2, 2, 3]'],
            ['tuple', 'Tidak', 'Ya', 'Ya', '(1, 2, 2, 3)'],
            ['dict', 'Ya', 'Ya (3.7+)', 'Key unik', '{"a": 1}'],
            ['set', 'Ya', 'Tidak', 'Tidak', '{1, 2, 3}'],
          ]}
        />

        <TipBox title="Kapan Pakai Apa?">
          List = koleksi umum yang bisa berubah. Tuple = data tetap (koordinat, return multi-value). Dict = mapping key-value (JSON-like). Set = butuh keunikan atau operasi himpunan.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🔄 Kontrol Alur: If-Else, Loop & Functions',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Kontrol alur memungkinkan program mengambil keputusan dan mengulang operasi. Functions membantu mengorganisir kode agar reusable.</p>

        <ControlFlowDiagram />

        <SectionTitle icon="🔀">If-Elif-Else</SectionTitle>
        <CodeBlock>{`# Percabangan dasar
nilai = 85

if nilai >= 90:
    grade = "A"
elif nilai >= 80:
    grade = "B"
elif nilai >= 70:
    grade = "C"
else:
    grade = "D"
print(f"Nilai {nilai} → Grade {grade}")  # Grade B

# Ternary operator (satu baris)
status = "Lulus" if nilai >= 60 else "Tidak Lulus"

# Multiple conditions
umur = 25
punya_ktp = True
if umur >= 17 and punya_ktp:
    print("Boleh memilih")`}</CodeBlock>

        <SectionTitle icon="🔁">For Loop</SectionTitle>
        <CodeBlock>{`# Loop melalui list
buah = ["apel", "jeruk", "mangga"]
for b in buah:
    print(b)

# range() — generate angka
for i in range(5):          # 0, 1, 2, 3, 4
    print(i, end=" ")

for i in range(2, 10, 3):   # 2, 5, 8 (start, stop, step)
    print(i)

# enumerate() — dapat index + value
for i, b in enumerate(buah):
    print(f"{i}. {b}")      # 0. apel, 1. jeruk, ...

# zip() — loop paralel
nama = ["Budi", "Ani", "Cici"]
nilai = [85, 92, 78]
for n, v in zip(nama, nilai):
    print(f"{n}: {v}")

# Loop dictionary
data = {"a": 1, "b": 2, "c": 3}
for key, val in data.items():
    print(f"{key} = {val}")

# break & continue
for i in range(10):
    if i == 3:
        continue     # skip 3, lanjut ke 4
    if i == 7:
        break        # berhenti di 7
    print(i)         # 0 1 2 4 5 6`}</CodeBlock>

        <SectionTitle icon="⚡">List Comprehension</SectionTitle>
        <CodeBlock>{`# Cara biasa
squares = []
for x in range(10):
    squares.append(x ** 2)

# List comprehension (1 baris, lebih cepat!)
squares = [x ** 2 for x in range(10)]

# Dengan kondisi
genap = [x for x in range(20) if x % 2 == 0]

# Nested comprehension
matrix = [[i * j for j in range(4)] for i in range(3)]

# Dict comprehension
word_len = {w: len(w) for w in ["hello", "world", "python"]}
# {'hello': 5, 'world': 5, 'python': 6}`}</CodeBlock>

        <SectionTitle icon="🔧">Functions</SectionTitle>
        <CodeBlock>{`# Fungsi dasar
def sapa(nama):
    return f"Halo, {nama}!"

print(sapa("Budi"))  # "Halo, Budi!"

# Default parameter
def hitung_bmi(berat, tinggi_cm, satuan="metric"):
    tinggi_m = tinggi_cm / 100
    bmi = berat / (tinggi_m ** 2)
    return round(bmi, 1)

print(hitung_bmi(70, 175))  # 22.9

# *args (positional arguments) & **kwargs (keyword arguments)
def ringkasan(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

ringkasan(1, 2, 3, nama="Budi", umur=25)
# Args: (1, 2, 3)
# Kwargs: {'nama': 'Budi', 'umur': 25}

# Lambda function (fungsi anonim)
kuadrat = lambda x: x ** 2
print(kuadrat(5))  # 25

# Lambda dengan sorted
siswa = [("Budi", 85), ("Ani", 92), ("Cici", 78)]
siswa_sorted = sorted(siswa, key=lambda s: s[1], reverse=True)
# [('Ani', 92), ('Budi', 85), ('Cici', 78)]

# Map & Filter
angka = [1, 2, 3, 4, 5]
kuadrat_semua = list(map(lambda x: x**2, angka))     # [1,4,9,16,25]
genap_saja = list(filter(lambda x: x%2==0, angka))   # [2, 4]`}</CodeBlock>

        <TipBox title="While Loop">
          Gunakan while saat tidak tahu berapa kali loop berjalan: <code>while kondisi: ...</code>. Hati-hati infinite loop — pastikan kondisi akan menjadi False.
        </TipBox>
      </div>
    ),
  },
  {
    title: '📝 String & File Handling',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Manipulasi string dan file adalah skill esensial untuk data processing. Python punya tools yang sangat powerful untuk keduanya.</p>

        <SectionTitle icon="✏️">String Methods</SectionTitle>
        <CodeBlock>{`teks = "  Hello, World! Python is Great  "

# Transformasi
teks.upper()          # "  HELLO, WORLD! PYTHON IS GREAT  "
teks.lower()          # "  hello, world! python is great  "
teks.title()          # "  Hello, World! Python Is Great  "
teks.strip()          # "Hello, World! Python is Great" (hapus spasi)
teks.lstrip()         # hapus spasi kiri saja
teks.rstrip()         # hapus spasi kanan saja

# Pencarian & penggantian
teks.find("Python")       # 16 (index pertama ditemukan)
teks.count("o")           # 2 (jumlah kemunculan)
teks.replace("World", "Data")  # "Hello, Data! ..."
teks.startswith("  Hello")     # True
teks.endswith("Great  ")       # True

# Split & Join
kalimat = "Python,Java,C++,JavaScript"
bahasa = kalimat.split(",")     # ['Python', 'Java', 'C++', 'JavaScript']
gabung = " | ".join(bahasa)     # "Python | Java | C++ | JavaScript"

# Slicing
s = "DataScience"
print(s[0:4])       # "Data"
print(s[4:])        # "Science"
print(s[-7:])       # "Science"
print(s[::-1])      # "ecneicSataD" (reverse)`}</CodeBlock>

        <SectionTitle icon="🎯">f-String Formatting</SectionTitle>
        <CodeBlock>{`nama = "Budi"
nilai = 92.567
total = 1500000

# f-string dasar
print(f"Nama: {nama}, Nilai: {nilai}")

# Format angka
print(f"Nilai: {nilai:.2f}")          # "92.57" (2 desimal)
print(f"Total: Rp {total:,.0f}")      # "Rp 1,500,000"
print(f"Persen: {0.8567:.1%}")        # "85.7%"
print(f"Padding: {42:>10}")           # "        42" (rata kanan)
print(f"Padding: {42:<10}")           # "42        " (rata kiri)
print(f"Padding: {42:0>5}")           # "00042" (zero-pad)

# Ekspresi di dalam f-string
print(f"2 + 3 = {2 + 3}")            # "2 + 3 = 5"
print(f"{'hello'.upper()}")           # "HELLO"`}</CodeBlock>

        <SectionTitle icon="📂">File Handling</SectionTitle>
        <CodeBlock>{`# ─── Menulis file ──────────────────────────────────
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Baris pertama\\n")
    f.write("Baris kedua\\n")

# Append (tambah di akhir)
with open("data.txt", "a") as f:
    f.write("Baris ketiga\\n")

# ─── Membaca file ─────────────────────────────────
with open("data.txt", "r") as f:
    isi = f.read()           # baca semua
    print(isi)

with open("data.txt", "r") as f:
    baris = f.readlines()    # list of lines
    for b in baris:
        print(b.strip())

# ─── CSV tanpa library ────────────────────────────
with open("data.csv", "r") as f:
    header = f.readline().strip().split(",")
    for line in f:
        values = line.strip().split(",")
        print(dict(zip(header, values)))

# ─── CSV dengan module csv ────────────────────────
import csv
with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["nama"], row["nilai"])

# ─── JSON ─────────────────────────────────────────
import json

# Menulis JSON
data = {"nama": "Budi", "nilai": [85, 90, 78]}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Membaca JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
    print(loaded["nama"])    # "Budi"`}</CodeBlock>

        <TipBox title="Context Manager (with)">
          Selalu gunakan <code>with open(...) as f:</code> untuk file I/O. Python otomatis menutup file setelah blok selesai, mencegah resource leak dan data corruption.
        </TipBox>
      </div>
    ),
  },
  {
    title: '📦 OOP Dasar untuk Data Science',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Object-Oriented Programming membantu mengorganisir kode menjadi class yang reusable — penting saat membangun pipeline ML.</p>

        <OOPDiagram />

        <SectionTitle icon="🏗️">Class & Object</SectionTitle>
        <CodeBlock>{`class DataProcessor:
    """Class untuk memproses dataset."""

    def __init__(self, name, data):
        self.name = name          # instance attribute
        self.data = data
        self.is_clean = False

    def info(self):
        """Tampilkan info dataset."""
        print(f"Dataset: {self.name}")
        print(f"Jumlah baris: {len(self.data)}")
        print(f"Status: {'Bersih' if self.is_clean else 'Belum dibersihkan'}")

    def clean(self):
        """Bersihkan data: hapus None."""
        self.data = [x for x in self.data if x is not None]
        self.is_clean = True
        print(f"✅ {len(self.data)} baris tersisa setelah cleaning")
        return self    # method chaining

    def statistics(self):
        """Hitung statistik dasar."""
        if not self.data:
            return {}
        nums = [x for x in self.data if isinstance(x, (int, float))]
        return {
            "count": len(nums),
            "mean": sum(nums) / len(nums),
            "min": min(nums),
            "max": max(nums),
        }

# Penggunaan
raw = [23, None, 45, 67, None, 89, 12, None, 56]
dp = DataProcessor("Nilai Ujian", raw)
dp.info()
dp.clean()                    # hapus None
print(dp.statistics())        # {'count': 6, 'mean': 48.67, ...}`}</CodeBlock>

        <SectionTitle icon="🧬">Inheritance & Dunder Methods</SectionTitle>
        <CodeBlock>{`class Model:
    """Base class untuk semua model."""

    def __init__(self, name):
        self.name = name
        self.is_trained = False

    def train(self, X, y):
        raise NotImplementedError("Subclass harus implementasi train()")

    def __str__(self):
        status = "trained" if self.is_trained else "untrained"
        return f"Model({self.name}, {status})"

    def __repr__(self):
        return f"Model(name='{self.name}')"

class LinearModel(Model):
    """Model regresi linear sederhana."""

    def __init__(self):
        super().__init__("LinearRegression")
        self.coef = None

    def train(self, X, y):
        # Simplified: y = mean(y)
        self.coef = sum(y) / len(y)
        self.is_trained = True
        print(f"✅ {self.name} trained! coef = {self.coef:.2f}")

    def predict(self, X):
        if not self.is_trained:
            raise ValueError("Model belum di-train!")
        return [self.coef] * len(X)

# Penggunaan
model = LinearModel()
print(model)                # Model(LinearRegression, untrained)
model.train([1,2,3], [10,20,30])
preds = model.predict([4, 5])
print(preds)                # [20.0, 20.0]`}</CodeBlock>

        <SectionTitle icon="🎯">@property Decorator</SectionTitle>
        <CodeBlock>{`class Dataset:
    def __init__(self, data):
        self._data = data

    @property
    def shape(self):
        """Akses seperti atribut, bukan method."""
        return (len(self._data), len(self._data[0]) if self._data else 0)

    @property
    def size(self):
        return self.shape[0] * self.shape[1]

ds = Dataset([[1,2,3], [4,5,6]])
print(ds.shape)    # (2, 3)  — tanpa ()
print(ds.size)     # 6`}</CodeBlock>

        <ConceptGrid items={[
          { title: '__init__', desc: 'Constructor — dipanggil saat objek dibuat.', example: 'def __init__(self, x): self.x = x' },
          { title: '__str__', desc: 'String representation untuk print().', example: 'def __str__(self): return f"{self.name}"' },
          { title: '__len__', desc: 'Dipanggil saat len(obj).', example: 'def __len__(self): return len(self.data)' },
          { title: 'super()', desc: 'Panggil method parent class.', example: 'super().__init__(name)' },
        ]} />
      </div>
    ),
  },
  {
    title: '🔧 Error Handling & Debugging',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Error handling mencegah program crash dan membantu mendiagnosis masalah. Skill debugging esensial untuk developer.</p>

        <SectionTitle icon="🛡️">Try / Except / Finally</SectionTitle>
        <CodeBlock>{`# Dasar try-except
try:
    angka = int(input("Masukkan angka: "))
    hasil = 100 / angka
    print(f"Hasil: {hasil}")
except ValueError:
    print("❌ Input bukan angka!")
except ZeroDivisionError:
    print("❌ Tidak bisa bagi dengan nol!")
except Exception as e:
    print(f"❌ Error tidak terduga: {e}")
finally:
    print("Blok ini SELALU dijalankan")

# ─── Contoh real: membaca file ─────────────────────
def baca_csv(filepath):
    try:
        with open(filepath, "r") as f:
            data = f.readlines()
        return [line.strip().split(",") for line in data]
    except FileNotFoundError:
        print(f"⚠️ File '{filepath}' tidak ditemukan")
        return []
    except PermissionError:
        print(f"⚠️ Tidak punya akses ke '{filepath}'")
        return []

# ─── Raise exception ──────────────────────────────
def validasi_umur(umur):
    if not isinstance(umur, int):
        raise TypeError("Umur harus integer")
    if umur < 0 or umur > 150:
        raise ValueError(f"Umur tidak valid: {umur}")
    return True

# ─── Custom Exception ─────────────────────────────
class DataValidationError(Exception):
    def __init__(self, column, message):
        self.column = column
        super().__init__(f"Kolom '{column}': {message}")

def validasi_kolom(df_col, nama):
    if any(v is None for v in df_col):
        raise DataValidationError(nama, "mengandung nilai NULL")

# ─── Assert (debugging) ───────────────────────────
def train_model(X, y):
    assert len(X) == len(y), f"Ukuran X ({len(X)}) != y ({len(y)})"
    assert len(X) > 0, "Data training kosong!"
    # ... training logic`}</CodeBlock>

        <SectionTitle icon="🐛">Tips Debugging</SectionTitle>
        <CodeBlock>{`# 1. Print debugging (cepat tapi messy)
print(f"DEBUG: variabel x = {x}, type = {type(x)}")

# 2. Breakpoint (Python 3.7+)
def proses_data(data):
    for i, item in enumerate(data):
        if item is None:
            breakpoint()    # pause di sini, masuk debugger
        # ... proses item

# 3. Logging (lebih profesional dari print)
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

logger.debug("Detail untuk debugging")
logger.info("Informasi umum")
logger.warning("Peringatan")
logger.error("Ada error!")

# 4. Traceback — baca dari BAWAH ke ATAS!
# Traceback (most recent call last):
#   File "main.py", line 10, in <module>    ← ini yang memanggil
#     result = process(data)
#   File "main.py", line 5, in process      ← ini yang error
#     return data[key]
# KeyError: 'nama'                           ← jenis error`}</CodeBlock>

        <CompareTable
          headers={['Error', 'Penyebab', 'Solusi']}
          rows={[
            ['SyntaxError', 'Typo, lupa titik dua/kurung', 'Cek baris yang ditunjuk error'],
            ['NameError', 'Variabel belum didefinisikan', 'Cek typo nama variabel'],
            ['TypeError', 'Operasi pada tipe yang salah', 'Cek type() variabel'],
            ['IndexError', 'Index di luar range list', 'Cek len() dan index'],
            ['KeyError', 'Key tidak ada di dictionary', 'Gunakan .get(key, default)'],
            ['ValueError', 'Nilai tidak sesuai (int("abc"))', 'Validasi input sebelum konversi'],
            ['ImportError', 'Module tidak ditemukan', 'pip install module_name'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '📚 Python Standard Library Essentials',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Standard library Python memiliki module powerful yang sering digunakan dalam Data Science tanpa perlu install tambahan.</p>

        <SectionTitle icon="📁">os & sys</SectionTitle>
        <CodeBlock>{`import os
import sys

# Navigasi file system
os.getcwd()                    # current working directory
os.listdir(".")                # list file di directory
os.path.exists("data.csv")    # cek file ada
os.path.join("data", "raw", "file.csv")  # path aman (cross-platform)
os.makedirs("output/plots", exist_ok=True)  # buat folder (nested)

# Environment variables
api_key = os.environ.get("API_KEY", "default_value")

# sys — informasi system
print(sys.version)             # versi Python
print(sys.path)                # search path untuk import`}</CodeBlock>

        <SectionTitle icon="📅">datetime</SectionTitle>
        <CodeBlock>{`from datetime import datetime, timedelta

# Waktu sekarang
now = datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))   # "2026-03-17 14:30:00"
print(now.strftime("%d %B %Y"))             # "17 March 2026"

# Parse string ke datetime
tanggal = datetime.strptime("2026-01-15", "%Y-%m-%d")

# Operasi tanggal
besok = now + timedelta(days=1)
minggu_lalu = now - timedelta(weeks=1)
selisih = datetime(2026, 12, 31) - now
print(f"Sisa {selisih.days} hari menuju tahun baru")`}</CodeBlock>

        <SectionTitle icon="🗃️">collections</SectionTitle>
        <CodeBlock>{`from collections import Counter, defaultdict, namedtuple

# Counter — hitung frekuensi
kata = ["apel", "jeruk", "apel", "mangga", "jeruk", "apel"]
freq = Counter(kata)
print(freq)                    # Counter({'apel': 3, 'jeruk': 2, 'mangga': 1})
print(freq.most_common(2))     # [('apel', 3), ('jeruk', 2)]

# defaultdict — dict dengan default value
groups = defaultdict(list)
data = [("A", 1), ("B", 2), ("A", 3), ("B", 4)]
for key, val in data:
    groups[key].append(val)
print(dict(groups))  # {'A': [1, 3], 'B': [2, 4]}

# namedtuple — struct ringan
Point = namedtuple("Point", ["x", "y"])
p = Point(3.5, 7.2)
print(p.x, p.y)     # 3.5 7.2`}</CodeBlock>

        <SectionTitle icon="🔤">regex (re)</SectionTitle>
        <CodeBlock>{`import re

teks = "Email saya: budi@gmail.com dan ani@yahoo.co.id"

# Cari semua email
emails = re.findall(r'[\\w.]+@[\\w.]+', teks)
print(emails)  # ['budi@gmail.com', 'ani@yahoo.co.id']

# Cari pattern
match = re.search(r'(\\d{4})-(\\d{2})-(\\d{2})', "Tanggal: 2026-03-17")
if match:
    print(match.group())   # "2026-03-17"
    print(match.group(1))  # "2026" (tahun)

# Replace
bersih = re.sub(r'[^a-zA-Z\\s]', '', "Hello! World @#$ 123")
print(bersih)  # "Hello World "

# Validasi
def is_valid_email(email):
    pattern = r'^[\\w.+-]+@[\\w-]+\\.[\\w.-]+$'
    return bool(re.match(pattern, email))`}</CodeBlock>

        <ConceptGrid items={[
          { title: 'itertools', desc: 'Kombinasi, permutasi, chain, cycle — operasi iterator.', example: 'itertools.combinations([1,2,3], 2)' },
          { title: 'functools', desc: 'lru_cache, reduce, partial — functional programming.', example: '@lru_cache(maxsize=128)' },
          { title: 'pathlib', desc: 'OOP alternative untuk os.path — lebih modern.', example: 'Path("data") / "file.csv"' },
          { title: 'math', desc: 'Fungsi matematika: sqrt, log, sin, pi, ceil, floor.', example: 'math.sqrt(16) → 4.0' },
        ]} />
      </div>
    ),
  },
  {
    title: '⚡ Tips & Best Practices Python',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Tips dan konvensi yang membuat kode Python lebih bersih, lebih cepat, dan lebih profesional.</p>

        <SectionTitle icon="📏">PEP 8 — Style Guide</SectionTitle>
        <CodeBlock>{`# ✅ BENAR — PEP 8 conventions
# Nama variabel & fungsi: snake_case
total_harga = 100
def hitung_rata_rata(data):
    pass

# Nama class: CamelCase
class DataProcessor:
    pass

# Konstanta: UPPER_CASE
MAX_RETRIES = 3
API_BASE_URL = "https://api.example.com"

# Indentasi: 4 spasi (BUKAN tab)
# Max line length: 79-120 karakter
# Import di atas file, satu per baris

# ❌ SALAH
totalHarga = 100           # camelCase untuk variabel
def HitungRataRata():      # CamelCase untuk fungsi
    pass
class data_processor:      # snake_case untuk class
    pass`}</CodeBlock>

        <SectionTitle icon="📝">Type Hints & Docstrings</SectionTitle>
        <CodeBlock>{`from typing import List, Dict, Optional, Tuple

def analisis_data(
    data: List[float],
    threshold: float = 0.5,
    label: Optional[str] = None
) -> Dict[str, float]:
    """
    Analisis data numerik dan return statistik.

    Args:
        data: List angka untuk dianalisis.
        threshold: Batas minimum (default 0.5).
        label: Label opsional untuk dataset.

    Returns:
        Dictionary berisi mean, median, dan std.

    Raises:
        ValueError: Jika data kosong.

    Example:
        >>> analisis_data([1, 2, 3, 4, 5])
        {'mean': 3.0, 'std': 1.41}
    """
    if not data:
        raise ValueError("Data tidak boleh kosong")

    import statistics
    return {
        "mean": statistics.mean(data),
        "std": statistics.stdev(data),
    }`}</CodeBlock>

        <SectionTitle icon="🚀">Performance Tips</SectionTitle>
        <CodeBlock>{`# ─── 1. List comprehension > loop ──────────────────
# Lambat ❌
result = []
for x in range(1000000):
    result.append(x ** 2)

# Cepat ✅ (2-3x lebih cepat)
result = [x ** 2 for x in range(1000000)]

# ─── 2. Generator untuk data besar ────────────────
# Memakan RAM ❌
semua = [x ** 2 for x in range(10_000_000)]

# Hemat RAM ✅ (generator, lazy evaluation)
semua = (x ** 2 for x in range(10_000_000))
for val in semua:
    pass  # proses satu per satu

# ─── 3. f-string > format() > % ───────────────────
nama = "Budi"
# Tercepat ✅
f"Hello {nama}"
# Lebih lambat
"Hello {}".format(nama)

# ─── 4. dict.get() > try/except untuk KeyError ────
d = {"a": 1}
val = d.get("b", 0)    # lebih cepat dari try/except

# ─── 5. Set untuk membership testing ──────────────
# Lambat ❌ — O(n)
if x in [1, 2, 3, 4, 5]:
    pass

# Cepat ✅ — O(1)
valid = {1, 2, 3, 4, 5}
if x in valid:
    pass`}</CodeBlock>

        <TipBox title="requirements.txt & .gitignore">
          Selalu buat <code>pip freeze {'>'} requirements.txt</code> sebelum share project. Jangan lupa <code>.gitignore</code> untuk mengecualikan: venv/, __pycache__/, .env, *.pyc, data/ (jika besar).
        </TipBox>

        <CompareTable
          headers={['Practice', 'Buruk ❌', 'Baik ✅']}
          rows={[
            ['Naming', 'x, temp, data2', 'customer_age, total_revenue'],
            ['Magic numbers', 'if score > 0.85:', 'THRESHOLD = 0.85; if score > THRESHOLD:'],
            ['Long functions', '200+ baris', 'Max 20-30 baris, pecah jadi sub-functions'],
            ['Comments', '# increment i by 1', '# Skip invalid records (issue #42)'],
            ['Import', 'from module import *', 'from module import specific_func'],
          ]}
        />
      </div>
    ),
  },
]

// ═══════════════════════════════════════════════════════════════
// PART 1B: Library Data Science (8 sections)
// ═══════════════════════════════════════════════════════════════

export const dataLibrarySections = [
  {
    title: '🔢 NumPy Fundamental',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">NumPy adalah pondasi ekosistem Data Science Python. Array NumPy 10-100x lebih cepat dari list Python untuk operasi numerik.</p>

        <NumpyArrayDiagram />

        <SectionTitle icon="📦">Membuat Array</SectionTitle>
        <CodeBlock>{`import numpy as np

# Dari list
a = np.array([1, 2, 3, 4, 5])
b = np.array([[1, 2, 3], [4, 5, 6]])   # 2D matrix

# Array generator
np.zeros((3, 4))          # matrix 3x4 berisi 0
np.ones((2, 3))           # matrix 2x3 berisi 1
np.eye(4)                 # identity matrix 4x4
np.arange(0, 10, 2)       # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)      # [0.0, 0.25, 0.5, 0.75, 1.0]
np.full((3, 3), 7)        # matrix 3x3 berisi 7
np.random.randn(3, 3)     # normal distribution N(0,1)
np.random.randint(0, 10, (3, 3))  # random integers 0-9`}</CodeBlock>

        <SectionTitle icon="🔍">Indexing, Slicing & Reshape</SectionTitle>
        <CodeBlock>{`arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]])

# Indexing
print(arr[0, 2])         # 3 (baris 0, kolom 2)
print(arr[1])            # [5, 6, 7, 8] (baris 1)
print(arr[:, 1])         # [2, 6, 10] (kolom 1)
print(arr[0:2, 1:3])     # [[2,3], [6,7]] (sub-matrix)

# Boolean indexing
print(arr[arr > 5])      # [6, 7, 8, 9, 10, 11, 12]

# Reshape
a = np.arange(12)        # [0,1,2,...,11]
b = a.reshape(3, 4)      # matrix 3x4
c = a.reshape(2, -1)     # 2 baris, kolom auto (2x6)
d = b.flatten()           # kembali ke 1D
print(b.shape)            # (3, 4)
print(b.T)                # transpose: (4, 3)`}</CodeBlock>

        <SectionTitle icon="⚡">Operasi Matematika</SectionTitle>
        <CodeBlock>{`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Element-wise operations
print(a + b)       # [5, 7, 9]
print(a * b)       # [4, 10, 18]
print(a ** 2)      # [1, 4, 9]
print(np.sqrt(a))  # [1.0, 1.414, 1.732]

# Broadcasting (array + skalar)
print(a + 10)      # [11, 12, 13]
print(a * 2)       # [2, 4, 6]

# Linear algebra
print(np.dot(a, b))       # 32 (dot product)
A = np.array([[1,2],[3,4]])
print(np.linalg.inv(A))   # inverse matrix
print(np.linalg.det(A))   # determinant = -2.0
eigenvalues, eigenvectors = np.linalg.eig(A)

# Statistik
data = np.random.randn(1000)
print(np.mean(data))      # ≈ 0
print(np.std(data))       # ≈ 1
print(np.median(data))
print(np.percentile(data, [25, 50, 75]))  # quartiles`}</CodeBlock>

        <TipBox title="Vectorization">
          JANGAN gunakan loop Python untuk operasi NumPy! <code>np.sum(arr)</code> 100x lebih cepat dari <code>sum(list)</code>. NumPy beroperasi di level C di belakang layar.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🐼 Pandas Essentials',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Pandas adalah library utama untuk manipulasi data tabular di Python. Bayangkan Excel tapi jauh lebih powerful.</p>

        <PandasDiagram />

        <SectionTitle icon="📊">DataFrame Dasar</SectionTitle>
        <CodeBlock>{`import pandas as pd

# Membuat DataFrame
df = pd.DataFrame({
    "nama":   ["Budi", "Ani", "Cici", "Doni", "Eka"],
    "umur":   [22, 25, 23, 28, 24],
    "kota":   ["Jakarta", "Bandung", "Jakarta", "Surabaya", "Bandung"],
    "gaji":   [8000, 12000, 9500, 15000, 11000],
})

# Membaca file
df = pd.read_csv("data.csv")
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# Info dataset
print(df.shape)         # (5, 4)
print(df.head(3))       # 3 baris pertama
print(df.info())        # tipe data, non-null count
print(df.describe())    # statistik (mean, std, min, max, quartiles)
print(df.columns)       # nama kolom
print(df.dtypes)        # tipe data per kolom`}</CodeBlock>

        <SectionTitle icon="🔍">Seleksi & Filter</SectionTitle>
        <CodeBlock>{`# Pilih kolom
df["nama"]                    # Series
df[["nama", "gaji"]]          # DataFrame (multiple kolom)

# loc (label-based) vs iloc (integer-based)
df.loc[0, "nama"]             # "Budi" (baris label 0, kolom "nama")
df.iloc[0, 0]                 # "Budi" (baris index 0, kolom index 0)
df.loc[0:2, "nama":"kota"]    # baris 0-2, kolom nama sampai kota
df.iloc[0:2, 0:3]             # baris 0-1, kolom 0-2

# Filter dengan kondisi
df[df["umur"] > 23]                        # umur > 23
df[(df["kota"] == "Jakarta") & (df["gaji"] > 9000)]  # AND
df[df["kota"].isin(["Jakarta", "Bandung"])]  # IN
df[df["nama"].str.contains("i")]             # string contains

# Sorting
df.sort_values("gaji", ascending=False)      # sort by gaji (desc)
df.sort_values(["kota", "gaji"])             # multi-sort`}</CodeBlock>

        <SectionTitle icon="📈">Groupby & Aggregation</SectionTitle>
        <CodeBlock>{`# Groupby — mirip SQL GROUP BY
df.groupby("kota")["gaji"].mean()
#   Bandung     11500.0
#   Jakarta      8750.0
#   Surabaya    15000.0

# Multiple aggregations
df.groupby("kota").agg({
    "gaji": ["mean", "max", "count"],
    "umur": "mean"
})

# Value counts (frekuensi)
df["kota"].value_counts()

# Pivot table
pd.pivot_table(df, values="gaji", index="kota", aggfunc=["mean", "count"])`}</CodeBlock>

        <SectionTitle icon="🔗">Merge & Concat</SectionTitle>
        <CodeBlock>{`# Merge — JOIN dua DataFrame
orders = pd.DataFrame({"customer_id": [1,2,3], "product": ["A","B","C"]})
customers = pd.DataFrame({"customer_id": [1,2,4], "name": ["Budi","Ani","Doni"]})

# Inner join (hanya yang cocok)
pd.merge(orders, customers, on="customer_id", how="inner")

# Left join (semua dari kiri)
pd.merge(orders, customers, on="customer_id", how="left")

# Concat — tumpuk DataFrame
df1 = pd.DataFrame({"A": [1,2], "B": [3,4]})
df2 = pd.DataFrame({"A": [5,6], "B": [7,8]})
pd.concat([df1, df2], ignore_index=True)     # vertikal
pd.concat([df1, df2], axis=1)                # horizontal`}</CodeBlock>

        <TipBox title="Method Chaining">
          Pandas mendukung chaining: <code>df.dropna().groupby("kota")["gaji"].mean().sort_values(ascending=False)</code> — lebih bersih dan readable.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🧹 Data Cleaning dengan Pandas',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">80% waktu Data Scientist dihabiskan untuk membersihkan data. Skill ini sangat penting!</p>

        <DataCleaningPipeline />

        <SectionTitle icon="❓">Handling Missing Values</SectionTitle>
        <CodeBlock>{`import pandas as pd
import numpy as np

# Deteksi missing
df.isnull().sum()            # jumlah NaN per kolom
df.isnull().mean() * 100     # persentase NaN per kolom

# Hapus missing
df.dropna()                  # hapus baris yang ada NaN
df.dropna(subset=["gaji"])   # hapus jika gaji NaN saja
df.dropna(thresh=3)          # pertahankan baris dengan min 3 non-NaN

# Isi missing
df["gaji"].fillna(df["gaji"].mean())         # isi dengan rata-rata
df["kota"].fillna("Unknown")                 # isi dengan string
df["gaji"].fillna(method="ffill")            # forward fill
df["umur"].fillna(df.groupby("kota")["umur"].transform("median"))  # per group`}</CodeBlock>

        <SectionTitle icon="🔄">Data Type Conversion & Cleaning</SectionTitle>
        <CodeBlock>{`# Konversi tipe data
df["umur"] = df["umur"].astype(int)
df["gaji"] = pd.to_numeric(df["gaji"], errors="coerce")  # invalid → NaN
df["tanggal"] = pd.to_datetime(df["tanggal"])

# Hapus duplikat
df.drop_duplicates()                         # hapus baris identik
df.drop_duplicates(subset=["email"])         # berdasarkan kolom
df.drop_duplicates(keep="last")              # simpan yang terakhir

# String cleaning
df["nama"] = df["nama"].str.strip()          # hapus spasi
df["nama"] = df["nama"].str.lower()          # lowercase
df["email"] = df["email"].str.replace(" ", "")

# Replace values
df["status"].replace({"Y": 1, "N": 0}, inplace=True)
df["gaji"] = df["gaji"].clip(lower=0)        # set negatif → 0

# Apply custom function
df["nama_clean"] = df["nama"].apply(lambda x: x.title().strip())

# Rename columns
df.rename(columns={"old_name": "new_name"}, inplace=True)
df.columns = [c.lower().replace(" ", "_") for c in df.columns]`}</CodeBlock>

        <SectionTitle icon="📋">Workflow Cleaning Lengkap</SectionTitle>
        <CodeBlock>{`def clean_dataset(df):
    """Pipeline cleaning standard."""
    # 1. Copy untuk safety
    df = df.copy()

    # 2. Standardize column names
    df.columns = [c.lower().strip().replace(" ", "_") for c in df.columns]

    # 3. Remove duplicates
    df = df.drop_duplicates()

    # 4. Handle missing values
    # Numerik → median, Kategorikal → mode
    for col in df.select_dtypes(include="number").columns:
        df[col] = df[col].fillna(df[col].median())
    for col in df.select_dtypes(include="object").columns:
        df[col] = df[col].fillna(df[col].mode()[0])

    # 5. Fix data types
    # (sesuaikan per dataset)

    print(f"✅ Cleaned: {df.shape[0]} baris, {df.shape[1]} kolom")
    return df`}</CodeBlock>

        <TipBox title="Golden Rule">
          Jangan pernah ubah data asli! Selalu <code>df = df.copy()</code> sebelum cleaning. Simpan raw data terpisah agar bisa re-run pipeline kapan saja.
        </TipBox>
      </div>
    ),
  },
  {
    title: '📈 Matplotlib dari Nol',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Matplotlib adalah library visualisasi paling fundamental di Python. Hampir semua library visualisasi lain dibangun di atasnya.</p>

        <SectionTitle icon="📊">Plot Dasar</SectionTitle>
        <CodeBlock>{`import matplotlib.pyplot as plt
import numpy as np

# ─── Line Plot ─────────────────────────────────────
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, color="blue", linewidth=2, label="sin(x)")
plt.plot(x, np.cos(x), color="red", linestyle="--", label="cos(x)")
plt.xlabel("X axis", fontsize=12)
plt.ylabel("Y axis", fontsize=12)
plt.title("Fungsi Trigonometri", fontsize=14)
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("plot.png", dpi=150)
plt.show()

# ─── Scatter Plot ──────────────────────────────────
np.random.seed(42)
x = np.random.randn(100)
y = 2 * x + np.random.randn(100) * 0.5

plt.figure(figsize=(8, 6))
plt.scatter(x, y, c=y, cmap="viridis", alpha=0.7, s=50)
plt.colorbar(label="Nilai Y")
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Scatter Plot dengan Colormap")
plt.show()`}</CodeBlock>

        <SectionTitle icon="📉">Histogram, Bar & Pie</SectionTitle>
        <CodeBlock>{`# ─── Histogram ─────────────────────────────────────
data = np.random.randn(1000)
plt.figure(figsize=(8, 5))
plt.hist(data, bins=30, color="steelblue", edgecolor="white", alpha=0.8)
plt.axvline(data.mean(), color="red", linestyle="--", label=f"Mean: {data.mean():.2f}")
plt.legend()
plt.title("Distribusi Data")
plt.show()

# ─── Bar Chart ─────────────────────────────────────
categories = ["Python", "JavaScript", "Java", "C++", "Go"]
values = [85, 72, 68, 55, 45]

plt.figure(figsize=(8, 5))
bars = plt.bar(categories, values, color=["#3B82F6","#F59E0B","#EF4444","#10B981","#8B5CF6"])
plt.ylabel("Popularitas (%)")
plt.title("Bahasa Pemrograman Terpopuler")
# Tambah label di atas bar
for bar, val in zip(bars, values):
    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1,
             str(val), ha="center", fontsize=10)
plt.show()

# ─── Subplots ──────────────────────────────────────
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

axes[0,0].plot(x, y)
axes[0,0].set_title("Line Plot")

axes[0,1].scatter(x, y, s=10)
axes[0,1].set_title("Scatter Plot")

axes[1,0].hist(data, bins=20)
axes[1,0].set_title("Histogram")

axes[1,1].bar(categories[:3], values[:3])
axes[1,1].set_title("Bar Chart")

plt.tight_layout()
plt.show()`}</CodeBlock>

        <TipBox title="plt vs ax">
          <code>plt.plot()</code> (state-based) cocok untuk plot cepat. Untuk kontrol lebih, gunakan <code>fig, ax = plt.subplots()</code> lalu <code>ax.plot()</code> (object-oriented) — lebih fleksibel untuk subplots dan customization.
        </TipBox>
      </div>
    ),
  },
  {
    title: '🎨 Seaborn untuk Visualisasi Statistik',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Seaborn dibangun di atas Matplotlib, memberikan visualisasi statistik yang lebih cantik dengan kode lebih sedikit.</p>

        <SectionTitle icon="📊">Distribusi & Korelasi</SectionTitle>
        <CodeBlock>{`import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Set theme
sns.set_theme(style="whitegrid", palette="husl")

# Contoh dataset bawaan
tips = sns.load_dataset("tips")

# ─── Distribution Plot ─────────────────────────────
fig, axes = plt.subplots(1, 3, figsize=(15, 5))

sns.histplot(tips["total_bill"], kde=True, ax=axes[0])
axes[0].set_title("Histogram + KDE")

sns.boxplot(x="day", y="total_bill", data=tips, ax=axes[1])
axes[1].set_title("Box Plot per Hari")

sns.violinplot(x="day", y="total_bill", data=tips, ax=axes[2])
axes[2].set_title("Violin Plot")

plt.tight_layout()
plt.show()

# ─── Heatmap Korelasi ──────────────────────────────
plt.figure(figsize=(8, 6))
corr = tips[["total_bill", "tip", "size"]].corr()
sns.heatmap(corr, annot=True, cmap="coolwarm", center=0,
            fmt=".2f", linewidths=0.5, square=True)
plt.title("Correlation Matrix")
plt.show()

# ─── Pair Plot (semua kombinasi) ───────────────────
sns.pairplot(tips, hue="sex", diag_kind="kde", height=2.5)
plt.show()`}</CodeBlock>

        <SectionTitle icon="📈">Categorical & Relational</SectionTitle>
        <CodeBlock>{`# Count plot (frekuensi kategori)
plt.figure(figsize=(8, 5))
sns.countplot(x="day", hue="sex", data=tips)
plt.title("Jumlah Pengunjung per Hari")
plt.show()

# Scatter dengan regression line
plt.figure(figsize=(8, 6))
sns.regplot(x="total_bill", y="tip", data=tips, scatter_kws={"alpha": 0.5})
plt.title("Hubungan Total Bill vs Tip")
plt.show()

# FacetGrid — plot per kategori
g = sns.FacetGrid(tips, col="time", row="sex", height=4)
g.map(sns.scatterplot, "total_bill", "tip")
g.add_legend()
plt.show()

# Joint plot (scatter + distribusi marginal)
sns.jointplot(x="total_bill", y="tip", data=tips, kind="hex")
plt.show()`}</CodeBlock>

        <TipBox title="Style Tips">
          <code>sns.set_theme(style="whitegrid")</code> untuk tampilan clean. Pilihan style: darkgrid, whitegrid, dark, white, ticks. Palette: husl, Set2, viridis, coolwarm.
        </TipBox>
      </div>
    ),
  },
  {
    title: '📊 EDA (Exploratory Data Analysis) Step-by-Step',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">EDA adalah proses sistematis untuk memahami data sebelum modeling. Ikuti workflow ini untuk setiap dataset baru.</p>

        <SectionTitle icon="📋">Workflow EDA Lengkap</SectionTitle>
        <CodeBlock>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# ═══ STEP 1: Load & Inspect ═══════════════════════
df = pd.read_csv("dataset.csv")

print("Shape:", df.shape)
print("\\nKolom:", df.columns.tolist())
print("\\nTipe data:")
print(df.dtypes)
print("\\nPreview:")
print(df.head())

# ═══ STEP 2: Missing Values ═══════════════════════
missing = df.isnull().sum()
missing_pct = (missing / len(df) * 100).round(1)
missing_report = pd.DataFrame({"Count": missing, "%": missing_pct})
print(missing_report[missing_report["Count"] > 0].sort_values("%", ascending=False))

# Visualisasi missing
plt.figure(figsize=(10, 4))
sns.heatmap(df.isnull(), cbar=True, cmap="YlOrRd", yticklabels=False)
plt.title("Missing Values Heatmap")
plt.show()

# ═══ STEP 3: Statistik Deskriptif ════════════════
print(df.describe())                          # numerik
print(df.describe(include="object"))          # kategorikal

# ═══ STEP 4: Distribusi Variabel ═════════════════
num_cols = df.select_dtypes(include="number").columns
fig, axes = plt.subplots(len(num_cols) // 3 + 1, 3, figsize=(15, 4 * (len(num_cols) // 3 + 1)))
axes = axes.flatten()
for i, col in enumerate(num_cols):
    sns.histplot(df[col], kde=True, ax=axes[i])
    axes[i].set_title(col)
plt.tight_layout()
plt.show()

# ═══ STEP 5: Korelasi ════════════════════════════
plt.figure(figsize=(10, 8))
sns.heatmap(df[num_cols].corr(), annot=True, cmap="coolwarm", center=0, fmt=".2f")
plt.title("Correlation Matrix")
plt.show()

# ═══ STEP 6: Outlier Detection ═══════════════════
for col in num_cols:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    outliers = df[(df[col] < Q1 - 1.5*IQR) | (df[col] > Q3 + 1.5*IQR)]
    if len(outliers) > 0:
        print(f"{col}: {len(outliers)} outliers ({len(outliers)/len(df)*100:.1f}%)")`}</CodeBlock>

        <StepList steps={[
          'Load data & cek shape, dtypes, head()',
          'Analisis missing values & putuskan strategi handling',
          'Statistik deskriptif (mean, median, std, quartiles)',
          'Visualisasi distribusi setiap variabel',
          'Heatmap korelasi antar variabel numerik',
          'Deteksi outlier dengan IQR atau Z-score',
          'Analisis variabel kategorikal (value_counts, countplot)',
          'Tulis insight & hipotesis untuk modeling',
        ]} />
      </div>
    ),
  },
  {
    title: '🗄️ SQL Dasar untuk Data Scientist',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">SQL adalah bahasa wajib untuk Data Scientist — hampir semua data perusahaan tersimpan di database relasional.</p>

        <SectionTitle icon="🔍">Query Dasar</SectionTitle>
        <CodeBlock>{`-- SELECT: ambil data
SELECT nama, umur, gaji
FROM karyawan
WHERE departemen = 'IT'
  AND gaji > 10000
ORDER BY gaji DESC
LIMIT 10;

-- Aggregation
SELECT departemen,
       COUNT(*) AS jumlah,
       AVG(gaji) AS rata_gaji,
       MAX(gaji) AS gaji_max
FROM karyawan
GROUP BY departemen
HAVING AVG(gaji) > 8000
ORDER BY rata_gaji DESC;

-- JOIN — gabungkan tabel
SELECT k.nama, k.gaji, d.nama_dept
FROM karyawan k
INNER JOIN departemen d ON k.dept_id = d.id
WHERE k.status = 'aktif';

-- LEFT JOIN (semua dari tabel kiri)
SELECT c.nama, COUNT(o.id) AS total_order
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.nama;

-- Subquery
SELECT *
FROM karyawan
WHERE gaji > (SELECT AVG(gaji) FROM karyawan);

-- Window Functions (advanced)
SELECT nama, departemen, gaji,
       RANK() OVER (PARTITION BY departemen ORDER BY gaji DESC) AS ranking,
       AVG(gaji) OVER (PARTITION BY departemen) AS avg_dept_gaji
FROM karyawan;`}</CodeBlock>

        <SectionTitle icon="🐍">SQL dari Python</SectionTitle>
        <CodeBlock>{`import sqlite3
import pandas as pd

# ─── SQLite (tanpa server, file-based) ─────────────
conn = sqlite3.connect("database.db")

# Buat tabel
conn.execute("""
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        score REAL
    )
""")

# Insert data
conn.execute("INSERT INTO students VALUES (1, 'Budi', 85.5)")
conn.commit()

# Query ke DataFrame (paling sering dipakai!)
df = pd.read_sql_query("SELECT * FROM students WHERE score > 80", conn)
print(df)

conn.close()

# ─── SQLAlchemy (untuk production) ─────────────────
from sqlalchemy import create_engine

engine = create_engine("sqlite:///database.db")
# Atau: "postgresql://user:pass@host:5432/dbname"

df = pd.read_sql("SELECT * FROM students", engine)
df.to_sql("new_table", engine, if_exists="replace", index=False)`}</CodeBlock>

        <CompareTable
          headers={['SQL', 'Pandas Equivalent']}
          rows={[
            ['SELECT col FROM tbl', 'df["col"] atau df[["col1","col2"]]'],
            ['WHERE col > 5', 'df[df["col"] > 5]'],
            ['ORDER BY col DESC', 'df.sort_values("col", ascending=False)'],
            ['GROUP BY col', 'df.groupby("col").agg(...)'],
            ['JOIN ON key', 'pd.merge(df1, df2, on="key")'],
            ['COUNT(*)', 'len(df) atau df["col"].value_counts()'],
            ['LIMIT 10', 'df.head(10)'],
          ]}
        />
      </div>
    ),
  },
  {
    title: '🔗 API & Web Scraping Basics',
    body: (
      <div>
        <p className="text-sm text-gray-600 mb-4">Data tidak selalu tersedia dalam file CSV. Seringkali kita perlu mengambil data dari API atau website.</p>

        <SectionTitle icon="🌐">Menggunakan API dengan requests</SectionTitle>
        <CodeBlock>{`import requests
import pandas as pd

# ─── GET Request (ambil data) ──────────────────────
response = requests.get("https://api.github.com/users/torvalds")
print(response.status_code)   # 200 = OK

data = response.json()        # parse JSON
print(data["name"])            # "Linus Torvalds"
print(data["public_repos"])    # jumlah repo

# ─── API dengan parameters ────────────────────────
params = {
    "q": "machine learning",
    "sort": "stars",
    "per_page": 5
}
r = requests.get("https://api.github.com/search/repositories", params=params)
repos = r.json()["items"]
for repo in repos:
    print(f"{repo['name']}: ⭐ {repo['stargazers_count']}")

# ─── POST Request (kirim data) ────────────────────
payload = {"prompt": "Hello AI", "max_tokens": 100}
headers = {"Authorization": "Bearer YOUR_API_KEY"}
r = requests.post("https://api.example.com/generate",
                   json=payload, headers=headers)

# ─── Error handling API ───────────────────────────
try:
    r = requests.get(url, timeout=10)
    r.raise_for_status()       # raise exception jika 4xx/5xx
    data = r.json()
except requests.exceptions.Timeout:
    print("Request timeout!")
except requests.exceptions.HTTPError as e:
    print(f"HTTP Error: {e}")
except requests.exceptions.ConnectionError:
    print("Tidak bisa connect!")`}</CodeBlock>

        <SectionTitle icon="🕷️">Web Scraping dengan BeautifulSoup</SectionTitle>
        <CodeBlock>{`from bs4 import BeautifulSoup
import requests

# ─── Scraping sederhana ───────────────────────────
url = "https://quotes.toscrape.com/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Cari elemen
quotes = soup.find_all("span", class_="text")
authors = soup.find_all("small", class_="author")

for quote, author in zip(quotes, authors):
    print(f'"{quote.text}" — {author.text}')

# ─── Scraping ke DataFrame ────────────────────────
data = []
for quote, author in zip(quotes, authors):
    data.append({
        "quote": quote.text,
        "author": author.text
    })
df = pd.DataFrame(data)
df.to_csv("quotes.csv", index=False)`}</CodeBlock>

        <TipBox title="Etika Scraping">
          Selalu cek robots.txt website sebelum scraping. Tambahkan delay antar request (<code>time.sleep(1)</code>). Jangan overwhelming server. Lebih baik gunakan API resmi jika tersedia.
        </TipBox>
      </div>
    ),
  },
]
