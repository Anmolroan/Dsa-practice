function runProgram(input) {
    // Write code here;
    let [i,j,N]=input.trim().split(" ").map(Number);
followTheKnight(i,j,N)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3 3 1`);
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
  function followTheKnight(i,j,N){
      var board=[];
      for(let i =0;i<10;i++){
          var set=[]
          for(let j=0;j<10;j++){
              set[j]=0;

          }
          board[i]=set;
      }
      var count1=0;
      function count(i,j,n){
        if(i<0||i>9||j<0||j>9){
            return;
        }
        if(n==0){
            board[i][j]=1;
            
            return
        }
        count(i+1,j+2,n-1);
        count(i-1,j+2,n-1);
        count(i+1,j-2,n-1);
        count(i-1,j-2,n-1);
        count(i+2,j+1,n-1);
        count(i-2,j-1,n-1);
        count(i+2,j-1,n-1);
        count(i-2,j+1,n-1);
      }
      count(i,j,N);
      var positions=0;
      for(let i =0;i<10;i++){
        
        for(let j=0;j<10;j++){
            if(board[i][j]===1){
                positions++;
            }

        }
        
    }
    console.log(positions)
  }