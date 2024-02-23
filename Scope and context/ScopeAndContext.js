//scope

let myName = "leang";
function amazingFunction() {
  if (2 + 2 == 4) {
    let myName = "jack";
    console.log(myName);
  }
}
amazingFunction();
console.log(myName);
// var = use function scope
// let = use block scope

//context
//context is using this keyword

let john = {
  firstname: "Keo",
  lastname: "KimLeang",

  driveCar() {
    //if we want to call the local object we need to change it to arrow function
    // function imAFunctionNotaMethod() {
    //   console.log(this);
    // }
    let imAFunctionNotaMethod = () => {
      console.log(this);
    };
    //no one call this function
    //so the global object is the one who called this function
    imAFunctionNotaMethod();
    console.log(this.firstname + " " + this.lastname + " is driving a car");
  },
};

//john is the one who call this function
john.driveCar();

function breathe() {
  console.log(this.firstname + " " + this.lastname + " just breathe");
}
breathe.call(john);
