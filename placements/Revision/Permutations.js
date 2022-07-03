function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var N=+input[0]
    var arr=input[1].trim().split(" ").map(Number)
   find(N,arr)
   
  }
  function find(N,arr){
    let rec =(cur)=>{
        if(cur===N){
            console.log(arr)
        }
        for( let i = cur; i < arr.length; i++ ){
            [arr[i],arr[cur]]=[arr[cur],arr[i]];
            rec(cur+1);
            [arr[i],arr[cur]]=[arr[cur],arr[i]];
        }
    }
    rec(0)
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