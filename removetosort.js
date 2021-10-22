function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var N=+input[0];
    var array=input[1].trim().split(" ").map(Number)
    
find(array,N)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
   function find(array,N){
  var s=[];
  var top=-1;
  var arr=[];
 
  for(let i=0;i<N;i++){
      while(s.length>0&&s[top]>=array[i]){
          s.pop();
          top--;

      }
      if(s.length>0){
          arr.push(s[top]);
        
      }
      else{
          arr.push(-1)
      }
      top++;
      s.push(array[i])
  }
  console.log(arr.join(" "))
   }