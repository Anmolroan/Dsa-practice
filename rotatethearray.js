function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(i=0;i<test;i++){
   var[N,k]=input[line++].trim().split(" ").map(Number);
   var arr=input[line++].trim().split(" ").map(Number);
   rotatearr(N,k,arr)

    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
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
function rotatearr(N,k,arr){
  k=k%N;
  function rev(start,end ,arr){
var n=Math.floor((start+end)/2);
for(var i=0;i<end;i++){
var temp=arr[start];
arr[start]=arr[end-1];
arr[end-1]=temp;
}
return arr;
  }
  rev(0,N,arr);
  rev(0,k,arr);
 
  var n=(k+N)/2
  for(var i=k;i<n;i++){
var temp=arr[i];
arr[i]=arr[N-1-(i-k)];
arr[N-1-(i-k)]=temp;
  }
  console.log(arr.join(" "))
}
