const person = {
  firstName: "John",
  lastName: "Doe",
  gender: "male"
};

function getName(callback) {
  person.firstName = "Samson";
  return callback();
}

const func = () => {
  console.log(person.firstName);
};

getName(this.func);
