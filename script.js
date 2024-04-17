let mainImg = document.getElementById("main");
let catg = document.querySelector(".catg");
let header = document.getElementById("header");

catg.addEventListener('click', (e) => {
    let clickedElement = e.target;
    
    let srcToCompare = clickedElement.src.split('/').pop();
    if (srcToCompare === 'pepsiblue.png') {
        header.style.backgroundColor = "#0062be";
    } else if (srcToCompare === 'pepsired.png') {
        header.style.backgroundColor = '#e60c2c';
    } else {
        header.style.backgroundColor = '#1e1e1e';
    }

    mainImg.src = clickedElement.src;
});
let menu = document.querySelector('.menu');
let line = document.querySelectorAll('.line');
let ul = document.querySelector('.ul');
menu.addEventListener('click',()=>{
    ul.classList.toggle('isShow');
    line.forEach(line=>{
        line.classList.toggle('cross')
    });

})