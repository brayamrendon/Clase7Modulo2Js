/*3- Escribir un algoritmo que indique cuál es el mayor de tres números
ingresados.*/
let number1=parseFloat(prompt("Ingrese el primer numero")),
    number2=parseFloat(prompt("Ingrese el segundo numero")),
    number3=parseFloat(prompt("Ingrese el tercer numero"));

if (number1>number2 && number1>number3){
    alert=prompt("El mayor es :"+number1)
}else if (number2>number1 && number2>number3){
    alert=prompt("El mayor es :"+number2)
}else{
    alert=prompt("El mayor es :"+number3)
}