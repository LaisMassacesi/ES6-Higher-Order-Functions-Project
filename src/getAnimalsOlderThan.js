const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((eachObject) => (eachObject.name === animal)).residents.every((resident) => resident.age > age);
}
console.log(getAnimalsOlderThan('lions', 20));

module.exports = getAnimalsOlderThan;
