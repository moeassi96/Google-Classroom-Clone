document.getElementById("material-title").addEventListener("click", viewMaterial)
document.getElementById("assignment-title").addEventListener("click", viewAssignment)

function viewMaterial() {
    var x = document.getElementById("material-hide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function viewAssignment() {
    var x = document.getElementById("assignment-hide");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }   
}