function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    main(N,arr);
   
  }
  function main(N,arr){
      let l =0;
      let h =N-1;
      let min =null;
      while(l<=h){
let mid =l +Math.floor((h-l)/2)
          if(arr[mid]<arr[h]){
h=mid-1;
          }else{
              l =mid+1;
              if(min=== null||arr[min]>arr[mid]){
                  min=mid;
              }
          }
      }
      console.log(min)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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