function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(i=0;i<test;i++){
        var N=+input[line++];
        var arr1=input[line++].trim().split(" ").map(Number);
        var M=+input[line++];
        var arr2=input[line++].trim().split(" ").map(Number);
        commonindex(N,arr1,M,arr2)
        }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    6
    1 2 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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
function commonindex(N,arr1,M,arr2){
var i=0;
var j=0;
output="";
var count=0;
while(i<N&&j<M){
  if(arr1[i]===arr2[j]){
    output=output+arr1[i]+" ";
    count++;
    i++;
    j++
  }
  else if(arr1[i]<arr2[j]){
    i++;
  }
  else if(arr1[i]>arr2[j]){
    j++;
  }
}
if(count==0){console.log(-1)}
else{
  console.log(output)
}

}
