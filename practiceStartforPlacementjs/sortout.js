function runProgram(input) {
    // Write code here
    input=input.trim().split("\n") ;
    let N =+input[0] ;
    let arr =input[1].trim().split(" ").map(Number);
    sortOut(N,arr)
   
  }
  function sortOut(N,arr){
      function swap(arr,i,j){
          var temp= arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
      }
      let ans=[]
      for(let i =0;i<N;i++){
ans.push(i);
      }
      for(let i =0;i<N-1;i++){
          for(let j =0;j<N-1-i;j++){
              if(arr[j]>arr[j+1]){
                  swap(arr,j,j+1);
                  swap(ans,j,j+1);
              }
          }
      }
      console.log(ans);
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