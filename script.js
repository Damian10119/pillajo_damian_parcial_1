function generarFibonacci() {
    // Obtener el valor del input
    var cantidad = document.getElementById('cantidad').value;
    var output = document.getElementById('output');
    var error = document.getElementById('error');
    
    // Limpiar mensaje de error previo
    error.textContent = '';
    
    // Validar que no esté vacío
    if (cantidad == '') {
        error.textContent = 'Por favor ingresa un número';
        return;
    }
    
    // Validar que sea un número
    if (isNaN(cantidad)) {
        error.textContent = 'Por favor ingresa solo números';
        return;
    }
    
    cantidad = parseInt(cantidad);
    
    // Validar rango (mínimo 1, máximo 50)
    if (cantidad < 1 || cantidad > 50) {
        error.textContent = 'El número debe estar entre 1 y 50';
        return;
    }
    
    // Si pasó todas las validaciones, limpiar el output
    output.innerHTML = '';
    
    // Variables para estadísticas
    var contadorPares = 0;
    var contadorImpares = 0;
    var sumaTotal = 0;
    
    // Generar Fibonacci
    var fibonacci = [];
    
    for (var i = 0; i < cantidad; i++) {
        if (i == 0) {
            fibonacci[i] = 0;
        } else if (i == 1) {
            fibonacci[i] = 1;
        } else {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
    }
    
    // Mostrar resultado como tarjetas
    for (var j = 0; j < fibonacci.length; j++) {
        
        // Determinar si es par o impar
        var esPar = fibonacci[j] % 2 === 0;
        var badge = esPar ? 'PAR' : 'IMPAR';
        var badgeClass = esPar ? 'badge-par' : 'badge-impar';
        
        // Contar pares e impares
        if (esPar) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
        
        // Sumar al total
        sumaTotal = sumaTotal + fibonacci[j];
        
        var tarjeta = document.createElement('div');
        var claseParImpar = esPar ? 'tarjeta-par' : 'tarjeta-impar';
        tarjeta.className = 'tarjeta ' + claseParImpar;
        
        // Determinar la fórmula
        var formula = '';
        if (j == 0 || j == 1) {
            formula = 'Valores iniciales';
        } else {
            formula = fibonacci[j - 2] + ' + ' + fibonacci[j - 1] + ' = ' + fibonacci[j];
        }
        
        // Crear contenido de la tarjeta
        tarjeta.innerHTML = 
            '<span class="badge ' + badgeClass + '">' + badge + '</span>' +
            '<h3>F(' + j + ')</h3>' +
            '<p class="valor">' + fibonacci[j] + '</p>' +
            '<p class="formula">' + formula + '</p>';
        
        output.appendChild(tarjeta);
    }
    
    // Actualizar estadísticas en el dashboard
    document.getElementById('total').textContent = cantidad;
    document.getElementById('pares').textContent = contadorPares;
    document.getElementById('impares').textContent = contadorImpares;
    document.getElementById('suma').textContent = sumaTotal;
}

function limpiar() {
    // Limpiar el input
    document.getElementById('cantidad').value = '';
    
    // Limpiar el output
    document.getElementById('output').innerHTML = '';
    
    // Limpiar el mensaje de error
    document.getElementById('error').textContent = '';
    
    // Limpiar estadísticas
    document.getElementById('total').textContent = '0';
    document.getElementById('pares').textContent = '0';
    document.getElementById('impares').textContent = '0';
    document.getElementById('suma').textContent = '0';
}