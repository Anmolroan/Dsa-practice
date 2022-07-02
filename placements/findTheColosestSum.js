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

  let i =N-1; 
  let j =N-3;
  let sum=0;
  for(let k=0;k<3;k++){
      sum =sum+arr[k]
  }
  let min=Math.abs(sum-K);
  let minimum=sum;

  let l=3
 for(let i =l;i<N;i++){
    sum=sum-arr[i-l];
    sum=sum+arr[i];
    
    if(Math.abs(sum-K)<min){
      min=Math.abs(sum-K)
        minimum=sum;
    }
 }
 console.log(minimum)
}
if (process.env.USER=== "anmolkumar") {
  runProgram(`10
  15 14
  3 7 -1 7 0 2 -2 -3 -3 4 0 -1 -3 1 7
  18 1
  0 -1 0 0 0 -1 0 1 1 0 0 1 1 0 0 0 -1 0
  6 20
  -1 1 9 9 -8 2
  13 3
  11 -5 -8 11 6 -8 -11 7 -2 1 5 -11 -8
  7 6
  1 -1 2 -3 0 4 1
  11 22
  -14 14 6 12 -1 -14 -3 14 11 14 -13
  2 3
  -1 -3
  11 7
  -5 0 -5 4 -1 0 4 -4 1 4 4
  20 7
  3 7 13 5 -10 -9 -4 -6 7 8 -5 -4 -3 8 -11 3 0 -10 2 1
  2 6
  -1 0
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