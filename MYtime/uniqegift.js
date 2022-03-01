function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0;i<test;i++){
        var string=input[line++].trim();
        find(string)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    abadbc
    abcabc`);
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
  function find(string){
    //   var unique=[];
    //   var front=0;
    //   var rear=0
    //   var queue=[];
    //  var top=-1;
    
    //   for(let i=0;i<string.length;i++){
    //     if(queue.length==0){
    //         queue.push(string[i]);
    //         rear++;


    //     }
    //     else{
    //         if(queue[rear-1]!=string[i]){
                
    //             queue.push(queue[rear-1])
    //             rear++;
                
    //             unique.push(string[i]);
    //             r++;
    //         }
    //         else{
    //             if(r-f!=0){
    //             queue.push(unique[f]);
    //             f++;}
    //             else{
    //                 queue.push("#")
    //             }
    //             rear++;
    //         }
    //     }
    //   }
      // console.log(queue)
      console.log("a" - "a")
  }