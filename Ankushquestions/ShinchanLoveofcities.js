function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        let [N,Q]=input[line++].trim().split(" ").map(Number);
        let arr =input[line++].trim().split(" ").map(Number).sort((a,b)=>b-a);
        main(arr,N,Q);
    }
   
  }
  function main(arr,N,Q){
    let sum=0;
    for(let i=0; i<arr.length-1; i++){
        sum=sum+(arr[i]-arr[i+1])*Q
    }
    console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    4 4
    2 1 3 6
    1 5
    3`);
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