import validator from './validator.js';
if (document.getElementById("cardnumber").value.length == 16) {
  valid = isValid(document.getElementById("cardnumber").value);
} else {
  alert("Ingrese los 16 dígitos de su tarjeta");
}
if (valid) {
  document.getElementById('result').innerHTML = "succes";
} else {
  document.getElementById('result').innerHTML = "error";
}
console.log(valid);
