function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let [n,k] =input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number).sort((a,b) =>a-b);
    main(n,k,arr);
   
  }
function main(n,k,arr) {
    let i =0;
    let j =n-1;
    let ans =0
    while(i<=j){
        let mid = i+Math.floor((j-i)/2);
        if(arr[mid]>k){
            j =mid;
        }else if(arr[mid]<k){
            i =mid+1;
        }else{
            console.log(mid);
           ans =1;
           break;
        };
        if(i===j){
            break;
        }
    }
    console.log(ans)
}

  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 4
    2 -2 0 3 1`);
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