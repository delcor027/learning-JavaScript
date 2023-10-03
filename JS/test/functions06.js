

function sayMyName(name) {
    console.log('antes de executar a function callback')
    name()
    console.log('dps de executar a callback')
}

sayMyName(
    function name() {
        console.log('Estou em uma callback')
    }
)