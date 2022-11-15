function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
   return a * b;
}

function divide(a,b){
   return a / b;
}
 function increment(n){
  n += 1;
  return n++;
 }

function decrement(n){
  n -= 1;
  return n--;
}


function makeInt(n) {
  return parseInt(n, 10);      
}
    
function preserveDecimal(n){
  return parseFloat(n, 10);
}

    




add(2,3);
subtract(5,3);
multiply(5,7);
divide(8,2);
increment(5);
decrement(9);
makeInt("4",10);
