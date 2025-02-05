import { contentManager } from "./js/windowLoad.js";
import { names, imgStart, language } from './js/arrays.js';
import { headerManager } from "./js/anim.js";
// import { SendEmail } from "./js/sendEmail.js";
import { Content } from "./js/classContent.js";

const contentWrapper = document.querySelector('.content-btn-wrapper');

for(let i = 0;i<names.length;i++){
    const contentBtnI = new Content(names[i],imgStart[i]);
    contentWrapper.innerHTML += contentBtnI.FirstContentDrower();
}

const contentBtn = document.querySelectorAll('.content-btn');

for(let i = 0;i<contentBtn.length;i++){
    contentBtn[i].addEventListener('click',()=>{contentManager(i)});
}

// const supportForm = document.querySelector('.support-form');
// supportForm.addEventListener('submit', SendManager);

// function SendManager(event){
//     event.preventDefault();

//     const support = document.querySelector('#support').value;

//     if(support){
//         SendEmail();
//     }
//     else{
//         return;
//     }
// }

const topObj = document.querySelector('.top-window');
const bottomObj = document.querySelector('.bottom-window');
const objs = [topObj, bottomObj];

if(window.innerWidth > 865){
    for(let i = 0;i<objs.length;i++){
        objs[i].style = `display:flex;`;
    }
    headerManager(false);
    const circleBtn = document.querySelector('.circle-btn');
    let click;
    
    circleBtn.addEventListener('click', ()=>{
        if(!click){
            headerManager(true, 0.3);
            click = true;
        }
        else{
            headerManager(false, 0.3);
            click = false;
        }
    });
}
else{
    for(let i = 0;i<objs.length;i++){
        objs[i].style = `display:none`;
    }
}

const headerBtn = document.querySelector('.header-btn');
const clickAreaLanguage = headerBtn.querySelector('.click-area-language');
let clickCount = 0;

clickAreaLanguage.innerHTML = language[0];
clickCount++;

headerBtn.addEventListener('click',()=>{
    if(clickCount >= language.length) clickCount = 0;
    clickAreaLanguage.innerHTML = language[clickCount];
    clickCount++;
})