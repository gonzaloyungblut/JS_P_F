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

function confirmar() {
    if (opcion == 1) { mensaje = prompt(" Usted eligio indumentaria de adulto " + " Los talles para camiseta y short respectivamente son: " + eleccionCamiseta + eleccionShort);
        
    } else { mensaje = prompt(" Usted eligio indumentaria de niño "+ " Los talles para camiseta y short respectivamente son: " + eleccionCamiseta + eleccionShort);
        
    } 

}

// simulador interactivo

welcome();

let opcion = prompt(" Hola " + nombre + " ¿estas interesado en indumentaria de adultos o niños?... Ingrese 1 para adultos o 2 para niños ");

let bandera = 1;

while ((opcion == 1 || opcion == 2) && bandera == 1) {
    if (opcion == 1) {
        tiendaAdulto(); bandera = 0;

    } else {
        tiendaNiño(); bandera = 0;

    }

}

confirmar();



// control interno:
console.log(nombre);

console.log(opcion);

console.log(eleccionCamiseta);

console.log(eleccionShort);