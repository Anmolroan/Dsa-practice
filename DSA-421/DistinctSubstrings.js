function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i=0;i<tc;i++){
       let N =+input[line++];
       let str =input[line++].trim();
      main(str,N);
   }
  }
  function main(str,N){
      let obj={};
      let count=0;
     for(let i =0;i<N;i++){
         let temp ="";
         for(let j= i;j<N;j++){
            temp =temp+str[j];
            if(!obj[temp]){
                obj[temp]=1;
                count++;
            }
         }
        
     }
      
      console.log(count)
     
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    abcde
    3
    aaa`);
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