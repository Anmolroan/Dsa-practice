function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,K]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    arr.sort((a,b)=>a-b)
   samosa(N,K,arr)
  }
  function  samosa(N,K,arr){
    var sum=0;
    var count=0;
 
   var result=0;
    for(let i =0;i<N;i++){
        sum=sum+arr[i];
        count=count+1;

if(sum==K){
  result++;
  break;
}
else if(sum>K){
  sum=sum-arr[i];
  count=count-1;
}


    }
    console.log(count)
    
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 10
    5 4 2 4`);
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