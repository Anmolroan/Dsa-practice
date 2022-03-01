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
      var max=null;
for(let i =0;i<N;i++){
    let result =Math.abs(arr2[i]-arr1[i])
    if(max==null||result>max){
        max=result
    }
}
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