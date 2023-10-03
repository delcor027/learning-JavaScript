
let name = prompt('Qual o seu nome?')
let noteOne = Number(prompt('Qual sua primeira nota?'))
let noteTwo = Number(prompt('Qual sua segunda nota?'))
let noteThree = Number(prompt('Qual sua terceira nota?'))

let average = (noteOne + noteTwo + noteThree) / 3
let result = average >= 6

if (result) {
    alert(`${name}, sua média final foi de: ${average}, parabéns você foi aprovado`)
} else if (average < 3) {
    alert('reprovado')
} else {
    alert(`${name}, infelizmente você ficará de recuperação, sua média final foi de ${average}`)
}
