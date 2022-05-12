var app = angular.module("app", []);

app.controller("controlador", function ($scope) {
    var lista = this;
    lista.productos = [
        { id: 1, nombre: "Agua", precio: 20.0 },
        { id: 2, nombre: "Cafe", precio: 10.0 },
    ];

    lista.carrito = [];

    lista.addProducto = function () {};

    $scope.apellido = "Rivas";
});
