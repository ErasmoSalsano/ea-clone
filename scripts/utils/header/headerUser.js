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

    // Open/Close Account

    accountIcon.addEventListener('click', (event) => {
        // event.preventDefault();
        if (userBoard.hasAttribute('open')){
            if (boardAcc.hasAttribute('open')){
                closeElement(boardAcc);
                closeElement(userBoard);

                body.style.overflow = 'auto';
                // body.setAttribute('scroll', 'auto');
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
            // body.setAttribute('scroll', 'no');
        }
    })

    // Open/Close Help

    helpIcon.addEventListener('click', (event) => {
        // console.log('clicked Help Icon');
        // event.preventDefault();
        if (userBoard.hasAttribute('open')){
            if (boardHelp.hasAttribute('open')){
                closeElement(boardHelp);
                closeElement(userBoard);

                body.style.overflow = 'auto';
                // body.setAttribute('scroll', 'auto');
            }
            else {
                closeElement(boardAcc);
                openElement(boardHelp);
            }
        }
        else{
            openElement(userBoard);
            openElement(boardHelp);

            body.style.overflow = 'hidden';
            // body.setAttribute('scroll', 'no');
        }
    })

    // Close User Board

    closeBoard.addEventListener('click', (event) => {
        // event.preventDefault();
        closeElement(boardHelp);
        closeElement(boardAcc);
        closeElement(userBoard);

        body.style.overflow = 'auto';
        // body.setAttribute('scroll', 'auto');
    })
}
