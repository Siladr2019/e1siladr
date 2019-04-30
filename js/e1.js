// Muestra el año actual a través de una función
function copyAnio() {
    let anio2 = new Date().getFullYear();
    document.getElementById('resultadoAnio').innerHTML = anio2;
}

// Muestra el día, fecha y hora actuales
function mostrarFecha() {
    let fecha = new Date();
    let dia;
    let hora;
    let arraySemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    dia = arraySemana[fecha.getDay()];
    hora = fecha.getHours() + ":" + (fecha.getMinutes() < 10 ? '0' : '') + fecha.getMinutes();
    // (fecha.getMinutes() < 10 ? '0' : '') Operador ternario para que si una hora es de solo un digito ponga por delante el 0
    document.getElementById('resultado').innerHTML = ("Hoy es: " + dia + "." + " La hora actual es: " + hora);
}

// Muestra una alerta en pantalla para insertar un número y voltearlo
function voltearNumero() {
    let numero = prompt("Inserta un número");
    let numeroInvertido = numero.split('');
    numeroInvertido.reverse();
    alert(numeroInvertido.join(''));
}

// Muestra el año actual a través de JavaScript
let fecha = new Date();
let anio = fecha.getFullYear();
document.getElementById('resultadoAnio').innerHTML = anio;
// alert(anio); Asi se mostraría una alerta en pantalla