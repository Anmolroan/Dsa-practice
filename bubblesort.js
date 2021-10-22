function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    bubblesort(N,arr)
   
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
  function bubblesort(N,arr){
      function swap(arr,a,b){
          var temp=arr[a];
          arr[a]=arr[b];
          arr[b]=temp;
      }
     for(var i=0;i<N;i++){
         for(j=0;j<N-1-i;j++){
             if(arr[j+1]<arr[j]){
                 swap(arr,j,j+1)
             }
         }
     }
     console.log(arr)
  }