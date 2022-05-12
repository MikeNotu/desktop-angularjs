var app = angular.module("app", []);

app.controller("controlador", function ($scope) {
    var lista = this;
    var n = 2;
    lista.productos = [
        { id: 1, nombre: "Agua", precio: 20.0 },
        { id: 2, nombre: "Cafe", precio: 10.0 },
    ];

    lista.carrito = [];

    lista.addProducto = function () {
        var nombre = lista.nombre;
        var precio = lista.precio;

        if (nombre != "" && precio != "" && !isNaN(precio)) {
            n++;
            lista.productos.push({ id: n, nombre: nombre, precio: precio });

            lista.nombre = '';
            lista.precio = '';
        }
    };

    $scope.apellido = "Rivas";

    lista.addAlCaarrito = function(){
        var n = 1;
        var id = lista.productoSeleccionado;
    }

});
