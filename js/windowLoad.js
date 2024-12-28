import {names, descriptions} from './arrays.js';

const namesLocal = names;
const descriptionsLocal = descriptions;

function contentManager(index){
    localStorage.setItem('index', index);

    window.open('indexContent.html', '_self');
}
function btnManager(index){
    localStorage.setItem('name', namesLocal[index]);
    localStorage.setItem('description', descriptionsLocal[index]);

    window.open('indexContent.html', '_self');
}
function backBtnManager(){
    window.open('index.html','_self');
}

export {btnManager, backBtnManager, contentManager};