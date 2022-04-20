const data = require('../data/zoo_data');

const getResidents = (animal) => {
  const arrayResidents = data.species.filter((eachObj) => animal.specie === eachObj.name);
  return arrayResidents[0].residents;
};

const getResidentsCountByGender = (animal) => {
  const arrayKeys = Object.keys(animal);
  if (arrayKeys.includes('sex')) {
    const allResidents = getResidents(animal);
    if (animal.sex === 'female') {
      console.log('é femea');
      return allResidents.filter((eachOne) => eachOne.sex === 'female').length;
    }
    if (animal.sex === 'male') {
      console.log('é macho');
      return allResidents.filter((eachOne) => eachOne.sex === 'male').length;
    }
  }
};
function countAnimals(animal = {}) {
  const arrayKeys = Object.keys(animal);
  if (arrayKeys.includes('specie') && !arrayKeys.includes('sex')) {
    return data.species.find((eachOne) => eachOne.name === animal.specie).residents.length;
  }
  if (arrayKeys.includes('sex')) return getResidentsCountByGender(animal);
  const array = data.species.map((specie) => ({ [specie.name]: specie.residents.length }));
  return Object.assign({}, ...array);
}
console.log(countAnimals({ specie: 'lions', sex: 'female' }));

module.exports = countAnimals;
