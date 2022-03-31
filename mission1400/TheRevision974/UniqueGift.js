function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i =0;i<tc;i++){
let str =input[line++].trim();
Unique(str);
   }
  }
  function Unique(str){
      let obj={};
      let ans ="";

      for(let i =0;i<str.length;i++){
          var char =str[i];
          if(obj[char]===undefined){
              obj[char] =1;
          }else{
              obj[char] = obj[char]+1;
          }
        
        let flag = false
        for(key in obj){
            if(obj[key]===1){
             
                ans=ans+key;
                flag=true;
                break;
            }
        }
        if(flag==false){
            ans=ans+"#"
        }
      }
      console.log(ans);
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    abadbc
    abcabc`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }