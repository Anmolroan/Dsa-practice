
  function runProgram(input) {
      // Write code here
      input=input.trim().split("\n");
      let N=+input[0];
      let arr=input[1].trim().split(" ").map(Number);
      Neelam(arr,N);
    }
    function Neelam(arr,N){
        var sum =0;
        var min =null;
        for(let i=0;i<arr.length;i++){
            if(min=== null||min>arr[i]){
                min = arr[i];
            }
           
            sum=sum+min;
        }
        console.log(sum);
    }
    if (process.env.USER=== "anmolkumar") {
      runProgram(`5
      4 7 8 3 4`);
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