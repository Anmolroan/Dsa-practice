function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr = input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
    let count=0;
    let i = 0;
    let j=i+1;
    let k =j+1;
    while(i<j&&j<k&&i<N-2&&j<N-1&&k<N){
        let sum =arr[i]+arr[j]+arr[k];
        console.log(sum)
        if(sum<0){
            
            if(k<N){
                k++;
            }else {
                if(j<N-1){
                    j++;
                }else{
                    if(i<N-2){i++;
                    
                    }
                }
            }
        }else if(sum===0){
            count++;
          
        }
            
        else{
            break;
        }
    }
   console.log(count);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    -1 -1 -2 3`);
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