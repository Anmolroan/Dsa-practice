function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
   let K=+input[2];
 
   let count=1;
   let flag="False";
   for(let i=1;i<arr.length;i++) {
    if(arr[i-1]===arr[i]){
        count++;
        if(count===K){
           flag="True";
            break;
        }
    }else{
        count=1;
    }
    
   }
   if(arr.length===1&&K===1){
    console.log("True")
   }else{
    console.log(flag)
   }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
   34
    1`);
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