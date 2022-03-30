function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let tc = +input[0];
   let arr =input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
   let N =input[2].trim().split(" ").map(Number)
   let line =3;
   for(let i = 0; i < N; i++){
let K =+input[line++];
Soap(arr,K)
   }
   
  }
  function Soap(arr,K){
let i =0;
let j =arr.length-1;
let upper=-1;
while(i<=j){
    let mid =i +Math.floor((j-i)/2);
    if(arr[mid]<K){
i =mid+1;
    }else{
        upper = mid;
        j =mid-1;
    }
}
if(upper===-1){
    console.log(arr.length);
}else{
    console.log(upper);
}
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    11`);
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