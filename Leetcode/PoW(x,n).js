var myPow = function(x, n) {
    
    let rec =(i,x)=>{
        
        if(i===0){
            return 1
        }
        if(i===1){
            return x
        }
        if(i===2){
            return x*x
        }
     
        if(i%2===0){
            return rec(Math.floor(i/2),x) * rec(Math.floor(i/2),x)
        }
        return x*rec(Math.floor(i-1/2),x) * rec(Math.floor(i-1/2),x)
    };
    if(n>0){
        console.log(rec(n,Math.floor(x)));
    }else if(n<0){
        console.log(rec(-n,1/x));
    }else{
        console.log(1)
    }

};
myPow (2,4)
myPow(0.00001,2147483647);

// console.log(0.00001**2147483647)
// let x=2;
// let n =10;
