//per utilizzare lo script bisogna assegnare come ID del select ="select", come ID della pagina
// "griglia+numeropagina".tutte le pagina avranno classe="page"
// ogni option del select avrà classe="optionPage" e value="numeropagina"


function selectBackPage() {

    const grids = document.getElementsByClassName('page');
    const selectPages = document.getElementsByClassName("selectPage");
    const nextBtn = document.getElementById('next');
    const backBtn = document.getElementById('back');
    let pagina1 = document.getElementById('1');

    console.log(document.getElementsByClassName('active')[0]);
    const select = document.getElementById('select');

    for (i = 1; i < select.length; i++) {
        selectPages[i].className = selectPages[i].className.replace("selectPage active", "selectPage");
        grids[i].style.display = "none";
        selectPages[i].style.color = 'lightgray';
        nextBtn.style.color = 'lightgray';
      
        if (select.options[i].selected) {
            document.getElementById(`griglia${select.options[i - 1].value}`).style.display = "unset";
            select.options[i - 1].selected = true;
            selectPages[i - 1].className += " active";
            selectPages[i - 1].style.color = 'gray';


        }

        if (pagina1.className == 'selectPage active') { backBtn.style.color = 'gray' }
    }
}

function optionPage() {
    const select = document.getElementById('select');
    const grids = document.getElementsByClassName("page");
    const selectPages = document.getElementsByClassName("selectPage");
    const backBtn = document.getElementById('back');
    const nextBtn = document.getElementById('next');
    let pagina1 = document.getElementById('1');




    select.onclick = () => {

        for (i = 0; i < select.length; i++) {

            grids[i].style.display = "none";
            selectPages[i].className = selectPages[i].className.replace("selectPage active", "selectPage");
            selectPages[i].style.color = 'lightgray';
            nextBtn.style.color = 'lightgray';
            backBtn.style.color = 'lightgray';



            if (select.options[i].selected) {


                document.getElementById(`griglia${select.options[i].value}`).style.display = "unset";
                selectPages[i].className += " active";
                selectPages[i].style.color = 'gray';
            }


            if (pagina1.className == 'selectPage active') { backBtn.style.color = 'gray' }




            if (selectPages[selectPages.length - 1].className == 'selectPage active') { nextBtn.style.color = 'gray' }



        }

    }
}



function selectNextPage() {
    const grids = document.getElementsByClassName('page');
    const select = document.getElementById('select');
    const selectPages = document.getElementsByClassName("selectPage");
    const backBtn = document.getElementById('back');
    const nextBtn = document.getElementById('next');



    for (i = 0; i < select.length - 1; i++) {
        grids[i].style.display = "none";
        selectPages[i].className = selectPages[i].className.replace("selectPage active", "selectPage");
        selectPages[i].style.color = 'lightgray';
        backBtn.style.color = 'lightgray';
        if (select.options[i].selected) {
            document.getElementById(`griglia${select.options[i + 1].value}`).style.display = "unset";
            select.options[i + 1].selected = true;
            selectPages[i + 1].className += " active";
            selectPages[i + 1].style.color = 'gray';
            break;

        }

        if (selectPages[selectPages.length - 2].className == 'selectPage active') { nextBtn.style.color = 'gray' }
    }
}

document.getElementsByClassName('optionPage')[0].click();