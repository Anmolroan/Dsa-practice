function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number)
   binary(N,k,arr)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10 3
    0 2 4 4 5 5 7 7 9 10`);
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
 
      var arr=arr.sort((a,b)=>a-b);

while(i<j){
var  mid = i + Math.floor((j - i) / 2)
// var mid=Math.floor((i+j)/2)

 if(arr[mid]<=k){
    i=mid+1;
}
else {
    j=mid
}
}
// if(i< N-1 && arr[i] <= i) {
//     i++;
//  }

  if(arr[i]>k){
    console.log(i)
  }else{
    console.log(-1)
  }


  }