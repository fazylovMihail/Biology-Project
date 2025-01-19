import { contentManager } from "./js/windowLoad.js";
import { names, imgStart } from './js/arrays.js';
import { SendEmail } from "./js/sendEmail.js";
import { Content } from "./js/classContent.js";

const contentWrapper = document.querySelector('.content-wrapper');

for(let i = 0;i<names.length;i++){
    const contentBtnI = new Content(names[i],imgStart[i]);
    contentWrapper.innerHTML += contentBtnI.FirstContentDrower();
}

const contentBtn = document.querySelectorAll('.content-btn');

for(let i = 0;i<contentBtn.length;i++){
    contentBtn[i].addEventListener('click',()=>{contentManager(i)});
}

const supportForm = document.querySelector('.support-form');
supportForm.addEventListener('submit', SendManager);

function SendManager(event){
    event.preventDefault();

    const support = document.querySelector('#support').value;

    if(support){
        SendEmail();
    }
    else{
        return;
    }
}