function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i =0;i<tc;i++){
       let N =+input[line++];
       let arr = input[line++].trim().split(" ").map(Number).sort((a,b)=> a-b);
       main(arr,N);
   }
  }
  function main(arr,N) {
    let i =0;
    let j =1;
    let count = 0;
    while(i<N&&j<N){
        if(arr[j]>arr[i]){
            count++;
            i++;
            j++;
        }else{
            j++;
        }
    }
    console.log(count*5)
     
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    3
    1 2 3
    5
    1 2 3 4 5
    4
    1 1 1 1
    5
    1 1 1 2 2`);
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