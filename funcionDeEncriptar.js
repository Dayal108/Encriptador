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

    document.getElementById('resultado').textContent = `Palabra encriptada: ${palabraEncriptada}`;
});