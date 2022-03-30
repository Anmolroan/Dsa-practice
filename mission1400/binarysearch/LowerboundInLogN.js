function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let [N,K] =input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    Lowerbound(N,K,arr);
   
  }
  function Lowerbound(N,K,arr){
       let i =0;
       let j =N -1;
       let lower=-1;
       while(i<=j){
         let mid =i+(Math.floor((j-i)/2));
         if(arr[mid]===K){
           lower=mid;
           j =mid-1;
         }else if(arr[mid]<K){
           i =mid+1;

         }else{
           j =mid-1;
         }
       }
       console.log(lower)
  }

  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 3
    1 1 2 2 5`);
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
