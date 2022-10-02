function writeCards(names, gift) {
    let newArray = [];
    for (let i = 0; i < 3; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
    }
    return newArray;
}

function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}