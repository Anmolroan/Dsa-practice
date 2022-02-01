function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    
    var tests =+input[0];
    var line =1;
    for(var i =0;i<tests;i++) {
      var N =+input[line++];
      var matrix =[];
      for(var j=0;j<N;j++){
        var temp = input[line++].trim().split(" ").map(Number);
        // console.log(temp);
        matrix.push(temp);
      }
      zTraversal(N,matrix);
    }
   
  }
  function zTraversal(N,matrix){
    //write code here;
    console.log(N,matrix);
  
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    3
    2 4 5
    3 4 5
    4 5 6
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