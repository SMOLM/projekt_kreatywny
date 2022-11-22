const content = document.getElementById('cnt')
const reset = document.getElementById('reset')

const contents = {
    SG: '<p><b>Algorytm</b> – skończony ciąg jasno zdefiniowanych czynności koniecznych do wykonania pewnego rodzaju zadań,<br> sposób postępowania prowadzący do rozwiązania problemu. Można go przedstawić na schemacie blokowym.<br> Słowo <b>„algorytm”</b> pochodzi od łacińskiego słowa algorithmus, oznaczającego wykonywanie działań<br> przy pomocy liczb arabskich, które z kolei wzięło się od nazwy <b>„Algoritmi”</b>.</p>',
    WJCSS: '<h2>W jakim celu stosujemy szyfry?</h2><p><b>Szyfry</b> to funkcja matematyczna służąca do szyfrowania tekstu jawnego i jego deszyfrowania.<br> Zazwyczja wykorzystujemy oddzielne funkcje do deszyfrowania i szyfrowania danych.<br> Wiadomość przed zaszyfrowaniem nazywana jest <b>tekstem jawnym</b>,<br> a po zaszyfrowaniu <b>szyfrogramem</b>. Dane szyfrujemy aby uchronić je przed osobami trzecimi.</p>',
    PPDS: '<h2>Podstawowe pojęcia dotyczące szyfrowania</h2><p><strong> Z szyfrowaniem związane są takie pojęcia jak:</strong><br><ul><li><b>Kryptologia</b> – jest to nauka o szyfrach;</li><br><li><b>Kryptografia</b> – nauka o konstruowaniu i stosowaniu szyfrów;</li><br><li><b>Kryptoanaliza</b> – polega na łamaniu szyfrów.</li></ul></p>',
    SC: '<h2>Szyfr Cezara</h2><p>Jedna z najprostrzych technik szyfrowania. Jest to rodzaj <b>szyfru podstawieniowego</b>,<br> w którym każda litera <b>tekstu jawnego</b> zastępowana jest inną, oddaloną od niej<br> o stałą liczbę liter w alfabecie, przy czym kierunek zamiany musi być zachowany.<br> Nie rozróżnia się przy tym liter dużych i małych.<br> Nazwa szyfru pochodzi od <b>Juliusza Cezara</b>,<br> który prawdopodobnie używał tej techniki do komunikacji ze swymi przyjaciółmi.</p><br><img src="IMG/cezar.png"><br><p>Algorytm szyfrowania zastosowany w kodzie Cezara bywa fragmentem<br> bardziej złożonych systemów szyfrowania np.  <b>Szyfr Vigenère’a</b>.<br> Szyfr Cezara, jak każda technika podmieniająca pojedyncze litery<br> alfabetu na inne, <strong>nie oferuje żadnego bezpieczeństwa komunikacji.</strong></p>  ',
    MSTA: '<h2>Miniszyfrowanie - tworzenie anagramów</h2><p><b>Anagram</b> tworzymy poprzez przestawienie liter lub sylab wyrazu bądź zdania,<br> wykorzystując wszystkie litery w tym głoski lub sylaby wyrazu bądź zdania źródłowego.</p>',
    SSIA: '<h2>Szyfrowanie symetryczne i asymetryczne</h2><p>Algorytmy szyfrowania podobnie jak kryptografia dzielą się na dwie kategorie:<br> <b>algorytmy szyfrowania symetrycznego</b> i <b>algorytmy szyfrowania asymetrycznego</b>.<br> Podstawowa różnica między tymi dwiema metodami szyfrowania polega na tym,<br> że <b>algorytmy szyfrowania symetrycznego</b> opierają się na pojedynczym klucz,<br> podczas gdy <b>szyfrowanie asymetryczne</b> polega na wykorzystaniu dwóch różnych,<br> ale powiązanych ze sobą <b>kluczy</b>. Takie rozróżnienie, choć pozornie proste, najlepiej<br> wyjaśnia różnice funkcjonalne występujące między tymi dwiema formami szyfrowania<br> oraz sposobem ich wykorzystania.</p>',
    ARSA: '<h2>Algorytm RSA</h2><p><b>Algorytm Rivesta-Shamira-Adlemana (RSA)</b> – jeden z obecnie najpopularniejszych <b>asymetrycznych algorytmów<br> kryptograficznych</b> z kluczem publicznym. Jest to <strong>pierwszy</strong> algorytm, który może być używany do szyfrowania oraz<br> do podpisów cyfrowych. Bezpieczeństwo szyfrowania opiera się na <b>trudności rozkładu<br> na czynniki</b> dużych liczb złożonych. Nazwę wzięto od nzawisk twórców tego algorytmu.</p>',
    MB: '<h2>Metoda bąbelkowa</h2><p>Sortowanie bąbelkowe – prosta metoda sortowania o złożoności czasowej i pamięciowej. <br>Polega na porównywaniu dwóch kolejnych elementów i zamianie ich kolejności,<br> jeżeli zaburza ona porządek, w jakim się sortuje tablicę. Sortowanie kończy się,<br> gdy podczas kolejnego przejścia nie dokonano żadnej zmiany.<br><h2>Działanie argorytmu:</h2></p><br><br><img src="IMG/babelek.gif">',
    PPW: '<h2>Porządkowanie przez wstawianie</h2><p>Jest to jeden z najprostszych algorytmów sortowania, którego zasada działania odzwierciedla sposób<br> w jaki ludzie ustawiają karty – kolejne elementy wejściowe są ustawiane na odpowiednie miejsca docelowe.<br> Jest efektywny dla niewielkiej liczby elementów. Pomimo tego, że jest znacznie mniej wydajny od algorytmów<br> takich jak quicksort czy heapsort, posiada pewne zalety: <br><ul><li>liczba wykonanych porównań jest zależna od liczby inwersji w permutacji,<br> dlatego algorytm jest wydajny dla danych wstępnie posortowanych,</li><br><li>jest wydajny dla zbiorów o niewielkiej liczebności,</li><br><li>jest stabilny</li><br>Istnieje modyfikacja algorytmu, pozwalająca zmniejszyć liczbę porównań. Zamiast za każdym razem<br> iterować po już posortowanym fragmencie, można posłużyć się wyszukiwaniem binarnym.<br> Pozwala to zmniejszyć liczbę porównań,  nie zmienia się jednak złożoność algorytmu,<br> ponieważ liczba przesunięć elementów jest nadal taka sama.<h2>Schemat działania algorytmu</h2><br><ol><li>Utwórz zbiór elementów posortowanych i przenieś do niego dowolny element ze zbioru nieposortowanego.</li><br><li>Weź dowolny element ze zbioru nieposortowanego.</li><br><li>Wyciągnięty element porównuj z kolejnymi elementami zbioru posortowanego, póki nie napotkasz<br> elementu równego lub elementu większego lub nie znajdziemy się na początku/końcu zbioru uporządkowanego.</li><br><li>Wyciągnięty element wstaw w miejsce, gdzie skończyłeś porównywać.</li><br><li>Jeśli zbiór elementów nieuporządkowanych jest niepusty, wróć do punktu 2.</li></p><br><br><img src="IMG/PPW.gif">',
    MP: '<h2>Metoda połowienia</h2> <p>Metoda Połowienia Przedziałów służy do znajdowania miejsca zerowego pewnej ciągłej funkcji ograniczonej do pewnego przedziału.<br> Algorytm polega na wyliczeniu wartości funkcji na końcach dwóch przedziałów. Jeśli są różnych wartości to znaczy,<br> że musi istnieć miejsce zerowe. W każdej iteracji obliczana jest wartość pośrodku przedziału. Jeśli wartość jest<br> różna od 0 to należy ograniczyć przedział z odpowiedniej strony. Zwykle tego algorytmu używa się jedynie<br> do wyliczania konkretnej wartości miejsca zerowego. Do poszukiwania miejsc zerowych jest on bardzo wolny<br> i nie zawsze gwarantuje znalezienie kiedy wartości na obu końcach przedziałów są tego samego znaku.</p><img src="IMG/plowienie.png">',
    MZ: '<h2>Metoda zachłanna</h2><p> Algorytm, który w celu wyznaczenia rozwiązania w każdym kroku dokonuje zachłannego,<br> najlepiej rokującego w danym momencie wyboru rozwiązania częściowego.<br> Algorytm zachłanny nie dokonuje oceny czy w kolejnych krokach jest sens<br> wykonywać dane działanie, dokonuje decyzji lokalnie optymalnej, dokonuje on wyboru<br> wydającego się w danej chwili najlepszym, kontynuując rozwiązanie podproblemu<br> wynikającego z podjętej decyzji. Typowe zadanie rozwiązywane metodą zachłanną<br> jest w celu optymalizacji, jednak algorytm zachłanny nie zawsze odnajduje rozwiązanie optymalne.</p>',
    WH: '<h2>Wieże Hanoi</h2><p>Problem polegający na odbudowaniu, z zachowaniem kształtu, wieży z krążków o różnych średnicach,<br> przy czym podczas przekładania wolno się posługiwać buforem, jednak przy ogólnym założeniu,<br> że nie wolno kłaść krążka o większej średnicy na mniejszy ani przekładać kilku krążków jednocześnie.<br> Jest to przykład zadania, którego złożoność obliczeniowa wzrasta niezwykle szybko<br> w miarę zwiększania parametru wejściowego, liczby elementów wieży. </p><br><br><img src="IMG/hanoi.gif">',
    NCPR: '<h2>Na czym polega rekurencja?</h2><p><b>Rekurencja</b> jest to sytuacja, w której <b>funkcja wywołuje samą siebie</b><br> w celu rozwiązania pewnego problemu. W wielu sytuacjach pozwala<br> w znaczny sposób uprościć zapis iteracyjnego rozwiązania naszego problemu jednak,<br> <b>nie zawsze jest to dobry pomys</b>. Metoda wywołując samą siebie może doprowadzi do<br> <b>nieskończonej pętli</b>, jednak dzięki odpowiedniemu zapisowi można się przed tym zabezpieczyć.<br> <b>Rekurencja</b> wykorzystywana jest w wielu sytuacjach, najpopularniejsze to: <ul><li>algorytmy wyszukiwania;</li><br><li>rekurencyjne struktury danych;</li><br><li>specyficzne algorytmy, w których wykorzystanie<br> rekurencji jest czymś naturalnym.</li></p>',
    AOSLN: '<h2>Algorytm obliczania silni liczby naturalnej</h2><p><b>Silnia (n!)</b> to iloczyn n kolejnych liczb naturalnych, przy czym dodatkowo zachodzi <b>0! = 1</b>.<br> Obliczanie silni jest sztandarowym przykładem używania rekurencji:<br>n! = n * (n-1)!<br> <b>Rekurencyjne</b> obliczanie silni może być opisane następującym schematem blokowym: <br><br><img src="IMG/silnia.gif"></p>',
    CF: '<h2>Ciąg Fibonacciego</h2><p><b>Leonardo z Pizy</b>, o przydomku <b>Fibonacci</b>, to włoski matematyk, któremu powszechnie przypisuje się<br> „odkrycie” wyjątkowego ciągu liczb w dziele <b>Liber abaci</b>, w którym omówił go w kontekście<br> rozmnażania się królików. <b>Ciąg Fibonacciego</b> to ciąg liczb naturalnych, z których każda kolejna<br> liczba jest określona <b>rekurencyjnie</b>. Pierwsza liczba ciągu to F0 = 0, a druga F1 = 1,<br> z kolei każda kolejna jest sumą dwóch poprzednich.<br><br>Złoty kąt:<br><br><img src="IMG/ciag.avif"><br><br><b>Ciąg Fibonacciego</b> oraz złota liczba pojawią się w przyrodzie, anatomii ludzkiego ciała,<br> architekturze, inżynierii, sztuce czy fizyce. Ruchy fal, huragany, skorupy ślimaków,<br> płatki roślin, galaktyki spiralne są odzwierciedleniem liczb Fibonacciego. </p>',
    AEWNWD: '<h2>Algorytm Euklidesa wyznaczania NWD</h2><p><b>Algorytm Euklidesa</b> służy do wyznaczania <b>największego wspólnego dzielnika</b> dwóch liczb całkowitych.<br> Największy wspólny dzielnik dwóch liczb a i b, to taka liczba, która dzieli te liczby bez reszty i jest<br> ona możliwie największa. Można go zastosować do skracania ułamków lub wyznaczenia najmniejszej<br> wspólnej wielokrotności NWW.</p>',
    ZRODLA: '<h2>Źródła wiedzy</h2><ul><li><a href="https://www.algorytm.edu.pl/algorytmy-maturalne/algorytm-eulkidesa.html" target="_blank">Algorytm.edu</a></li><br><li><a href="https://boringowl.io/blog/ciag-fibonacciego" target="blank">Boringowl</a></li><br><li><a href="http://www.algorytm.org/algorytmy-arytmetyczne/silnia.html" target="blank">Algorytm.org</a></li><br><li><a href="https://javastart.pl/baza-wiedzy/java-zaawansowane/rekurencja-rekursja" target="blank">Javastart.pl</a></li><br><li><a href="https://pl.wikipedia.org/wiki/RSA_(kryptografia)" target="blank">Wikipedia (RSA)</a></li><br><li><a href="https://academy.binance.com/pl/articles/symmetric-vs-asymmetric-encryption" target="blank">Academy binance</a></li><br><li><a href="https://dlaucznia.migra.pl/informatyka-1-3.-podrecznik-dla-szkol-ponadpodstawowych.-zakres-podstawowy./r14t81/" target="blank">Migra - Strefa Ucznia</a></li><br><li><a href="https://pl.wikipedia.org/wiki/Szyfr_Cezara" target="blank">Wikipedia (szyfr Cezara)</a></li><br><li><a href="https://www.szkolyete.pl/index.php/liceum-ogolnoksztalcace/przedmioty/informatyka/2008-szyfrowanie-informacji" target="blank">Szkolyete</a></li><br><li><a href="https://pl.wikipedia.org/wiki/Szyfr" target="blank">Wikipedia (szyfr)</a></li><br><li><a href="https://scholar.google.pl/scholar?q=Podstawowe+poj%C4%99cia+dotycz%C4%85ce+szyfrowania&hl=pl&as_sdt=0&as_vis=1&oi=scholart" target="blank">Scholar</a></li><br><li><a href="https://pl.wikipedia.org/wiki/Algorytm_zach%C5%82anny" target="blank">Wikipedia (metoda zachłanna)</a></li><br><li><a href="https://pl.wikipedia.org/wiki/Metoda_r%C3%B3wnego_podzia%C5%82u" target="blank">Wikipedia (metoda płowieniowa)</a></li><br><li><a href="https://mattomatti.com/pl/a0048" target="blank">Mattomatti</a></li><br><li><a href="https://pl.wikipedia.org/wiki/Sortowanie_b%C4%85belkowe" target="blank">Wikipedia (metoda bąbelkowa)</a></li><br><li><a href="https://pl.wikipedia.org/wiki/Sortowanie_przez_wstawianie" target="blank">Wikipedia (Sortowanie przez wstawianie</a></li><br><li><a href="https://pl.khanacademy.org/computing/computer-science/algorithms/towers-of-hanoi/a/towers-of-hanoi" target="blank">Khanacademy (Wieża hanoi)</a></li><br><li><a href="https://pl.wikipedia.org/wiki/Wie%C5%BCe_Hanoi" target="blank">Wikipedia (Wieża hanoi)</a></li>',
};

const buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        loadContent(this.getAttribute('data-section'));
    });
}

function loadContent(section) {
    content.innerHTML = contents[section];
    
}
