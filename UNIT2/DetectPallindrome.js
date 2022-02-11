function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let test = +input[0];
    let line=1;
    for(let i=0; i<test; i++) {
let N =+input[line++];
let string=input[line++].trim();
palindrome(N,string);
    }
   
  }
  function palindrome(N,string) {
      let obj ={};
      for(let i=0; i<N; i++) {
if(obj[string[i]]===undefined) {
obj[string[i]]=1;
}else{
    obj[string[i]]=obj[string[i]]+1;
}
      }
    //   console.log(obj);
      let count=0;
      for(key in obj){
          if(obj[key]%2!==0){
              count++;
          }
      }
    //   console.log(count);
    if(count>1){
console.log("Not Possible!")
    }else{
        console.log("Possible!")
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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