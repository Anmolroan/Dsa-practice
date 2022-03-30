function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let tc =input[0];
    let line = 1;
   for(let  i = 0;i < tc ;i++){
    let [N,K]=input[line++].trim().split(" ").map(Number);
    let arr =input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
    suchPairReturns(N,K,arr)
   }
   
  }
function  suchPairReturns(N,K,arr){
    let i =0;
    let j =N -1;
    let flag =-1;
    while(i<j){
        let sum = arr[i] + arr[j];
        if(sum<K){
            i++;
        }
        else if(sum>K){
            j--;
        }else{
        flag =1;
        break;
        }
    }
    console.log(flag)
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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