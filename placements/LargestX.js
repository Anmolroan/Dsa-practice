function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let line =1;
    let tc =input[0]
    for(let i =0;i<tc;i++){
     let N=+input[line++]
     let arr =input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
     main(arr,N);
    }
  }
  function main(arr,N) {
    let max=-1;
    let i =0;
    let j =N-1;
   while(i<j){
    if((-(arr[i]))==arr[j]){
        max=arr[j];
        break;
    }else if(arr[j]>(-(arr[i]))){
        j--;
    }else{
        i++;
    }
   }
    console.log(max);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    2 1 -1 -2 3
    5
    -3 2 -4 4 -2`);
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