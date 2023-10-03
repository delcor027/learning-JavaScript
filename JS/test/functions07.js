

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name +  " está andando"
    }
}

const delcor = new Person("Delcor")
const joao = new Person("João")
console.log(delcor.walk())
console.log(joao.walk())