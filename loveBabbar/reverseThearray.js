class Solution {
    
    reverseWord(str){
        //Your code here
         let result ="";
  for(let i =str.length-1;i>=0;i--){
      result =result+str[i]
  }
  return result
    }
}