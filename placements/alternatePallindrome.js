function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let line =1;
    let tc =input[0]
    for(let i =0;i<tc;i++){
     let N=+input[line++];
     let str =input[line++].trim();
     main(str,N);
    }
   
  }
  function main(str,N){
    
    let obj={};
    for(let i=0;i<N;i++){
        if(!obj[str[i]]){
            obj[str[i]]=1;
        }
        else{
            obj[str[i]]=obj[str[i]]+1
        }
    }
    let count =0;
    for(key in obj){
        if(obj[key]%2!=0){
            count++;
        }
    }
    if(count>1){
        console.log("No")
    }else{
        console.log("Yes")
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    1
    a
    3
    aab
    4
    abbb`);
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