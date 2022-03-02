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
    var result =matrix[0];
    for(let i =1;i<h;i++){
        var temp =[];
        for(let j =0;j<w;j++){
            if(j===0){
                temp.push(matrix[i][j]+Math.max(result[j],result[j+1]))
            }else if(j===w-1){
                temp.push(matrix[i][j]+Math.max(result[j],result[j-1]))
            }else{
                temp.push(matrix[i][j]+Math.max(result[j],result[j-1],result[j+1]))
            }
        }
        result =temp;

    }
    result.sort(function(a,b){return a-b})
    console.log(result[result.length-1]);
    
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
