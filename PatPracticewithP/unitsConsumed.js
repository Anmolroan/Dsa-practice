function runProgram(input) {
    // Write code here
    var bill=+input.trim();
    console.log(bill);
bill=bill-80;
var unit=0;
if(bill>0&&bill<=150){
unit=unit+bill/3;
bill=bill-bill;
}else if(bill>150){
    unit=unit+50;
    bill =bill-150;
}
if(bill>0&&bill<=500){
    unit=unit+bill/5;
bill=bill-bill;
}else if(bill>500){
    unit=unit+100;
    bill=bill-500;
}
if(bill>0){
    unit=unit+bill/10;
    bill=bill-bill;
}
   console.log(unit)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`230`);
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