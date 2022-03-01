function runProgram(input) {
    // Write code here
     input=input.trim().split("\n");
     var N=+input[0];
     var arr=input[1].trim().split(" ").map(Number);
     find(arr,N)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    1 3 1 2`);
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
  function find(arr,N){
      function check(a,b){
          if(a>b){
              return b;
          }
          else if(b>a){
              return a
          }
          else{
              return a
          }
      }
     arr.sort((a,b)=>a-b);
   
     var i=0;
     var sum=0;
     var j=i+1;
     while(i<arr.length&&j<arr.length){
      
       sum=sum+check(arr[i],arr[j]);
       i=i+2;
       j=j+2;
     }
     console.log(sum)
  }