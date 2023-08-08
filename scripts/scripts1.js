/*1- Escribir un algoritmo que valide si la suma de 2 números es positiva, negativa
o cero.*/
let a=prompt("Ingrese un numero para la suma"),
    b=prompt("Ingrese otro numero para la suma"),
    suma=(parseInt(a)+parseInt(b));

if (suma >0){
    alert("La suma de los numeros es : "+suma+" POSITIVA");
}if (suma==0){
    alert("La suma de los numeros es : "+suma+" CERO");
}if (suma<0){
    alert("La suma de los numeros es : "+suma+" NEGATIVA");
}



