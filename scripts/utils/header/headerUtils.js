// Open/Close/toggle Element

export const closeElement = (element) => {
    element.removeAttribute('open');
    element.setAttribute('closed', '');
}

export const openElement = (element) => {
    element.setAttribute('open', '');
    element.removeAttribute('closed');
}

export const toggleElement = (element) => {
    element.toggleAttribute('open');
}
