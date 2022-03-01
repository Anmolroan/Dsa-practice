function runProgram(input) {
    // Write code here
   input =input.trim().split("\n")
   let virat =input[0].trim().split("");
   let rohit =input[1].trim().split("");
   main(virat,rohit)
  }
  function  main(virat,rohit){
     let v =virat.length;
     let r =rohit.length;
     let matrix =[];
     for(let i =0 ;i<v+1;i++){
       let temp=[]
       for(let j =0;j<r+1;j++){
         temp.push(-1)
       }
       matrix.push(temp)
     }
    
     function subs(virat,rohit,v,r){
       if(matrix[v][r]!=-1){
         return matrix[v][r]
       }
       if(v==0||r==0){
         return 0;
       }
       if(virat[v-1]===rohit[r-1]){
         return matrix[v][r]= 1+subs(virat,rohit,v-1,r-1)
       }
       else{
         return matrix[v][r]=Math.max(subs(virat,rohit,v-1,r),subs(virat,rohit,v,r-1))
       }
     }
     console.log(subs(virat,rohit,v,r))

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`pqvowlgjkyaoprgpfyaoeyoacxmmtggwbkmsvwlfupbaajnrhhdugvobkfeihdeghcldtfidpdikrbngkmfskxvtornqkucgxead
    kdwtorkaginuadulagbbjjibeohsqzcbktohkmxqnaezrmcvcoznbxckdzaxnbajdsqhgqfdpokhnhhyhtomgyimadxxeckhqlya`);
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