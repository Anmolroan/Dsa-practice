function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i =0;i<tc;i++){
       let [N,M] =input[line++].trim().split(" ").map(Number);
       let mat =[];
       for(let j =0;j<N;j++){
        let arr = input[line++].trim().split("")
        mat.push(arr);
       }
      main(mat,N,M);
   }
  }
  function main(mat,N,M){
      let i =0;
      let j =0;
      let count =0;
      while(i<N&&j<M){
          if(mat[i][j]==="R"){
              mat[i][j] ="X"
              j=j+1;
          }else if(mat[i][j]==="L"){
            mat[i][j] ="X"
              j=j-1;
          }else if(mat[i][j]==="U"){
            mat[i][j] ="X"
              i=i-1;
          }else if(mat[i][j]==="D"){
            mat[i][j] ="X"
              i=i+1;
          }
          count++;
          if(mat[i][j]==="X"||i===-1||i===N||j===-1||j===M){
              break;
          }
      }
      console.log(count)

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    3 4
    RRDR
    LLUD
    LLLL
    `);
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