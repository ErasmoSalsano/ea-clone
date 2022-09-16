

//Lo script funziona per un qualsiasi numero di pagine, basta inserire come id della pagina lo stesso valore 
//che passerete alla funzione nell' onclick del button (esempio: pagina con id= griglia1, bottone con :
//onclick="myCurrentPage(event, 'griglia1)"). 
//Tutte le pagine devono avere classe ="page"
//Tutti i bottoni devono avere classe="selectPage" e id uguale al numero della pagina che andranno ad aprire
//Il bottone indietro deve avere id="back"
//Il bottone avanti deve avere id="next"



function backPage() {

    const grids = document.getElementsByClassName('page');
    const pages = document.getElementsByClassName('selectPage');
    const backBtn = document.getElementById('back');
    const nextBtn = document.getElementById('next');
    const currentPage = document.getElementsByClassName('active')[0].id;



    for (let i = 1; i < pages.length; i++) {
        pages[i].style.color = 'lightgray';
        nextBtn.style.color = 'lightgray';
    }


    if (currentPage > 1) {
        pages[currentPage - 1].className = pages[currentPage - 1].className.replace = ("active", "selectPage");

        pages[currentPage - 2].className += " active";
        grids[currentPage - 1].style.display = "none";
        grids[currentPage - 2].style.display = "unset";
        pages[currentPage - 2].style.color = "gray";
        select.options[currentPage-2].selected= true;



    };

    if (currentPage == 2) {
        backBtn.style.color = 'gray';


    }



}


function myCurrentPage(azione, idpagina) {
    const backBtn = document.getElementById('back');
    const nextBtn = document.getElementById('next');
    let i, page, selectPage;
    selectPage = document.getElementsByClassName("selectPage");
    page = document.getElementsByClassName("page");
    let pagina1 = document.getElementById('1');

   



    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
        selectPage[i].style.color = 'lightgray';
        nextBtn.style.color = 'lightgray';
        backBtn.style.color = 'lightgray';



    }


    for (i = 0; i < selectPage.length; i++) selectPage[i].className = selectPage[i].className.replace(" active", "");

    document.getElementById(idpagina).style.display = "unset";
    azione.currentTarget.className += " active";
    azione.currentTarget.style.color = 'gray';

    select.options[azione.currentTarget.id-1].selected= true;


    if (pagina1.className == 'selectPage active') { backBtn.style.color = 'gray' }




    if (selectPage[selectPage.length - 1].className == 'selectPage active') { nextBtn.style.color = 'gray' }





}

document.getElementById("1").click();





function nextPage() {

    const backBtn = document.getElementById('back');
    const grids = document.getElementsByClassName('page');
    const pages = document.getElementsByClassName('selectPage');
    const nextBtn = document.getElementById('next')
    const currentPage = document.getElementsByClassName('active')[0].id;
    const select = document.getElementById('select');


    for (let i = 0; i < pages.length - 1; i++) {
        pages[i].style.color = 'lightgray';
        backBtn.style.color = 'lightgray';

    }

    if (currentPage < pages.length) {
        pages[currentPage - 1].className = pages[currentPage - 1].className.replace = ("active", "selectPage");

        pages[currentPage].className += " active";
        grids[currentPage - 1].style.display = "none";
        grids[currentPage].style.display = "unset";
        pages[currentPage].style.color = 'gray';
        select.options[currentPage].selected= true;
      

    }

    if (currentPage >= pages.length - 1) nextBtn.style.color = 'gray';

}