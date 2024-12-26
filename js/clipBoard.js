const footerTelephonNumber = document.querySelectorAll('.footer-telephon-number');
const clipBoardArray = ['noname@gmail.com', '+71234567890'];


for(let i = 0;i<footerTelephonNumber.length;i++){
    footerTelephonNumber[i].innerText = clipBoardArray[i]

    footerTelephonNumber[i].addEventListener('click',()=>{
        navigator.clipboard.writeText(clipBoardArray[i]);
    })
}