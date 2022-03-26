function runProgram(input) {
    // Write code here
    N =+input;
    Strange(N);
   
  }
  function Strange(N){
      let arr =[];
      for(let i =1;i<=N;i++){
arr.push(i)
      };
      
      let cur =0;
      let newarr =[];
      let mo ={};
      function rec(cur,newarr){
          if(newarr.length>=0){
              
             mo[newarr]=1;
             mo[1]=1;
             mo[[1,2,4]]=1;

          }
          if(cur===N){
              return;
          }
          for(let i =cur;i<arr.length;i++){
            //  Do
            newarr.push(arr[i]);
            // recurr
            rec(i+1,newarr);
            //Undo
            newarr.pop();
          }
      }
      rec(cur,newarr);
      console.log(mo)
    }
      
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3`);
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