let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
  element.style.backgroundColor = 'red';
  element.style.color = 'purple';
  element.innerHTML = 'Red Button';
}

element.onclick = turnButtonRed
