function tboxWrite() {
    var tbox1; // aşağıda kullanağım değişgeni tanımlıyorum.

    tbox1 = document.getElementById("tbox1").value; // html tarafındaki tbox1 elementinin içerğini okuyorum.

    document.getElementById("sonuc1").innerHTML = tbox1; // html tarafındaki sonuc1 id li elementin içeriğini öğrendiğim değerle dolduruyorum.
}

function artir() {
    var deger;

    deger = parseInt(document.getElementById("tbox2").value);

    deger++;

    document.getElementById("tbox2").value = deger;
}

function azalt() {
    var deger;

    deger = parseInt(document.getElementById("tbox2").value);

    deger--;

    document.getElementById("tbox2").value = deger;
}