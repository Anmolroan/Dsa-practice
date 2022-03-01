function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number)
   let k=+input[2];
   sumExistsOrNot(N,arr,k)
  }
  function sumExistsOrNot(N,arr,k){
      var count =0;
      var newarr=[];
      var curr =0;
      function find(arr,newarr,curr){
          if(newarr.length>0){
              var sum=0;
              for(let i =0;i<newarr.length;i++){
                  sum=sum+newarr[i]
              }
              if(sum===k){
                  count++;
              }
          }
          if(curr===arr.length){
              return 
          }
          for(let i =curr;i<arr.length;i++){
              newarr.push(arr[i]);
              find(arr,newarr,i+1);
              newarr.pop();
          }
      }
      find(arr,newarr,curr);
      if(count>0){
          console.log("yes")
      }else{
          console.log("no")
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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