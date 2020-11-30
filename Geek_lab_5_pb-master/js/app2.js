'use strict'
// Variables
var presupuestoUsuario = Number(prompt('Cual es tu presupuesto Semanal?'))
var formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;
// console.log(presupuestoUsuario);

    
// const formulario = document.getElementById('agregar-gasto');



// Clases

// Clase de Presupuesto
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    // Método para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0) {
        return this.restante = this.restante +  Number(cantidad);
    }
}

// clase de Interfaz maneja todo lo relacionado a el HTML   
class Interfaz {
    insetarPresupuesto(cantidad) {
        let presupuestoSpan = document.querySelector('span#total');
        let restanteSpan = document.querySelector('span#restante');

        // Insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;

    }
}


// Event Listeners
// document.addEventListener('DOMContentLoaded', function () {
while (presupuestoUsuario < 0 || isNaN(presupuestoUsuario) || presupuestoUsuario == ' ') {
    alert('Intormación incorrecta')
    var presupuestoUsuario = Number(prompt('Cual es tu presupuesto Semanal?'))
    console.log(presupuestoUsuario);
}
// console.log('agregado correctamente')
cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
// console.log(cantidadPresupuesto);
// Instanciar la clase de Interfaz
const ui = new Interfaz();
ui.insetarPresupuesto(cantidadPresupuesto.presupuesto);
// });

// formulario.addEventListener('submit', function (e) {
//     e.preventDefault();
    // console.log('Enviado');

    // Leer del formulario de Gastos
    // const nombreGasto = document.querySelector('#gasto').value;
    // const cantidadGasto = document.querySelector('#cantidad').value;

    // Instanciar la Interfaz
    // const ui = new Interfaz();

    // Comprobar que los campos no esten varios
    // var bandera = prompt('Cual es tu presupuesto Semanal?'))
    bandera = true;
    // nombreGasto = Number(document.getElementById('gasto').value);
    var nombreGasto = document.querySelector('#gasto').value;
    var cantidadGasto = document.querySelector('#cantidad').value;
    do {
        if (nombreGasto == " " || cantidadGasto == " ") {
            
            console.log('hubo un error');
        } else {
            console.log('el gasto se agrego'); 
        }
        var bandera = prompt('Desea continuar? si o no?')
        const nombreGasto = document.querySelector('#gasto').value;
        const cantidadGasto = document.querySelector('#cantidad').value;
    } while (bandera=='si' || bandera=='Si'|| bandera=='SI') 
// });



