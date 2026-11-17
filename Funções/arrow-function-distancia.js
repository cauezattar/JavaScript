// Arrow function para calcular a distância entre dois pontos no jogo
const calcularDistancia = (x1, y1, x2, y2) => {
const distanciax = x2 - x1;
const distanciay = y2 - y1;
return Math.sqrt(distanciaX ** 2 + distanciay ** 2);
};
// Chamando a função para calcular a distância entre dois pontos
const distancia = calcularDistancia(0, 0, 3, 4);
console.log("Distância entre os pontos:", distancia);