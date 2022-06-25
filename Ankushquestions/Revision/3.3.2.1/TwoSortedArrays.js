function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i = 0;i<test;i++){
      var N=+input[line++];
      var arr1=input[line++].trim().split(" ").map(Number);
      var arr2=input[line++].trim().split(" ").map(Number)
      find(N,arr1,arr2)
    }
   
  }
  function find(N,arr1,arr2) {
    let i=0;
    let j =N-1;
    let count=0;
    while(i<N&&j>=0){
        if(arr1[i]==arr2[j]){
            count++;
            i++;
            j--;
        }
        else if(arr1[i]>arr2[j]){
            j--;
        }else{
            i++;
        }
    }
    console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    8
    1 2 3 5 8 8 9 9
    8 8 6 5 3 2 1 1
    9
    2 3 3 3 7 7 9 9 9
    9 9 9 8 6 5 4 3 1
    2
    4 7
    4 2
    3
    3 7 7
    8 5 1
    4
    2 7 7 8
    9 7 6 3`);
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