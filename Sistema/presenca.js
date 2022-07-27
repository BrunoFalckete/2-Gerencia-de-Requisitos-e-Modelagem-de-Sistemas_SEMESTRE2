window.onload = () => {
    document.querySelector('#data').value = dataFormatada();
}

function dataFormatada(){
    const data = new Date;
    let ano = data.getFullYear();
    let mes = adicionaZero(data.getMonth()+1);
    let dia = adicionaZero(data.getDate());
    let hora = adicionaZero(data.getHours());
    let minutos = adicionaZero(data.getMinutes());
    let segundos = adicionaZero(data.getSeconds());

    return ano+mes+dia+hora+minutos+segundos;
}

function adicionaZero(value){
    if(value<10){
        return '0'+value;
    } else {
        return value;
    }
}