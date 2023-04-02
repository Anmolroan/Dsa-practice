function runProgram(input) {
    // Write code here
    input =input.trim();
    main(input);
   
  }

  function main(input) {
    let count =0;
    for(let i =0;i<input.length;i++) {
        let subs=""
        for(let j =i;j<input.length;j++) {
            subs=subs+input[j];
            if(subs[0]===subs[subs.length-1]){
                count++;
            }
           
        }
    }
    console.log(count);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`abcab`);
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