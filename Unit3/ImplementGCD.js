function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line=1;
    for(let i =0;i<tc;i++){
        let [a,b]=input[line++].trim().split(" ").map(Number);
        gcd(a,b)
    }
   
  }
  function gcd(a,b){
     for(let i =Math.min(a,b);i>=1;i--){
         if(a%i===0&&b%i===0){
console.log(i);
break;
         }
     }


     function rec(a,b,i){
if(i===1){
    return 1;
}
if(a%i===0&&b%i===0){
    return i;
}
 return rec(a,b,i-1);
     }

      console.log(rec(a,b,Math.min(a,b)))
    
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    6 9
    2 25`);
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
