import { contentManager } from "./js/windowLoad.js";
import {names} from './js/arrays.js';
import { SendEmail } from "./js/sendEmail.js";

const contentBtn = document.querySelectorAll('.content-btn');
const contentBtnText = document.querySelectorAll('.content-btn-text');

for(let i = 0;i<contentBtn.length;i++){
    contentBtnText[i].innerHTML = `${names[i]} шкаф`;
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