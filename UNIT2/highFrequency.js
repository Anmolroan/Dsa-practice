function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test=+input[0];
    let line =1;
    for(let i=0; i<test; i++) {
let N=+input[line++]
let arr =input[line++].trim().split(" ").map(Number);
highfrequency(N,arr);
    }
   
  }
  function highfrequency(N,arr) {
      let obj ={};
      for(let i=0; i<arr.length; i++) {
          if(obj[arr[i]]===undefined){
              obj[arr[i]]=1;
          }else{
              obj[arr[i]]=obj[arr[i]]+1;
          }
      }
    //   console.log(obj);
      let max=0;
      var maximum;
      for(let key in obj){
          if(obj[key]>max){
              max=obj[key];
              maximum=+key;
          }else if(obj[key]===max){
              if(key<maximum){
                  maximum=+key;
              }
          }
      }
      console.log(maximum);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    6
    1 4 4 4 5 3
    11
    1 2 3 4 5 4 3 2 1 3 4`);
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