function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let test =+input[0];
    let line =1;
    for(let i =0;i<test;i++){
        let [N,C]=input[line++].trim().split(" ").map(Number);
        let arr =input[line++].trim().split(" ").map(Number);
      
        main(N,C,arr);
    }
   
  }
  function main(N,C,arr){
      let ans =[];
      arr.sort((a,b) =>b-a);
ans.push(1)
      for(let i =1;i<N;i++){
if(arr[i-1]===arr[i]){
ans.push(ans[ans.length-1])
}else{
    ans.push(i+1)
}
      }
    //   console.log(ans);
      let count=0;
      for(let i =0;i<ans.length;i++){
if(ans[i]<=C){
    count++;
}
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5 3
    2 2 2 2 1`);
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