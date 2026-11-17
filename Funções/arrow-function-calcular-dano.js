//arrow funciton para calcular o dono causado por um ataque no jogo 
const calcularDano = (ataque, defesa) => {
    // calcula o dono como 80% do ataque menos 20% de defesa
    const dano = ataque * 0.8 - defesa * 0.2;
    //retorno o dono garantino que seja prlo menos 0
    return Math.max(0, dano); 
};
//chamando a funcao para calcular o dano causando por um ataque 
const danoCausado = calcularDano(50, 20);
console.log("Dano causado pelo ataque:", danoCausado);