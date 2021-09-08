// Calcular la suma de 3 productos y calcularle el IVA

function sumarTresNumeros(numero1, numero2, numero3) {
    let resultado = numero1 + numero2 + numero3;
    return   resultado;  
}

let precio1 = parseInt(prompt("Ingrese el 1° precio a sumar : "));
let precio2 = parseInt(prompt("Ingrese el 2° precio a sumar : "));
let precio3 = parseInt(prompt("Ingrese el 3° precio a sumar : "));
let totalCompraSinIva = sumarTresNumeros(precio1,precio2,precio3);

function calcularIva(precioSinIva) {
    let total =  precioSinIva * 1.21;
    alert(`El precio total con iva es : ${total}`);   
}

calcularIva(totalCompraSinIva);