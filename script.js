const container = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    rowDiv.style.display = "flex";
    rowDiv.style.flexGrow = 1;
    container.appendChild(rowDiv);
}

const rowDivs = container.children;
for (let i = 0; i < rowDivs.length; i++) {
    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.style.flexGrow = 1;
        squareDiv.style.backgroundColor = `rgb(${i*j}, 0, 0)`;
        // squareDiv.style.backgroundColor = `rgb(255, ${255 - i*j}, ${255 - i*j})`;
        rowDivs[i].appendChild(squareDiv);
    }
}