function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let N =+input[0];
    let arr = input[1].trim().split(" ").map(Number);
    main(N,arr);
   
  }
  function main(N,arr){
      arr.sort((a,b)=>a-b);
      let max =null;
for(let i=0;i<N-2;i++){
    let a = arr[i+2]-arr[i];
    let b = arr[i+1]-arr[i];
    if(a>b){
if(max===null||max<a){
    max =a;
}
}else{
    if(max===null||max<b){
        max =b;
}
    }

  }
  console.log(max)
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    5 10 6 8`);
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