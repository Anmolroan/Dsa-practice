function runProgram(input) {
    // Write code here
   input =input.trim().split("\n");
   let N = +input[0];
   let cb =input[1].trim().split(" ").map(Number);
   let hb = input[2].trim().split(" ").map(Number);
   masaiAirline(N,cb,hb)
  }
  function masaiAirline(N,cb,hb){
let i =0;
while(i<N){
    if(cb[i]<=15&&hb[i]<=7){
        console.log("Boarding")
    }else{
        console.log("Stop")
    }
    i++;
}
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    12 14 15 6
    8 5 7 4`);
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