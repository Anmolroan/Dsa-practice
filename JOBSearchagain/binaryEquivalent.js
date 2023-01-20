function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc = +input[0];
    let line =1;
    let arr =[];
    for(let i =0;i<tc;i++){
        main(+input[line++])
    }
   
  }
  function main (N){
    let arr =[];
    function rec(N){
        if(N===1){
            arr.push(1);
            return arr ;
        }
        let r = N%2;
        let l=(N-r)/2;
        arr.push(r);
        rec(l)

    }
    rec(N)
    console.log(arr.reverse().join(""));
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    15
    128`);
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