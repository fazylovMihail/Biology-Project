const h1 = document.querySelectorAll('h1');

for(let i = 0;i<h1.length;i++){
    h1[i].innerHTML = localStorage.getItem('name')
}