
var arr=[1,2,3,4,5,6]

var squares=function(a){
    console.log( a**2);
}

arr.forEach(squares)
var double=function(b){
    return b*2;
}
var case2=arr.map(double);
console.log(case2);
function isOdd(c){
    if(c%2==1){
        return c;
    }
}
console.log(arr.filter(isOdd));

var case4=arr.reduce(function( a,d){
return a*d;
})
console.log(case4)

var sum=function(a,b){
    return a+b;
}
var case5=arr.filter(isOdd).reduce(sum)
console.log(case5)
function cubes(a){
   return a**3;
}
function multiple3(b){
    if(b%3==0){
        return b;
    }
}
case6=arr.filter(multiple3).map(cubes).reduce(sum);
console.log(case6)