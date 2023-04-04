function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N =+input[0];
    let arr = input[1].trim().split(" ").map(Number)
    main(N,arr);
    bruteForceApproach(N,arr);
   
  }
function main(N,arr) {
    let stack = [];
    let top =-1;
    let ans =[];
    let i=0;
    while(i<N){
        while(stack.length>0&&stack[top]>=arr[i]){
            stack.pop();
            top--;
        }
        if(stack.length!=0){
            ans.push(stack[top]);
        }else{
            ans.push(-1)
        }
        ;
        stack.push(arr[i]);
        top++
        i++;
    }
    console.log(ans);
}
function bruteForceApproach(N,arr){
    let ans =[]
    for(let i =0;i<N;i++){
        let smaller=-1
        for(let j =i-1;j>=0;j--){
            if(arr[j]<arr[i]){
                smaller =arr[j];
                break;
            };
            
            
        }
        ans.push(smaller);
    }
    console.log(ans)
}


  if (process.env.USER=== "anmolkumar") {
    runProgram(`8
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