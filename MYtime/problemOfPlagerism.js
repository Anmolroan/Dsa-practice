function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N =+input[0];
    let [L,R]=input[1]. trim().split(" ").map(Number)
  main(N,L,R);
  }
  function main(N,L,R){
      let arr=[];
      for(let i =1;i<=N;i++){
arr.push(i)
      }
      function swap(i,j){
          let temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
      }
     var count=0;
      function subs(curr){
         
          if(curr==arr.length){
             let sum=0;
            for(let i =L;i<=R;i++){
                sum=sum+arr[i]
            }
            if(sum%2!=0){
                count++;
            }
              return 
          }
          for(let i =curr;i<arr.length;i++){
              swap(i,curr)
              subs(curr+1);
              swap(i,curr)
          }
      }
    subs(0);
    console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`9
    1 5`);
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