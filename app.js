import { barcelona, roma, paris, londres } from './cities.js';

//Obtener elementos del dom
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

console.log(enlaces);

//Agregar un evento click a cada enlace
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        //remover class active

    });
});

//Funcion para traer la inf correcta desde cities.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
};