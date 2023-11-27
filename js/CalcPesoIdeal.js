function calcularPesoIdeal() {
    var altura = parseFloat(document.getElementById('altura').value);
    var sexo = document.getElementById('sexo').value;
    var edad = parseFloat(document.getElementById('edad').value);

    if (isNaN(altura) || altura <= 0 || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese valores válidos para altura y edad.");
        return;
    }

    var factorCorreccion;

    if (sexo.toLowerCase() === 'masculino') {
        // Factor de corrección para hombres
        factorCorreccion = 0.9;
    } else
    if (sexo.toLowerCase() === 'indefinido') {
        // Factor de corrección para indefinido
        factorCorreccion = 0.8;
    } else
     if (sexo.toLowerCase() === 'femenino') {
        // Factor de corrección para mujeres
        factorCorreccion = 0.8;
    } else {
        // Sexo no reconocido
        alert("Por favor, seleccione un sexo válido.");
        return;
    }

    var pesoIdeal = altura - 100 + ((edad / 10) * 0.9 * factorCorreccion);

    document.getElementById('resultadoPesoIdeal').innerText = 'El peso ideal es: ' + pesoIdeal.toFixed(2) + ' kg';

    // Mostrar el mensaje y el botón de hipervínculo
    document.getElementById('pesos').style.display = 'block';
    document.getElementById('irAPeso').style.display = 'inline';
    document.getElementById('irAPes').style.display = 'inline';
    document.getElementById('irAPe').style.display = 'inline';

}

// Función para redirigir al usuario a otra página
document.getElementById('irAPeso').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/diego/Downloads/PAGINA%20ANALISIS/Analisis/Rutinas/rutinabajar.html'; // Reemplaza 'otra_pagina.html' con la URL de tu página
});

document.getElementById('irAPes').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/diego/Downloads/PAGINA%20ANALISIS/Analisis/Rutinas/rutinaforma.html'; // Reemplaza 'otra_pagina.html' con la URL de tu página
});

document.getElementById('irAPe').addEventListener('click', function () {
    window.location.href = 'file:///C:/Users/diego/Downloads/PAGINA%20ANALISIS/Analisis/Rutinas/rutinamasa.html'; // Reemplaza 'otra_pagina.html' con la URL de tu página
});
