function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let [N,Q]=input[0].trim().split(" ").map(Number);
    let arr =input[1].trim().split(" ").map(Number).sort((a,b) =>a-b);
    let line =2;
    for(let i =0;i<Q;i++){
        let k= +input[line++];
        main(k,arr,N)
    }
   
  }
function main(k,arr,N) {
    let i =0;
    let j =N-1;
    let ans ="NO"
    console.log(k)
    while(i<=j){
        let mid = i+Math.floor((j-i)/2);
        if(arr[mid]>k){
            j =mid-1;
        }else if(arr[mid]<k){
            i =mid+1;
        }else{
           ans ="YES";
           break;
        };
    };
    console.log(ans)
}

  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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