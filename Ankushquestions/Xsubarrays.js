function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let line =1;
   let tc =input[0]
   for(let i =0;i<tc;i++){
    let [N,K,X]=input[line++].trim().split(' ').map(Number);
    let arr =input[line++].trim().split(' ').map(Number);
    main(arr,N,K,X);
   }
  }
  function main(arr,N,K,X){
    let count=0;
   for(let i=0;i<arr.length;i++){
    let newarr = [];
    for(let j=i;j<i+X;j++){
        if(arr[j]<=K){
            newarr.push(arr[j]);
        }
    }
   
    if(newarr.length===X){
        count++;
    }
   }
   console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10
    9 8 4
    9 9 12 9 11 10 1 6 4
    12 2 6
    2 1 2 1 2 2 2 1 1 2 1 1
    6 4 3
    6 11 9 11 5 4
    16 22 13
    4 11 8 3 10 7 6 8 2 2 1 9 7 8 1 2
    5 1 2
    2 1 1 1 1
    9 1 4
    4 2 1 3 1 2 3 4 3
    12 3 1
    3 8 7 17 15 13 13 19 7 17 10 15
    17 4 8
    11 9 16 6 16 9 11 8 4 16 6 14 14 4 17 8 18
    14 13 4
    3 9 7 6 6 2 10 4 11 7 10 9 8 6
    6 28 3
    5 6 16 4 4 14
    `);
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