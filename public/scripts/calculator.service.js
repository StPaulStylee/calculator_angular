angular.module('calculatorApp')
       .service('CalculatorService', CalculatorService);

function CalculatorService ($http) {

  var service = this;

  service.calculate = function(valuesToCalculate) {
    console.log('From service: ', valuesToCalculate);
    return $http.post('/solution/' + valuesToCalculate.operator, valuesToCalculate)
      .then(function(solution){
        return solution;
      });
  };

  service.getSolution = function() {
    return $http.get('/solution')
      .then(function(response){
        return response;
      });
  };

} // End of service
