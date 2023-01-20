function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc = +input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        main(+input[line++])
    }
   
  }
  function main(J){
    for(let i =1;i<=J;i++ ){
        let N=i;
        if(N%3===0&&N%5===0){
            console.log("FizzBuzz")
        }else if(N%3===0){
            console.log("Fizz")
        }else if(N%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
    
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    1
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