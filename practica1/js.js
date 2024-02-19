let fitxer = [];

let dropArea = document.querySelector('.drop-area')
let dragDropText = document.querySelector('h2')
let button =  document.querySelector('button')
let input =  document.querySelector('#input-file')
let preview =  document.querySelector('#preview')



let eventos = ['dragover','dragleave','drop',];

eventos.forEach(evento => {
    dropArea.addEventListener(evento, prevDefault);
});
function prevDefault (e) {
    e.preventDefault();
}