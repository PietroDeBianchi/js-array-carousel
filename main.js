// create the array list
const imgArray = [];
// const for the <div> with class .imgList
const imgListDom = document.querySelector('.imgList');
// const for empty content
let carouselContent = "";
// now the cycle for the img <div>
for (let i = 0; i < imgArray.length; i++ ) {
    newImgBox = `<div class="imgBox"><img src="${imgArray[i]}"></div>`;
 //change the img[i]
    carouselContent += newImgBox;
};
// set the img inside the <div class="imgList"> 
imgListDom.innerHTML = carouselContent;
// const for the <div class="imgBox">
const imgBoxDom = document.getElementsByClassName('.imgBox');
imgBoxDom[i].classList.add('show')