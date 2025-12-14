console.log("connected");
// !st method Using Moralization 
/*
let cal = (function(){
    function add(a,b){
        return  a +b;
    
            
    }
    function sub(a,b) {
        return a -b;
      }
      function mul(a,b){
        return a*b;
      }
      function div(a,b){
        return a/b;
      }
      function module(a,b){
        return module(a,b);
      }

      return{
        add,
        sub,
        mul,
        div,
        module
      }
})()

console.log("Adding : ",cal.add(10,20))
*/

// Factorization method
export function cal() {
    function add(a,b){
        return  a +b;
    
            
    }
    function sub(a,b) {
        return a -b;
      }
      function mul(a,b){
        return a*b;
      }
      function div(a,b){
        return a/b;
      }
      function module(a,b){
        return a% b;
      }

      return{
        add,
        sub,
        mul,
        div,
        module
      }
}

// console.log(cal().add(1,10));

// Why this because cal() is return check line 35.