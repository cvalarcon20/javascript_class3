
// iterar con un Array de Objetos  DO WHILE , buscando un valor

let edades = [ 23,24,"Maria","Carlos",23.32,43,44,56,12,67,14];

// declaracion de variables 

let indice = 0;

do{
   console.log(edades[indice]);
   indice++;
}  while (edades[indice] != 44 );

indice = indice+1;
console.log("la posicion del numero ingresado es "+ indice );





// funcion de multiplicar 

let numero = parseInt(prompt("Ingrese el N° a mutliplicar"))
for (let i=0; i<=10; i++){

let mult = numero * i ;
console.log("la multiplicacion es " + mult );

}

// ciclos al reves 
for (let i=20; i>=1; i--){
console.log(`interacion ${i}`);
}


//Ciclos Anidados
for (let i=0; i<=10; i++){
   console.log(`Iteracion ${i}`);
   for(let j=0; j<5; j++){
      console.log(`${j}`);
   }
}


// Dias de la semana 


let dias = ["Lunes" , "Martes", "Miercoles", "Jueves", "Viernes","Sabado", "Domingo"];
let numeroDias = dias.length - 1 ;
let i = 0 ;
while (i <= numeroDias){
   console.log(dias[i]);
   i++;
}



//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

 //DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
 let resultado = "";
do {
    let cadena = prompt("Introduce un texto");
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
   
} while (confirm("Desea seguir?"));
document.write(resultado);



//  calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).

//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.



let resto = 0;
let letra = "";
do {
    let numero = prompt("Introduce tu dni");
    if (Number(numero) == numero) {
        numero = Number(numero);
        if (numero >= 0 && numero <= 99999999) {
            resto = numero % 23;
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                    alert("Numero erroneo");
            }
        }
        alert("Numero: " + numero + ", Letra: " + letra);
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined);
