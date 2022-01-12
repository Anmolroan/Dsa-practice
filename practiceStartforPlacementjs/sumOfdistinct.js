function runProgram(input) {
    // Write code here
   input=input.trim().split("\n") ;
   let N =+input[0] ;
   let arr =input[1].trim().split(" ").map(Number)
   distinct(N,arr) ;
  }
  function distinct(N,arr) {
      let obj={};
      var sum = 0;
      for(let i =0; i<N; i++){
if(obj[arr[i]]==undefined){
    sum=sum+arr[i];
    obj[arr[i]]=1;
}
      }
      console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    2 2 2 1 1`);
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
