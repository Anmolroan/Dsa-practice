function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr1 =input[1].trim().split(" ").map(Number);
   let arr2 =input[2].trim().split(" ").map(Number);
   main(N,arr1,arr2)
  }
  function main(N,arr1,arr2) {
    let i =0;
    let count=0;
    while(arr1.length!==i){
        if(arr1[i]==arr2[i]){
            arr1.shift();
            arr2.shift();
            count++
        }else{
            arr1.push(arr1.shift());
            count++;
        }
    }
    console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    5 4 2 3 1
    5 2 1 4 3`);
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