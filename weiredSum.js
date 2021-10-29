function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test =+input[0];
    var line =1;
    for(let i = 0;i<test ;i++){
        var N = +input[line++]
        var arr =input[line++].trim().split(" ").map(Number)
        find(N,arr);
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3
    1 2 3
    4
    0 1 4 3
    4
    2 3 6 10`);
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
  function  find(N,arr){
      var max=null;
     for(let i =0;i<N;i++){
         if(max==null||arr[i]>max){
             max=arr[i]
         }
     }
     var count=0;
     var newarr=[]
     function subs(newarr,curr){
         if(newarr.length>0){
             var sum=0;
             for(let i = 0;i<newarr.length;i++){
                 if(newarr[i]!=max){
                 sum=sum+newarr[i]}
             }
             if(sum==max){
                 count++;
             }
         }
         if(curr==N){
             return;
         }
         for(let i =curr;i<N;i++){
            //  do
            
            newarr.push(arr[i])
            // recurr
            subs(newarr,i+1)
            // undo
            newarr.pop()
         }
     }
     subs(newarr,0)
     if(count>0){
         console.log("Yes")
     }
    else{
        console.log("No")
    }
    
  }