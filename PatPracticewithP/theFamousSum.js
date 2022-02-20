function runProgram(input) {
    // Write code here
   var [n,k]=input.trim().split(" ").map(Number);
   find(n,k)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`123 3`);
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
  function find(n,k){
     function rec(n){
         if(n<10){
            console.log(n);
            return ;
         }
         var str =n+"";
         var n =0;
         for(let i =0;i<str.length;i++){
            n =n+(+str[i]);

         };
         
         rec(n);
     }
    rec(n*k);
   
}