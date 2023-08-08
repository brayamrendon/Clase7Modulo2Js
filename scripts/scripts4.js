/*4- Escribir un programa que calcule el porcentaje de un valor de un producto
que ingresamos.*/

let porcentage=parseFloat(prompt("Ingrese el porcentaje %")),
    value=parseFloat(prompt("Ingrese el valor")),
    operation1=(value*(porcentage/100));

alert("El "+porcentage+"% de "+value+" es: "+operation1)