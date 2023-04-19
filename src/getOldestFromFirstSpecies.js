const data = require('../data/zoo_data');
// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

function getOldestFromFirstSpecies(id) {
  return data.employees.find((employee) => (employee.id === id) employee.responsibleFor.find((animal) => console.log(animal[0])));
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
