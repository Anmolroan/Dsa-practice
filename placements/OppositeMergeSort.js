function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
       var N =+input[0];
        var arr=input[1].trim().split(" ").map(Number);
    main(N,arr)
   
  }
  function main(N,arr) {
    function mergeSort(l,r){
        if(l<r){
            var mid=Math.floor((l+r)/2);
            mergeSort(l,mid);
            mergeSort(mid+1,r);
            merge(l,mid,r,arr);
        }else{
            return 
        }
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    2 3 1 4 5`);
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
 
   