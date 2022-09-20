let sliderContainer=document.querySelector('.main-content-slider');
let innerSlider=document.querySelector('.cards-gap');

let pressed = false;
let startX;
let x;
window.addEventListener('resize', ()=>{
    let sliderHeight=innerSlider.clientHeight ;
    sliderContainer.style.height=sliderHeight + 'px';
    console.log(sliderHeight)
    console.log(sliderContainer)
    console.log(innerSlider)

})
window.addEventListener('load', ()=>{
    let sliderHeight=innerSlider.clientHeight ;
    sliderContainer.style.height=sliderHeight + 'px';
    console.log(sliderHeight)
    console.log(sliderContainer)
    console.log(innerSlider)

})


sliderContainer.addEventListener('mousedown',(e)=>{
    pressed=true;
    startX=e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor='grabbing';
})
sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});
sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

//core logic
sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault()
    x=e.offsetX;
    innerSlider.style.left=`${x-startX}px`;
    checkBoundary()
    
});

//setting the movement of the dragged element
const checkBoundary=()=>{
    let outer=sliderContainer.getBoundingClientRect();
    let inner=innerSlider.getBoundingClientRect();
    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left='0px';
    }
    else if(inner.right< outer.right){
        innerSlider.style.left=`-${inner.width - outer.width}px`;
    }
};


//carousel sliding with button click
const card=innerSlider.getElementsByClassName('card');
const leftBtn=document.querySelector('.left')
const rightBtn=document.querySelector('.right')
rightBtn.addEventListener('click', ()=>{
    innerSlider.append(card[0]);

})
leftBtn.addEventListener('click', ()=>{
    innerSlider.prepend(card[card.length-1]);

})



//var container = document.getElementById('container')
// const slider = document.querySelector('.cards-gap');
// const slides = document.getElementsByClassName('card').length;
// const buttons = document.getElementsByTagName('button');



// let currentPosition = 0;
// let currentMargin = 0;
// let slidesPerPage = 0;
// let slidesCount = slides - slidesPerPage;
// let containerWidth = slider.offsetWidth;
// let prevKeyActive = false;
// let nextKeyActive = true;

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//     containerWidth = slider.offsetWidth;
//     setParams(containerWidth)
   
// }


// function setParams(w) {
//     if (w < 551) {
//         slidesPerPage = 1;
//     } else {
//         if (w < 901) {
//             slidesPerPage = 2;
//         } else {
//             if (w < 1101) {
//                 slidesPerPage = 3;
//             } else {
//                 slidesPerPage = 4;
//             }
//         }
//     }
//     slidesCount = slides - slidesPerPage;
//     if (currentPosition > slidesCount) {
//         currentPosition -= slidesPerPage;
//     };
//     currentMargin = - currentPosition * (100 / slidesPerPage);
//     slider.style.marginLeft = currentMargin + '%';
//     if (currentPosition > 0) {
//        //buttons[0].classList.remove('inactive');
//     }
//     if (currentPosition < slidesCount) {
//        // buttons[1].classList.remove('inactive');
//     }
//     if (currentPosition >= slidesCount) {
//        // buttons[1].classList.add('inactive');
//     }
// }

// setParams();

// function slideRight() {
//     if (currentPosition != 0) {
//         slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//         currentMargin += (100 / slidesPerPage);
//         currentPosition--;
//     };
//     if (currentPosition === 0) {
//         buttons[0].classList.add('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
// };

// function slideLeft() {
//     if (currentPosition != slidesCount) {
//         slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
//         currentMargin -= (100 / slidesPerPage);
//         currentPosition++;
//     };
//     if (currentPosition == slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
//     if (currentPosition > 0) {
//        buttons[0].classList.remove('inactive');
//     }
// };

