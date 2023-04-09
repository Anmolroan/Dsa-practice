function runProgram(input) {
    // Write code here;
    input =input.trim().split('\n');
    let  tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let [A,B,C,K]=input[line++].trim().split(' ').map(Number);
        main(A,B,C,K)
    }
   
  }
function calculate (A,B,C,x){
    return A*(x**2)+(B*x)+C
}

  function main(A,B,C,K) {
    let i =0;
    let j =K;
    let upperbound = -1
    while(i<=j){
        let mid = i+Math.floor((j-i)/2);
        if(calculate(A,B,C,mid)<K){
            i =mid+1;
        }else if(calculate(A,B,C,mid)>=K){
           
            upperbound=mid
            j =mid-1;
        }
    }
    console.log(upperbound)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    3 2 4 15`);
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