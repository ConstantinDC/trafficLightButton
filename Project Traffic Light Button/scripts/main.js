function changeColor() {
  const color = document.getElementById("lights");
  if (color.style.backgroundColor === '') {
   color.style.backgroundColor = 'yellow';
  } else if (color.style.backgroundColor === 'yellow') {
     color.style.backgroundColor = 'green';
  } else {
     color.style.backgroundColor = '';
  }
}
