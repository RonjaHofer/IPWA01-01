//Prüfung Postleitzahl, dass diese nur aus Zahlen besteht
const postleitzahl = document.getElementById("plzAbholadresse");

    postleitzahl.addEventListener('input', () => {
        // Entfernt alles, was keine Zahl ist
        postleitzahl.value = postleitzahl.value.replace(/[^0-9]/g, '');
    });
