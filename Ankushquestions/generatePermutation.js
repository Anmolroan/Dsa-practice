function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   main(N,arr)
  }
  function main(N,arr) {
    let obj={};
    const rec=(cur)=>{
        if(cur===N){
            obj[arr.join("")]=1;
        }
        for(let i=cur;i<arr.length;i++){
            [arr[i],arr[cur]]=[arr[cur],arr[i]];
            rec(cur+1);
            [arr[i],arr[cur]]=[arr[cur],arr[i]];
        }
    }
    rec(0);
    for(key in obj){
        console.log(key.split("").join(" "))
    }
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