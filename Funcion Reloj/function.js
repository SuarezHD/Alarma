let mostrarHora = false;
    let intervalID;

    function mostrarHoraActual() {
      const ahora = new Date();
      const hora = ahora.getHours();
      const minutos = ahora.getMinutes();
      const segundos = ahora.getSeconds();

      const formatoHora = `${hora < 10 ? '0' : ''}${hora} : ${minutos < 10 ? '0' : ''}${minutos} : ${segundos < 10 ? '0' : ''}${segundos}`;

      document.getElementById('hora').innerText = formatoHora;
    }


    function toggleHora() {
      mostrarHora = !mostrarHora;
      const btnToggle = document.getElementById('btnToggle');

      if (mostrarHora) {
        btnToggle.innerText = 'Apagar';
        intervalID = setInterval(mostrarHoraActual, 1000);
        mostrarHoraActual();
        btnToggle.style.backgroundColor = "#F78757";
      } else {
        btnToggle.innerText = 'Prender';
        clearInterval(intervalID);
        document.getElementById('hora').innerText = '- - : - - : - -';
        btnToggle.style.backgroundColor = "#F0F757";
      }
    }

    toggleHora();