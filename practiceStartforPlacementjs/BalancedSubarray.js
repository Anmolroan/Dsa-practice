function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let test =+input[0];
    let line =1;
    for(let i =0; i < test;i++){
        let N = +input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        balanced(N,arr)
    }
   
  }
  function balanced(N,arr){
     var sub =0;
      var obj={"1":-1, "0":1};
      let max =0;
      for(let i =0;i<arr.length;i++){
          if(arr[i]==0){
              sub++;
          }else{
              sub--;
          }
          if(obj[sub]===undefined){
              obj[sub] = i;
          }else{
              max = Math.max(max,i-obj[sub]);
          }
      }
      console.log(obj);
      console.log(max);
      

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5
    1 0 0 1 0`);
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
