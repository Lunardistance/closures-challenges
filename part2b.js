//Challenge 4

function addByX(x) {
    function add(n) { 
        return console.log(n + x)
    }
    return add;
}

var addByTwo = addByX(2);
var addByThree = addByX(3);
var addByFour = addByX(4)

addByTwo(1)
addByTwo(2)
addByTwo(3)
addByThree(1)
addByThree(2)
addByFour(4)
addByFour(10)

//Challenge 5

function addOne(n) {
    return n+1
}

function placeHolder(cb) {
    var output;
    return function () {
        if (cb) {
            output = cb(...arguments);
            cb = null;
        }
        return output;
    };
}

var added = placeHolder(addOne);
console.log(placeHolder(addOne));
 console.log(added(2));
 console.log(added(15));
 console.log(placeHolder(addOne));

 //Challenge 6

function numberOfTimes(n, cb) {
    return function() {
        if (n>0){
            cb = null
        }
        if(n==cb){
            
        }
    };
}
