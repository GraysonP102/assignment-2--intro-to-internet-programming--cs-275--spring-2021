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
  g = "cups"
  if(z == 1){
      g = "cup"
  }
  h = z*1.6
  document.getElementById("CaliWater").innerHTML = "Combine "+z+" "+g+" of rice with "+h.toFixed(2)+" cups of water "+
  "or broth and 1 Tbsp olive oil.";
}

function ask() {
    let z = prompt("How many cups of rice do you want?");
    z = parseFloat(z,10);
    while(isNaN(z) == true || z <= 0){
        z = prompt("How many cups of rice do you want?");
    }
    return z;
}
