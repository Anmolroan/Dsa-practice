function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let [N,Q]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
    let line =2;
    for(let i =0;i<Q;i++){
        let [l,r,v]=input[line++].trim().split(" ").map(Number);
        main(l,r,v,arr,N);
    }
   
  }
  function main(l,r,v,arr,N){
      let count =0;
    //   console.log(l,r,v)
      for(let i=l-1;i<=r-1;i++){
         
        if(arr[i]===v){
            count++;
        }
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6 2
    1 5 3 2 3 2 
    3 6 2
    4 4 2
    `);
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