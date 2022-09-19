import { initUserSpace } from './utils/header/headerUser.js'

import { initHeaderNav } from './utils/header/headerNavbar.js'

import { initPopupMenu } from './utils/header/headerPopup.js'


window.addEventListener('load', () => {
    // User Space
    initUserSpace();
    initHeaderNav();
    initPopupMenu();
})