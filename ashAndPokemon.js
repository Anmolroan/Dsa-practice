function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let test =+input[0];
   let line =1;
   for(let i =0;i<test;i++){
       let N =+input[line++];
       let arr1 =input[line++].trim().split(" ").map(Number);
       let arr2 =input[line++].trim().split(" ").map(Number);
       arr1.sort((a,b)=>a-b);
       arr2.sort((a,b)=>a-b);
       pokemon(arr1,arr2,N)
   }
  }
  function pokemon(arr1,arr2,N) {
      let count =0;
      let i =0;
      let j =0;
      console.log(arr1);
      console.log(arr2);
  while(i<N&&j<N){
if(arr1[i]<arr2[j]){
    i++;
    j++;
}else{
    break;
}
  }
  if(i===N){
      console.log("Ash Finally Wins")
  }else{
      console.log("Train Hard Again")
  }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    9
    462 652 398 52 870 213 291 642 351
    762 498 513 959 896 752 974 788 371`);
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