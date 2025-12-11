console.log("connected");

// ********Sync**********
/*
console.log("A");
console.log("B");
console.log("C");
*/

//******** Async******
/*
console.log("A");

    setTimeout(() => {
        console.log("B");
    }, 2000);

console.log("C");
*/

//Output
    /*
        A
        C
        B   (after 2 seconds)
    */

// *******callback*******

// ******* Normal callback pattern *********
/*
function kuch(val,cd) {
    console.log(val);
    // console.log(cd)  return function
    cd()    //call the function.
  }

  kuch("vraj",function () {
    console.log("hey")
    });

*/
// ******Parameterized callback: ********

// Calling child function in parent class function using parameter.
        function lelbo(ele,fnc) {
        console.log(ele);
        fnc();
        }

        lelbo("vivek",function(e){
            console.log("e");
        })


// send parameter on child function that inside parent function, so that child function can receive it

// Example Take lelo fnc as database which contain object and using child fnc you call that function (e) to collect databse and perform code
    // lelo become universal function which has data and function = method

function lelo(ele,fnc) {
        console.log(ele);
        fnc({name:"vraj",age:21}); //small database object.
        }


// you call a method ,using (e) you collect the value that is inside the function declaration and print using console.
        lelo("vivek",function(e){
            console.log(e);
        })


// Callback hell

function abc(ele,cb) {
    console.log("running first"+ele);
    setTimeout(()=>{
        cb();
    },2000)
}
function abcd(elem,cb) {
    console.log("server running 1")
    setTimeout(()=>{
        console.log(elem)
    },2000)
    setTimeout(()=>{
                cb()

    },3000)
}

function abcde(elem,cb) {
    setTimeout(()=>{
        console.log(elem)
        cb("virign")
    },4000);
    console.log("End");
    }
abc(1,function (e) {
    
        abcd("Parameter pass",function(){
            console.log("server running 2")
            abcde("vraj",function (param) {
                console.log(param)
                })
        });
    
})