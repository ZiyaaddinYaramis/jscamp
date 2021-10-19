console.log("Merhaba Kodlama.io");
// 10:20 Dersteyiz..

//var dolarDun = 9.2;     ** var artik pek kullanilmiyor
//dolarDun = "Ankara";
//var dolarBugun = 9.3;  ** var artik pek kullanilmiyor

let dolarBugun = 9.3;

let dolarDun = 9.2;
//dolarDun = "Ankara"; // Js type safe degildir

{
  // {} yaparak bir blok olusturduk
  let dolarDun = 9.1; // nesneler tanimlandigi yerde gecerlidir. ctrl s yapinca consol da 9.10 görulmez. Sayet degiskeni var olarak tamimlasa idik consolda 9.1 görukecekti cunku var global bir degisken gibi calisacakti
}

console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 11; // const degiskene bir defa deger atandiginda bir daha degistirilmez bu sebeble hata verecektir

console.log(euroDun);
// 10:20 Dersteyiz..

// array
// camelCasing == ilk kucuk sonraki kelime buyuk
// PascalCasing == ilk buyuk sonraki kelime buyuk

let konutKredileri = [
  "Konut kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
];

console.log("<ul>");
for (let i = 0; i < 3; i++) {
  // let i = 0; i < konutKredileri.length; i++ ==> Yaparak Dinamik Hale Getirtebiliriz
  // console.log("<li>" + i + "</li>"); ==> sadece i yazarsan index numaralarini yazdirir
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");

//for
// ctrl + k ardina ctrl +c yaparak /* */ yapilabilir. yani coment haline getirir
{
  /* <ul>
<li>Konut kredisi</li>
<li>Emlak Konut kredisi</li>
<li>Kamu Konut kredisi</li>
 </ul> */
}

//let konutKredileri = [12, "Emlak Konut Kredisi", ["a", "b", "c"]];  ==> Bu sekildede olabilir

console.log(konutKredileri); // ctrl + s yapmalisin
