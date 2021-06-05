function parimpar(n){
    if (n%2==0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}
//passada de parametro
let res = parimpar(4)
//chamada
console.log(res);
console.log(parimpar(4));