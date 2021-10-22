function runProgram(input) {
    // Write code here;
    input=input.trim().split('\n');
    var n=+input[0];
    var queries=[];
    var line=1;
    for(let i=0;i<n;i++){
    var q=input[line++].trim().split(' ').map(Number);
    queries.push(q)
    }
    popush(queries)

   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
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
 function popush(queries){
     var top=-1;
var arr=[];
   function Push(a){
       top++;
       arr[top]=a;

   }
   function pop(){
       if(top!=-1){
          top--;
       }
   }
   function peek(){
       if(top==-1){
           console.log("No Food")
       }
       else{
           console.log(arr[top])
       }
   }
   for(let i=0;i<queries.length;i++){
       if(queries[i][0]==1){
          peek();
          pop();
       }
       else if(queries[i][0]==2){
        Push(queries[i][1])
    }
  
   }
 }