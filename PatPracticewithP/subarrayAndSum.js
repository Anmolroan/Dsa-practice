function runProgram(input) {
    // Write code here
  input = input.trim().split("\n");
  var [N,K]=input[0].trim().split(" ").map(Number);
  var arr =input[1].trim().split(" ").map(Number);
subarrayAndSum(N,K,arr)
  }
  function subarrayAndSum(N,K,arr){
      let sum =0;
for(let i =0;i<N;i++){
    sum =sum + arr[i]
}
ans=0;
if(sum%K!=0){
flag =true;
ans=1;
}else{
    var i=0;
    var j =N-1;
    while(i<j){
        if(arr[i]%K!=0){
            
        }
    }
}
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 3
    2 3 4 6`);
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