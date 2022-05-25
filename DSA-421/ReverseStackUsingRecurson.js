function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let s =[];
   for(let i=0;i<input.length;i++)
   {
       if(+input[i]===-1){
           break;
       }else{
           s.push(+input[i]);
       }
   }
   main(s);
  }
  function main(s) {
      let i =s.length-1;
      let stack = [];
      const rec =(i)=>{
          if(i==-1){
        return 
        }else{
            stack.push(s[i]);
            rec(i-1)
        }
      }
      rec(i)
      console.log(stack);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    2
    3
    4
    -1`);
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