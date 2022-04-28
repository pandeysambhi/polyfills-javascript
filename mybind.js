Function.prototype.myBind = function (...args) {
  let context = this;
  return function (...args2) {
    context.apply(args[0], [...args.slice(1), ...args2]);
  };
};

let person = {
  fname: "Dia",
  lname: "Mirza",
  getname: function (country) {
    return this.fname + " " + this.lname + " from " + country;
  },
};

let newPerson = { fname: "Dodo", lname: "Dida" };

let fn = person.getname.myBind(newPerson, ["delhi"]);

console.log(fn());
