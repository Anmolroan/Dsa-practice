function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
     let arr=input[line++].trim().split("");
     main(arr,N);
    }
  }
  function main(arr,N){
    let e=0;
    let v=0;
    let ebv=0;
    let count=0;
for(let i = 0;i<arr.length;i++){
if(arr[i]==="E"){
    count=count+ebv;
    e++;
}else if(arr[i]==="V"){
  
    ebv=ebv+e;
    
}

}  
console.log(count)

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    4
    EVVVEE`);
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

