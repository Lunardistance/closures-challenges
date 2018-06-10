
//Challenge 1
var function1 = createFunction();
	function createFunction(){
        function create(){
            console.log('hello')
    }
    create();
   
}
function1;

//Challenge 2
var printSample = createFunctionPrinter('sample');

var printHello = createFunctionPrinter('hello')

function createFunctionPrinter(input){
    function printIt(){
        console.log(input)
    }
    printIt();
}
printSample;
printHello;

//Challenge 3
function outer() {
    var counter = 0; 
    
    function incrementCounter() {
      counter++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  var willCounter = outer();
  var jasCounter = outer();
  
  
  
  willCounter();
  willCounter();
  willCounter();
  
  jasCounter();
  willCounter();


