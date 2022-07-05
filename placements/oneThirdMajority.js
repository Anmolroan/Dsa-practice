function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr=input[1].trim().split(" ").map(Number);
   main(N,arr)
  }
  function main(N,arr) {
   let obj ={};
   for(let i=0;i<arr.length;i++){
    if(!obj[arr[i]]){
        obj[arr[i]] =1;
    }else{
        obj[arr[i]] =obj[arr[i]]+1;
    }
   }
   let n =N/3;
   let output=[];
  
   for ( let key in obj){
   if(obj[key]>n){
    output.push(+key)
   }
   }
   console.log(output.join(" "));
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3 2 3`);
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