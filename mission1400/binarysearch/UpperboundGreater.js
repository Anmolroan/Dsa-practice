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
       let upper=-1;
       while(i<=j){
      let mid = i +Math.floor((j-i)/2);
      if(arr[mid]>K){
          
              upper = mid
          
          j=mid-1;
      }else{
          i =mid+1;
      }
       }
       console.log(upper);
  }

  if (process.env.USER=== "anmolkumar") {
    runProgram(`10 4
    0 2 4 4 5 5 7 7 9 10`);
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