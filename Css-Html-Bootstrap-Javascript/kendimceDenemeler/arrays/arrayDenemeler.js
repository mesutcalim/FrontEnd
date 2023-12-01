let dizi = [2,5,8,11,15,17];

const filtrelenmisSayilar = dizi.filter(function(sayi) {
    return sayi >10;
});

let sayilarin5kati = filtrelenmisSayilar.map(function(sayi) {
    return sayi*5;
});

console.log(sayilarin5kati)

let dizi2 = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi2){
// Kodunuzu buraya yazın.
const büyüklükController = dizi2.find(function(sayi) {
    return sayi >5;
});
if(büyüklükController){
    console.log("5 ten büyük sayı var")
}
}

myFunction(dizi2);

let dizi3 = [2,3,4];

function indirgeyici (akumulator, sayi) {
    return akumulator * sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1 = dizi3.reduce(indirgeyici,1);

console.log(sonuc1);

