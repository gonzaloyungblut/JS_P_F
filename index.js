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
        if (opcion == 1) {
            alert("El valor de su compra es 35000 pesos");

        } else {
            alert("el valor de su compra es 18000 pesos");

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
//console.log(nombre);

//console.log(opcion);

//console.log(eleccionCamiseta);

//console.log(eleccionShort);

//console.log(mensaje);

//console.log(pago);




// segunda pre entrega

// declaro funcion
function welcome1() {
    z = prompt("Bienvenido colega ingrese su DNI");
    alert("Gracias");
}


//objeto
class profesor {
    constructor(dni, name, apellido, edad, materia) {
        this.dni = dni;
        this.name = name;
        this.apellido = apellido;
        this.edad = edad;
        this.materia = materia;
    }
    hablar() {
        alert("Bienvenido profesor de  " + this.materia + "       ");
    }
}

//La idea es que el profesor se "logue" a traves de su dni este se compare con los id y devuelva bienvenido profe de ......
// Estimado tutor los console.log que realizo son controles mios para ver como va el codigo... 
welcome1();
console.log(z);

const pm = new profesor("25000000", "Esteban", "Quito", "45", "Matematicas");
const pl = new profesor("36000000", "Armando", "Paredes", "50", "Lengua");
const pi = new profesor("40000000", "Valeria", "English", "29", "Ingles");


if (z < pm.dni) {
    ayuda = 1;

} else {
    if (z < pl.dni && z > pi.dni) {
        ayuda = 2;

    } else {
        ayuda = 3;

    }

}

console.log(ayuda);

switch (ayuda) {
    case 1:
        pm.hablar();
        break;
    case 2:
        pl.hablar();
        break;
    case 3:
        pi.hablar();
        break;
}

//este profe va a cargar sus alumnos

let cantidad = prompt("A continuacion ingrese la cantidad de alumnos de su clase...");
console.log(cantidad);
alert("Perfecto.");
const alumnos = [];
do {
    let ingreso = prompt("ingrese el apellido del alumno"); alumnos.push(ingreso.toUpperCase());

} while (alumnos.length != cantidad);
alert(alumnos.join(" - "));

//profesor va a cargar las notas de los 3 trimestres de caga alumno y por promedio se calculara la nota final devolviendo si este aprobo o desaprobo (rinde en diciembre o marzo)
const nota1 = [];
const notasFinal = [];

let trimestres = 3;

for (let index = 0; index < cantidad; index++) {
    let sum = 0;
    promedio = 0;
    alert(" Carguemos las notas de alumno " + alumnos[index]);
    do {
        let calificacion = prompt("ingrese la nota del alumno " + alumnos[index]); nota1.push(calificacion);
        sum = sum + calificacion;
    } while (nota1.length != trimestres);
    promedio = (sum/trimestres);
    notasFinal.push(promedio);
    nota1.splice(0,3);
}

// for (let index = 0; index < trimestres; index++){console.log(nota1[index]);}











