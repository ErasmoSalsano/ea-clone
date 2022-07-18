
/* Funzione che importa parti di html. Valori: id del contenitore che ospiterà il codice, nome del file sul quale si trova il codice da importare
Ci sono ancora aspetti da sistemare ma per ora sul live preview funziona.
posizionarlo in fondo al body, nel suo tag script: <script>importHtml(".header-wrap", "header.html"); ecc ecc</script></body> */

function importHtml(id, filename){
    console.log(`div id: ${id}, filename: ${filename}`);

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status != 404) {element.innerHTML = this.responseText;}
                if (this.status == 404) {element.innerHTML = "<h1>Page not found</h1>";}
            }
        }
        xhttp.open("GET", `${file}`, true);
        xhttp.send();
        return;
    }
}