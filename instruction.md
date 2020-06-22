# Instruction 
Kerjakan soal-soal berikut dengan menggunakan javascript. 
Masukkan jawaban kalian ke repository di GitHub, lalu share URL _repository_ tersebut. format file jawaban `001.js`, `002.js` dst

# Question
1. Buatlah program yang dapat menentukan _grade_ dari suatu masukan angka, dengan kriteria sebagai berikut:
    - Jika angka lebih besar atau sama dengan 90, maka output adalah huruf A
    - Jika angka di antara 80 dan 89, maka output adalah huruf B
    - Jika angka di antara 70 dan 79, maka output adalah huruf C
    - Jika angka di antara 60 dan 69, maka output adalah huruf D
    - Jika angka lebih kecil dari pada 59, maka output adalah huruf E

example
```js
grade(10) // output E
grade(80) // output B
grade(90) // output A
```

2. Buatlah program fungsi untuk menentukan suatu bilangan merupakan bilangan ganjil atau genap.

```js
oddEven(10) // output genap
oddEven(5) // output ganjil
```

3. Buatlah program untuk menentukan nilai maksimum, minimum, dan rata-rata dari 100 deretan angka acak 

 
```js
max(deretAngka) // contoh output nilai makmisal 10
min(deretAngka) // contoh output nilai minimal 2 
average(deretAngka) // contoh output nilai rata-rata 8
```

4. Buatlah program untuk menentukan suatu kata atau kalimat merupakan palindrom atau bukan.

```js
palindrome("Cigar? Toss it in a can. It is so tragic") // output true
palindrome("I did, did I?") // output true
palindrome("Red rum, sir, is murder") // output true
palindrome("Eva, can I see bees in a cave?") // output true
palindrome("Hello World") // output false
```

5. Buatlah program yang memiliki dua input berupa tahun. Output dari fungsi tersebut adalah list dari tahun-tahun kabisat diantara dua input tahun tersebut.

```js
leapYear(1600,2020)

// example 
// output 2004 adalah tahun kabisat 
// output 2008 adalah tahun kabisat 
// output 2012 adalah tahun kabisat 
// output 1900 adalah bukan tahun kabisat 
// output 2100 adalah bukan tahun kabisat 
// output 1600 adalah tahun kabisat 
// output 2000 adalah tahun kabisat 
// output 2009 adalah bukan tahun kabisat 
```
6. Buatlah program rekursif. Anda bebas menentukan input dan output dari fungsi tersebut, tetapi harus rekursif.


7. Buatlah program untuk membalikkan "semua kata-kata" yang terdapat dalam kalimat.

```js
reverse("semua kata-kata")

//output atak-atak aumes
```

8. Buatlah program yang dapat melakukan inputan angka tanpa batas. Semua inputan tersebut akan dijumlahkan. Tetapi jika inputan adalah `=`, maka proses akan berakhir dan hasil penjumlahan akan keluar.


9. Buatlah program untuk menghilangkan data ganda dari JSON berikut ini 

```json
["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"]
```

10. Buatlah program untuk mencari orang yang berusia di bawah 21 tahun dari JSON berikut ini 
```json
[
  { "id": 1, "name": "Udin", "age": 12 },
  { "id": 2, "name": "Reane", "age": 51 },
  { "id": 3, "name": "Budi", "age": 34 },
  { "id": 4, "name": "Agus", "age": 16 },
  { "id": 5, "name": "Sari", "age": 19 },
  { "id": 6, "name": "Ririn", "age": 20 },
  { "id": 7, "name": "Dessy", "age": 23 }
]
```