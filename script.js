let inputTexto = document.getElementById('input-texto');
let resultado = document.getElementById('resultado');

function button_encriptar() {
    console.log('UEPA');
    let texto = encriptar(inputTexto.value.toLowerCase());
    resultado.value = texto
    resultado.style.backgroundImage = 'none'
    inputTexto.innerHTML = ('')
}

function button_desencriptar() {
    console.log('APEU');
    let texto = descriptografar(inputTexto.value.toLowerCase());
    resultado.value = texto
    resultado.style.backgroundImage = 'none'
    inputTexto.innerHTML = ('') 
}

function copiar() {

    resultado.select();
    navigator.clipboard.writeText(resultado.value)
}

function encriptar(texto) {

    let texto_array = Array.from(texto);
    
    for (let n = 0; n < texto_array.length; n++) {
        if (texto_array[n] == 'e') { 
            texto_array[n] = 'enter'
        }
        else if (texto_array[n] == 'i') {
            texto_array[n] = 'imes'
        }
        else if (texto_array[n] == 'a') {
            texto_array[n] = 'ai'
        }
        else if (texto_array[n] == 'o') {
            texto_array[n] = 'ober' 
        }
        else if (texto_array[n] == 'u') {
            texto_array[n] = 'ufat'
        }
    }

    return texto_array.join('');
}

function descriptografar(texto) {
   
    if (texto.includes('ai')){
        texto = texto.replaceAll('ai', 'a')
    }

    if (texto.includes('enter')){
        texto = texto.replaceAll('enter', 'e')
    }

    if (texto.includes('ufat')){
        texto = texto.replaceAll('ufat', 'u')
    }

    if (texto.includes('imes')){
        texto = texto.replaceAll('imes', 'i')
    }

    if (texto.includes('ober')){
        texto = texto.replaceAll('ober', 'o')
    }
    
    return texto
}