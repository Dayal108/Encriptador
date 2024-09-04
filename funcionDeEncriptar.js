function encriptarPalabra(palabra) {

    const alfabeto = "abcdefghijklmnñopqrstuvwxyz"
    let palabraEncriptada = ""

    for (var i = 0; i < palabra.length; i++) {
        let letra = palabra[i].toLowerCase();

        if (letra >= "a" && letra <= "z") {

            let indiceOriginal = alfabeto.indexOf(letra);
            let indiceEncriptado = (indiceOriginal + 1) % 26;
            let letraEncriptada = alfabeto[indiceEncriptado];

            if (palabra[i] === letra.toUpperCase()) {
                letraEncriptada = letraEncriptada.toUpperCase();
            }

            palabraEncriptada += letraEncriptada;
        } else {
            palabraEncriptada += letra;
        }
    }

    return palabraEncriptada
}

document.getElementById('boton').addEventListener('click', function () {

    const palabraOriginal = document.getElementById('textArea').value;

    const palabraEncriptada = encriptarPalabra(palabraOriginal);

    document.getElementById('pE').value = palabraEncriptada;
});


function desencriptarPalabra(palabraEncriptada) {
    const alfabeto = "abcdefghijklmnñopqrstuvwxyz"
    let palabraDesencriptada = ""

    for (var i = 0; i < palabraEncriptada.length; i++) {
        let letra = palabraEncriptada[i].toLowerCase();

        if (letra >= "a" && letra <= "z") {

            let indiceEncriptado = alfabeto.indexOf(letra);
            let indiceOriginal = (indiceEncriptado - 1 + 26) % 26;
            let letraDesencriptada = alfabeto[indiceOriginal];

            if (palabraEncriptada[i] === letra.toUpperCase()) {
                letraDesencriptada = letraDesencriptada.toUpperCase();
            }

            palabraDesencriptada += letraDesencriptada;
        } else {
            palabraDesencriptada += letra;
        }
    }

    return palabraDesencriptada
}

document.getElementById('pD').addEventListener('click', function () {
    const palabraEncriptada = document.getElementById('pE').value;

    const palabraDesencriptada = desencriptarPalabra(palabraEncriptada);

    // Mostrar el resultado en el input con id 'resultado'
    document.getElementById('pE').value = palabraDesencriptada;
});