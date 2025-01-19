import { Content } from "./js/classContent.js";
import { imgMidle, listTexts } from "./js/arrays.js";

const contentHeaderH1 = document.querySelector('.content-header-h1');
const contentWrapper = document.querySelector('.content-wrapper');

contentHeaderH1.innerHTML = `${localStorage.getItem('index')} and ${localStorage.getItem('indexContentBtn')}`;

const localIndex = localStorage.getItem('index');
const indexContentBtn = localStorage.getItem('indexContentBtn')

const contentCard = new Content(null,null,imgMidle[localIndex][indexContentBtn]);
contentWrapper.innerHTML += contentCard.ContentDrower();

const listElementWrapper = document.querySelector('.list-element-wrapper');
for(let i = 0;i<listTexts[localIndex][indexContentBtn].length;i++){
    const list_El = new Content(null, null, null, listTexts[localIndex][indexContentBtn][i]);
    listElementWrapper.innerHTML += list_El.ListFinishWindowDrower()
}
