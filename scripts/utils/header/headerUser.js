import { 
    closeElement, 
    openElement, 
    toggleElement 
} from './headerUtils.js'

/* ----- USER SPACE ----- */

export const initUserSpace = () => {

    const body = document.querySelector('body');

    const accountIcon = document.querySelector('.user-account-icon');
    const helpIcon = document.querySelector('.user-help-icon');
    const userBoard = document.querySelector('.user-board');
    const closeBoard = document.querySelector('.user-board-close');
    const boardAcc = document.querySelector('.board-account');
    const boardHelp = document.querySelector('.board-help');

    // Open/Close User space

    let scrollBefore = 0;

    const scrollCheck = (e) => {
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
    }

    document.addEventListener('scroll', scrollCheck);

    //Open/Close Inner Board

    const openCloseInner = (first, second) => {
        // event.preventDefault();
        if (userBoard.hasAttribute('open')){
            if (first.hasAttribute('open')){
                closeElement(first);
                closeElement(userBoard);

                body.style.overflow = 'auto';
                // body.setAttribute('scroll', 'auto');

                setTimeout(()=>{
                    document.addEventListener('scroll', scrollCheck);
                }, 10);
            }
            else {
                closeElement(second);
                openElement(first);
            }
        }
        else{
            openElement(userBoard);
            openElement(first);

            document.removeEventListener('scroll', scrollCheck);

            body.style.overflow = 'hidden';
            // body.setAttribute('scroll', 'no');
        }
    }

    // Open/Close Account

    accountIcon.addEventListener('click', (event) => {
        openCloseInner(boardAcc, boardHelp);
    })

    // Open/Close Help

    helpIcon.addEventListener('click', (event) => {
        openCloseInner(boardHelp, boardAcc);
    })

    // Close User board

    closeBoard.addEventListener('click', (event) => {
        // event.preventDefault();
        closeElement(boardHelp);
        closeElement(boardAcc);
        closeElement(userBoard);

        body.style.overflow = 'auto';
        // body.setAttribute('scroll', 'auto');

        setTimeout(()=>{
            document.addEventListener('scroll', scrollCheck);
        }, 10);
    })
}
