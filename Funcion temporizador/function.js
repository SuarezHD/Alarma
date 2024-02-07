let temporizador;
let tiempoRestante;

function iniciarTemporizador() {
    const horas = document.getElementById("horas").value;
    const minutos = document.getElementById("minutos").value;
    const segundos = document.getElementById("segundos").value;

    tiempoRestante = horas * 3600 + minutos * 60 + segundos * 1; // convertir segundos a número

    document.getElementById("configuracion").style.display = "none";
    document.getElementById("temporizador").style.display = "block";

    temporizador = setInterval(actualizarTemporizador, 1000);
}

function actualizarTemporizador() {
    if (tiempoRestante <= -1) {
        clearInterval(temporizador);
        document.getElementById("temporizador").style.display = "none";
        setTimeout(() => {
            document.getElementById("configuracion").style.display = "block";
        }, 1000); 
        return;
    }

    const horas = String(Math.floor(tiempoRestante / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((tiempoRestante % 3600) / 60)).padStart(2, '0');
    const segundos = String(tiempoRestante % 60).padStart(2, '0');

    document.getElementById("contador").innerText = `${horas} : ${minutos} : ${segundos}`;

    tiempoRestante--;
}