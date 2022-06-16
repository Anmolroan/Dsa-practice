function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N =+input[0];
    let line =1;
    let S =[]
    for(let i=0; i<N; i++) {
         S.push(+input[line++])
    }
    S.sort((a,b)=>a-b)
    let Q =+input[line++];
   let piush=[];
   for(let i=0; i<Q; i++) {
piush.push(+input[line++])
   }
   main(piush,S,N,Q)
  }
  function main(piush,S,N,Q) {
for(let l =0;l<Q;l++){
    let K =piush[l];
    let i =0;
    let j =N-1;
    let ans =-1;
    while(i<=j){
        let mid =i+Math.floor((j-i)/2);
        if(S[mid]<=K){
            i=mid+1;
        }
        else{
            ans =mid;
            j=mid-1;
        }
    }
   
}
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
    2`);
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