function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        main(arr,N)
    }
   
  }
  const main =(arr,N)=>{
    let sum =0;
    arr.map((el,i)=>{
        sum =sum+el;
    })
    let newarr =[];
   
    console.log(...newarr);

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5
    1 2 3 4 5`);
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