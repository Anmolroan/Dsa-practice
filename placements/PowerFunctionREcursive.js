function runProgram(input) {
    // Write code here
    let [a,b]= input.trim().split(" ").map(Number);
    main(a,b);
   
  }
  function main(a,b) {
    let i =2;
    let count =0;
    let p=1;
    function rec(count){
        if(count>=b){
            return 1
        }
       p = p**i;
       return rec(count+2);
        
    }
  rec(count)
  console.log(p)
  
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2 4`);
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