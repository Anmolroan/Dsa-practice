function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let [N,Q]=input[0].trim().split(" ").map(Number);
   let arr =input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
   let line =2;
   for(let i=0; i<Q; i++){
let K =+input[line++];
main(K,arr,N);
   }
  }
  function main(K,arr,N){
      let i =0;
      let j =N-1;
      let flag ="NO"
      while(i<=j){
          let mid =i+Math.floor((j-i)/2);
          if(arr[mid]===K){
              flag="YES";
              break;
          }else if(arr[mid]<K){
            i=mid+1;
          }else{
              j=mid-1;
          }
      }
      console.log(flag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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