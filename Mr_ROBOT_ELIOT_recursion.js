function runProgram(input) {
    // Write code here
    var input=input.trim().split("\n");
    var test=+input[0]
    var line=1;
    console.log(test)
    for(let i =0;i<test;i++){
        var N=+input[line++]
        var str=input[line++].trim()
        find(N,str)
    }

   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk`);
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
  function  find(N,str){
      var ans=""
      code=(left,right,ans)=>{
          if(left>right){
              return ans
          }
          var mid=Math.floor((left+right)/2)
          ans= ans+str[mid]+code(left,mid-1,ans)+code(mid+1,right,ans)
          return ans
      }
      console.log(code(0,N-1,ans))
  }