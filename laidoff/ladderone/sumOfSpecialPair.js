function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N =+input[0];
    let arr = input[1].trim().split(" ").map(Number);
    main(N,arr)
   
  }
  function main(N,arr) {
    let sum =0;
    for(let i=0;i<arr.length;i++) {
        for(let j =i+1;j<arr.length;j++) {
            if(identifyPrime(j-i)){
                sum =sum+Math.abs(arr[j]-arr[i]);
            }
        }
    }
    console.log(sum);
  }


  function identifyPrime(num) {
    // Write code here
    let count =0;
    for(let i=1;i<=num/2;i++){
        if(num%i===0){
            count++;
        }
    }
    if(count===1){
       return true
    }else{
        return false
    }
}


  if (process.env.USER=== "anmolkumar") {
    runProgram(`6
    1 2 3 5 7 12`);
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