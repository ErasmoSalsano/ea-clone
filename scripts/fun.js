/* Funzione che importa parti di html. 
Valori: 
    -id del contenitore che ospiterà il codice, 
    -nome del file sul quale si trova il codice da importare (comprensivo di percorso)
posizionarlo in fondo al body, nel suo tag script: <script>importHtml(".header-wrap", "/partials/header.html"); ecc ecc</script></body> */

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

function openTab(azione, topic) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabContent");
    for(i= 0;  i < tabcontent.length; i++ ) tabcontent[i].style.display = "none";

    tablinks = document.getElementsByClassName("linkTab");
    for(i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");

    document.getElementById(topic).style.display = "flex";
    azione.currentTarget.className += " active";
}
try {
    document.getElementById("Open").click();
} catch (error) {
    error;
}

/* Comportamento user-space */

var scrollBefore = 0;

document.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;
    let elem = document.querySelector("#header-wrap");

    if(scrollBefore > scrolled){
        if(elem.classList.contains("user-close")){
            elem.classList.remove("user-close");
        }
    }else{
        if(!elem.classList.contains("user-close")){
            elem.classList.add("user-close");
        }
    }
    scrollBefore = scrolled;
})

/* Apertura user board (Ancora da fare) */

function toggleUserBoard(){
    let elem = document.querySelector(".user-board");
    /* Se è chiuso aprilo, fai l'animazione ecc
    altrimenti chiudilo */
}

function toggleBoardAccount(){
    let elem = document.querySelector(".board-account");
    /* Se è già aperto si chiude tutto, quindi si richiama anche toggleUserBoard,
    Se board-help è aperto si chiude e si apre questo,
    altrimenti si apre sia user-board che questo */
}

function toggleBoardHelp(){
    let elem = document.querySelector(".board-help")
    /* Se è già aperto si chiude tutto, quindi si richiama anche toggleUserBoard,
    Se board-account è aperto si chiude e si apre questo,
    altrimenti si apre dia user-board che questo */
}

/* Apertura menù laterali */

function togglePopupMenuWrap(){
    /* Apri/chiudi popup-menu-wrap 
    se si deve aprire: 
        -controllare la larghezza dello schermo:
        -aprire la nav o i giochi in base alla larghezza
    se si deve chiudere: chiudere tutto
        */
}



/* Funzione x scroll */

// button all'inizio e alla fine , all'infuori di navTabArticles:

// <div class="main-content-wrap" style="padding:0" ;>
// <button class="left-btn buttons" id="left-Btn" onclick="toScroll(-1)"><i class="material-icons">arrow_back_ios</i></button>
// <div class="navTabArticles">
//     ...
// </div>
// <button class="left-btn buttons" id="left-Btn" onclick="toScroll(-1)"><i class="material-icons">arrow_forward_ios</i></button>
// </div>

const btnleft = document.querySelector("#left-Btn");
const btnright = document.querySelector("#right-Btn");
const scrollCont = document.querySelector(".navTabArticles");

let scrollAmount = 170;

function toScroll(val){   
scrollCont.scrollLeft += (val*scrollAmount)

if(scrollCont.scrollLeft > 0){
    btnleft.style.display = "block";
}else{
    btnleft.style.display = "none";
}

if(scrollCont.scrollLeft > 250 ){   
    btnright.style.display = "none";
}else{
    btnright.style.display = "block";
}  
}