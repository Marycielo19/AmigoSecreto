let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();
    if (nombre && !nombres.includes(nombre)) {
        nombres.push(nombre);
        actualizarLista();
        input.value = "";
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function elegirAleatorio() {
    if (nombres.length > 0) {
        let indice = Math.floor(Math.random() * nombres.length);
        document.getElementById("resultado").textContent = "Amigo Secreto: " + nombres[indice];
    } else {
        document.getElementById("resultado").textContent = "Agrega nombres primero.";
    }
}

