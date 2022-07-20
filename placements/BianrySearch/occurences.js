function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number).sort((a, b) =>a-b)
   binary(N,k,arr)
  }
 function binary(N,k,arr) {
    let i =0;
    let j =N-1;
    let flag=-1;
    let upperbound=-1;
    while(i<=j){
       let mid =i+Math.floor((j-i)/2);
       if(arr[mid]<=k){
        if(arr[mid]===k){
            upperbound=mid;
        }
        i=mid+1;
       }else{
       
        j=mid-1;
       }
    }
    let lowerbound=-1;
    let l =0;
    let r=N-1;
    while(l<=r){
        let mid =l+Math.floor((r-l)/2);
        if(arr[mid]<k){
            l=mid+1;
        }else{
            if(arr[mid]===k){
                lowerbound=mid;
            }
            r=mid-1;
        }
    }

if(upperbound===-1||lowerbound==-1){
    console.log(-1)
}else{
    console.log(upperbound-lowerbound+1)
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