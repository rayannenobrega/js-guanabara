let valores = [];
let txtarea = document.getElementById('txtarea');
let numtxt = document.getElementById('numtxt');
let res = document.getElementById('res')

//Não se passa parâmetro porque quem tá chamando a função é o próprio HTML. Se eu quiser passar um parâmetro é necessário fazer através do JS e não pelo 'onclick'.
function adiciona(){
    let num = numtxt.value
    

    if (valores.length == 0){
        txtarea.innerHTML = ``;
        res.innerHTML = ``;
    }
    if (num < 1 || num > 100){
        window.alert(`Valor inválido ou já encontrado na lista.`);
        return;
    } else if (valores.includes(num)){
        window.alert(`Valor inválido ou já encontrado na lista.`);
        return;
    }

    valores.push(num)
    txtarea.innerHTML += `Valor ${num} adicionado.
`;
    numtxt.value = ``;
    numtxt.focus();
}

function calcular(){
    valores.sort();

    //variáveis para cálculos
    let num_cadastrados = valores.length;
    let soma = 0;
    let media = 0;
    

    //cálculos
    for (let c = 0; c < valores.length ; c++){
        soma = soma + Number(valores[c]);
       
    }
     media = soma / valores.length;


    //Exibição
    res.innerHTML += `<p>Ao todo temos  número(s) cadastrado(s) ${valores.length}.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length - 1]}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${valores[0]}. </p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    valores = [];
       
}