//Se não passar parametros fica esse valor pré-definido

function soma(n1=0,n2=0){
    return n1+n2;
}

//Se não passar os dois parâmetros aparecerá NaN
console.log(soma(2,5));