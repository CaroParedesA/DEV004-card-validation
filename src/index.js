import validator from './validator.js';
let btnvalid = document.getElementById("btnvalid")
console.log(btnvalid);

function validar() {
  let valid = false;
  if (document.getElementById("cardnumber").value.length == 16) {
    valid = validator.isValid(document.getElementById("cardnumber").value);
    console.log(valid);
  } else {
    alert("Ingrese los 16 dígitos de su tarjeta");
  }
  if (valid) {
    document.getElementById('result').innerHTML = "succes";
  } else {
    document.getElementById('result').innerHTML = "error";
    console.log("error");
    function validator() {
      document.getElementById("result").innerHTML = "";
    }
    var str,
      element = document.getElementById('btnvalid');
    if (element != null) {
      str = element.value;
    } else {
      str = null;
    }

  }
}
btnvalid.addEventListener("click", validar);
