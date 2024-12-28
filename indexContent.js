import { backBtnManager } from "./js/windowLoad.js";
import { moduleCounts } from "./js/arrays.js";

const contentHeaderH1 = document.querySelector('.content-header-h1');
const contentWrapper = document.querySelector('.content-wrapper');
const backBtn = document.querySelector('.back-btn');

class Content{
    constructor(name){
        this.name = name
    }
    ContentDrower(){
        return `<div class="content-btn">${this.name}</div>`;
    }
}

const localIndex = localStorage.getItem('index');

for(let i = 0;i<moduleCounts[localIndex];i++){
    const contentCard = new Content(moduleCounts[localIndex]);
    contentWrapper.innerHTML += contentCard.ContentDrower();
}

backBtn.addEventListener('click', ()=>{backBtnManager(window)});