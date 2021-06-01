function tabuada(){
    var numerotxt = document.getElementById('numtxt');
    var resultado = document.getElementById('res');

    numero = numerotxt.value;

    if (numero.length == 0){
        window.alert('Por favor, digite um número!');
        return;
    }

    for (c=1; c<=10; c++){
        resultado.innerHTML += `${numero} x ${c} = ${numero*c}
`;
    }

}