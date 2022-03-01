function runProgram(input) {
    // Write code here
   input =input.trim().split("\n");
   let test =+input[0];
   var line =1;

   for(let i =0;i<test ;i++){
     
    let N = +input[line++];
    let X =+input[line++];
    let Y =+input[line++];
    let initial =[];
    let final =[];
  for(let j=0;j<N;j++){
    let [In,Fi]=input[line++].trim().split(" ").map(Number);
    initial.push(In);
    final.push(Fi);
  }
bricks(N,X,Y,initial,final)

   }
  }
  function bricks(N,X,Y,initial,final){
      initial.sort((a,b)=>a-b);
      final.sort((a,b)=>a-b);
      let sum =0;
      for(let i =0;i<N;i++){
          if(initial[i]>final[i]){
             sum=sum+( initial[i]-final[i])*Y;
             
          }
          else{
              sum=sum+(final[i]-initial[i])*X
          }
      }
      console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    3
    6
    4
    3 1
    1 2
    1 2`);
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