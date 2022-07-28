const titulo = document.querySelector('div#start h2')

function TypeWritter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 120 * i)
    })
}

TypeWritter(titulo)