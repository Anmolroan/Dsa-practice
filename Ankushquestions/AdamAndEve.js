function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
     let arr=input[line++].trim().split("");
     main(arr,N);
    }
  }
  function main(arr,N){
    let count = 0;
    let eve=3
    let dp=[]
   let rec=(cur,newarr)=>{
    if(dp[cur]){
        return dp[cur];
    }
    if(newarr.length===eve){
     
      if(newarr.join("")==="EVE"){
        count++;
      }
        
    }
    if(cur===N){
        return;
    }
    for(let i=cur;i<arr.length;i++){
        newarr.push(arr[i]);
      dp[i]=rec(i+1,newarr);
        newarr.pop();
    }
   }
   rec(0,[]);
   console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3
    EVE
    4
    EVEE`);
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