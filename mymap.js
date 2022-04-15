Array.prototype.myMap = function (cBack) {
  let res = [];

  for (let i = 0; i < this.length; i++) res[i] = cBack(this[i]);
  return res;
};

let Arr = {};

console.log(Arr.myMap((x) => x * 2));
