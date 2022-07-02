var myPow = function(x, n) {
    
    let rec =(i)=>{
        if(i===0){
            return 1;
        }
        if(n<0){
            return (1/x)*rec(i+1);
        }
        return x*rec(i-1);
    };
console.log(rec(n))
};
// myPow(0.00001,2147483647)
console.log(0.00001**2147483647)
let x=2;
let n =10;