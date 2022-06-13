function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let arr = input[line++].trim().split(" ").map(Number);
        main(arr);
    }
   
  }
  function main(arr) {
     
    //   a + b >   c| a + c > b |b + c > a 
    if(arr[0]+arr[1]>arr[2]&&arr[0]+arr[2]>arr[1]&&arr[1]+arr[2]>arr[0]){
        console.log("Yes")
    }else{
        console.log("No")
    }

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
    `);
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