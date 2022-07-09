function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc= +input[0];
   let line =1;
   for(let i =0;i<tc;i++){
    const [N,M] =input[line++].trim().split(" ").map(Number);
    main(N,M)
   }
  }
  function main(N,M) {
    let i =0;
    let j = 10**9;
    let flag=1;
    while(i<=j){
        let mid=i+Math.floor((j-i)/2);
        if(Math.floor(mid**N)>M){
            
            j=mid-1;
        }else if(Math.floor(mid**N)<M){
            flag=mid
            i=mid+1;
        }else{
            flag=mid;
            break;
        }
    }
    console.log(flag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    1 51
    6 3
    8 20
    5 25`);
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