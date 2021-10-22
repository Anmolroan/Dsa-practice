var str="pippppiiiipi";
var s="";
function PI(i){
    if(i>str.length-1){
        return "";
    }
  if(str[i]+str[i+1]=="pi"){
    return "3.14"+PI(i+2)
  }
   return str[i]+str[i+1]+PI(i+2)
}
console.log(PI(0))