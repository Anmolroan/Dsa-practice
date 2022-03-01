function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    
    var [N,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    subArraySum(N,k,arr)
    
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 3
    2 4 3 5 1`);
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
function   subArraySum(N,k,arr){
    var sum=0;
    var count=0;
   for(i=0;i<N;i++){
sum=sum+arr[i];
   }
   if(sum%k!=0){
       console.log(1)
   }
   else{
       var left= -1;
       for(i=0;i<N;i++){
           if(arr[i]%k!=0){
               if(left==-1){
                   left=i;
               }
               right=i;
           }
       }
       var left=left+1;
       var right=N-right;
       var result=null;
       if(left<right){
           result=N-left;
       }
       else if(left==right){
           result=N-left;
       }
       else{result=N-right}
       var sum2=0;
       for(i=0;i<result;i++){
sum2=sum2+arr[i];
       }
       if(sum2%k!=0){
           count++}
       for(i=result;i<N;i++){
           sum2=sum2-arr[i-result];
           sum2=sum2+arr[i];
           if(sum2%k!=0){
            count++}
       }
       console.log(count)
   }

}
