function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let [N,K] = input[0].trim().split(" ").map(Number);
   let arr =input[1].trim().split(" ").map(Number);
   main(N,K,arr);
  }
function main(N,K,arr) {
    var i =0;
    var  j =N-1;
   var lowerbound =-1;
    while(i<=j){
       let mid =i+Math.floor((j-i)/2);
       if(arr[mid]<K){
        i =mid+1;
       }else if(arr[mid]>=K){
        if(arr[mid]===K){
            lowerbound = mid
        }
        j =mid-1;
       }
    };
    var i =0;
    var  j =N-1;
   var upperbound =-1;
    while(i<=j){
       let mid =i+Math.floor((j-i)/2);
       if(arr[mid]<=K){
        if(arr[mid]===K){
           upperbound = mid;
        }
        i =mid+1;
       }else if(arr[mid]>K){
        j =mid-1;
       }
    };
    if(upperbound===-1 ||lowerbound ===-1){
        console.log(-1)
    }else if(upperbound===lowerbound){
        console.log(1)
    }else{
        console.log((upperbound-lowerbound)+1,upperbound,lowerbound)
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