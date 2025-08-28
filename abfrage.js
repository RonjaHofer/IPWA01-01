// Alle Radio-Buttons holen
const radios = document.querySelectorAll('input[name="radioDefault"]');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        // Erst alles verstecken
        document.getElementById("abholadresse").classList.add("visually-hidden");
        document.getElementById("artDerKleidung").classList.add("visually-hidden");
        document.getElementById("aktuellesKrisengebiet").classList.add("visually-hidden");
       
        // Dann den passenden Inhalt anzeigen
        if (radio.value === "radioDefault1") {
            document.getElementById("artDerKleidung").classList.remove("visually-hidden");
            document.getElementById("aktuellesKrisengebiet").classList.remove("visually-hidden");
            
        } else if (radio.value === "radioDefault2") {
            document.getElementById("abholadresse").classList.remove("visually-hidden");
            document.getElementById("artDerKleidung").classList.remove("visually-hidden");
            document.getElementById("aktuellesKrisengebiet").classList.remove("visually-hidden");
        }
    });
});
