import { 
    closeElement, 
    openElement, 
    toggleElement 
} from './headerUtils.js'

/* ----- NAVBAR ----- */

export const initHeaderNav = () => {

    const navbar = document.querySelector('.header-navbar-wrap').querySelectorAll('.details-1');
    // console.log(navbar)

    navbar.forEach((element) => {

        const summary = element.querySelector('summary');
        const content = element.querySelector('content');

        element.addEventListener('mouseover', () => {
            element.setAttribute('open', '');
        })
        element.addEventListener('mouseleave', () => {
            element.removeAttribute('open');
        })

        summary.addEventListener('mouseover', () => {
            element.setAttribute('open', '');
        })
        summary.addEventListener('mouseleave', () => {
            element.removeAttribute('open');
        })

        
        content.addEventListener('mouseover', () => {
            element.setAttribute('open', '');
        })
        content.addEventListener('mouseleave', () => {
            element.removeAttribute('open');
        })
    })
}