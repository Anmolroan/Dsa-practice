function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    taxes(N,arr)

   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    1 3 1 2`);
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
  function taxes(N,arr){
      function swap(i,j){
          var temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
      }
      for(let i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                swap(j,j+1)
            }
        }
      }
      var n=Math.floor(arr.length/2);
      var tax=0;
      for(var i=0;i<n;i++){
        tax=tax+arr[arr.length-1-i]
      }
      console.log(tax)
  }