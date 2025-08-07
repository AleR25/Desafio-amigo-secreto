let amigos = [];

// Esta función asigna un texto a un elemento HTML específico
function asignarTextoAElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/*
    Agrega un amigo a la lista de amigos.
    * Si esta no se ingresa nada se muestra un ALERT con un mensaje de error "Por favor, inserte un nombre"
    * Si  el nombre es valido se  agrega a la lista de amigos
    * Despues de añadir el nombre, se restablece el campo de texto a una cadena vacía.
    
    - nombre = string 
*/
function agregarAmigo() {
    if (document.getElementById('amigo').value == "") {
        alert('Por favor, inserte un nombre valido');
    } else {
        amigos.push(document.getElementById('amigo').value);
        limpiarCaja();
        mostrarAmigos();
    }
}

// Esta función limpia el campo de texto con el ID amigo
function limpiarCaja(){
    document.getElementById('amigo').value = '';
    return;
}

/*
    Crear una función que recorra la lista de amigos 
    y los muestre en un elemento HTML específico <li>.
*/

function mostrarAmigos() {
    listaDeAmigos = '';
    for (let i = 0; i < amigos.length; i++) {
        listaDeAmigos += `<li>${amigos[i]}</li>`;
    }

    asignarTextoAElemento('listaAmigos',`${listaDeAmigos}`);
    return;
}