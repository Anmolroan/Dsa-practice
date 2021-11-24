function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,C,R]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number)
   party(N,C,R,arr)
  }
  function  party(N,C,R,arr){
      var sum=0;
      var count=0;
      var result=0;
      for(let i =0;i<N;i++){
          sum=sum+arr[i];
          count=count+1;

 if(sum<=R&&count==C){
    result++
  
}
else if(sum>R){
    sum=sum-arr[i];
    count=count-1;
}
// console.log(count)
// console.log(sum)
      }
      if(result==0){
          console.log("Sad")
      }
      else{
        console.log("Party")
      }
      
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 3 24
    6 4 21 20 13`);
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