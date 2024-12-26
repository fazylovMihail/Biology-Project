const h1 = document.querySelectorAll('h1');

for(let i = 0;i<h1.length;i++){
    h1[0].innerHTML = localStorage.getItem('name');
    h1[1].innerHTML = localStorage.getItem('description');
}