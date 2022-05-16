function runProgram(input) {
    // Write code here
    input=input.trim().split('\n')
   let tc =+input[0];
   let line =1;
   for(let i=0; i<tc; i++){
       let N =+input[line++];
       let matrix =[];
       for(let j =0;j<N;j++){
matrix.push(input[line++].trim());
       }
       main(matrix);
   }
  }
  function main(matrix) {
      let flag1  =true;
      let N = matrix.length
      let i =0;
      let j =N-1;
      while(i<j){
          if(matrix[i]===matrix[j]){
              i++;
              j--;
          }else{
            flag1 = false;
            break;
          }
      }
      let flag2 =true;
      let arr =[];
      for(let i=0;i<N;i++){
          let str ="";
          for(let j =0;j<N;j++){
            str=str+matrix[j][i]
          }
          arr.push(str)
      }
     let l=0;
     let r =arr.length-1;
     while(l<r){
         if(arr[l]===arr[r]){
             l++;
             r--;
         }else{
             flag2=false;
             break;
         }
     }
if(flag1&&flag2){
    console.log("BOTH")
}else if(flag1){
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