// script.js

function calcularAlturaEstimada() {
    var alturaPadre = parseFloat(document.getElementById('alturaPadre').value);
    var alturaMadre = parseFloat(document.getElementById('alturaMadre').value);
    var sexo = document.getElementById('sexo').value;

    if (isNaN(alturaPadre) || isNaN(alturaMadre)) {
        alert("Por favor, ingrese alturas válidas.");
        return;
    }

    var factorCorreccion;

    if (sexo.toLowerCase() === 'masculino') {
        // Factor de corrección para hombres
        factorCorreccion = 0.5;
    } else if (sexo.toLowerCase() === 'indefinido') {
        // Factor de corrección para indefinido
        factorCorreccion = 0.45;
    } else if (sexo.toLowerCase() === 'femenino') {
        // Factor de corrección para mujeres
        factorCorreccion = 0.45;
    } else {
        // Sexo no reconocido
        alert("Por favor, seleccione un sexo válido.");
        return;
    }

    var alturaEstimada = (alturaPadre + alturaMadre) * factorCorreccion;

    // Mostrar el resultado de la altura estimada
    document.getElementById('resultadoAlturaEstimada').innerText = 'La altura estimada es: ' + alturaEstimada.toFixed(2) + ' cm';

    // Mostrar el mensaje y el botón de hipervínculo
    document.getElementById('mensaje').style.display = 'block';
    document.getElementById('irAMensaje').style.display = 'inline';
}

// Función para redirigir al usuario a otra página
document.getElementById('irAMensaje').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/diego/Downloads/PAGINA%20ANALISIS/Analisis/Rutinas/BuenaAltura.html'; // Reemplaza 'otra_pagina.html' con la URL de tu página
});
