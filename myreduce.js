Array.prototype.myReduce = function (cBack, initialValue = 0) {
  let res = initialValue;
  let cur;
  for (let elem of this) {
    cur = elem;
    res = res + cur;
  }

  return res;
};

let Arr = [1, 2, 3, 4, 5];

console.log(Arr.reduce((acc, cur) => acc + cur, pi));
