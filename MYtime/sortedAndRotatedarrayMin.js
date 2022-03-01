function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   var N=+input[0];
   var arr=input[1].trim().split(" ").map(Number);
   minimum(N,arr)
  }
  function minimum(N,arr){
    let i =0;
    let j =N-1;
    var min=null;
    while(i<=j){
      
      let mid =i+Math.floor((j-i)/2);
      if(arr[mid]>arr[i]&&arr[mid]<arr[j]){
        min=arr[i];
break;
      }
      else if(arr[mid]<arr[i]&&arr[mid]<arr[j]){
        j=mid;
      }
else{
  i=mid
}
    
    }
console.log(min)
    
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10
    7 8 11 12 13 14 2 3 4 5`);
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