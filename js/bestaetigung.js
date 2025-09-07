document.addEventListener("DOMContentLoaded", function () {
    // Daten aus URL auslesen
    const params = new URLSearchParams(window.location.search);
    document.getElementById("outArt").textContent = params.get("artDerKleidung");
    document.getElementById("outKrisen").textContent = params.get("krisengebiet");

    const hnr = params.get("strHNr");
    const plz = params.get("plz");
    const ort = params.get("ort");
    
    // Prüfung ob in plz ein Wert hinterlegt ist
    if(plz != "") {
        document.getElementById("adresse").style.display = "block";
        document.getElementById("outStrHNr").textContent = hnr
        document.getElementById("outPlz").textContent = plz
        document.getElementById("outOrt").textContent = ort
    }

document.getElementById("outDatum").textContent = params.get("datum");
    document.getElementById("outUhrzeit").textContent = params.get("uhrzeit");
});