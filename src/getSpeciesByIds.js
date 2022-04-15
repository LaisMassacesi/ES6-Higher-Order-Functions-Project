const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const resultado = [];
  ids.forEach((eachId) => {
    resultado.push(data.species.find((especie, index) => {
      console.log('rodada: ', index);
      console.log('especie.id: ', especie.id);
      console.log('eachId: ', eachId);
      return especie.id === eachId;
    }));
  });
  return resultado;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(data.species);

module.exports = getSpeciesByIds;
