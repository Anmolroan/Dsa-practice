function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number).sort((a, b) =>a-b);
        let K =+input[line++];
     main(arr,N,K);
    }
   
  }
  function main(arr,N,K){
      let i = 0;
      let j = N-1;
      let max =-1;
      while(i<j){
          let sum =arr[i]+arr[j];
          if(sum<K){
              max=sum;
              i++;
          }else{
              j--;
          }
      }
      console.log(max)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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