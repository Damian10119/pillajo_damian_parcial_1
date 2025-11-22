function generarFibonacci() {
   
    var cantidad = document.getElementById('cantidad').value;
    var output = document.getElementById('output');
    var error = document.getElementById('error');
    
    
    error.textContent = '';
    
    
    if (cantidad == '') {
        error.textContent = 'Por favor ingresa un número';
        return;
    }
    
    
    if (isNaN(cantidad)) {
        error.textContent = 'Por favor ingresa solo números';
        return;
    }
    
    cantidad = parseInt(cantidad);
    
    
    if (cantidad < 1 || cantidad > 50) {
        error.textContent = 'El número debe estar entre 1 y 50';
        return;
    }
    
    
    output.innerHTML = '';
    
    
    var contadorPares = 0;
    var contadorImpares = 0;
    var sumaTotal = 0;
    
    
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
    

    for (var j = 0; j < fibonacci.length; j++) {
        
        
        var esPar = fibonacci[j] % 2 === 0;
        var badge = esPar ? 'PAR' : 'IMPAR';
        var badgeClass = esPar ? 'badge-par' : 'badge-impar';
        
       
        if (esPar) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
        
        
        sumaTotal = sumaTotal + fibonacci[j];
        
        var tarjeta = document.createElement('div');
        var claseParImpar = esPar ? 'tarjeta-par' : 'tarjeta-impar';
        tarjeta.className = 'tarjeta ' + claseParImpar;
        
        
        var formula = '';
        if (j == 0 || j == 1) {
            formula = 'Valores iniciales';
        } else {
            formula = fibonacci[j - 2] + ' + ' + fibonacci[j - 1] + ' = ' + fibonacci[j];
        }
        
        
        tarjeta.innerHTML = 
            '<span class="badge ' + badgeClass + '">' + badge + '</span>' +
            '<h3>F(' + j + ')</h3>' +
            '<p class="valor">' + fibonacci[j] + '</p>' +
            '<p class="formula">' + formula + '</p>';
        
        output.appendChild(tarjeta);
    }
    
    
    document.getElementById('total').textContent = cantidad;
    document.getElementById('pares').textContent = contadorPares;
    document.getElementById('impares').textContent = contadorImpares;
    document.getElementById('suma').textContent = sumaTotal;
}

function limpiar() {
    
    document.getElementById('cantidad').value = '';
    
    
    document.getElementById('output').innerHTML = '';
    
    
    document.getElementById('error').textContent = '';
    
    
    document.getElementById('total').textContent = '0';
    document.getElementById('pares').textContent = '0';
    document.getElementById('impares').textContent = '0';
    document.getElementById('suma').textContent = '0';
}