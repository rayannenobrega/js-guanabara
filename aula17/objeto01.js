//Declaração de um objeto
let amigo = {
//Atributos
nome:'José', 
sexo: 'M',
peso:85.4,
//Funções
engordar(p){
    console.log('Engordou')
    this.peso += p;
}}
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);