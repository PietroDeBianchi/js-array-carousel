// Create HTML elements for the img list
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
//

// Create HTML elements for the miniature
// create the array list
const imgMiniatureArray = ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp'];
// const for the <div> with class .min-content
const imgMiniatureDom = document.querySelector('.min-content');
// const for empty content
let MiniatureContent = "";
// now the cycle for the img <div>
for (let i = 0; i < imgMiniatureArray.length; i++ ) {
    newMinBox = `<div class="miniatureBox"><img src="${imgMiniatureArray[i]}" alt=""></div>`;
 //change the img[i]
 MiniatureContent += newMinBox;
};
// set the img inside the <div class="min-content"> 
imgMiniatureDom.innerHTML = MiniatureContent;
//

// button function part
// do add show class to the img
let presentImg = 0;
imgBoxDom[presentImg].classList.add('show');

// next e prev button const
const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

// new code for the infite loop
nextDom.addEventListener ('click',
function() {
    imgBoxDom[presentImg].classList.remove('show');
    presentImg++;
// in this case if presentImg >= 5 present img=0 because presentImg max val. is 4 (lenght is 5 but array goes from 0 to 4)
    if (presentImg >= imgBoxDom.length) {
        presentImg = 0;
    }
    imgBoxDom[presentImg].classList.add('show');

}
);
/* OLD CODE
nextDom.addEventListener ('click',
function() {
    if (presentImg < imgBoxDom.length - 1) {
        imgBoxDom[presentImg].classList.remove('show');
        presentImg++;
        imgBoxDom[presentImg].classList.add('show');
    }
}
); 
*/

// new code for the infite loop
prevDom.addEventListener ('click',
function() {
    imgBoxDom[presentImg].classList.remove('show');
    presentImg--;
// in this case if presentImg < 0 present img=4 because presentImg max val is 4
    if (presentImg < 0) {
        presentImg = imgBoxDom.length - 1;
    }
    imgBoxDom[presentImg].classList.add('show');
}
);
/* OLD CODE
 prevDom.addEventListener ('click',
    function() {
        if (presentImg > 0) {
            imgBoxDom[presentImg].classList.remove('show');
            presentImg--;
            imgBoxDom[presentImg].classList.add('show');
        }
    }
); 
*/



