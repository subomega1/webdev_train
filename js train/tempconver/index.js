const text_box= document.getElementById("textbox");
const Fahrenheit=document.getElementById("toFahrenheit");
const Celsius=document.getElementById("toCelsius");
const resualt =document.getElementById("resualt");

let temp;

function convert(){
  if(Fahrenheit.checked)
    {
      temp = Number(text_box.value);
      temp =  temp * 9/ 5 + 32
      resualt.textContent = temp + "°F"
    }
    else if(Celsius.checked){
      temp = Number(text_box.value);
      temp =  (temp -32) *(5/9)
      resualt.textContent = temp + "°C"
      
    }
    else{
      resualt.textContent = "Select a unit"
    }
}