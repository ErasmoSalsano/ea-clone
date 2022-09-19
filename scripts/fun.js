
/* Funzione che importa parti di html. 
Valori: 
    -id del contenitore che ospiterà il codice, 
    -nome del file sul quale si trova il codice da importare (comprensivo di percorso)
posizionarlo in fondo al body, nel suo tag script: <script>importHtml(".header-wrap", "/partials/header.html"); ecc ecc</script></body> */

function importHtml(id, filename) {
    // console.log(`div id: ${id}, filename: ${filename}`);

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status != 404) { element.innerHTML = this.responseText; }
                if (this.status == 404) { element.innerHTML = "<h1>Page not found</h1>"; }
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
    for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none";

    tablinks = document.getElementsByClassName("linkTab");
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "");
    // console.log(tablinks);

    const element = document.getElementById(topic);
    // console.log(element);

    if (element.hasAttribute('grid-style')) {
        element.style.display = "grid";
    }
    else {
        element.style.display = "flex";
    }

    azione.currentTarget.className += " active";
}
try {
    document.getElementById("Open").click();
} catch (error) {
    error;
}
//Management metaTag

if (document) {
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
    document.head.insertAdjacentHTML('beforeend', `
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
    notAssignedUrl.forEach(voidLink => {
        voidLink.href = '/pages/manteinance/mantenaince.html'
    });
}

if (document.title === 'Home Page Electronic Arts - Sito EA non ufficiale') {

    window.addEventListener('DOMContentLoaded', () => {
        const navTab = document.querySelector('.navTab');
        navTab.insertAdjacentElement('afterend', articleHome)
        openTab();
    });
    window.addEventListener('load', () => {
        document.querySelector('#Open').click()
    });
}if (document.title === 'Inside EA') {

    window.addEventListener('DOMContentLoaded', () => {
        const navTab = document.querySelector('.navTab');
        navTab.insertAdjacentElement('afterend', articleInsideEA)
        openTab();
    });
    window.addEventListener('load', () => {
        document.querySelector('#Open').click()
    });
}if (document.title === 'EA SPORTS - Editore dei videogiochi FIFA,Madden NFL,NHL,UFC,PGA TOUR e F1') {

    window.addEventListener('DOMContentLoaded', () => {
        const navTab = document.querySelector('.navTab');
        navTab.insertAdjacentElement('afterend', articleEaSports)
        openTab();
    });
    window.addEventListener('load', () => {
        document.querySelector('#Open').click()
    });
}

//button add cards

const bt = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
let count = 0;

if (bt) {
    bt.forEach(bt => {
        const amount = Number.parseInt(container.getAttribute('amount'))
        bt.addEventListener('click', e => {
            e.preventDefault();

            for (i = count; i < count + amount; i++) {
                let image = card[i].image
                let title = card[i].title
                let desc = card[i].desc
                let cat = card[i].category
                let date = card[i].date
                let link = card[i].link

                let html = document.createElement("a")
                html.setAttribute("href", `${link}`)
                html.className = "article-card";
                html.innerHTML = ` 
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
            count = i;
            if (count === card.length) {
                document.querySelector('.btn')
                bt.setAttribute('style', 'display:none')
            }
        });

    }
    )
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

function toScroll(val) {
    scrollCont.scrollLeft += (val * scrollAmount)

    if (scrollCont.scrollLeft > 0) {
        btnleft.style.display = "block";
    } else {
        btnleft.style.display = "none";
    }

    if (scrollCont.scrollLeft > 250) {
        btnright.style.display = "none";
    } else {
        btnright.style.display = "block";
    }
}