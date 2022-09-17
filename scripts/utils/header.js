/* ----- GENERAL ----- */

// This part and const element declarations 
// should be moved in headerExecute.js

// Open/Close/toggle Element

const closeElement = (element) => {
    element.removeAttribute('open');
}

const openElement = (element) => {
    element.setAttribute('open', '');
}

const toggleElement = (element) => {
    element.toggleAttribute('open');
}

/* ----- USER SPACE ----- */

const initUserSpace = () => {

    const body = document.querySelector('body');

    const accountIcon = document.querySelector('.user-account-icon');
    const helpIcon = document.querySelector('.user-help-icon');
    const userBoard = document.querySelector('.user-board');
    const closeBoard = document.querySelector('.user-board-close');
    const boardAcc = document.querySelector('.board-account');
    const boardHelp = document.querySelector('.board-help');

    // Open/Close Account

    accountIcon.addEventListener('click', (event) => {
        // event.preventDefault();
        if (userBoard.hasAttribute('open')){
            if (boardAcc.hasAttribute('open')){
                closeElement(boardAcc);
                closeElement(userBoard);
            }
            else {
                closeElement(boardHelp);
                openElement(boardAcc);
            }
        }
        else{
            openElement(userBoard);
            openElement(boardAcc);

            body.style.overflow = 'hidden';
        }
    })

    // Open/Close Help

    helpIcon.addEventListener('click', (event) => {
        console.log('clicked Help Icon');
        // event.preventDefault();
        if (userBoard.hasAttribute('open')){
            if (boardHelp.hasAttribute('open')){
                closeElement(boardHelp);
                closeElement(userBoard);
            }
            else {
                closeElement(boardAcc);
                openElement(boardHelp);
            }
        }
        else{
            openElement(userBoard);
            openElement(boardHelp);

            body.setAttribute('scroll', 'no');
        }
    })

    // Close User Board

    closeBoard.addEventListener('click', (event) => {
        // event.preventDefault();
        closeElement(boardHelp);
        closeElement(boardAcc);
        closeElement(userBoard);

        body.setAttribute('scroll', 'auto');
    })
}

/* ----- NAVBAR ----- */

const initHeaderNav = () => {

    const menuIcon = document.querySelector('.header-menu-icon-wrap');
    

}

/* ----- POPUP MENU ----- */

const initPopupMenu = () => {

    const menuIcon = document.querySelector('.header-menu-icon-wrap');
    
    const navClose = document.querySelector('.popup-close-icon');
    const gamesClose = document.querySelector('.close-cross');
    const popMenu = document.querySelector('.popup-menu-wrap');
    const popNav = document.querySelector('.popup-navbar-wrap');
    const popGames = document.querySelector('.popup-games-wrap');

    console.log(gamesClose, menuIcon, popMenu, popNav, popGames);

    menuIcon.addEventListener('click', (event) => {
        // event.preventDefault();
        console.log(menuIcon.offsetWidth, window.innerWidth);
        
        openElement(popMenu);
        if(window.innerWidth < 1032){
            openElement(popNav);
        }
        else{
            openElement(popGames);
        }
    })

    navClose.addEventListener('click', () => {
        closeElement(popMenu);
        closeElement(popNav);
        closeElement(popGames);
    })

    gamesClose.addEventListener('click', () => {
        closeElement(popMenu);
        closeElement(popNav);
        closeElement(popGames);
    })

}



window.addEventListener('DOMContentLoaded', () => {
    // User Space
    initUserSpace();
    initHeaderNav();
    initPopupMenu();
})


/* avvia user board apri/chiudi al click delle icone (se si clicca su quella aperta si chiude user board,
    se si clicca su quella chiusa e l'altra è aperta si switcha solo da un contenuto all'altro,
    se si clicca su quella vuota e l'altra è chiusa si apre user board) */

