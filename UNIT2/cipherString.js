function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc=+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N = +input[line++];
        let str =input[line++].trim();
       cipherString(N,str)
    }
   
  }
  function cipherString(N,str){
      let i = 0;
      let j =0;
      let bag="";
      let count=0;
      while(i<N){
if(str[i]===str[j]){
    j++;
    count++;
    
    
}else{
bag=bag+str[i]+count;
i=j;

count=0;
}
      }
      console.log(bag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    aabcc
    5
    aazaa`);
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