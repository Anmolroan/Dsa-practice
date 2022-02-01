function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    var test = input[0];
    let line =1;
    for(let i =0; i<test; i++){
        let N =+input[line++];
        let matrix =[];
        for(let j =0; j<N; j++){
            let temp=input[line++].trim().split(" ").map(Number);
            matrix.push(temp)
        }
        zTraversal(N,matrix);
    }
   
  }
  function zTraversal(N,matrix){
    //write code here;
    console.log(N,matrix);
  
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9
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