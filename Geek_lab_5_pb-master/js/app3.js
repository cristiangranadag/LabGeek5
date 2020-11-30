var presupuestoUsuario = prompt('Cual es tu presupuesto Semana?');
var formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

// console.log(presupuestoUsuario)

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    presupuestoRestante(cantidad=0) {
        do {
            return this.restante = this.restante - Number(cantidad);
        } while (this.restante>=0) 
    }
}

class Interfaz {
    insertarPresupuesto(cantidad) {
        // console.log(cantidad);
        var presupuestoSpan = document.querySelector('span#total');
        var restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
}

while (presupuestoUsuario <0 || presupuestoUsuario === '' || isNaN(presupuestoUsuario)) {
    console.log('Error');
    var presupuestoUsuario = prompt('Cual es tu presupuesto Semana?');
}
// console.log('agregado correctamente');
cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
// console.log(cantidadPresupuesto);

var ui = new Interfaz();
ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log('Enviado'); 

    var nombreGasto = document.querySelector('#gasto').value;
    var cantidadGasto = document.querySelector('#cantidad').value;

    var ui = new Interfaz();

    while (nombreGasto === '' || cantidadGasto === '' || cantidadGasto <0 || isNaN(cantidadGasto) ) {
        console.log('hubo error');
        nombreGasto = document.querySelector('#gasto').value;
        cantidadGasto = document.querySelector('#cantidad').value;
    }
    console.log('el gasto se agrego')
})