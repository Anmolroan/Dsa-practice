function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i =0;i<tc;i++){
       let N=input[line++];

       let X=+input[line++];
       let Y =+input[line++];
       let init =[];
       let final =[];
       for(let j =0;j<N;j++){
        let [a,b]=input[line++].trim().split(" ").map(Number);
        init.push(a);
        final.push(b);
       }
       init.sort((a,b)=>a-b);
       final.sort((a,b)=>a-b);
       main(init,final,N,X,Y);
   }
  }
  const main=(init,final,N,X,Y)=>{
      let count =0;
    
      for(let i =0;i<N;i++){
        if(init[i]>final[i]){
            count =count+(init[i]-final[i])*X
        }else if(init[i]<final[i]){
            count = count+(final[i]-init[i])*Y
        }
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    3
    6
    4
    3 1
    1 2
    1 2`);
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