function whiteRice() {
  let x = document.getElementById("whiteRice");
  let y = document.getElementById("CaliRice");
  y.style.display = "none";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  z = ask();
}

function CaliRice() {
  let x = document.getElementById("CaliRice");
  let y = document.getElementById("whiteRice");
  y.style.display = "none";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  z = ask();
}

function ask() {
    let z = prompt("How many cups of rice do you want?");
    z = parseFloat(z,10);
    while(isNaN(z) == true){
        z = prompt("How many cups of rice do you want?");
    }
    return z;
}
