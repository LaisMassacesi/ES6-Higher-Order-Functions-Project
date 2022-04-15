const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if(employeeName === undefined) return {};
  const result = data.employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) return employee;
  });
  return result;
}

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
