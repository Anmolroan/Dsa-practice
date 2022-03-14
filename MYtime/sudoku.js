function runProgram(input) {
    // Write code here;
    // console.log(input)
    input =input.trim().split("\n");
    var sudoku=[];
    for(let i =0;i<input.length;i++){
        var temp =input[i].trim().split(" ").map(Number);
        sudoku.push(temp);

    }
    main(sudoku);
  
   
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
var r=r-r%3;
var c=c-c%3
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
      var arr=[];
      function solve(r,c){
        if(r==8&&c==9){
           flag =true;
           
          //  console.log(sudoku);
           for(let i =0;i<9;i++){
             var temp=sudoku[i].join(" ");
             console.log(temp);
             arr.push(temp)
           }
            return 
        }
        if(c==sudoku.length){
            r=r+1;
            c=0;
        }
         
        
         if(sudoku[r][c]!=0){
              solve(r,c+1)
         }
            else{
              for(let i =1;i<10;i++){
                if(check(r,c,i)==true){
                    sudoku[r][c]=i;
                    solve(r,c+1)
                      sudoku[r][c]=0;
                    }
                    
                    }
            } 
                   

                  
                   
                
             
            
         
         return 
      }
      solve(0,0);
      if(flag==true){
        
        for(let i =0;i<arr.length;i++){
          console.log(arr[i])
        }
      }
      else{
        console.log(-1)
      }
       
    
      
  }