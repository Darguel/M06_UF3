let fitxer = []

let dropArea = document.querySelector('.drop-area')
let dragDropText = document.querySelector('h2')
let button =  document.querySelector('button')
let input =  document.querySelector('#input-file')
let preview =  document.querySelector('#preview')

let eventos = ['dragover','dragleave','drop',]
const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"]


// -------------------------------------------------------
// Apartado de eventos del div
// -------------------------------------------------------

eventos.forEach(evento => {
    dropArea.addEventListener(evento, prevDefault)
})
function prevDefault (e) {
    e.preventDefault()
}

dropArea.addEventListener('dragover', function() {
    dropArea.classList.add('active')
    dragDropText.innerHTML = "Drop to upload file"
});

dropArea.addEventListener('dragleave', function() {
    dropArea.classList.remove('active')
    dragDropText.innerHTML = "Drag & Drop files"
});

dropArea.addEventListener("drop", function(e) {
    dropArea.classList.remove("active")
    let ficherosArras = Array.from(e.dataTransfer.files)
    fitxer = fitxer.concat(ficherosArras)
    showFiles(fitxer)
    console.log(fitxer)
});

button.addEventListener("click", function(e) {
    e.preventDefault()
    input.click()
});

input.addEventListener("change", function(e) {
    let seleccionados = Array.from(input.files)
    fitxer = fitxer.concat(seleccionados)
    showFiles(fitxer)
    input.value = null
});

// -------------------------------------------------------
// END Apartado de eventos del div
// -------------------------------------------------------


// -------------------------------------------------------
// Aparatdo para funciones
// -------------------------------------------------------

function showFiles(ficheros) {
    preview.innerHTML = ""
    ficheros.forEach((fichero, index) => {
        processFile(fichero, index)
    });
}

function processFile(fichero, index) {

    const docType = fichero.type;
    if (validExtensions.includes(docType)) {
        let reader = new FileReader()
        reader.readAsDataURL(fichero)
        reader.onload = function() {
        let prev = `<div class="previewImage">
                    <img id="img${index}" src="${reader.result}"/>
                    <span>${fichero.name}</span>
                    <span onclick="removeFile(${index})" class="material-symbols-outlined removeBtn">x</span>
                    </div>`
        preview.innerHTML += prev
        };
    } 
    else {
        fitxer.splice(index, 1)
        alert("Extensión de fichero incorrecta. Debes selecionar un fichero de las siguentes extensiones: jpeg, jpg, png, gif")
    }
}

function removeFile(index) {
    fitxer.splice(index, 1)
    showFiles(fitxer)
}