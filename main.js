"use strict";

let tile = [];

function init() {
    const table = document.getElementById("table");
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            let td = document.createElement("td");
            let index = i * 5 + j;
            td.className = "tile";
            td.index = index;
            td.value = index;
            td.onclick = click;
            td.textContent = index == 0 ? "" : index;
            tr.appendChild(td); 
            tile.push(td);
        }
        table.appendChild(tr);
    }
    for (let i = 0; i < 1000; i++) {
        click({srcElement: {index: Math.floor(Math.random() * 25)}});
    }
}

function click(a) {
    let i = a.srcElement.index;

    if (i - 5 >= 0 && tile[i - 5].value == 0) {
        swipe(i, i - 5);
    } else if (i + 5 < 25 && tile[i + 5].value == 0) {
        swipe(i, i + 5);
    } else if (i % 5 != 0 && tile[i - 1].value == 0) {
        swipe(i, i - 1);
    } else if (i % 5 != 4 && tile[i + 1].value == 0) {
        swipe(i, i + 1);
    }
}


function swipe(i, j) {
    let X = tile[i].value;
    tile[i].textContent = tile[j].textContent;
    tile[i].value = tile[j].value;
    tile[j].textContent = X;
    tile[j].value = X;
}

