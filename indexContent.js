import { backBtnManager, openFinishContent } from "./js/windowLoad.js";
import { imgMidle } from "./js/arrays.js";
import { Content } from "./js/classContent.js";

const contentWrapper = document.querySelector('.content-wrapper');
const backBtn = document.querySelector('.back-btn');

const localIndex = localStorage.getItem('index');

for(let i = 0;i<imgMidle[localIndex].length;i++){
    const contentCard = new Content(`${Number(i+1)}-я полка`,null,imgMidle[localIndex][i]);
    contentWrapper.innerHTML += contentCard.ContentDrower();
}

const contentBtnOpener = document.querySelectorAll('.content-btn-opener');

for(let i = 0;i<contentBtnOpener.length;i++){
    contentBtnOpener[i].addEventListener('click', ()=>{openFinishContent(i)});
}

backBtn.addEventListener('click', ()=>{backBtnManager(window)});