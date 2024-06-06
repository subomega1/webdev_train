const mybutton = document.getElementById('mybt');
const mylabel = document.getElementById('mylb');
let numbr;
mybutton.onclick = function() {
  numbr = Math.floor(Math.random() * 6) + 1;
  mylabel.textContent = numbr;
}
