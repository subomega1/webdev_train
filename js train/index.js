const decreasebtn = document.getElementById("decraseBtn");
const restbtn = document.getElementById("restBtn");
const incresebtn = document.getElementById("increseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

incresebtn.onclick= function(){
  count++;
  countlabel.textContent = count;

}
restbtn.onclick= function(){
  countlabel.textContent = 0;

}
decreasebtn.onclick= function(){
  count--;
  countlabel.textContent = count;

}