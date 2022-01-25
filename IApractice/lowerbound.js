function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N,K ]=input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    main(N,arr,K);
   
  }
function main(N,arr,K){
    let l =0;
    let h =N-1;
    let ans =-1;
    while(l<h){
        let mid =Math.floor(l+((h-l)/2))
        if(arr[mid]===K){
ans=mid;
h=mid-1;
        }else if(arr[mid]>K){
h=mid-1;
        }else{
            l=mid+1;
        }
    }
    console.log(ans);
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 3
    1 1 2 2 5`);
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