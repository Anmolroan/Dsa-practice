function runProgram(input) {
    // Write code here
    input=input.trim().split('\n')
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        let N =+input[line++];
        let matrix =[];
        for(let j =0;j<N;j++){
 matrix.push(input[line++].trim().split(""));
        }
        main(matrix);
    }
   
  }
  function main(matrix) {
  
    let N =matrix.length
    let flag =true;
    for(let i=0;i<Math.floor(matrix.length/2);i++){
      let str1 ="";
      let str2 =""
        for(let j=0;j<matrix.length;j++){
          str1 +=matrix[i][j];
          str2+=matrix[N-1-i][j]
        }
        if(str1!==str2){
            flag = false;
        }
       
    }
    let flag2=true;
    for(let i=0;i<Math.floor(N/2);i++){
       let str1="";
       let str2="";
         for(let j=0;j<N;j++){
            str1+=matrix[j][i];
            str2+=matrix[j][N-1-i];
         }
         
         if(str1!==str2){
            flag2=false;
         }
          
     }
    
    if(flag&&flag2){
        console.log("BOTH")
    }else if(flag){
        console.log("HORIZONTAL")
    }else if(flag2){
        console.log("VERTICAL")
    }else{
        console.log("NO")
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`);
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