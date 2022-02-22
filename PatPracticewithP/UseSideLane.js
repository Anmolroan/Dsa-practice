function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
  
    let i=0;;
   
    while(i<input.length-1){
        let N =+input[i];
        i++;
          let arr =input[i].trim().split(" ").map(Number);
   i++;
    UseSideLane(N,arr)
   
    }
    
   
  }
  function UseSideLane(N,arr){
//       let s =[];
//       let q =[];
//       for(let i=0;i<N-1;i++){
// if(arr[i]>arr[i+1]){
// q.unshift(arr[i]);
// }else{
//     s.push(arr[i]);
// }
//       }
//       console.log(q,s);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    2 1 3
    4
    4 2 1 3
    0`);
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