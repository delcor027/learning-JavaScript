
let items = []

for (let item = 0; item < 2; item++) {
    let itemName = prompt("digite o item" + (item + 1))

    items[item] = itemName
}

alert(items[0])
alert(items[40])