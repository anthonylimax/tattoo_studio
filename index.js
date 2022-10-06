
const container = document.getElementsByClassName('container')[0];
const list = document.getElementsByClassName('disable')[0];
const services = document.getElementsByClassName("photo");
services[0].addEventListener('mouseenter', ()=>{
    container.style.setProperty('--background-gallery', `url('./imgs/tatuagem-colorida.webp')`);
})
services[1].addEventListener('mouseenter', ()=>{
    container.style.setProperty('--background-gallery', `url('./imgs/tatuagem-peb.jpg')`);
})

services[2].addEventListener('mouseenter', ()=>{
    container.style.setProperty('--background-gallery', `url('./imgs/tatuagem-realista.jpg')`);
})
services[3].addEventListener('mouseenter', ()=>{
    container.style.setProperty('--background-gallery', `url('./imgs/piercing.jpg')`);
})
let count = 0;
const contarSegundos = () =>{
    obj = {
        0: () => {
                container.style.setProperty('--background', `url('./imgs/carrossel-1.jpg')`);
                count++;
        },
        1: () => {
            container.style.setProperty('--background', `url('./imgs/carrossel-2.jpg')`);
             count++;
            },
        2: () => {
            container.style.setProperty('--background', `url('./imgs/carrossel-3.jpg')`);
             count = 0; 
            },
    }
    obj[count]();
}
setInterval(contarSegundos, 5000)

function active(){
    list.classList.toggle('disable')
    list.classList.toggle('list-items')
}
function disable(){
    list.classList.toggle('list-items')
    list.classList.toggle('disable')
}