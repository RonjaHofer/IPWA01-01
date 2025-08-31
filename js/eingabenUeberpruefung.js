function checkEingabe() {
    let valid = true;
    const fehlerFeld = document.getElementById("eingabeFehler");

    const selected = document.querySelector('input[name="radioDefault"]:checked').value;
    // --- PLZ prüfen nur wenn Radiobutton 2 aktiv ist ---
    if (selected === "radioDefault2") {
        const plzAbholadresse = document.getElementById("plzAbholadresse");

        if (!checkPlz()) {

            plzAbholadresse.classList.add("is-invalid");

            valid = false;
        } else {

            plzAbholadresse.classList.remove("is-invalid");

        }


        const strHNr = document.getElementById("strHNr");

        if (strHNr.value.trim() === "") {
            // Feld ist leer

            strHNr.classList.add("is-invalid");
            valid = false;
        } else {
            strHNr.classList.remove("is-invalid");
        }

        const ort = document.getElementById("ort");

        if (ort.value.trim() === "") {
            // Feld ist leer

            ort.classList.add("is-invalid");
            valid = false;
        } else {
            ort.classList.remove("is-invalid");
        }


    }


    const artDerKleidung = document.getElementById("artDerKleidung1");

    if (artDerKleidung.value.trim() === "") {
        // Feld ist leer

        artDerKleidung.classList.add("is-invalid");
        valid = false;
    } else {
        artDerKleidung.classList.remove("is-invalid");
    }



    // --- Krisengebiet prüfen ---
    const krisengebiet = document.getElementById("aktuellesKrisengebietSelect");
    if (krisengebiet.value === "" || krisengebiet.value === "Bitte auswählen...") {
        krisengebiet.classList.add("is-invalid");
        valid = false;
    } else {
        krisengebiet.classList.remove("is-invalid");
    }

    // --- wenn alles passt ---
    if (valid) {
        fehlerFeld.textContent = "";

        // Werte einsammeln
        const params = new URLSearchParams({
            artDerKleidung: artDerKleidung.value,
            krisengebiet: krisengebiet.value,
            strHNr: strHNr.value,
            plz: document.getElementById("plzAbholadresse").value,
            ort: ort.value,
            datum: new Date().toLocaleDateString("de-DE"),
            uhrzeit: new Date().toLocaleTimeString("de-DE")
        });

        // Weiterleiten
        window.location.href = "bestaetigung.html?" + params.toString();

    } else {
        fehlerFeld.textContent = "❌ Bitte alle Pflichtfelder korrekt ausfüllen.";
        fehlerFeld.style.color = "red";
    }
}

function checkPlz() {
    const plzAb = document.getElementById("plzAbholadresse").value
    const abholPrefix = plzAb.substring(0, 2);
    // Postleitzahlen der Geschäftsstellen als Array
    const plzGe = ["80331", "90402", "01067", "20095"]
    // München, Nürnberg, Dresden, Hamburg
    const fehlerFeld = document.getElementById("plzFehler");

    // Vorherige Meldung zurücksetzen
    fehlerFeld.textContent = "";
    // Eingabe prüfen: genau 5 Ziffern?
    if (!/^\d{5}$/.test(plzAb)) {
        fehlerFeld.textContent = "❌ Bitte eine gültige 5-stellige Postleitzahl eingeben!";
        fehlerFeld.style.color = "red";
        return false; // Abbruch, da PLZ ungültig
    }
    // Jede Station einzeln prüfen
    for (let i = 0; i < plzGe.length; i++) {
        let stationPrefix = plzGe[i].substring(0, 2);

        if (abholPrefix === stationPrefix) {
            fehlerFeld.textContent = "✔️ Abholung möglich!";
            fehlerFeld.style.color = "green";
            return true; // sofort beenden, wenn eine passt
        }
    }

    // keine passende Station
    fehlerFeld.textContent = "❌ Keine Abholung möglich, da sich keine Geschäftsstelle in der Nähe befindet. " +
        "Bitte bringen Sie die Kleiderspende bei einer Geschäftstelle vorbei!";
    fehlerFeld.style.color = "red";
    return false;

};
