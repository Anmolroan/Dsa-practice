function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let tc =+input[0];
    let line =1;
   for(let k=0;k<tc;k++){
       let N =+input[line++];
       let arr =input[line++].trim().split(" ").map(Number);
       
       let count =0;
       let top=0;
       let bottom=N-1;
       let left =0;
       let right = N-1;
       let matrix=[];
       for(let j =0;j<N;j++){
           let temp =new Array(N).fill(0);
           matrix.push(temp);
       }
     
       while(count<N*N){
           for(let i =left;i<=right&&count<N*N;i++){
            matrix[top][i]=arr[count++]
           }
           top++;
           for(let i =top;i<=bottom&&count<N*N; i++){
               matrix[i][right]=arr[count++]
           }
           right--;
           for(let i =right;i>=left&&count<N*N;i--){
               matrix[bottom][i]=arr[count++]
           }
           bottom--;
           for(let i =bottom;i>=top&&count<N*N;i--){
               matrix[i][left]=arr[count++]
       }
       left++
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
    runProgram(`1
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