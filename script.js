const segundoDigito = (numero) => `0${numero}`.slice(-2);

const printTela = (tempo) => {
    const segundos = document.getElementById('segundoss');
    const minutos = document.getElementById('minutosm');
    const horas = document.getElementById('horash');
    const dias = document.getElementById('diasd');

    const tempoSegundos = tempo % 60;
    const tempoMinutos = Math.floor((tempo % (3600)) / 60);
    const tempoHoras = Math.floor((tempo % (86400)) / (3600));
    const tempoDias = Math.floor(tempo / (86400));

    segundos.textContent = segundoDigito(tempoSegundos);
    minutos.textContent = segundoDigito(tempoMinutos);
    horas.textContent = segundoDigito(tempoHoras);
    dias.textContent = segundoDigito(tempoDias);
}

const countDown = (tempo) => {
    const stopClock = () => clearInterval(id);

    const contagem = () => {
        if (tempo == 0){
            stopClock();
        }
        printTela (tempo);
        tempo--;
    }
    const id = setInterval(contagem, 1000);
}

countDown(86400);