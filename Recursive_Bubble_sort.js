function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var N=+input[0]
    var arr=input[1].trim().split(" ").map(Number)
   find(N,arr)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    3 5 0 9 8`);
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
  function find(N,arr){
      function swap(i,j,arr){
        var temp=arr[i];
         arr[i]=arr[j];
         arr[j]=temp;
      }
      function bubble(left,right,arr){
          if(right==1){
              return ;
          }

         for(let i =0;i<right-1;i++){
             if(arr[i]>arr[i+1]){
                 swap(i,i+1,arr)
             }
         }
         bubble(left,right-1,arr)
      }
      
      bubble(0,N,arr)
      console.log(arr.join(" "))
  }