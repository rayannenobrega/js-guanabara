function contar(){
    var inicio = document.getElementById('initxt');
    var fim = document.getElementById('fimtxt');
    var passo = document.getElementById('passotxt');
    var resultado = document.getElementById('res');

    //Verificações
    if (passo.value == 0 || passo.value.length == 0){
        passo.value = 1;
        window.alert('Passo inválido! Considerando PASSO 1');
           
    } else if (inicio.value.length == 0 || fim.value.length == 0 ){
        resultado.innerText = `Impossível contar!`;
        return;
    }

    var numeroPasso = Number(passo.value);
    var numeroInicio = Number(inicio.value);
    var numeroFim = Number(fim.value);

    resultado.innerHTML = `Contando... <br>`

    if (numeroInicio > numeroFim){
        if (numeroPasso>0){
            numeroPasso = numeroPasso*(-1);
        }
        for (c=numeroInicio; c >= numeroFim; c+= numeroPasso) {
            resultado.innerHTML += `${c} &#128073;`
        }

    } else if(numeroInicio < numeroFim && numeroPasso < 0) {
        resultado.innerHTML='Impossível Contar! Passo precisa ser positivo!';
        return;
    }
    //Cálculos
    for (c=numeroInicio; c <= numeroFim; c+= numeroPasso) {
        resultado.innerHTML += `${c} &#128073;`
    }
    resultado.innerHTML += `&#127937;`
}