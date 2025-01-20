import { Content } from "./js/classContent.js";
import { imgMidle, listTexts, names } from "./js/arrays.js";

const contentHeaderH1 = document.querySelector('.content-header-h1');
const contentWrapper = document.querySelector('.content-wrapper');

const localIndex = localStorage.getItem('index');
const indexContentBtn = localStorage.getItem('indexContentBtn')

contentHeaderH1.innerHTML = `${Number(indexContentBtn)+1}-я полка, ${Number(localIndex+1)}-го шкафа`;

const contentCard = new Content(null,null,imgMidle[localIndex][indexContentBtn]);
contentWrapper.innerHTML += contentCard.FinishCardDrower();

const listElementWrapper = document.querySelector('.list-element-wrapper');
const localListText = listTexts[localIndex].flat();
const findIndexed = localListText.findIndex((element) => element==listTexts[localIndex][indexContentBtn][0])

for(let i = 0;i<listTexts[localIndex][indexContentBtn].length;i++){
    listElementWrapper.setAttribute('start', findIndexed+1);
    const list_El = new Content(null, null, null, listTexts[localIndex][indexContentBtn][i]);
    listElementWrapper.innerHTML += list_El.ListFinishWindowDrower()
}
