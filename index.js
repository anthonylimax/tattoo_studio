const container = document.getElementsByClassName('container')[0];
const list = document.getElementsByClassName('list-items')[0];
let count = 0;
console.log(container)
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
    list.style.display = 'flex';
}
function disable(){
    list.style.display = 'none'
}