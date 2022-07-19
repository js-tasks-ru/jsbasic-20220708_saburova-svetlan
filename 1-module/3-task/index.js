function ucFirst(str) {
  
  if (str.length > 1 && (str.toLowerCase() != str.toUpperCase())) {
    return (`${str[0].toUpperCase()}${str.slice(1)}`);

  } else if (str.length = 1 && (str.toLowerCase() != str.toUpperCase())) {
    return (`${str[0].toUpperCase()}`);

  } else {
    return str;
  }
}


