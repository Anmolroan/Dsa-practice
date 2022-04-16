function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i = 0; i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        Distribute(N,arr);
    }
   
  }
  function Distribute(N,arr){
let i =0;

let newarr = Array(N).fill(0);
if(arr[i]<arr[i+1]){
    newarr[i]=1;
    newarr[i+1]=2;
}else if(arr[i]>arr[i+1]){
    newarr[i]=2;
    newarr[i+1]=1;
}else{
    newarr[i]=1;
    newarr[i+1]=1;
}
// console.log(newarr);
for(let i = 2;i<N;i++){
if(arr[i]<arr[i-1]){
   
        newarr[i]=newarr[i-1]-1;

}else if(arr[i]===arr[i-1]){
    newarr[i]=newarr[i-1]-1;
}else{
    newarr[i]=newarr[i-1]+1;
}

}
console.log(newarr.reduce((e,s)=>{
    return e+s;
}));
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3 
    1 0 2
    3
    1 2 2`);
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