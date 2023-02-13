const validator = {
  isValid(creditCardNumber) {
    const arr = creditCardNumber.split("").reverse();
    let impar = 0;
    for (let i = 1; i < arr.length; i++) {
      if (
        i === 1 ||
        i === 3 ||
        i === 5 ||
        i === 7 ||
        i === 9 ||
        i === 11 ||
        i === 13 ||
        i === 15
      ) {
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
      }
    }
    if (impar % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(creditCardNumber) {
    let resultado = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) {
        resultado = resultado + "#";
      } else {
        resultado = resultado + creditCardNumber[i];
      }
    }
    return resultado;
  },
};
export default validator;
