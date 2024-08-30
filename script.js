const initialGridSize = 16;

const container = document.querySelector("#container");
for (let i = 0; i < initialGridSize; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    rowDiv.style.display = "flex";
    rowDiv.style.flexGrow = 1;
    container.appendChild(rowDiv);
}

const rowDivs = container.children;
for (let i = 0; i < rowDivs.length; i++) {
    for (let j = 0; j < initialGridSize; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.style.flexGrow = 1;
        squareDiv.classList.add("white-background");
        // squareDiv.style.backgroundColor = `rgb(255, ${255 - i*j}, ${255 - i*j})`;
        rowDivs[i].appendChild(squareDiv);
    }
}

// For allowing to change colors
let currentColor = "red-background";

// const redButton = document.querySelector("#red");
// redButton.addEventListener("click", () => {
//     currentColor = "red-background";
// });

const colorButtons = document.querySelector("#colors");
const colorButtonArray = colorButtons.children;
for (let i = 0; i < colorButtonArray.length; i++) {
    colorButtonArray[i].addEventListener("click", () => {
        let colorName = colorButtonArray[i].textContent.toLowerCase();
        let classColorName = `${colorName}-background`;
        currentColor = classColorName;
    });
}

for (let i = 0; i < rowDivs.length; i++) {
    const squares = rowDivs[i].children;
    for (let j = 0; j < initialGridSize; j++) {
        const squareDiv = squares[j];
        // squareDiv.style.backgroundColor = "red";
        // squareDiv.style.backgroundColor = `rgb(255, ${255 - i*j}, ${255 - i*j})`;
        // Below idea for left mouse button check from: https://stackoverflow.com/questions/15098584/check-if-mouse-button-is-down-while-hovering
        squareDiv.addEventListener("mouseover", function(e) {
            if (e.buttons == 1) {
                squareDiv.classList.remove(squareDiv.classList[1]);
                squareDiv.classList.add(currentColor);
            }
        });
    }
}

// Button logic
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
    let newGridSize = prompt("Please enter new size of grid! (n by n)");
    if (newGridSize%1 != 0) {
        alert("That is not a number! Try again!");
    }
    else if (newGridSize > 100) {
        alert("That is too big! Try a number 100 or less!");
    }
    else if (newGridSize < 1) {
        alert("That is too small! Try a number greater than 0!");
    }
    else {
        const currentRows = container.children.length;
        for (let i = 0; i < currentRows; i++) {
            container.removeChild(container.firstElementChild);
        }
        for (let i = 0; i < newGridSize; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("rowDiv");
            rowDiv.style.display = "flex";
            rowDiv.style.flexGrow = 1;
            for (let j = 0; j < newGridSize; j++) {
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("squareDiv");
                squareDiv.style.flexGrow = 1;
                squareDiv.classList.add("white-background");
                squareDiv.addEventListener("mouseover", function(e) {
                    if (e.buttons == 1) {
                        squareDiv.classList.remove(squareDiv.classList[1]);
                        squareDiv.classList.add(currentColor);
                    }
                });
                // squareDiv.style.backgroundColor = `rgb(255, ${255 - i*j}, ${255 - i*j})`;
                rowDiv.appendChild(squareDiv);
            }
            container.appendChild(rowDiv);
        }
    }
});