function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   
   for(let i=0;i<tc;i++){
let [N,K]=input[line++].trim().split(" ").map(Number);
main(N,K);
   }

  }
  function main(N,K){
    let flag="Not Possible";
    function rec(N){
      if(N===K){
        flag="Possible";
        return;
      }if(N>K){
        return 
      }
      let str=Number(N+""+1);

      return rec(N*2)||rec(str)
    }
    rec(N);
    console.log(flag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    6 242
    3 3
    6 3
    10 30`);
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