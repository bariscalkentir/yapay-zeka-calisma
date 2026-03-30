// ========== TOPIC DATA ==========
const topics = {
  day1: [
    {
      id: 't1',
      title: 'Print Fonksiyonu ve Özellikleri',
      meta: 'Hafta 2 • ~20 dk',
      icon: '1', iconColor: 'blue',
      explanation: `<strong>print()</strong> fonksiyonu Python'da ekrana çıktı vermek için kullanılır. Virgülle eklenen her nesne araya boşluk konularak yazdırılır.<br><br>
        <strong>sep</strong> parametresi: Elemanlar arasına konulacak ayracı belirler (varsayılan boşluk).<br>
        <strong>end</strong> parametresi: Satır sonuna ne ekleneceğini belirler (varsayılan \\n).`,
      codes: [
        { code: `<span class="fn">print</span>(<span class="st">"Merhaba"</span>, <span class="st">"Dünya"</span>)`, output: 'Merhaba Dünya' },
        { code: `<span class="fn">print</span>(<span class="st">"A"</span>, <span class="st">"B"</span>, <span class="st">"C"</span>, sep=<span class="st">"-"</span>)`, output: 'A-B-C' },
        { code: `<span class="fn">print</span>(<span class="st">"Satır 1"</span>, end=<span class="st">" | "</span>)\n<span class="fn">print</span>(<span class="st">"Satır 2"</span>)`, output: 'Satır 1 | Satır 2' },
      ],
      quiz: {
        question: 'print("X", "Y", sep="*") çıktısı nedir?',
        options: ['X Y', 'X*Y', 'XY', 'X * Y'],
        correct: 1,
        explanation: 'sep="*" parametresi elemanlar arasına * koyar.'
      },
      exercise: {
        question: 'Adınızı, soyadınızı ve yaşınızı print ile tek satırda, aralarına " - " koyarak yazdırın.',
        answer: `print("Ali", "Yılmaz", 25, sep=" - ")`
      }
    },
    {
      id: 't2',
      title: 'Değişkenler, Format ve Input',
      meta: 'Hafta 2 • ~25 dk',
      icon: '2', iconColor: 'purple',
      explanation: `<strong>Değişken:</strong> Veriyi saklamak için kullanılır. Python'da tür belirtmeye gerek yoktur.<br><br>
        <strong>format():</strong> String içine değişken yerleştirmek için kullanılır. <code>{}</code> ile yer tutucu oluşturulur.<br><br>
        <strong>f-string:</strong> f"..." ile doğrudan değişken yazılabilir.<br><br>
        <strong>input():</strong> Kullanıcıdan veri almak için kullanılır. Her zaman <strong>string</strong> döndürür.`,
      codes: [
        { code: `isim = <span class="st">"Barış"</span>\nyas = <span class="num">20</span>\n<span class="fn">print</span>(<span class="st">"Ben {} yaşındayım"</span>.format(yas))`, output: 'Ben 20 yaşındayım' },
        { code: `<span class="fn">print</span>(<span class="st">f"Merhaba </span><span class="num">{isim}</span><span class="st">, yaşın </span><span class="num">{yas}</span><span class="st">"</span>)`, output: 'Merhaba Barış, yaşın 20' },
        { code: `veri = <span class="fn">input</span>(<span class="st">"Bir sayı girin: "</span>)\n<span class="fn">print</span>(<span class="fn">type</span>(veri))  <span class="cm"># her zaman str</span>`, output: "&lt;class 'str'&gt;" },
      ],
      quiz: {
        question: 'input() fonksiyonu hangi türde veri döndürür?',
        options: ['int', 'float', 'str', 'Girilen verinin türünde'],
        correct: 2,
        explanation: 'input() her zaman string (str) döndürür. Sayıya çevirmek için int() veya float() kullanılır.'
      },
      exercise: {
        question: 'Kullanıcıdan isim ve yaş alıp, f-string kullanarak "Merhaba [isim], [yaş] yaşındasın!" yazdırın.',
        answer: `isim = input("İsim: ")\nyas = input("Yaş: ")\nprint(f"Merhaba {isim}, {yas} yaşındasın!")`
      }
    },
    {
      id: 't3',
      title: 'Len, Type, Veri Türleri (int, float, bool)',
      meta: 'Hafta 3 • ~25 dk',
      icon: '3', iconColor: 'cyan',
      explanation: `<strong>len():</strong> Bir nesnenin eleman sayısını döndürür (string → harf sayısı, liste → eleman sayısı).<br><br>
        <strong>type():</strong> Bir nesnenin veri türünü döndürür.<br><br>
        <strong>int:</strong> Tam sayılar (5, -3, 0).<br>
        <strong>float:</strong> Ondalıklı sayılar (3.14, -2.5).<br>
        <strong>bool:</strong> Mantıksal değerler (True, False). Aslında int'in alt türüdür (True=1, False=0).`,
      codes: [
        { code: `<span class="fn">print</span>(<span class="fn">len</span>(<span class="st">"Python"</span>))`, output: '6' },
        { code: `<span class="fn">print</span>(<span class="fn">type</span>(<span class="num">3.14</span>))`, output: "&lt;class 'float'&gt;" },
        { code: `<span class="fn">print</span>(<span class="kw">True</span> + <span class="kw">True</span>)  <span class="cm"># bool int gibi davranır</span>`, output: '2' },
      ],
      quiz: {
        question: 'len([1, 2, 3]) sonucu nedir?',
        options: ['[1,2,3]', '6', '3', 'Hata verir'],
        correct: 2,
        explanation: 'len() listenin eleman sayısını verir: 3 eleman vardır.'
      },
      exercise: {
        question: 'Bir değişkene adınızı atayın, type() ve len() ile türünü ve uzunluğunu yazdırın.',
        answer: `ad = "Barış"\nprint(type(ad))   # <class 'str'>\nprint(len(ad))    # 5`
      }
    },
    {
      id: 't4',
      title: 'Operatörler ve Koşullu İfadeler (if/elif/else)',
      meta: 'Hafta 3 • ~30 dk',
      icon: '4', iconColor: 'green',
      explanation: `<strong>Aritmetik:</strong> +, -, *, **, /, //, %<br>
        <strong>Karşılaştırma:</strong> ==, !=, &lt;, &gt;, &lt;=, &gt;=<br>
        <strong>Mantıksal:</strong> and, or, not<br><br>
        <strong>if/elif/else:</strong> Koşula göre farklı kod blokları çalıştırmak için kullanılır. Python'da <strong>girinti (indentation)</strong> çok önemlidir — 4 boşluk kullanılır.`,
      codes: [
        { code: `<span class="fn">print</span>(<span class="num">10</span> // <span class="num">3</span>)   <span class="cm"># tam bölme</span>\n<span class="fn">print</span>(<span class="num">10</span> % <span class="num">3</span>)    <span class="cm"># kalan</span>\n<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">3</span>)    <span class="cm"># üs alma</span>`, output: '3\n1\n8' },
        { code: `yas = <span class="num">18</span>\n<span class="kw">if</span> yas >= <span class="num">18</span>:\n    <span class="fn">print</span>(<span class="st">"Reşit"</span>)\n<span class="kw">elif</span> yas >= <span class="num">15</span>:\n    <span class="fn">print</span>(<span class="st">"Genç"</span>)\n<span class="kw">else</span>:\n    <span class="fn">print</span>(<span class="st">"Çocuk"</span>)`, output: 'Reşit' },
      ],
      quiz: {
        question: '17 % 5 sonucu nedir?',
        options: ['3', '2', '3.4', '12'],
        correct: 1,
        explanation: '17 ÷ 5 = 3 kalan 2. % operatörü kalanı verir: 2.'
      },
      exercise: {
        question: 'Kullanıcıdan bir sayı alıp, pozitif, negatif veya sıfır olduğunu belirleyen bir program yazın.',
        answer: `sayi = int(input("Sayı girin: "))\nif sayi > 0:\n    print("Pozitif")\nelif sayi < 0:\n    print("Negatif")\nelse:\n    print("Sıfır")`
      }
    },
    {
      id: 't5',
      title: 'String Veri Türü ve String Metodları',
      meta: 'Hafta 3 • ~30 dk',
      icon: '5', iconColor: 'orange',
      explanation: `String'ler <strong>değiştirilemez (immutable)</strong> veri türüdür. Her karakter bir indekse sahiptir (0'dan başlar).<br><br>
        <strong>Dilimleme:</strong> s[baş:son:adım] — son indeks dahil değildir.<br><br>
        <strong>Önemli metodlar:</strong><br>
        • <code>upper()</code> / <code>lower()</code> — Büyük/küçük harf<br>
        • <code>strip()</code> — Boşlukları temizle<br>
        • <code>split()</code> — Ayır (liste döner)<br>
        • <code>replace(eski, yeni)</code> — Değiştir<br>
        • <code>find()</code> / <code>count()</code> — Ara / Say<br>
        • <code>startswith()</code> / <code>endswith()</code> — Başlangıç/son kontrol`,
      codes: [
        { code: `s = <span class="st">"Python"</span>\n<span class="fn">print</span>(s[<span class="num">0</span>])    <span class="cm"># ilk karakter</span>\n<span class="fn">print</span>(s[-<span class="num">1</span>])   <span class="cm"># son karakter</span>\n<span class="fn">print</span>(s[<span class="num">1</span>:<span class="num">4</span>])  <span class="cm"># dilimleme</span>`, output: 'P\nn\nyth' },
        { code: `metin = <span class="st">"  Merhaba Dünya  "</span>\n<span class="fn">print</span>(metin.strip())\n<span class="fn">print</span>(metin.strip().upper())\n<span class="fn">print</span>(<span class="st">"a-b-c"</span>.split(<span class="st">"-"</span>))`, output: "Merhaba Dünya\nMERHABA DÜNYA\n['a', 'b', 'c']" },
      ],
      quiz: {
        question: '"Python"[1:4] sonucu nedir?',
        options: ['Pyt', 'yth', 'ytho', 'Pyth'],
        correct: 1,
        explanation: 'İndeks 1\'den başlar (y), 4\'e kadar ama 4 dahil değil (y, t, h) → "yth"'
      },
      exercise: {
        question: 'Bir cümle alıp, kaç kelime olduğunu ve tamamını büyük harfe çevirip yazdırın.',
        answer: `cumle = input("Cümle girin: ")\nkelimeler = cumle.split()\nprint(f"Kelime sayısı: {len(kelimeler)}")\nprint(cumle.upper())`
      }
    },
  ],
  day2: [
    {
      id: 't6',
      title: 'List (Liste) Veri Türü ve Metodları',
      meta: 'Hafta 4 • ~30 dk',
      icon: '6', iconColor: 'blue',
      explanation: `Liste, <strong>sıralı ve değiştirilebilir (mutable)</strong> bir veri türüdür. Köşeli parantez <code>[]</code> ile oluşturulur.<br><br>
        <strong>Temel metodlar:</strong><br>
        • <code>append(x)</code> — Sona ekle<br>
        • <code>insert(i, x)</code> — Belirli indekse ekle<br>
        • <code>remove(x)</code> — Değere göre sil<br>
        • <code>pop(i)</code> — İndekse göre çıkar<br>
        • <code>sort()</code> — Sırala (yerinde)<br>
        • <code>reverse()</code> — Tersine çevir<br>
        • <code>extend()</code> — Başka listeyle birleştir<br>
        • <code>index(x)</code> — İndeksini bul`,
      codes: [
        { code: `liste = [<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>]\nliste.append(<span class="num">9</span>)\nliste.sort()\n<span class="fn">print</span>(liste)`, output: '[1, 1, 3, 4, 5, 9]' },
        { code: `meyveler = [<span class="st">"elma"</span>, <span class="st">"armut"</span>, <span class="st">"muz"</span>]\nmeyveler.insert(<span class="num">1</span>, <span class="st">"çilek"</span>)\n<span class="fn">print</span>(meyveler)\nmeyveler.remove(<span class="st">"armut"</span>)\n<span class="fn">print</span>(meyveler)`, output: "['elma', 'çilek', 'armut', 'muz']\n['elma', 'çilek', 'muz']" },
      ],
      quiz: {
        question: '[1,2,3].pop(1) ne döndürür ve liste ne olur?',
        options: ['Döndürür: 1, Liste: [2,3]', 'Döndürür: 2, Liste: [1,3]', 'Döndürür: 3, Liste: [1,2]', 'Hata verir'],
        correct: 1,
        explanation: 'pop(1) indeks 1\'deki elemanı (2) çıkarır ve döndürür. Liste [1,3] olur.'
      },
      exercise: {
        question: '5 adet sayıdan oluşan bir liste oluşturun. Listeyi sıralayın, en büyük ve en küçük elemanı yazdırın.',
        answer: `sayilar = [42, 17, 8, 95, 23]\nsayilar.sort()\nprint(f"En küçük: {sayilar[0]}")\nprint(f"En büyük: {sayilar[-1]}")`
      }
    },
    {
      id: 't7',
      title: 'Tuple (Demet) Veri Türü',
      meta: 'Hafta 4 • ~20 dk',
      icon: '7', iconColor: 'purple',
      explanation: `Tuple, <strong>sıralı ama değiştirilemez (immutable)</strong> veri türüdür. Normal parantez <code>()</code> ile oluşturulur.<br><br>
        Listeden farkı: Oluşturulduktan sonra eleman eklenemez, silinemez veya değiştirilemez.<br><br>
        <strong>Metodlar:</strong> Sadece <code>count()</code> ve <code>index()</code> vardır.<br><br>
        <strong>Ne zaman kullanılır?</strong> Değişmemesi gereken veriler için (koordinatlar, sabitler vb.)`,
      codes: [
        { code: `t = (<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">2</span>)\n<span class="fn">print</span>(t.count(<span class="num">2</span>))   <span class="cm"># 2'den kaç tane var</span>\n<span class="fn">print</span>(t.index(<span class="num">3</span>))   <span class="cm"># 3'ün indeksi</span>`, output: '3\n2' },
        { code: `<span class="cm"># Tuple unpacking</span>\nkoordinat = (<span class="num">41.0</span>, <span class="num">29.0</span>)\nx, y = koordinat\n<span class="fn">print</span>(<span class="st">f"Enlem: </span><span class="num">{x}</span><span class="st">, Boylam: </span><span class="num">{y}</span><span class="st">"</span>)`, output: 'Enlem: 41.0, Boylam: 29.0' },
      ],
      quiz: {
        question: 'Tuple ile Liste arasındaki temel fark nedir?',
        options: ['Tuple sıralı değildir', 'Tuple değiştirilemez', 'Tuple sadece sayı tutar', 'Fark yoktur'],
        correct: 1,
        explanation: 'Tuple immutable (değiştirilemez), Liste mutable (değiştirilebilir) veri türüdür.'
      },
      exercise: {
        question: '3 şehir adı içeren bir tuple oluşturun. İlk ve son elemanı yazdırın.',
        answer: `sehirler = ("İstanbul", "Ankara", "İzmir")\nprint(f"İlk: {sehirler[0]}")\nprint(f"Son: {sehirler[-1]}")`
      }
    },
    {
      id: 't8',
      title: 'Set (Küme) Veri Türü ve Metodları',
      meta: 'Hafta 4 • ~25 dk',
      icon: '8', iconColor: 'cyan',
      explanation: `Set, <strong>sırasız ve tekrarsız</strong> elemanlar içerir. Küme parantez <code>{}</code> ile oluşturulur.<br><br>
        <strong>Özellikler:</strong> İndeksleme yapılamaz, aynı elemandan birden fazla olamaz.<br><br>
        <strong>Metodlar:</strong><br>
        • <code>add(x)</code> — Eleman ekle<br>
        • <code>remove(x)</code> / <code>discard(x)</code> — Sil<br>
        • <code>union()</code> veya <code>|</code> — Birleşim<br>
        • <code>intersection()</code> veya <code>&</code> — Kesişim<br>
        • <code>difference()</code> veya <code>-</code> — Fark`,
      codes: [
        { code: `s = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">2</span>, <span class="num">1</span>}\n<span class="fn">print</span>(s)  <span class="cm"># tekrarlar silinir</span>`, output: '{1, 2, 3}' },
        { code: `a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>}\nb = {<span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>}\n<span class="fn">print</span>(a | b)   <span class="cm"># birleşim</span>\n<span class="fn">print</span>(a & b)   <span class="cm"># kesişim</span>\n<span class="fn">print</span>(a - b)   <span class="cm"># fark</span>`, output: '{1, 2, 3, 4}\n{2, 3}\n{1}' },
      ],
      quiz: {
        question: 'len({1, 1, 2, 2, 3}) sonucu nedir?',
        options: ['5', '3', '2', 'Hata verir'],
        correct: 1,
        explanation: 'Set tekrarsız eleman tutar: {1, 2, 3} → 3 eleman.'
      },
      exercise: {
        question: 'İki farklı öğrencinin aldığı dersleri küme olarak tanımlayın. Ortak dersleri ve sadece birinin aldığı dersleri bulun.',
        answer: `ali = {"Matematik", "Fizik", "Kimya"}\nveli = {"Fizik", "Biyoloji", "Kimya"}\nprint(f"Ortak: {ali & veli}")\nprint(f"Sadece Ali: {ali - veli}")\nprint(f"Sadece Veli: {veli - ali}")`
      }
    },
    {
      id: 't9',
      title: 'NoneType, Tür Dönüşümleri ve Döngüler',
      meta: 'Hafta 5 • ~30 dk',
      icon: '9', iconColor: 'green',
      explanation: `<strong>None:</strong> "Değer yok" anlamına gelir. Bir fonksiyonun return'ü yoksa None döner.<br><br>
        <strong>Tür Dönüşümleri:</strong> <code>int()</code>, <code>float()</code>, <code>str()</code>, <code>list()</code>, <code>bool()</code><br><br>
        <strong>for döngüsü:</strong> Bir iterable (liste, string, range vb.) üzerinde gezinir.<br>
        <strong>while döngüsü:</strong> Koşul True olduğu sürece tekrar eder.<br>
        <strong>range(baş, son, adım):</strong> Sayı dizisi üretir (son dahil değil).<br>
        <strong>break:</strong> Döngüden çık | <strong>continue:</strong> Sonraki iterasyona geç`,
      codes: [
        { code: `<span class="cm"># Tür dönüşümü</span>\nsayi = <span class="fn">int</span>(<span class="st">"42"</span>)\n<span class="fn">print</span>(sayi + <span class="num">8</span>)`, output: '50' },
        { code: `<span class="cm"># for döngüsü</span>\n<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>):\n    <span class="fn">print</span>(i, end=<span class="st">" "</span>)`, output: '1 2 3 4 5 ' },
        { code: `<span class="cm"># while döngüsü</span>\nn = <span class="num">1</span>\n<span class="kw">while</span> n <= <span class="num">3</span>:\n    <span class="fn">print</span>(<span class="st">f"Adım </span><span class="num">{n}</span><span class="st">"</span>)\n    n += <span class="num">1</span>`, output: 'Adım 1\nAdım 2\nAdım 3' },
      ],
      quiz: {
        question: 'range(2, 10, 3) hangi sayıları üretir?',
        options: ['2, 5, 8', '2, 4, 6, 8', '3, 6, 9', '2, 5, 8, 11'],
        correct: 0,
        explanation: '2\'den başlar, 3\'er artar, 10\'a kadar (dahil değil): 2, 5, 8.'
      },
      exercise: {
        question: '1\'den 20\'ye kadar olan çift sayıları for döngüsü ile yazdırın.',
        answer: `for i in range(2, 21, 2):\n    print(i, end=" ")\n# Çıktı: 2 4 6 8 10 12 14 16 18 20`
      }
    },
    {
      id: 't10',
      title: 'Dict (Sözlük) Veri Türü ve Metodları',
      meta: 'Hafta 5 • ~25 dk',
      icon: '10', iconColor: 'pink',
      explanation: `Dict, <strong>anahtar-değer (key-value)</strong> çiftleri tutan veri türüdür. Süslü parantez ile oluşturulur.<br><br>
        <strong>Özellikler:</strong> Anahtarlar benzersiz olmalıdır. Sıralı ve değiştirilebilir.<br><br>
        <strong>Metodlar:</strong><br>
        • <code>keys()</code> — Anahtarları döndürür<br>
        • <code>values()</code> — Değerleri döndürür<br>
        • <code>items()</code> — (anahtar, değer) çiftlerini döndürür<br>
        • <code>get(key, default)</code> — Güvenli erişim<br>
        • <code>update()</code> — Güncelle/birleştir<br>
        • <code>pop(key)</code> — Anahtarı sil ve değeri döndür`,
      codes: [
        { code: `ogrenci = {\n    <span class="st">"ad"</span>: <span class="st">"Barış"</span>,\n    <span class="st">"yas"</span>: <span class="num">20</span>,\n    <span class="st">"bolum"</span>: <span class="st">"Bilgisayar"</span>\n}\n<span class="fn">print</span>(ogrenci[<span class="st">"ad"</span>])\n<span class="fn">print</span>(ogrenci.get(<span class="st">"not"</span>, <span class="st">"Yok"</span>))`, output: 'Barış\nYok' },
        { code: `<span class="cm"># Dict üzerinde döngü</span>\n<span class="kw">for</span> k, v <span class="kw">in</span> ogrenci.items():\n    <span class="fn">print</span>(<span class="st">f"</span><span class="num">{k}</span><span class="st">: </span><span class="num">{v}</span><span class="st">"</span>)`, output: 'ad: Barış\nyas: 20\nbolum: Bilgisayar' },
      ],
      quiz: {
        question: '{"a": 1, "b": 2}.get("c", 0) ne döndürür?',
        options: ['None', 'Hata verir', '0', '"c"'],
        correct: 2,
        explanation: '"c" anahtarı yoksa, varsayılan değer olan 0 döner.'
      },
      exercise: {
        question: 'Bir telefon rehberi dict\'i oluşturun (3 kişi). Bir kişi ekleyin, birini silin ve tüm isimleri döngüyle yazdırın.',
        answer: `rehber = {"Ali": "555-1111", "Veli": "555-2222", "Ayşe": "555-3333"}\nrehber["Fatma"] = "555-4444"\nrehber.pop("Veli")\nfor isim in rehber.keys():\n    print(isim)`
      }
    },
  ]
};

// ========== RENDER FUNCTIONS ==========
function renderCodeBlock(codeObj, idx) {
  const outputHtml = codeObj.output ? `<div class="code-output">${codeObj.output}</div>` : '';
  return `
    <div class="code-block">
      <div class="code-header">
        <span>Python</span>
        <button class="copy-btn" onclick="copyCode(this)">Kopyala</button>
      </div>
      <pre>${codeObj.code}</pre>
      ${outputHtml}
    </div>`;
}

function renderQuiz(quiz, topicId) {
  const optionsHtml = quiz.options.map((opt, i) => 
    `<button class="quiz-opt" data-topic="${topicId}" data-idx="${i}" onclick="checkQuiz(this, ${quiz.correct},'${topicId}')">${String.fromCharCode(65+i)}) ${opt}</button>`
  ).join('');
  return `
    <div class="quiz-box">
      <h4>🧠 Mini Quiz</h4>
      <p>${quiz.question}</p>
      <div class="quiz-options">${optionsHtml}</div>
      <div class="quiz-feedback" id="fb-${topicId}"></div>
    </div>`;
}

function renderExercise(ex, topicId) {
  return `
    <div class="exercise-box">
      <h4>💻 Alıştırma</h4>
      <p>${ex.question}</p>
      <textarea placeholder="Kodunuzu buraya yazın..." id="ex-${topicId}"></textarea>
      <button class="show-answer-btn" onclick="showAnswer('${topicId}')">Cevabı Göster</button>
      <div class="answer-reveal" id="ans-${topicId}">
        <div class="code-block">
          <div class="code-header"><span>Çözüm</span></div>
          <pre>${ex.answer}</pre>
        </div>
      </div>
    </div>`;
}

function renderTopic(topic) {
  const codesHtml = topic.codes.map((c, i) => renderCodeBlock(c, i)).join('');
  const quizHtml = topic.quiz ? renderQuiz(topic.quiz, topic.id) : '';
  const exerciseHtml = topic.exercise ? renderExercise(topic.exercise, topic.id) : '';
  
  return `
    <div class="topic-card" id="card-${topic.id}">
      <div class="topic-header" onclick="toggleTopic('${topic.id}')">
        <div class="topic-left">
          <div class="topic-icon ${topic.iconColor}">${topic.icon}</div>
          <div>
            <div class="topic-title">${topic.title}</div>
            <div class="topic-meta">${topic.meta}</div>
          </div>
        </div>
        <div class="topic-right">
          <div class="topic-check" id="check-${topic.id}" onclick="event.stopPropagation(); markDone('${topic.id}')"></div>
          <span class="chevron">▾</span>
        </div>
      </div>
      <div class="topic-body">
        <div class="topic-content">
          <div class="section-label">📖 Konu Anlatımı</div>
          <div class="explanation">${topic.explanation}</div>
          <div class="section-label">🔧 Kod Örnekleri</div>
          ${codesHtml}
          ${quizHtml}
          ${exerciseHtml}
        </div>
      </div>
    </div>`;
}

// ========== STATE ==========
let currentDay = 'day1';
let completed = JSON.parse(localStorage.getItem('pyStudy') || '{}');

function updateProgress() {
  const dayTopics = topics[currentDay];
  const done = dayTopics.filter(t => completed[t.id]).length;
  const total = dayTopics.length;
  const pct = Math.round((done / total) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressPct').textContent = pct + '%';
  document.getElementById('progressText').textContent = `${done} / ${total} konu tamamlandı`;
}

function switchDay(day) {
  currentDay = day;
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-day="${day}"]`).classList.add('active');
  
  document.querySelectorAll('.day-section').forEach(s => s.classList.remove('active'));
  document.getElementById(day).classList.add('active');
  updateProgress();
}

function toggleTopic(id) {
  document.getElementById('card-' + id).classList.toggle('open');
}

function markDone(id) {
  completed[id] = !completed[id];
  localStorage.setItem('pyStudy', JSON.stringify(completed));
  const el = document.getElementById('check-' + id);
  el.classList.toggle('done', completed[id]);
  updateProgress();
}

function checkQuiz(btn, correct, topicId) {
  const idx = parseInt(btn.dataset.idx);
  const siblings = document.querySelectorAll(`[data-topic="${topicId}"]`);
  siblings.forEach(s => { s.disabled = true; s.classList.remove('correct','wrong'); });
  
  if (idx === correct) {
    btn.classList.add('correct');
    showFeedback(topicId, true, topics[currentDay].find(t=>t.id===topicId)?.quiz.explanation || '');
  } else {
    btn.classList.add('wrong');
    siblings[correct].classList.add('correct');
    showFeedback(topicId, false, topics[currentDay].find(t=>t.id===topicId)?.quiz.explanation || '');
  }
}

function showFeedback(topicId, isCorrect, explanation) {
  const fb = document.getElementById('fb-' + topicId);
  fb.className = 'quiz-feedback show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  fb.textContent = (isCorrect ? '✅ Doğru! ' : '❌ Yanlış. ') + explanation;
}

function showAnswer(topicId) {
  document.getElementById('ans-' + topicId).classList.toggle('show');
}

function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  const text = pre.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Kopyalandı';
    setTimeout(() => btn.textContent = 'Kopyala', 1500);
  });
}

// ========== INIT ==========
function init() {
  ['day1', 'day2'].forEach(day => {
    const container = document.getElementById(day);
    const html = topics[day].map(t => renderTopic(t)).join('');
    container.querySelector('.topics-container').innerHTML = html;
  });

  // Restore completed state
  Object.keys(completed).forEach(id => {
    const el = document.getElementById('check-' + id);
    if (el && completed[id]) el.classList.add('done');
  });

  updateProgress();
}

document.addEventListener('DOMContentLoaded', init);
