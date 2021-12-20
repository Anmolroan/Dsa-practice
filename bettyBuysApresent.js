function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [N,P]=input[0].trim().split(" ").map(Number)
   let arr =input[1].trim().split(" ").map(Number);
   main(N,P,arr);
  }
  function main(N,P,arr){
      var sum =0;
      var min =null;
      
      function subs(curr){
      
if(sum ===P){
    return count;
}
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    count++;
    subs(curr+1);
    sum=sum-arr[i];
    count--;
}
console.log(subs(0));
      
  }
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 11
    1 5 7`);
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