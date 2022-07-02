function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
   let tc =+input[0];
   let line=1;
   for(let i =0;i<tc;i++){
    let overs=+input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
     main(arr,overs)
   }
  }
  function main(arr,overs){
    let count=0;
    let p=["ab","v"];
    let v=0;
    let ab=0;
    for(let i=0;i<arr.length;i++){
        count++;
        if(p[0]==="ab"){
            ab=ab+arr[i];
        }else{
            v=v+arr[i];
        }
        if(arr[i]%2!=0){
            [p[0],p[1]]=[p[1],p[0]];
        }
        if(count%6===0){
            [p[0],p[1]]=[p[1],p[0]]
        }
    
    }
   if(ab>v){
    console.log("AB de Villiers")
   }else if(v>ab){
    console.log("Virat Kohli")
   }else{
    console.log("Tie")
   }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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