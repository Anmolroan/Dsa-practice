function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    selectionsort(N,arr)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    3 5 0 9 8`);
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
  function selectionsort(N,arr){
      function swap(arr,a,b){
          var temp=arr[a];
          arr[a]=arr[b];
          arr[b]=temp;
      }
      for(var i=0;i<N-1;i++){
          for(j=i+1;j<N;j++){
              if(arr[j]<arr[i]){
                  swap(arr,j,i)
              }
          }
      }
      console.log(arr)
  }