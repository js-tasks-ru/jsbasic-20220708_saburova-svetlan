"use strict";

function factorial(n) {

  let result = 1;

  if (n < 0 ) {
    return;
  }
  if (n === "1") {
    return result;
  }
  for (let i = 1; i <= n; i++) { 
      result = result * i;
  }
  return result;
}

let n = prompt("Факториал какого числа требуется вычислить?", '');

if (n === "1") {
  alert("1");

} else if (n < 0 ){
  alert("Ошибка");

} else {
  alert(factorial(n));
}



