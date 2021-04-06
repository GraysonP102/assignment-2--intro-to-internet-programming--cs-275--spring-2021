function whiteRice() {
  let x = document.getElementById("whiteRice");
  let y = document.getElementById("CaliRice");
  y.style.display = "none";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
}
