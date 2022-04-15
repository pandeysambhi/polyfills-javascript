const obj = {
  a: this,
  b: function () {
    return this;
  },
  c: () => {
    return this;
  },
  d() {
    return this;
  },
  e: function () {
    return this.a;
  },
};
const newObj = obj;
console.log(typeof obj.c());
