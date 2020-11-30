// Variables
var presupuestoUsuario = prompt('Cual es tu presupuesto Semanal');

console.log(presupuestoUsuario);


// clases



// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    while (presupuestoUsuario === null || presupuestoUsuario === '' || isNaN(presupuestoUsuario)) {
        alert('Error')
        var presupuestoUsuario = prompt('Cual es tu presupuesto Semanal');
        // window.location.reload();
        } 
        // Instanciar un presupuesto
        console.log('agregado correctamente');
});