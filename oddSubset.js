function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    find(N,arr)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    1 2 3`);
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
  function find(N,arr){
      var curr=0;
      var newarr=[];
      var count=0;
      function subset(curr,newarr){
          if(newarr.length>0){
              var sum=0;
              for(let j=0;j<newarr.length;j++){
                  sum=sum+newarr[j]
              }
              if(sum%2!=0){
                  count++;
              }
             
          }
          if(curr==N){
              return
          }
          for(let i =curr;i<N;i++){
              newarr.push(arr[i]);
              subset(i+1,newarr);
              newarr.pop()
          }
      }
      subset(curr,newarr);
      console.log(count)
  }