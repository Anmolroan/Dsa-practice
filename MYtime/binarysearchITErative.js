function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number)
   binary(N,k,arr)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 0
    2 -2 0 3 4`);
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
  function binary(N,k,arr){
     
      var i=0;
      var j=N-1;
      var count=0;
      var arr=arr.sort((a,b)=>a-b);

while(i<=j){
var mid=Math.floor((i+j)/2);


if(k==arr[mid]){
    count++;
  break;
}
else if(k<arr[mid]){
    j=mid-1;
}
else if(k>arr[mid]){
    i= mid+1;
}
}
if(count>=1){
    console.log(1)
}
else{
    console.log(-1)
}
  }