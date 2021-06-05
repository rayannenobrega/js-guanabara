let valores = [8,1,7,4,5];

for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`);
}
//Para cada posição dentro de num. Pos tira a posição e num é o array.
let num = [8,1,7,4,5];

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

//Se o resultado for -1 significa que o valor não existe
let teste =[5,8,7,6,5];
teste.push(1);
console.log(teste);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${teste[0]}`);
let posicao = teste.indexOf(7);

if (posicao== -1){
    console.log("O valor não foi encontrado");
} else {
    console.log(`O valor está na posição ${posicao}`);
}
