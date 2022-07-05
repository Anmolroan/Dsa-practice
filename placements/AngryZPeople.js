function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N = + input[0];
    let arr = input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
    main(N,arr);
  }
  function main(N,arr) {
    let max =0;
    for(let i=0;i<arr.length;i++) {
        if(i==0) {
            let temp = arr[i+1]-arr[i];
                max = Math.max(max,temp);
                let temp2 = arr[i+2]-arr[i];
                max = Math.max(max,temp2);
        }else{
            if(arr[i+2]){
                let temp = arr[i+2]-arr[i];
                max= Math.max(max,temp);
            }else if(arr[i+1]){
                let temp = arr[i+1]-arr[i];
                max= Math.max(max,temp);
            }
        }
        
    }
    console.log(max)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    5 10 6 8 17`);
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