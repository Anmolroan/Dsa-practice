function runProgram(input) {
    // Write code here
   input =input.trim().split("\n");
   let line =1;
   let test =input[0];
   for(let i =0;i<test;i++){
       let [h,w]=input[line++].trim().split(" ").map(Number);
       var matrix =[]
       for(let j =0;j<h;j++){
let temp =input[line++].trim().split(" ").map(Number);
matrix.push(temp);
       }
       spring(matrix,h,w)
   }

  }
  function spring(matrix,h,w){
     
      function check(i,j,matrix){
         var arr =[];
        arr[0]=-Infinity;
        let flag;
         if(j!=w-1){
             if(arr[0]<matrix[i][j+1]){
                 arr[0]=matrix[i][j+1];
                 flag="side"
             }
         }
         if(i!=h-1){
             if(arr[0]<matrix[i+1][j]){
                 arr[0]=matrix[i+1][j];
                 flag ="down"
             }
         }
         if(i!==h-1||j!==w-1){
             if(arr[0]<matrix[i+1][j+1]){
                 arr[0]=matrix[i+1][j+1];
                 flag="right"
             }
         }
         if(i!=0||j!=0){
             if(arr[0]<matrix[i+1][j-1]){
                 arr[0]=matrix[i-1][j-1];
                 flag ="left";
             }
         }
         return flag;
      }
      console.log(check(0,0,matrix));
      var i =0;
      var j=0;
      var out =0;
      while(i<=h||j<w){
if(check(i,j,matrix)=="down"){
    i=i+1;
    out=out+matrix[i][j]

}
if(check(i,j,matrix)=="side"){
    j=j+1;
    out =out+matrix[i][j]
}
if(check(i,j,matrix)=="left"){
    i=i+1;
    j=j-1;
    out=out+matrix[i][j]
}
if(check(i,j,matrix)=="right"){
    i=i+1
    j=j+1
    out=out+matrix[i][j];
}
      }
      console.log(out)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1`);
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