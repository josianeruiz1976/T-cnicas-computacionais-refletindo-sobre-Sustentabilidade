const nomes = ["Josiane", "Ademir", "Lucas", "Amanda", "Otávio", "Isabela", "Valdemir"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)