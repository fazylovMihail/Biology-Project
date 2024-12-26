import {names, descriptions} from './arrays.js';

const namesLocal = names;
const descriptionsLocal = descriptions;

function btnManager(index){
    localStorage.setItem('name', namesLocal[index]);
    localStorage.setItem('description', descriptionsLocal[index]);

    window.open('indexContent.html', '_self');
}

export {btnManager};