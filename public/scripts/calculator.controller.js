angular.module('calculatorApp')
       . controller('CalculatorController', CalculatorController);

function CalculatorController(CalculatorService) {

  console.log('GameController Loaded');
  var ctrl = this;

  ctrl.valueA = "";

  ctrl.inputValue = function(value) {
      console.log(value);
      ctrl.valueA += value;
      console.log(ctrl.valueA);
  }
} //End of CalculatorController
