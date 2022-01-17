function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [n,m,p]=input[0].trim().split(" ").map(Number);
    let matrix =[];
    let line =1;
    for(let i =0;i<n;i++){
let temp =input[line++].trim().split(" ").map(Number);
matrix.push(temp);
    }
twodSum(n,m,p,matrix);
  }
  function twodSum(n,m,p,matrix){
      let count = 0;
      for(let i = 0; i < n; i++){
          for(let j = 0; j <= m-3; j++){
              
                

              
              var sum =1;
              for(let k =0;k<3;k++){
                  sum =sum*matrix[i][j+k];
              }
              if(sum ===p){
                  count++;
              }
          }
          
      }

    //   for column
    for(let c = 0; c < m; c++){
        for(let r = 0; r <= n-3; r++){
            
              

            
            var sum =1;
            for(let k =0;k<3;k++){
                sum =sum*matrix[r+k][c];
            }
            if(sum ===p){
                count++;
            }
        }
        
    }
// for first diagonal 
    for(let r = 0; r <= n-3; r++){
        var sum =1;
        for(let i =0;i<3;i++){
            sum =sum*matrix[r+i][r+i]
        }
if(sum===p){
    count++;
}

    }
    for(let r =n-1;r>=2;r--){
        for(let c =0;c<=m-3;c++){
            var sum =1;
            for(let i =0;i<3;i++){
                sum=sum*matrix[r-i][c+i]
            }
            if(sum ===p){
                count++;
            }
        }
    }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 4 16
    1 2 1 8
    2 2 8 6
    8 1 2 5
    2 5 8 6`);
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