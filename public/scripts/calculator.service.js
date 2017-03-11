angular.module('calculatorApp')
       .service('CalculatorService', CalculatorService);

function CalculatorService ($http) {

  const service = this;

  service.calculate = (valuesToCalculate) => {
    console.log('From service: ', valuesToCalculate);
    return $http.post('/solution/' + valuesToCalculate.operator, valuesToCalculate)
      .then(solution => solution);
  };

  service.getSolution = () => {
    return $http.get('/solution')
      .then(response => response);
  };

} // End of service
