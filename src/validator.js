const validator = {
  

  isValid(creditCardNumber) {
    const arr = creditCardNumber.split('').reverse();
    let impar = 0;
    for (let i = 1, l = arr.length; i < l; i++) {
      if (i === 1 || i === 3 || i === 5 || i === 7 || i === 9 || i === 11 || i === 13 || i === 15) {
        const mult = arr[i] * 2;
        if (mult >= 10) {
          const arrayOfDigits = Array.from(String(mult));
          let suma = parseInt(arrayOfDigits[0]) + parseInt(arrayOfDigits[1]);
          impar = impar + suma;
          suma = parseInt(arr[i]);
        } else {
          impar = impar + mult;
        }
      } else {
        impar = impar + parseInt(arr[i]);
        //console.log(arr);
      }
    }
    if (impar % 2 === 0) {
      return true;
    } else {
      return false;
    }

  },

  maskify(creditCardNumber) {
    //guardamos aqui la cadena modificada
    let resultado = "";
    //recorremos toda la cadena original
    for (let i = 0; i < creditCardNumber.length; i++) {
      //todos los caracteres seran cambiados a # excepto los 4 ultimos
      if (i < creditCardNumber.length - 4) {
        resultado = resultado + '#' //consideramos # antes de llegar a los cuatro ultimos
      } else {
        resultado = resultado + creditCardNumber[i] //consideramos los 4 caracteres finales iguales
        //console.log(this.maskify);
      }
    }
    return resultado
  },
};


export default validator;
