import { 
    closeElement, 
    openElement, 
    toggleElement 
} from './headerUtils.js'

/* ----- POPUP MENU ----- */

export const initPopupMenu = () => {

    const headerWrap = document.querySelector('#header-wrap');
    const menuIcon = document.querySelector('.header-menu-icon-wrap');
    
    const navClose = document.querySelector('.popup-close-icon');
    const gamesClose = document.querySelector('.close-cross');
    const popMenu = document.querySelector('.popup-menu-wrap');
    const popNav = document.querySelector('.popup-navbar-wrap');
    const popGames = document.querySelector('.popup-games-wrap');

    // Close on popMenu click condition
    let takeClick = true;

    popNav.addEventListener('mouseover', () => {
        takeClick = false;
    })
    popNav.addEventListener('mouseout', () => {
        takeClick = true;
    })

    popGames.addEventListener('mouseover', () => {
        takeClick = false;
    })
    popGames.addEventListener('mouseout', () => {
        takeClick = true;
    })

    // Close all
    const closeAll = () => {
        closeElement(popNav);
        closeElement(popGames);
        setTimeout(() => {
            closeElement(popMenu);
            popNav.style.display ='block';
        }, 500);
        
        // popGames.style.display ='block';

        document.body.style.overflow = 'auto';
        // body.setAttribute('scroll', 'auto');
    }

    // Open based on window's width
    menuIcon.addEventListener('click', (event) => {
        // event.preventDefault();
        // console.log(menuIcon.offsetWidth, window.innerWidth);

        document.body.style.overflow = 'hidden';
        // body.setAttribute('scroll', 'auto');
        openElement(popMenu);
        setTimeout(()=>{
            headerWrap.classList.remove('user-close');
        }, 10) //La barra dell'user deve esserci

        
        if(window.innerWidth < 1032){
            popGames.style.display ='none';
            openElement(popNav);
        }
        else{
            popNav.style.display ='none';
            openElement(popGames);
        }
    })

    // Close on click
    navClose.addEventListener('click', () => {
        closeAll();
    })

    gamesClose.addEventListener('click', () => {
        closeAll();
    })

    popMenu.addEventListener('click', () => {
        if(takeClick){
            closeAll();
        }
    })

}