import { moduleCounts } from "./js/arrays.js";
import { Content } from "./js/classContent.js";

const contentHeaderH1 = document.querySelector('.content-header-h1');
const contentWrapper = document.querySelector('.content-wrapper');

contentHeaderH1.innerHTML = `${localStorage.getItem('index')} and ${localStorage.getItem('indexContentBtn')}`;
const contentCard = new Content(localStorage.getItem('indexContentBtn'));
contentWrapper.innerHTML = contentCard.ContentDrower();
