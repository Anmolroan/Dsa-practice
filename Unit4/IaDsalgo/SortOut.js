function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr = input[1].trim().split(" ").map(Number);
main(arr,N)
  }
  const main=(arr,N)=>{
      let newarr=[];
      arr.map((el,i)=>{
          newarr.push(i);
      })
      for(let i =0;i<N;i++){
          for(let j=0;j<N-1-i;j++){
              if(arr[j]>arr[j+1]){
                  [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
                  [newarr[j], newarr[j+1]]=[newarr[j+1], newarr[j]];
              }
          }
      }
      console.log(arr,newarr)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    4 5 3 7 1`);
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