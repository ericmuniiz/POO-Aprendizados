class Animal {

    constructor(numeroDePatas, especie){
        this.numeroDePatas = numeroDePatas;
        this.especie = especie;  

    }

    comer(){
        return 'O animal comeu';
    }

    andar(){}

    dormir(){}

}

let coelho = new Animal(4 , 'Mamífero');

console.log(coelho.numeroDePatas);
console.log(coelho.comer());

// Atributos ou Características (Constructor)
// -> numero de patas
// -> especie


// Comportamento (Function)
// -> comer
// -> andar
// -> dormir





