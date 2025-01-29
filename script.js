// function welcomeuser(name){
    //     return("hello" + name+"wwelcome to our 1st page")
    
    // }
    
    // let nameval = "xyz";
    // console.log(welcomeuser(nameval))
    
    // without function
    // let welcomeuser= function(name){
    //     return("hello" + name+"wwelcome to our 2nd page");
    
    // }
    
    // let nameval = "xyz";
    // console.log(welcomeuser(nameval))
    
    
    // let a = 3;
    // let b = 4
    // function compare(a,b){
    //     if(a<b){
    //         return a;
    //     }
    //     else {
    //         return b;
    //         }
        
    // }
    
    // arrow function : it's a consise syntax for writing a function
    
    // let sum=(a,b) =>{
    //     return a+b;
    // }
    
    // console.log("sum:" +sum(4,5))
    
    // let num= (a) => {
    //     if(a % 2 == 0){
    //         return even;
    
    //     }
    //     else{
    //         return oddnumber;
    
    //     }
    // }
    // console.log("number is :" +num(4))
    
    // let arr = [1,2,3,4,5];
    
    // let arrsum = (arr)=>{
    //     let sum = 0;
    //     for (let i=0;i< arr.length; i++ ){
    //         sum += arr[i];
    
    //     }
    //     return sum;
    
    // }
    // console.log(arrsum(arr));
    
    // (function(){
    //     console.log("Debarpan Das");
    // })
    
    // function greet (name, callback){
    //     console.log("Hii "+ name);
    //     callback();
    // }
    // function callMe(){
    //     console.log("it is a callback function");
    // }
    
    // greet("DD",callMe);
    
    
    // let arr = [1,2,3,4,5,6];
    // let newArr = arr.map(val=>val+2);
    
    // console.log(arr);
    // console.log(newArr);
    
    // let filterArr = arr.filter((val) => val%2 != 0);
    
    // console.log(filterArr);
    
    // let arr = [82,56,23,67,54]
    // let filterArr = arr.filter(val => val>23);
    // console.log(filterArr);
    
    // const arr = [1, 2, 3, 4, 5];
    
    // const reducedArr = arr.reduce(function (acc, i) {
    //     return acc + i;
    // }, 0); 
    // console.log("sum : ", +ruducedArr); 
    
    document.getElementById("demo").innerHTML = "THIS IS JAVASCRIPT"
    
    setTimeout(()=>{
        document.getElementById("test").innerHTML = "Run Successfully"},7000)
    
    // promises
    function displayer(some) {
        document.getElementById("promise").innerHTML = some;
    }
    
    
    let promise = new Promise(function (myResolve, myReject) {
        let x = 0;
        if (x == 0) {
            myResolve("ok");
        }
        else {
            myReject("error");
        }
    });
    
    promise.then(
        function (value) {
            displayer(value);
        },
        function (error) {
            displayer(error);
        }
    ) 
    
    
    function checkStatus() {
        
        let statusCode = 200; 
       
        let statusCheck = new Promise((resolve, reject) => {
            if (statusCode === 300) {
                resolve('Success: Status is 200');
            } else {
                reject('Error: Status is not 200');
            }
        });
    
        statusCheck
            .then(message => {
                displayMessage(message, 'success');
            })
            .catch(errorMessage => {
                displayMessage(errorMessage, 'error');
            });
    }
    
    function displayMessage(message, type) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = message;
    
        
        if (type === 'success') {
            messageDiv.className = 'success';
        } else if (type === 'error') {
            messageDiv.className = 'error';
        }
    }