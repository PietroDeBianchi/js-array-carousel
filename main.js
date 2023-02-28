// create the array list
const imgArray = ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp'];
// const for the <div> with class .imgList
const imgListDom = document.querySelector('.imgList');
// const for empty content
let carouselContent = "";

// now the cycle for the img <div>
for (let i = 0; i < imgArray.length; i++ ) {
    newImgBox = `<div class="imgBox"><img class="image" src="${imgArray[i]}"></div>`;
 //change the img[i]
    carouselContent += newImgBox;
};

// set the img inside the <div class="imgList"> 
imgListDom.innerHTML = carouselContent;
// const for the <div class="imgBox">
const imgBoxDom = document.getElementsByClassName('imgBox');

// do add show class to the img
let presentImg = 0;
imgBoxDom[presentImg].classList.add('show');

// next e prev button const
const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener ('click',
function() {
    if (presentImg < imgBoxDom.length - 1) {
        imgBoxDom[presentImg].classList.remove('show');
        presentImg++;
        imgBoxDom[presentImg].classList.add('show');
    }
}
);

prevDom.addEventListener ('click',
    function() {
        if (presentImg > 0) {
            imgBoxDom[presentImg].classList.remove('show');
            presentImg--;
            imgBoxDom[presentImg].classList.add('show');
        }
    }
);