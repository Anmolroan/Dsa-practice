function runProgram(input) {
    // Write code here
 let n =+input;
let dp =[...Array(n)].map(e=>(Array(n).fill(0)));
console.log(dp);
queen(i,n,dp)
  }
  function queen(i,n,dp ){
      if(n===0){

      }
      for(let i =cur;i<n;i++){
          for(let j =0;i<n;j++){
            dp[i][j]=1;
            queen(i,cur++,n)
          }
          dp[i][j]=0;
      }
  }
  function check(dp,r,c,n){
    for(let i=0;i<n;i++){
        if(dp[r][i]) return true;
    }
    for(let i=0;i<n;i++){
        if(dp[i][c]) return true;
    }
    for(let i=0;i<n;i++){
         for( let j=0;j<n;j++){
             if(((i+j)===(r+c)) && dp[i][j]) return true;
             if(((i-j)===(r-c)) && dp[i][j]) return true;
         }
    }
    return false;
 }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4`);
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