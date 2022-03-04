function runProgram(input) {
    // Write code here
   input =input.trim().split("\n");
   let [N,M]=input[0].trim().split(" ").map(Number);
   var matrix =[];
   var line =1;
   for(let i =0;i<N;i++) {
var temp =input[line++].trim().split("");
matrix.push(temp);
   }
  Saba(matrix,N,M);
  }
  function Saba(matrix,N,M) {
      let count =0;
      for(let i =0;i<N;i++){
// for rows
for(let j =0;j<=M-4;j++){
    var temp ="";
for(let k =0;k<4;k++){
temp =temp+matrix[i][j+k]
}
if(temp=="saba"){
    count++;
}
}
        // for columns
        if(i<=N-4){
        for(let j =0;j<M;j++){
            var temp ="";
           for(let k =0;k<4;k++){
        temp=temp+matrix[i+k][j];
           };
           if(temp=="saba"){
               count++;
           }
        }
        // for left to right diagonal
        for(let j=0;j<=M-4;j++){
            var temp ="";
            for(let k =0;k<4;k++){
                temp=temp+matrix[i+k][j+k];
            }
            if(temp=="saba"){
                count++;
            }
        }
    }
       
        
      }
      // for right to left 
      for(let i =N-1;i>=3;i--){
          for(let j =0;j<=M-4;j++){
              var temp ="";
            for(let k =0;k<4;k++){
                temp=temp+matrix[i-k][j+k];
            }
            if(temp=="saba"){
                count++;
            }
          }
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs`);
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