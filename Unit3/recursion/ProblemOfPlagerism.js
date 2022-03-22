function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N =+input[0];
    let [L,R]=input[1].trim().split(" ").map(Number);
    Plagerism(L,R,N)
   
  }
  function Plagerism(L,R,N) {
      let arr =[];
      for(let i =1;i<=N;i++){
          arr.push(i)
      }
      let count =0;
      function rec(cur,arr){
          
          if(cur===arr.length){
            let sum =0;
              for(let j =L;j<=R;j++){
                sum=sum+arr[j]
              }
             
              if(sum%2!=0){
           
                count++;
              }
              return;
          }
          for(let i =cur;i<arr.length;i++){
              [arr[i],arr[cur]]=[arr[cur],arr[i]];
              rec(cur+1,arr);
              [arr[i],arr[cur]]=[arr[cur],arr[i]]
          }
      }
      rec(0,arr);
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