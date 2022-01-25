function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [N,K] = input[0].trim().split(" ").map(Number);
    let arr =input[1].trim().split(" ").map(Number);
occur(N,K,arr);
   
  }
  function occur(N,K,arr) {
      let l = 0;
      let h =N-1;
      let upper =-1;
      
      while(l<=h){
          let mid =l +Math.floor((h-l)/2)
          if(arr[mid]<=K){
              if(arr[mid]===K){
                  upper = mid;
              }
              l = mid+1;
          }else{
              
              h =mid-1;
          }
      }
      let low =0;
      let high =N-1;
      let lower =-1;
      while(low<=high){
          let mid =Math.floor(low+((high-low)/2))
          if(arr[mid]===K){
  lower=mid;
  high=mid-1;
          }else if(arr[mid]>K){
  high=mid-1;
          }else{
              low=mid+1;
          }
      }
     
      if(lower===-1||upper==-1){
          console.log(-1)
      }else{
        console.log(upper-lower+1);
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6 3
    2 3 3 3 6 9`);
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