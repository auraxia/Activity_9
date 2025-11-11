function fn_ValForm() {
    var sMsg = "";

    if (document.getElementById("name").value == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (document.getElementById("email").value == "") {
        sMsg += "\n* Anda belum mengisikan email";
    }
    if (document.getElementById("message").value == "") {
        sMsg += "\n* Anda belum mengisikan pesan";

    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}