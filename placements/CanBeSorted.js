function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number);
   main(N,arr)
  }
  function main(N,arr) {
    let i =0;
    let j=1;
    while(j<N){
        if(arr[i]<=arr[j]){
            i++;
            j++
        }else{
            break;
        }
    }
   
    while(j<N){
        if(arr[j]<=arr[i]){
            i++;
            j++;
        }else{
            break;
        }
    }
    while(j<N){
        if(arr[i]<=arr[j]){
            i++;j++;
        }else{
            break;
        }
    }
    // console.log(arr[i],arr[j]);
    // console.log(i,j);
    if(j===N){
        console.log("YES")
    }else{
        console.log("NO")
    }
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`8
    -2 -3 -7 -9 -1 0 8 9
    
    `);
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