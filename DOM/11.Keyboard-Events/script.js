let ball = document.getElementById('float-circle');

// my code below
let up = function() {
  ball.style.bottom = '250px';
}

document.addEventListener("keydown", up);

let down = function() {
  ball.style.bottom = "50px"
}

document.addEventListener("keyup", down);
