function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    var [N,X]=input[0].trim().split(" ").map(Number);
    var arr =input[1].trim().split(" ").map(Number);
    find(N,X,arr)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 10
    1 2 3 4`);
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
function  find(N,X,arr){
    var newarr=[];
    var count=0;
    subs=(curr,newarr)=>{
        if(newarr.length>0){
            var sum=0;
            for(let i =0;i<newarr.length;i++){
                sum=sum+newarr[i]
            }
            if(sum==X){
                count++;
            }
        }
        if(curr==N){
            return;
        }
        for(let i =curr;i<N;i++){
            newarr.push(arr[i])
            subs(i+1,newarr)
            newarr.pop()
        }
    }
    subs(0,newarr);
    console.log(count)
}

