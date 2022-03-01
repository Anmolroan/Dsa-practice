function runProgram(input) {
    // Write code here
    input =input.trim().split('\n')
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   arr.sort((a,b)=>a-b);
   let query = +input[2];
   let matrix=[];
   for(let i =3;i<input.length;i++){
       let temp=input[i].trim().split(" ").map(Number);
       matrix.push(temp)
   }
   main(matrix,N,arr,query);
  }
  function main(matrix,N,arr,query){
    let result=[];
      for(let i =0;i<query;i++){
          let count =0;
          
         for(let j =0;j<arr.length;j++){
             if(arr[j]>=matrix[i][0]&&arr[j]<=matrix[i][1]){
                 count++;
             }
         }
         result.push(count);
      }
      console.log(result.join(" "));
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
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