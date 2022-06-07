function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        main(arr,N)
    }
   
  }
  function main(arr,N) {
      let i =0;
      let j =N-1;
      let sum =arr[0];
      let sum1 =arr[N-1];
    let ans =0;
      while(i<j){
          console.log(sum,sum1);
        if(sum===sum1 ){
            
            ans=sum;
            i++;j--;
        }else if(sum1<sum){
            sum1=sum1+arr[j];
            j--;
        }else{
            sum=sum+arr[i];
            i++
        }
      }
      console.log(ans);

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    100 8 97 2 1
    5
    100 9 96 2 1`);
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