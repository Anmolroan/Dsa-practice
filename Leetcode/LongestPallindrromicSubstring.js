let s = "ccc";
let max=-Infinity;
  let maximum;
for(let i =0;i<s.length;i++){
    let str=s[i];
  for(let j=i+1;j<s.length;j++){
    str+=s[j];
    let flag=true;
  
    for(let k=0;k<=Math.floor(str.length/2);k++){
        if(str[k]!==str[str.length-k-1]){
            flag=false;
            break;
        }
    }
    if(flag){
        if(max<str.length){
            max=str.length;
            maximum=str;
        }
       
    }
  }
}
 console.log(maximum);
