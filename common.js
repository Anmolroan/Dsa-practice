function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(i=0;i<test;i++){
        N=+input[line++];
        arr1=input[line++].trim().split(" ").map(Number)
        arr2=input[line++].trim().split(" ").map(Number)
        findCommon(N,arr1,arr2)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
  function findCommon(N,arr1,arr2){
      var count=0;
      var left=0;
      var right=N-1;
     arr2.sort((a,b)=>a-b)
     var obj={};
     for(var i=0;i<N;i++){
        var char=arr1[i];
        if(obj[char]==undefined){
            obj[char]=1;
        }
        else{
            obj[char]=obj[char]+1;
        }
         
     }
     var obj1={};
     for(var i=0;i<N;i++){
        var char=arr2[i];
        if(obj1[char]==undefined){
            obj1[char]=1;
        }
        else{
            obj1[char]=obj1[char]+1;
        }
         
     }
     for(key in obj){
         for(key1 in obj1){
             if(key==key1){
                 count++;
             }
         }
     }
   console.log(count)
  }