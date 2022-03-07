function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i=0; i<tc; i++){
let [N,K]=input[line++].trim().split(' ').map(Number);
let arr =input[line++].trim().split(' ').map(Number);
diffrenceofK(N,K,arr);
   }
  }
  function diffrenceofK(N,K,arr){
      let i =0;
      let j =1;
      let flag = "No";
      while(i<N&&j<N){
let diff = arr[j]-arr[i];


if(diff===K){
    flag = "Yes";
    break;
}
else if(diff<K){
    j++;
}else{
    i++;
    if(i===j){
       
        j++;
    }
}
      }
      console.log(flag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5 5
    -10 2 4 8 9 `);
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