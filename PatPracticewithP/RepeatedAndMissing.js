function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc =+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
{
let N =+input[line++];
let arr = input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
repeatedAndMissing(N,arr)
}   
  }
  function repeatedAndMissing(N,arr){
     var missing;
     let rep ;
      for(let i =0;i<N;i++){
          if(i+1!=arr[i]){
             rep=arr[i];
             break;
          }
        
      }
      for(let i =0;i<N;i++){
        if(i+1!=arr[i]){
           missing=i+1;
          
        }
      
    }
      console.log(missing+" "+rep);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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