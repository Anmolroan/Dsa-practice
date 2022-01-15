function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var [K,N]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
   main(K,N,arr)
  }
  function main(K,N,arr){
      let sum =0;
      let count=0;
     function masai(sum){
if(sum===K){
    count++;
}
if(sum>K){
    return 
}
for(let i =0;i<N;i++){
   
    masai(sum+arr[i]);
    
}
      }
      masai(sum);
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 3
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