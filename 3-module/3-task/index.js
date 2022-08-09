function camelize(str) {
  let arr = str.split('-');

  for (let i = 1; i <arr.length; i++) {
    if (arr.length > 1) {
      arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1);
    } else {
      return arr[i];
    }
  }

  str = arr.join('');
  return str;
}
