const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log("hello");
  this.classList.toggle('open');
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));