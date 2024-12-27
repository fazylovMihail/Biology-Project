import {backBtnManager} from "./js/windowLoad.js";

const contentHeaderH1 = document.querySelector('.content-header-h1');
const contentWrapper = document.querySelector('.content-wrapper');
const backBtn = document.querySelector('.back-btn');

contentHeaderH1.innerHTML = localStorage.getItem('name');
contentWrapper.innerHTML = localStorage.getItem('description');

backBtn.addEventListener('click', ()=>{backBtnManager(window)});