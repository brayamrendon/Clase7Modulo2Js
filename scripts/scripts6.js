/*6- Un maestro desea saber el porcentaje de hombres y de mujeres que hay en
un grupo de estudiantes.*/

let 
    quantityMan=parseFloat(prompt("Ingrese la cantidad de Hombres")),
    quantityWomen=parseFloat(prompt("Ingrese la cantidad de Mujeres")),
    quantityGroup=(quantityMan+quantityWomen),
    porcentageMen=((quantityMan*100)/quantityGroup),
    porcentageWomen=(100-porcentageMen);

alert("El porcentaje de hombres es "+porcentageMen+" % y el porcentaje de mujeres es "+porcentageWomen+" %");