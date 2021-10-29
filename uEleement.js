function runProgram(input) {
    // Write code here;
    var input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0;i<test;i++){
        var N=+input[line++];
        var arr=input[line++].trim().split(" ").map(Number);
       find(N,arr)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
    var obj={};
    for(let i =0;i<N;i++){
        var char=arr[i];
        if(obj[char]===undefined){
            obj[char]=1;
        }
        else{
            obj[char]=obj[char]+1;
        }
    }
    
    for(key in obj){
        if(obj[key]==1){
            console.log(key);
            break;
        }
    }
  }