function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
   find(N,arr)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    3 5 0 9 8`);
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
  function find(N,arr){
      function swap(i,j){
          var temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp
      }
      bubble=(i)=>{
if(i===N-1){
    return;
}
for(let j=0;j<N-1-i;j++){
if(arr[j]>arr[j+1]){
    swap(j,j+1)
}
}
bubble(i+1)
      }
      bubble(0);
      console.log(arr.join(" "))
  }