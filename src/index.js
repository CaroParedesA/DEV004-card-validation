import validator from './validator.js';
const btnvalid = document.getElementById("btnvalid");
let valid = false;
let mask = "";

function validar(){
  if (document.getElementById("cardnumber").value.length === 16) {
    valid = validator.isValid(document.getElementById("cardnumber").value);
    //console.log(valid);
  } else {
    alert("Ingrese los 16 dígitos de su tarjeta");
  }
  if (valid) {
    mask = validator.maskify(document.getElementById("cardnumber").value);
    document.getElementById("cardnumber").value = mask;
    console.log(mask);
    document.getElementById('result').innerHTML = "succes";
  } else {
    document.getElementById('result').innerHTML = "error";
    //console.log("error");
  }
} 
btnvalid.addEventListener("click", validar);
