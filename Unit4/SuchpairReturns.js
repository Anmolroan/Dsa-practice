function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];;

   let line =1
   for(let i =0;i<tc;i++){
       let [N,K] =input[line++].trim().split(" ").map(Number);
       let arr =input[line++].trim().split(' ').map(Number).sort((a, b) =>a-b);
       main(arr,N,K)
   }
  }
  const main=(arr,N,K) =>{
let i =0;
let j =N-1;
let ans =-1;
while(i<j){
    let sum =arr[i]+arr[j];
    if(sum===K){
        ans =1;
        break;
    }else if(sum<K){
        i++;
    }else{
        j--;
    }
}
console.log(ans)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10
    6 16
    2 0 2 5 -3 0
    9 3
    6 -6 -7 8 -4 8 -6 1 4
    1 -1
    1
    3 -3
    -2 3 0
    5 -9
    4 5 0 -3 3
    7 4
    1 2 1 6 -2 7 0
    7 -10
    2 -5 6 -1 5 -1 6
    4 -12
    1 -2 -3 -4
    6 0
    5 -6 5 5 3 0
    2 3
    -2 -2`);
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