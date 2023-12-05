function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Nilai alas atau tinggi tidak boleh kosong!');
        return;
    }

    var luas = (alas*tinggi)/2;

    var result = "L = 1/2 x alas x tinggi" +
        "<br>L = 1/2 x " + alas + " x " + tinggi +
        "<br>L = " + luas.toFixed(2) +
        "<br>Sehingga hasil perhitungan luas segitiga adalah " + luas.toFixed(2) + " cm";

    document.getElementById('resultLuas').innerHTML = result;
}

function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert('Nilai panjang sisi tidak boleh kosong!');
        return;
    }

    var keliling = sisiA + sisiB + sisiC;

    var result = "K = sisi A + sisi B + sisi C " +
        "<br>K = " + sisiA + " + " + " + " + sisiB + " + " + sisiC +
        "<br>K = " + keliling.toFixed(2) +
        "<br>Sehingga hasil perhitungan keliling segitiga adalah " + keliling.toFixed(2) + " cm";
    document.getElementById('result').innerHTML = result;
}

function resetNilai (){
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('result').innerHTML  = null;
    document.getElementById('resultLuas').innerHTML  = null;
}

