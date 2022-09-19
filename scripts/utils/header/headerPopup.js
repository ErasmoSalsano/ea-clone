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

    // console.log(gamesClose, menuIcon, popMenu, popNav, popGames);

    menuIcon.addEventListener('click', (event) => {
        // event.preventDefault();
        // console.log(menuIcon.offsetWidth, window.innerWidth);
        
        openElement(popMenu);
        headerWrap.classList.remove('user-close'); //La barra dell'user deve esserci


        if(window.innerWidth < 1032){
            popGames.style.display ='none';
            openElement(popNav);

            // popNav.animate([
            //     // keyframes
            //     {transform: 'translateX(-100%)'},
            //     {transform: 'translateX(0)'}
            //   ], {
            //     // timing options
            //     duration: 500,
            //     iterations: 1,
            //   });

            // @keyframes slide-in-left { /* animazione apertura nav e giochi */
            //     0% {transform: translateX(-100%);}
            //     100% {transform: translateX(0);}
            // }

            // @keyframes slide-out-left { /* animazione apertura nav e giochi */
            //     0% {transform: translateX(0);}
            //     100% {transform: translateX(-100%);}
            // }
        }
        else{
            popNav.style.display ='none';
            openElement(popGames);

            // popGames.animate([
            //     // keyframes
            //     {transform: 'translateX(-100%)'},
            //     {transform: 'translateX(0)'}
            //   ], {
            //     // timing options
            //     duration: 500,
            //     iterations: 1,
            //   });
        }

        document.body.style.overflow = 'hidden';
        // body.setAttribute('scroll', 'auto');
    })

    navClose.addEventListener('click', () => {
        closeElement(popNav);
        closeElement(popGames);
        setTimeout(() => {
            closeElement(popMenu);
            popGames.style.display ='block';
        }, 500);
        // popNav.style.display ='block';
        

        document.body.style.overflow = 'auto';
        // body.setAttribute('scroll', 'auto');
    })

    gamesClose.addEventListener('click', () => {
        closeElement(popNav);
        closeElement(popGames);
        setTimeout(() => {
            closeElement(popMenu);
            popNav.style.display ='block';
        }, 500);
        
        // popGames.style.display ='block';

        document.body.style.overflow = 'auto';
        // body.setAttribute('scroll', 'auto');
    })

}