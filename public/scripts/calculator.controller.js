angular.module('calculatorApp')
       . controller('CalculatorController', CalculatorController);

function CalculatorController(CalculatorService) {

  console.log('CalculatorController Loaded');
  var ctrl = this;

  ctrl.valueDisplay = '';
  ctrl.valuesToCalculate = {valueA: '', valueB: '', operator: ''};
  ctrl.readyForNextCalculation = false;

  ctrl.inputValue = function(value) {
    if (ctrl.readyForNextCalculation === true){
      ctrl.readyForNextCalculation = false;
      ctrl.valueDisplay = ''
      ctrl.valueDisplay += value;
    } else {
      console.log(value);
      ctrl.valueDisplay += value
      console.log(ctrl.valueDisplay);
    }
  }

  ctrl.add = function(operator) {
    ctrl.valuesToCalculate.valueA = parseFloat(ctrl.valueDisplay);
    ctrl.valuesToCalculate.operator = operator;
    ctrl.valueDisplay = '';
    console.log('Add clicked');
    console.log(ctrl.valuesToCalculate);
  }

  ctrl.subtract = function(operator) {
    ctrl.valuesToCalculate.valueA = parseFloat(ctrl.valueDisplay);
    ctrl.valuesToCalculate.operator = operator;
    ctrl.valueDisplay = '';
    console.log('subtract clicked');
    console.log(ctrl.valuesToCalculate);
  }

  ctrl.multiply = function(operator) {
    ctrl.valuesToCalculate.valueA = parseFloat(ctrl.valueDisplay);
    ctrl.valuesToCalculate.operator = operator;
    ctrl.valueDisplay = '';
    console.log('multiply clicked');
    console.log(ctrl.valuesToCalculate);
  }

  ctrl.divide = function(operator) {
    ctrl.valuesToCalculate.valueA = parseFloat(ctrl.valueDisplay);
    ctrl.valuesToCalculate.operator = operator;
    ctrl.valueDisplay = '';
    console.log('Divide clicked');
    console.log(ctrl.valuesToCalculate);
  }

  ctrl.calculate = function() {
    ctrl.valuesToCalculate.valueB = parseFloat(ctrl.valueDisplay);
    console.log(ctrl.valuesToCalculate);
    CalculatorService.calculate(ctrl.valuesToCalculate).then(function(){
      ctrl.getSolution();
    });
  }

  ctrl.getSolution = function() {
    CalculatorService.getSolution().then(function(solution){
      ctrl.valueDisplay = solution.data.solution;
      ctrl.valuesToCalculate = {valueA: '', valueB: '', operator: ''};
      ctrl.readyForNextCalculation = true;
    })
  }

  ctrl.clearCalculator = function() {
    ctrl.valuesToCalculate = {valueA: '', valueB: '', operator: ''};
    ctrl.valueDisplay = '';
  }

  ctrl.deleteLastSelected = function() {
    if (ctrl.readyForNextCalculation === true) {
      ctrl.clearCalculator();
    } else {
      ctrl.valueDisplay = ctrl.valueDisplay.substr(0, ctrl.valueDisplay.length - 1);
    }
  }
} //End of CalculatorController
