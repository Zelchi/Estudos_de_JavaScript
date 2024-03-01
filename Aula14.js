// Exemplo de For:
const notas = [10, 9, 2, 8];

let somaDasNotas = 0;

for (let indice = 0; indice < notas.length; indice++) {
    somaDasNotas += notas[indice];
};

const media = somaDasNotas / notas.length
console.log(media)

// Exemplo de For dentro de outro For:
const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media1 = 0
 
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media1 += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
media1 = media1/notasGerais.length
 
console.log(media1)
