var productosSeleccionados = JSON.parse(localStorage.getItem('pedido'));
var precioTotal = localStorage.getItem('precioTotal');

var listaProductos = ''


if (productosSeleccionados != null || productosSeleccionados.length != 0) {

    document.getElementById("precioTotal").innerHTML = `$${precioTotal}`


    for (let index = 0; index < productosSeleccionados.length; index++) {

        var objetoDatos = JSON.parse(productosSeleccionados[index]);

        listaProductos += `

        <div class="items">
            <p class="nombre" style="text-align: start;">${objetoDatos.nombre}</p>
            <p class="precio">$${objetoDatos.precio.toFixed(2)}</p>
        </div>`;

        //console.log(JSON.parse(productosSeleccionados[index]).nombre);
    }

    document.getElementById("listaItems").innerHTML = listaProductos;


}






$('#btnFinalizarCompra').click(function(e) {

    e.preventDefault();


    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    sucursalesSeleccion = document.getElementById('sucursales').selectedIndex;

    mensajeError = '';

    if (nombre.length === 0) {
        mensajeError += '\nIngrese el nombre';
    }

    if (apellido.length === 0) {
        mensajeError += '\nIngrese el apellido';
    }

    if (telefono.length === 0) {
        mensajeError += '\nIngrese el telefono';
    }

    if (sucursalesSeleccion === 0) {
        mensajeError += '\nSeleccione la sucursal';
    }


    if (mensajeError.length > 0) {
        alert(mensajeError);
        return false;
    } else {
        alert("MUCHAS GRACIAS POR SU COMPRA");
        localStorage.setItem('pedido', "");
        localStorage.setItem('precioTotal', "");

        $('#formCompra').submit();
    }

});