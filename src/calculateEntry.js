const data = require('../data/zoo_data');

// deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.filter((eachOne) => {
    const age = eachOne.age;
    if (age < 18) {
      child += 1;
    }

    if (age >= 18 && age < 50) {
      adult += 1;
    }

    if (age >= 50) {
      senior += 1;
    }
  });
  return { child: child, adult: adult, senior: senior };
};
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

// console.log(countEntrants(entrants));

// Após terminar a implementação da função `countEntrants` você deverá utilizá-la para implementar a função `calculateEntry`. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.
function calculateEntry(entrantsValue) {
  console.log(entrantsValue);
  const adults = entrantsValue.adult * 49.99;
  const childs = entrantsValue.child * 20.99;
  const seniors = entrantsValue.senior * 24.99;
  return adults + childs + seniors;
}
console.log(calculateEntry(countEntrants(entrants)));

module.exports = { calculateEntry, countEntrants };
