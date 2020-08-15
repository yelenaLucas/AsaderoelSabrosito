var pedidosPrecios = [];
var productosSeleccionados = [];
var precioTotal = 0.0

$(document).ready(function() {
    $("#mostrarComidas").click(function() {
        $("#comidas").show();
        $("#bebidas").hide();
    })

});

$(document).ready(function() {
    $("#mostrarBebidas").click(function() {
        $("#bebidas").css("display", "flex");
        $("#bebidas").show();
        $("#comidas").hide();
    })

});


/*comidas*/

var comidas = new Map();

comidas.set(1, {
    imagen: "./Imagenes/Combo3.png",
    nombre: "1 Pollo entero, 4 Consomes, Papas Fritas, Arroz, Ensalada, Bebida Familiar",
    precio: 16.00
})

comidas.set(2, {
    imagen: "./Imagenes/Combo2.png",
    nombre: "1 Pollo entero, 4 Consomes, Papas Fritas, Arroz, Ensalada, 1/2 Pollo Gratis",
    precio: 16.00
})

comidas.set(3, {
    imagen: "./Imagenes/Combo1.png",
    nombre: "2x1 Pollos, 4 Consomes, Papas Fritas, Arroz, Ensalada",
    precio: 18.00
})

comidas.set(4, {
    imagen: "./Imagenes/Combo4.png",
    nombre: "Medio Pollo, 2 Consomes, Papas Fritas,Arroz, Ensalada, Bebida Familiar, 1/2 de pollo Gratis",
    precio: 9.50
})

comidas.set(5, {
    imagen: "./Imagenes/Combo5.jpeg",
    nombre: "Papas Fritas, Carne, Bebida Personal",
    precio: 2.00
})

comidas.set(6, {
    imagen: "./Imagenes/Combo6.jpeg",
    nombre: "1/4 de pollo, Consome, Papas Fritas, Arroz, Bebida Personal",
    precio: 4.00
})

comidas.set(7, {
    imagen: "./Imagenes/Combo7.jpeg",
    nombre: "1 Hamburguesa, Papas fritas, Bebida Personal",
    precio: 2.50
})

comidas.set(8, {
    imagen: "./Imagenes/Combo8.jpeg",
    nombre: "Presa de pollo, Menestra, Arroz, Ensalada, Papas Fritas, Bebida Personal",
    precio: 3.00
})

comidas.set(9, {
    imagen: "./Imagenes/Combo9.jpeg",
    nombre: "Papas Fritas, Presa de pollo, Bebida Personal",
    precio: 2.25
})

comidas.set(10, {
    imagen: "./Imagenes/Combo10.jpeg",
    nombre: "Carne, Huevo Frito, Arroz, Papas Fritas, Bebida Personal",
    precio: 5.00
})

comidas.set(11, {
    imagen: "./Imagenes/Combo11.jpeg",
    nombre: "1 Hamburguesa con doble carne, Papas Fritas, Bebida Personal",
    precio: 3.00
})

comidas.set(12, {
    imagen: "./Imagenes/Combo12.jpeg",
    nombre: "Papas Fritas, Carne, Presa de pollo, Salchicha, Huevo Frito, Bebida Personal",
    precio: 4.00
})


comidas.set(13, {
    imagen: "./Imagenes/Combo13.jpeg",
    nombre: "Papas Fritas, Carne, Salchicha, Huevo Frito, Bebida Personal",
    precio: 3.00
})

comidas.set(14, {
    imagen: "./Imagenes/Combo14.jpeg",
    nombre: "Papas Fritas, Salchicha, Bebida Personal",
    precio: 1.50
})

comidas.set(15, {
    imagen: "./Imagenes/Combo15.jpeg",
    nombre: "Papas Fritas, Consome, Presa de pollo, Arroz, Bebida Personal",
    precio: 2.50
})

comidas.set(16, {
    imagen: "./Imagenes/Combo16.jpeg",
    nombre: "1/4 de pollo, Papas Fritas, Bebida Personal",
    precio: 3.75
})

comidas.set(17, {
    imagen: "./Imagenes/Combo17.jpeg",
    nombre: "Chaulafan de pollo, Maduro Frito, Bebida Personal",
    precio: 2.50
})

var htmlComidas = ''

Array.from(comidas.values()).forEach((elemento, _) => {

    htmlComidas += `
    <div> 
    <img src="${elemento.imagen}" style="width: 150px; height: 110px;">
    <p style="font-size: 14px; height:80px; overflow: hidden;">${elemento.nombre}</p>
    <p style="font-size: 15px; ">$${elemento.precio.toFixed(2)}</p>
    <button onClick='agregarPedido(${JSON.stringify(elemento)});'>AGREGAR</button>
    </div>`
})

$("#comidas").html(htmlComidas);


/*Bebidas*/

var bebidas = new Map();

bebidas.set(1, {
    imagen: "./Imagenes/1200px-Coca-Cola_bottle_cap.svg.png",
    nombre: "Coca cola",
    precio: 1.00
})

bebidas.set(2, {
    imagen: "./Imagenes/258px-Pepsi_logo_2014.svg.png",
    nombre: "Pepsi",
    precio: 1.50
})


bebidas.set(3, {
    imagen: "./Imagenes/Logo_Fanta_2016.png",
    nombre: "Fanta",
    precio: 1.50
})


bebidas.set(4, {
    imagen: "./Imagenes/sprite-color.png",
    nombre: "Sprite",
    precio: 1.50
})


var htmlBebidas = ''

Array.from(bebidas.values()).forEach((elemento, _) => {

    htmlBebidas += `
    <div> 
    <img src="${elemento.imagen}" style="width: 150px; height: 110px;">
    <p style="font-size: 14px; height:20px; overflow: hidden;">${elemento.nombre}</p>
    <p style="font-size: 15px; ">$${elemento.precio.toFixed(2)}</p>
    <button onClick='agregarPedido(${JSON.stringify(elemento)});'>AGREGAR</button>
    </div>`
})

$("#bebidas").html(htmlBebidas);

function agregarPedido(params) {

    productosSeleccionados.push(JSON.stringify(params));

    precioTotal += params.precio;
    document.getElementById("precioTotal").innerHTML = `$${precioTotal.toFixed(2)}`;

    $("#ordenes").append(
        `<div class="row">
        <div class="col-sm-9" style="font-size: 13px;">${params.nombre}</div>
        <div class="col-sm-3" style=" font-size: 15px; font-weight: bold; text-align: end;">$${params.precio.toFixed(2)}</div></div>
        <hr>`
    )
}


$('#botonPedido').click(function(e) {
    e.preventDefault();

    if (productosSeleccionados.length === 0) {
        alert("AGREGUE UN PRODUCTO PARA CONTINUAR");
    } else {
        localStorage.setItem('pedido', JSON.stringify(productosSeleccionados));
        localStorage.setItem('precioTotal', precioTotal.toFixed(2));
        $('#listaPedidos').submit();
    }

});