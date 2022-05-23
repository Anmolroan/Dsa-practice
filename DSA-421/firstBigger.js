function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
   let tc =+input[2];
   let line =3;
   
  
   for(let i=0;i<tc;i++){
       let q =+input[line++];
     main(q,arr,N)
   }
   
  }
 function main(q,arr,N) {
     let i =0;
     let j =N-1;
     let ans =-1;
     while(i<=j){
         let mid =i+Math.floor((j-i)/2)
         if(arr[mid]>q){
             ans =arr[mid];
             j=mid-1;
         }else{
             i=mid+1;
         }
     }
     console.log(ans)
 }
  
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10
    13 89 81 66 81 63 71 76 73 81
    2
    65
    15
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