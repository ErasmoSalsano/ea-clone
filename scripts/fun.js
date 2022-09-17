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
//Management metaTag

if(document){
    let pageTitle = document.title;
    let pageDescription = document.querySelector('meta[name="description"]');
    let navigationScript = document.createElement('div');
    let scriptRoutes = document.createElement('script')
    let footerScript = document.createElement('div');
    
    document.body.prepend(navigationScript);
    navigationScript.setAttribute('id', 'header-wrap');

    document.body.insertBefore(footerScript, document.querySelector('script'));
    footerScript.setAttribute('id', 'footer-wrap')
    
    document.querySelector('script')
    document.body.appendChild(scriptRoutes);
    scriptRoutes.innerHTML = `
        importHtml("header-wrap", "/partials/header.html");
        importHtml("footer-wrap", "/partials/footer.html");
    `
    document.head.insertAdjacentHTML('beforeend',`
    <meta property="og:type" content="article">
    <meta property="og:description" content="${pageDescription}">
    <meta property="og:url" content="#">
    <meta property="og:site_name" content="${pageTitle}">
    <meta property="og:image" content="https://media.contentapi.ea.com/content/dam/eacom/images/2021/03/ea-featured-tile-generic-electronic-arts.png.adapt.crop191x100.1200w.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="628">
    <meta name="author" content="Electronic Arts">
    <link rel="shortcut icon" href="https://signin.ea.com/p/favicon.ico" type="image/x-icon">`)

// gestione dei link vuoti o non assegnati

let notAssignedUrl = document.querySelectorAll('[href="#"], [href=""]');
notAssignedUrl.forEach(voidLink =>{
    voidLink.href = '/pages/manteinance/mantenaince.html'
    });
}

//button add cards

const bt = document.querySelectorAll('.btn');
const container= document.querySelector('.container');
let count = 0;
if(bt){
    bt.forEach(bt =>{
        bt.addEventListener('click', e => {
            e.preventDefault();
        
            for (i=count; i<count + 3;i++){
                let image = card[i].image
                let title = card[i].title
                let desc = card[i].desc
                let cat = card[i].category
                let date = card[i].date
                let link = card[i].link
                
                let html = document.createElement("a")
                html.setAttribute("href", `${link}`)
                html.className = "article-card";
                html.innerHTML  = ` 
                                <img title="" src="${image}"/>
                                <div class="article-text">
                                    <div>
                                        <span>${cat}</span>
                                        <span class="normal">${date}</span>
                                    </div>
                                    <h3>${title}</h3>
                                    <p>${desc}</p>
                                </div>
                            `
                container.appendChild(html);
            }
            count=i;
            if(count === card.length){
                document.querySelector('.btn')
                bt.setAttribute('style', 'display:none')
            }
        });
        
        }
    )
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
