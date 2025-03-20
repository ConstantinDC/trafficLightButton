function changeColor() {
  const color = document.getElementById("lights").style.backgroundColor;
  switch (color){
    case "":
      document.getElementById("lights").style.backgroundColor = "yellow";
      break;
    case "yellow":
      document.getElementById("lights").style.backgroundColor = "green";
      break;
    case "green":
      document.getElementById("lights").style.backgroundColor = "red";
      break;
    case "red":
      document.getElementById("lights").style.backgroundColor = "yellow";
      break; 
  }
}