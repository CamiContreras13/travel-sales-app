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
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //Agregar class active a quien corresponda
        this.classList.add('active');
        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);
        //Mostrar contenido
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
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