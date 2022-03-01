function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    var N=+input[0];

    
    
    subs(N)
   
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
  function subs(N){
    var arr=[];
    for(let i =1;i<=N;i++){
      arr.push(i)
    }
   var newarr=[];
   var curr=0;

    function find(arr,newarr,curr,N){
      if(newarr.length>=0){
        console.log(newarr.join(" "))
      }
      if(curr==arr.length){
        return;
      }
      for(let i =curr;i<arr.length;i++){
        newarr.push(arr[i])
        find(arr,newarr,i+1,N)
        
        newarr.pop()
      }
    }
    find(arr,newarr,curr,arr.length)

  }