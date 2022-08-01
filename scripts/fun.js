
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
/*Funzione per navTab, funziona su live server.
Per utilizzarla:
NAV:
-assegnate ad ogni bottone la classe linkTab
-assegnate al bottone che resta in focus l'id Open (serve per tenerlo attivo anche se non è stato clickato)
-assegnate subito dopo onclick(event, 'nome dell'id che avete assegnato')
CONTENUTI: 
-assegnate ad ogni div che deve switchare la classe tabContent.
-assegnate un id da associare all'onclick 

====ESEMPIO====

-parte della navTab

<button class="linkTab" onclick="openTab(event, 'Notizie Ea')" id="Open">
<button class="linkTab" onclick="openTab(event, 'EA Play')">

-parte del contenuto

<div class="main-content-wrap tabContent" id="Notizie Ea">
    <article>1</article>
    <article>2</article>
    <article>3</article>
</div>
<div class="main-content-wrap tabContent" id="EA Play">
    <article>1</article>
    <article>2</article>
    <article>3</article>
</div>
*/

function openTab(azione, div) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabContent");
    for(i= 0;  i < tabcontent.length; i++ ) tabcontent[i].style.display = "none";

    tablinks = document.getElementsByClassName("linkTab");
    for(i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");

    document.getElementById(div).style.display = "flex";
    azione.currentTarget.className += " active";
  }
  
document.getElementById("Open").click();
