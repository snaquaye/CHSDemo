const person = {
  firstName: "John",
  lastName: "Doe",
  gender: "male"
};
const k = {
  firstName: "Samson"
};

let samson = { ...person, ...k };
samson = {
  firstName: person.firstName,
  lastName: person.lastName,
  gender: person.gender
};

samson.firstName = k.firstName;
