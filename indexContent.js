import { backBtnManager, openFinishContent } from "./js/windowLoad.js";
import { moduleCounts } from "./js/arrays.js";
import { Content } from "./js/classContent.js";

const contentWrapper = document.querySelector('.content-wrapper');
const backBtn = document.querySelector('.back-btn');

const localIndex = localStorage.getItem('index');

for(let i = 0;i<moduleCounts[localIndex];i++){
    const contentCard = new Content(i);
    contentWrapper.innerHTML += contentCard.ContentDrower();
}

const contentBtn = document.querySelectorAll('.content-btn');

for(let i = 0;i<contentBtn.length;i++){
    contentBtn[i].addEventListener('click', ()=>{openFinishContent(i)});
}

backBtn.addEventListener('click', ()=>{backBtnManager(window)});