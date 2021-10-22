var str="binod";
function reverse(i){
    if(i==0){
        return str[i]
    }
    return str[i]+reverse(i-1)
}
console.log(reverse(str.length-1))
