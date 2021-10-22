function findMaximum(N,k,arr){
    var max= null;
  for(i=0;i<=N-k;i++){
    var sum=0;
  for(j=i;j<k+i;j++){
    sum=sum+arr[j]
  }
  if(max==null||sum>max){
    max=sum;
  }
  }
  console.log(max)
  
  }
  
      function runProgram(input) {
          // Write code here
  
  input=input.trim().split("\n")
  size=input[0].trim().split(" ").map(Number)
  N=+size[0];
  k=+size[1];
  arr=input[1].trim().split(" ").map(Number)
  
  findMaximum(N,k,arr)
  
        }
        if (process.env.USER === "anmolkumar") {
          runProgram(`10 3
          -1 -1 -2 1 -2 4 1 9 3 9`);
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