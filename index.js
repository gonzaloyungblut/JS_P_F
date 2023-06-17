// espacio para funciones:
function welcome() {
    nombre = prompt("Bienvenido a la tienda Oficial de Racing... Por favor ingrese su nombre:")
}

function tiendaAdulto() {
    eleccionCamiseta = prompt("Por favor elegir talle de camiseta: M - L - XL");
    eleccionShort = prompt("Ahora elegir el tamaño de short: M-L");
    alert("Gracias!!!");
}

function tiendaNiño() {
    eleccionCamiseta = prompt("Por favor elegir talle de camiseta: S - XS");
    eleccionShort = prompt("Ahora elegir el tamaño de short: S-XS");
    alert("Gracias!!!");
}


// simulador interactivo

welcome();

let opcion = prompt(" Hola " + nombre + " ¿estas interesado en indumentaria de adultos o niños?... Ingrese 1 para adultos o 2 para niños ");

let bandera = 1;

while ((opcion == 1 || opcion == 2) && bandera == 1) {
    if (opcion == 1) {
        tiendaAdulto(); bandera = 0;
        mensaje = prompt(" Usted eligio indumentaria de adulto " + " Los talles para camiseta y short respectivamente son: " + eleccionCamiseta + " - " + eleccionShort + "¿es correcto presione 1 de lo contrario 2?");

    } else {
        tiendaNiño(); bandera = 0;
        mensaje = prompt(" Usted eligio indumentaria de niño " + " Los talles para camiseta y short respectivamente son: " + eleccionCamiseta + " - " + eleccionShort + "¿es correcto presione 1 de lo contrario 2?");

    }

}


if (mensaje == 1 && bandera == 0) {
    pago = prompt("A continuación se detalla: Opcion 1: Precio de su eleccion. Opcion 2: Datos de Pago. Opcion 3: Salir. ")

} else {
    alert("Muchas gracias por su visita..." + nombre)

}


switch (pago) {
    case '1':
        if (opcion == 1) {alert("El valor de su compra es 35000 pesos");
            
        } else {alert("el valor de su compra es 18000 pesos");
            
        }
        break;
    case '2':
        dieciseis = prompt("Ingrese los numeros de su tarjeta de credito");
        alert("Tarjeta ingresada: " + dieciseis);
        alert("Compra realizada. Muchas Gracias");
        break;
    case '3':
        alert("Muchas gracias por la vista.");
        break;

}



// control interno:
console.log(nombre);

console.log(opcion);

console.log(eleccionCamiseta);

console.log(eleccionShort);

console.log(mensaje);

console.log(pago);




// segunda pre entrega

function welcome1 (){
    const dni = parseInt(("Bienvenido colega ingrese su DNI"))
}

welcome1();
console.log(dni);