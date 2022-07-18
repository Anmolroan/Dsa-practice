let s ="abcabcabc";
let obj={};
let index=0;let max =0;
let i=0;
while(i<s.length){
    if(!obj[s[i]]){
        obj[s[i]]=1;
        max=Math.max(max,i-index+1);
        i++;
    }else{
        delete obj[s[index]];

        index++;
       
    }
    console.log(max,obj);
}
console.log(max);