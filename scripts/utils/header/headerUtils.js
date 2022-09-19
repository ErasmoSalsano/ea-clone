// Open/Close/toggle Element

export const closeElement = (element) => {
    element.removeAttribute('open');
}

export const openElement = (element) => {
    element.setAttribute('open', '');
}

export const toggleElement = (element) => {
    element.toggleAttribute('open');
}
