function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i = 0;i<tc;i++){
        let N =+input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        nearestSmaller(N,arr)
    }
   
  }
  function nearestSmaller(N,arr){
      var left =[];
      var top =-1;
      var stack =[];
      for(let i =0;i<N;i++){
          while(stack.length>0&&arr[stack[top]]>=arr[i]){
              stack.pop();
              top--;
          }
          if(stack.length>0&&arr[stack[top]]<arr[i]){
              left.push(stack[top]);
      }else{
          left.push(-1)
      }
      stack.push(i);
      top++;

  }
  console.log(left);
  let right =[];
  let t =-1;
  let s=[];
  for(let i =N-1;i>=0;i--){
    while(s.length>0&&arr[s[t]]>=arr[i]){
        s.pop();
        t--;
    }
    if(s.length>0&&arr[s[t]]<arr[i]){
        right.push(s[t]);
}else{
   right.push(-1)
}
s.push(i);
t++;

}
  console.log(right.reverse())
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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