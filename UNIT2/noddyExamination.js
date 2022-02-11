function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let [N,K]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   noddyExamination(N,K,arr);
  }
  function noddyExamination(N,K,arr){
      let count =0;
      let br=0;
      for(let i=0;i<arr.length;i++){
        if(arr[i]<=K){
            count++;
           
        }else{
            br++;
        }
          if(br===2){
             break;
          }
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`7 6
    4 3 7 6 7 2 2
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