function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var m=+input[0];
    var arr=input[1].trim().split(" ").map(Number);
    sortout(m,arr)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    4 5 3 7 1`);
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
  function sortout(m,arr){
     
     
      function swap(i,j){
          var temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
          var temp2=index[i];
          index[i]=index[j];
          index[j]=temp2
      }
      var index=[]
      for(let i=0;i<m;i++){
        index.push(i)
      }
      for(let i=0;i<m;i++){
        for(let j=0;j<m-1-i;j++){
          if(arr[j]>arr[j+1]){
            swap(j,j+1)
          }
        }
      }
console.log(index.join(" "))
  

  }