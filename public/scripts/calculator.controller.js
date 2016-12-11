angular.module('calculatorApp')
       . controller('CalculatorController', CalculatorController);

function CalculatorController(CalculatorService) {

  console.log('GameController Loaded');
  var ctrl = this;

  ctrl.operatorChosen = false;
  ctrl.valueDisplay = '';
  ctrl.valuesToCalculate = {valueA: '', valueB: '', operator: ''};

  ctrl.inputValue = function(value) {
    if (ctrl.operatorChosen = false) {
      console.log(value);
      ctrl.valueDisplay += value
      console.log(ctrl.valueDisplay);
    } else {
      console.log(value);
      ctrl.valueDisplay += value;
      console.log(ctrl.valueDisplay);
    }
  }

  ctrl.add = function(operator) {
    ctrl.valuesToCalculate.valueA = parseInt(ctrl.valueDisplay);
    ctrl.operatorChosen = true;
    ctrl.valuesToCalculate.operator = operator;
    ctrl.valueDisplay = '';
    console.log('Add clicked');
    console.log(ctrl.valuesToCalculate);
  }

  ctrl.subtract = function(operator) {
    ctrl.valuesToCalculate.valueA = parseInt(ctrl.valueDisplay);
    ctrl.operatorChosen = true;
    ctrl.valuesToCalculate.operator = operator;
    ctrl.valueDisplay = '';
    console.log('subtract clicked');
    console.log(ctrl.valuesToCalculate);
  }

  ctrl.multiply = function(operator) {
    ctrl.valuesToCalculate.valueA = parseInt(ctrl.valueDisplay);
    ctrl.operatorChosen = true;
    ctrl.valuesToCalculate.operator = operator;
    ctrl.valueDisplay = '';
    console.log('multiply clicked');
    console.log(ctrl.valuesToCalculate);
  }

  ctrl.divide = function(operator) {
    ctrl.valuesToCalculate.valueA = parseInt(ctrl.valueDisplay);
    ctrl.operatorChosen = true;
    ctrl.valuesToCalculate.operator = operator;
    ctrl.valueDisplay = '';
    console.log('Divide clicked');
    console.log(ctrl.valuesToCalculate);
  }
} //End of CalculatorController
