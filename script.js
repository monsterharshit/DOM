

function hex_color() {
    const letter = '0123456789ABCDEF';
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        hex += letter[Math.floor(Math.random() * 16)]
    }
    return hex
}
function colori() {
    const letter = '67ABC80D123EF459';
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        hex += letter[Math.floor(Math.random() * 16)]
    }
    return hex
}

var i = 0
document.querySelector("button").addEventListener("click", () => {
    let str = hex_color()

    document.querySelector("body").style.backgroundColor = str

    let h1Element = document.querySelector("h1");

    if (i == 0) {
        h1Element.textContent += str
        i = 1
    } else {
        h1Element.textContent = h1Element.textContent.slice(0, -7)
        h1Element.textContent += str
    }
})

setInterval(() => {
        document.querySelector("p").style.color = colori()
}, 1000);



