function runProgram(input) {
  // Write code here
  input =input.trim().split('\n');
  let line =1;
  let tc =input[0]
  for(let i =0;i<tc;i++){
   let [N,K]=input[line++].trim().split(" ").map(Number);
   let arr =input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
   main(arr,N,K);
  }
}
function main(arr,N,K){
  let min=Infinity;
  let minimum=0;
let i =0;
let j=1;
let k=2;
 while(i<j&&j<k&&i<k&&k<N&&i<N-2&&j<N-1){
  let sum =arr[i]+arr[j]+arr[k];
  let temp=Math.abs(sum-K);
 console.log(sum,temp);
  if(temp<=min&&k<N-1){
    min=temp;
    minimum=sum;
    k++;
  }else if(temp<=min&&k===N-1){
    min=temp;
    minimum=sum;
    j++;
  }else if(temp<=min&&j==N-2){
    min=temp;
    minimum=sum;
    i++;
    j++;
  
  }
 }
 console.log(minimum)
}
if (process.env.USER=== "anmolkumar") {
  runProgram(`2
  4 1
  -1 2 1 -4
  3 1
  0 0 0
  `
);
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