function ask() {
    var z = prompt(`How many cups of rice do you want?`);
    z = parseFloat(z, 10);
    while (isNaN(z) == true || z <= 0) {
        z = prompt(`How many cups of rice do you want?`);
    }
    return z;
}

function whiteRice() {
    var x = document.getElementById(`whiteRice`);
    var y = document.getElementById(`CaliRice`);
    y.style.display = `none`;
    if (x.style.display === `none`) {
        x.style.display = `block`;
    } else {
        x.style.display = `none`;
    }
    var z = ask();
    var g = `cups`;
    if (z == 1) {
        g = `cup`;
    }
    var h = z * 2;
    document.getElementById(`whiteWater`).innerHTML = `Combine ` + z + ` ` + g
    + ` of rice with ` + h.toFixed(2) + ` cups of water and 1 Tbsp olive oil.`;
}

function CaliRice() {
    var x = document.getElementById(`CaliRice`);
    var y = document.getElementById(`whiteRice`);
    y.style.display = `none`;
    if (x.style.display === `none`) {
        x.style.display = `block`;
    } else {
        x.style.display = `none`;
    }
    var z = ask();
    var g = `cups`;
    if (z == 1) {
        g = `cup`;
    }
    var h = z * 1.6;
    document.getElementById(`CaliWater`).innerHTML = `Combine ` + z + ` ` + g +
     ` of rice with ` + h.toFixed(2) + ` cups of water ` +
     `or broth and 1 Tbsp olive oil.`;
}

let CaliButton = document.getElementById(`CaliRiceButton`);
let WhiteButton = document.getElementById(`whiteRiceButton`);
CaliButton.addEventListener(`click`,CaliRice);
WhiteButton.addEventListener(`click`,whiteRice);
