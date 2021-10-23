function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var N=+input[0]
    var arr=input[1].trim().split(" ").map(Number)
   find(N,arr)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    1 2 3`);
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
      function swap(a,b,arr){
          var temp=arr[a]
         arr[a]=arr[b];
         arr[b]=temp;

      }
      var ma=[];
       function permute(arr,curr){
        if(curr==N){
            ma.push(arr.join(""))
            return
        }
        for(let i =curr;i<N;i++){
            swap(i,curr,arr)
            permute(arr,curr+1)
            swap(i,curr,arr)
        }
      }
      permute(arr,0)
      ma.sort((a,b)=>a-b)
      
      for(let i =0;i<ma.length;i++){
          console.log(ma[i].split("").join(" "))
      }

  }