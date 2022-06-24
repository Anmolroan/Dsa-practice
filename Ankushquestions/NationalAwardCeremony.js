function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let line =1;
    let tc =input[0]
    for(let i =0;i<tc;i++){
     let N=+input[line++];
     let arr =input[line++].trim().split(" ").map(Number);
     main(arr,N);
    }
  }
  function main(arr,N) {
    let zero=0;
    let one=0;
    let two=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            zero++;
        }else if(arr[i]===1){
            one++;
        }else{
            two++
        }
    }
    for(let i=0;i<arr.length;i++){
        if(zero!=0){
            arr[i]=0;
            zero--;
        }else if(one!=0){
            arr[i]=1;
            one--;
        }else{
            arr[i]=2;
            two--;
        }
    }
    console.log(arr.join(" "))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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