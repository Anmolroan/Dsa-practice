function runProgram(input) {
    // Write code here;
    input =input.trim().split('\n');
    let tc =+input[0];
    let line = 1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        main(N,arr);
    }
   
  }

  function main(N,arr) {
  let obj={};
  for(let i =0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]=obj[arr[i]]+1;
    }else{
        obj[arr[i]]=1;
    }
  }
  for(key in obj){
    if(obj[key]===1){
        console.log(key);
        break;
    }
  }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5
    1 2 1 3 4 4 5 2 3`);
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