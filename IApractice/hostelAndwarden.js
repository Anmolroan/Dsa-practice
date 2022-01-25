function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    var N =+input[0]
   let arr1 =input[1].trim().split(" ").map(Number);
   arr1.sort((a,b)=>a-b)
   let arr2 =input[2].trim().split(" ").map(Number);
   arr2.sort((a,b)=>a-b)
   hostel(arr1,arr2,N)
  }
  function hostel(arr1,arr2,N){
  
 let max =-Infinity;
  function rec(i,arr1,arr2){
      if(i===N){
          return;
      }
   
     
         max=Math.max(max,Math.abs(arr1[i] - arr2[i])) ;
       
      rec(i+1,arr1,arr2)
      }
      rec(0,arr1,arr2);
      console.log(max)
      
  }

  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    4 -4 2
    4 0 5`);
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