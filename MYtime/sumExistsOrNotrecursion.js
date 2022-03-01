function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    
    var N= +input[0]
    var arr=input[1].trim().split(" ").map(Number)
    var sum=+input[2];
    find(N,arr,sum)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6
    3 34 4 12 5 2
    9`);
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
  function find(N,arr,sum){
      var count=0;
      var newarr=[];
      var curr=0;
      result=(newarr,curr)=>{
          if(newarr.length>0){
              
              var s=0;
              for(let j=0;j<newarr.length;j++){
                s=s+newarr[j]
              }
              if(s==sum){
                  count++;
              }
          }
          if(curr===N){
              return
          }
          for(let i=curr;i<N;i++){
              newarr.push(arr[i])
              result(newarr,i+1);
              newarr.pop()
          }
      }
      result(newarr,curr)
      if(count>=1){
        console.log("yes")
      }
      else{
          console.log('no')
      }
  }