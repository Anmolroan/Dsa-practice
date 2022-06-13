function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        let l =0;
        let matrix =[]
        for(let r =0;r<N;r++){
            let temp =[]
            for(let c =0;c<N;c++){
               temp.push(arr[l++])
            }
            matrix.push(temp)
        }
        main(matrix,N)
    }
   
  }
  function main(matrix,N) {
      let sum = 0;
      for(let i=0;i<matrix.length;i++){
         
          sum=sum+matrix[i][i]
      }
     
      for(let i=0;i<matrix.length;i++){
        // console.log(matrix[i][i])
        sum=sum+matrix[N-i-1][i]
      }
      if(N%2!=0){
          let n =Math.floor(N/2)
          sum =sum-matrix[n][n]
      }
      console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    1
    1
    2
    1 2 3 4
    3
    1 2 3 4 5 6 7 8 9
    4
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10`);
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