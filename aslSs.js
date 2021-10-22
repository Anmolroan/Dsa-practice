var oddLength=function(a){
    if(a.length%2==1){
        return a;
    }
}
var find=function(a){
    return a.length
}
var sum=function(a,b){
   return a+b;
}
var arr=["Apple", "Windows", "Linux", "Kindle", "Quiz"]
var oddS=arr.filter(oddLength).map(find).reduce(sum)
console.log(oddS)