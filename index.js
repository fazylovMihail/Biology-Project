import { btnManager } from "./js/windowLoad.js";
import {names} from './js/arrays.js';

const contentBtn = document.querySelectorAll('.content-btn');
const contentBtnText = document.querySelectorAll('.content-btn-text');

for(let i = 0;i<contentBtn.length;i++){
    contentBtnText[i].innerHTML = names[i];
    contentBtn[i].addEventListener('click',()=>{btnManager(i)});
}