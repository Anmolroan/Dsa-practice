function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let [N,K]=input[0].trim().split(" ").map(Number);
   let arr =input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
   main(N,K,arr);
  }
  function main(N,K,arr) {
      let obj ={};
      let count=0;
for(let i =0;i<N;i++){
if(obj[(arr[i]/K)]===undefined){
    obj[arr[i]]=1;
}
if(obj[(arr[i])]){
    count++;
}

}
console.log(obj);
console.log(count);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 1
    1 2 3 4 5`);
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