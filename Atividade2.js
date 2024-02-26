// 1
const frase = "Eu sou bonito e cheiroso"

console.log(frase.length)
console.log(frase)

// 2

const semValor = null
const semDefinição = undefined

console.log(semValor)
console.log(semDefinição)

// 3

const nome = "Reginaldo"
const numero = 10
const bala = true

const frasecom3tipos = `O garoto ${nome} gosta de bala ? ${bala}, e tem apenas ${numero} de idade.`

console.log(frasecom3tipos)

// 4

const énumero = "10"

const éstring = Number(énumero)

console.log(éstring)
console.log(typeof(éstring))

// 5

const longaFrase = "Aprendendo JavaScript!";

const maiuscula = longaFrase.toLocaleUpperCase()
const minuscula = longaFrase.toLocaleLowerCase()
const pedaço = longaFrase.slice(11, 22)

console.log(maiuscula)
console.log(minuscula)
console.log(pedaço)