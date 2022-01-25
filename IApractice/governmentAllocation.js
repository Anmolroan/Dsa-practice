function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let [N,M,K]=input[0].trim().split(" ").map(Number);
    let d =input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let A =input[2].trim().split(" ").map(Number).sort((a,b)=>a-b);
    gov(N,M,K,d,A);
   
  }
  function gov(N,M,K,d,A){
      let i =0;
      let j =0;
    let count = 0;
      while(i<N&&j<M){
          if(A[j]>=d[i]-K&&A[j]<=d[i]+K){
              count++;
              i++;
              j++;
          }else if(A[j]<d[i]-K){
            j++;
           
          }else{
              i++;
              
          }
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 3 5
    60 45 80 60
    30 60 75`);
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