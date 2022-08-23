function getMinMax(str) {
  let arr = str
  .split(' ')
  .filter(item => isFinite(item));
 
let newObj = {};
newObj.min = Math.min(...arr);
newObj.max = Math.max(...arr);
return newObj;
}
