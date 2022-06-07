function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line=1;
   for(let i=0; i<tc; i++){
    let [N,M]=input[line++].trim().split(" ").map(Number);
    let n=input[line++].trim().split(" ").map(Number);
    let m=input[line++].trim().split(" ").map(Number);
    main(N,M,n,m);
   }
  }
  function main(N,M,n,m){
      let obj={};
      for(let i=0; i<N; i++){
          if(obj[n[i]]==undefined){
              obj[n[i]]=1;
          }else{
            obj[n[i]]=obj[n[i]]+1;
          }
      }
    
      let flag=true;
      for(let i=0; i<M; i++){
          if(obj[m[i]]){
              if(obj[m[i]]>0){
                  obj[m[i]]=obj[m[i]]-1
              }else{
                  flag=false;
                  break;
              }
          }else{
              flag=false;
              break
          }
      }
     if(flag){
         console.log("HAPPY")
     }else{
         console.log("ANGRY")
     }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3 2
    1 1 3
    3 1
    1 1
    10
    1`);
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