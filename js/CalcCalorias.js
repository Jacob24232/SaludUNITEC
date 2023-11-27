function calcularCaloriasDiarias() {
    var peso = parseFloat(document.getElementById('peso').value);
    var sexo = document.getElementById('sexo').value;

    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, ingrese un peso válido.");
        return;
    }

    var factorCorreccion;

    if (sexo.toLowerCase() === 'masculino') {
        // Factor de corrección para hombres
        factorCorreccion = 25;
    } else
    if (sexo.toLowerCase() === 'indefinido') {
        // Factor de corrección para indefinido
        factorCorreccion = 24;
    } else
     if (sexo.toLowerCase() === 'femenino') {
        // Factor de corrección para mujeres
        factorCorreccion = 23;
    } else {
        // Sexo no reconocido
        alert("Por favor, seleccione un sexo válido.");
        return;
    }

    var caloriasDiarias = peso * factorCorreccion;

    document.getElementById('resultadoCalorias').innerText = 'Las calorías necesarias son: ' + caloriasDiarias.toFixed(2) + ' kcal por día';

   // Mostrar el mensaje y el botón de hipervínculo
   document.getElementById('calorias').style.display = 'block';
   document.getElementById('irACalorias').style.display = 'inline';
   document.getElementById('irACaloria').style.display = 'inline';
   document.getElementById('irACalori').style.display = 'inline';

}

// Función para redirigir al usuario a otra página
document.getElementById('irACalorias').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/diego/Downloads/PAGINA%20ANALISIS/Analisis/Rutinas/dietabajar.html'; // Reemplaza 'otra_pagina.html' con la URL de tu página
});

document.getElementById('irACaloria').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/diego/Downloads/PAGINA%20ANALISIS/Analisis/Rutinas/dietaforma.html'; // Reemplaza 'otra_pagina.html' con la URL de tu página
});

document.getElementById('irACalori').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/diego/Downloads/PAGINA%20ANALISIS/Analisis/Rutinas/dietamasa.html'; // Reemplaza 'otra_pagina.html' con la URL de tu página
});