class Filme {

    constructor(titulo, genero, diretor, classificacao) {
        this.titulo = titulo;
        this.genero = genero;
        this.diretor = diretor;
        this.classificacao = classificacao;
    }

    exibir() {
        return 'O filme foi exibido'
    }
    pausar() {
        return 'O filme foi pausado'
    }
    acelerar() {
        return 'O filme agora roda a 1,5x'
    }


}

let vingadores = new Filme('Vingadores Ultimato', 'Ação', 'Irmãos Russo', 12);

console.log(vingadores.pausar());
console.log(vingadores);