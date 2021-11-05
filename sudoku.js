function runProgram(input) {
    // Write code here;
    // console.log(input)
    input =input.trim().split("\n");
    var sudoku=[];
    for(let i =0;i<input.length;i++){
        var temp =input[i].trim().split(" ").map(Number);
        sudoku.push(temp)
    }
    main(sudoku)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`0 4 0 0 0 0 1 7 9 
    0 0 2 0 0 8 0 5 4 
    0 0 6 0 0 5 0 0 8 
    0 8 0 0 7 0 9 1 0 
    0 5 0 0 9 0 0 3 0 
    0 1 9 0 6 0 0 4 0 
    3 0 0 4 0 0 7 0 0 
    5 7 0 1 0 0 2 0 0 
    9 2 8 0 0 0 0 6 0`);
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
  function  main(sudoku){
      check=(r,c,n)=>{
for(let i=0;i<9;i++){
    if(sudoku[r][i]==n){
        return false;
    }
    if(sudoku[i][c]==n){
        return false
    }
}
for(let i =0;i<3;i++){
for(let j =0;j<3;j++){
    if(sudoku[r+i][c+j]==n){
        return false;
    }
}
}
return true;
      }

      var flag=false;
      function solve(r,c){
        if(r==sudoku.length){
            console.log(sudoku);
           
            return ;
        }
        
          if(c==8){
             r=r+1;
             c=0;
          }
          else{
              r=r;
              c=c+1;
          }
        
         if(sudoku[r][c]!=0){
             solve(r,c)
         }else{
             for(let i =1;i<=9;i++){
                if(check(r,c,i)==true){
                    sudoku[r][c]=i;
                    solve(r,c);
                    // sudoku[r][c]=0;
                }
             }
            
         }
         return ;
      }
      solve(0,-1);
      console.log(sudoku)
    //  console.log
  }