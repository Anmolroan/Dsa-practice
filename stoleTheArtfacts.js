function runProgram(input) {
    // Write code here;
    input =input.trim().split("\n")
    var test =input[0];
    let line =1;
    for(let i =0;i<test;i++){
        var [S,N]=input[line++].trim().split(" ").map(Number);
        let value=[];
        let weight=[];
        for(let j =0;j<N;j++){
            let [w,v]=input[line++].trim().split(" ").map(Number);
            value.push(v);
            weight.push(w);
        }
        main(weight,value,S,N)
    }
  
   
  }
  function main(weight,value,S,N){;
   let matrix =[];
   for(let i=0;i<=S;i++){
     let temp =[];
     for(let j =0;j<=N;j++){
temp.push(-1)
     }
matrix.push(temp)
   }
  function stole(S,N){
    if(matrix[S][N]!=-1){
      return matrix[S][N]
    }
if(S==0||N==0){
  return 0;
}
if(weight[N-1]<=S){
  return matrix[S][N]= Math.max(value[N-1]+stole(S-weight[N-1],N-1),stole(S,N-1))
}
else if(weight[N-1]>S){
  return matrix[S][N]= stole(S,N-1)
}
  }
  console.log(stole(S,N));

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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