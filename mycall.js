Function.prototype.myCall = function () {
  let obj = arguments[0]; //gets the object on which we want to invoke the function
  obj.fn = this; //"this" points to the function we want to invoke, we provide its refernce to the obj
  let args = Array.prototype.slice.call(arguments, 1); //gets the arguments of the function
  return obj.fn(...args); //return the result of invoking the function
};

let person = {
  fname: "Dia",
  lname: "Mirza",
  getname: function (country) {
    return this.fname + " " + this.lname + " from " + country;
  },
};

let newPerson = { fname: "Dodo", lname: "Dida" };

console.log(person.getname.myCall(newPerson, "delhi"));
