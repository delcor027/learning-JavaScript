

function sayMyName(name = '') {
    if (name === '') {
        throw "Nome é obrigatório"
    }

    console.log(name)
}

try {
    sayMyName('Delcor')
} catch (e) {
    console.log(e)
}

console.log('após a função de erro')