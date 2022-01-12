function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let test=+input[0];
    let line=1;
    
    for(let i=0;i<test;i++){
        
        let [N,K]=input[line++].trim().split(" ").map(Number);
        let arr=input[line++].trim().split(" ").map(Number);
       console.log(sumOfSubarray(N,K,arr))
    }
   
  }
  function sumOfSubarray(N,K,arr){
      sum=0;
      let i =0;
      var count=0;
      while(sum<K){
          sum=sum+arr[i];
          i++
      }
     
      if(sum==K){
          count++;
      }
      let j = i;

     while(i<N){
          while(sum>K){
         sum=sum-arr[j-i];
           j++;
          }
     
     
      if(sum==K){
        count++;
        break;
    }
    
        while(sum<K){
       sum=sum+arr[i];
         i++;
        }
    if(sum==K){
       count++;
       break;
    }
}
       if(count>0){
           console.log("Yes")
       }else{
           console.log("No")
       }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10
    6 3
    2 2 1 1 1 2
    7 18
    8 2 9 5 4 6 7
    1 1
    4
    3 1
    1 3 2
    8 1
    2 1 1 1 1 2 2 2
    5 2
    1 2 1 3 2
    10 14
    3 4 1 2 6 1 9 7 8 5
    10 1
    1 2 2 1 1 2 2 2 1 1
    6 1
    2 1 1 1 2 2
    10 23
    8 2 6 4 5 7 1 3 10 9`);
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