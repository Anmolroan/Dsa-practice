function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   var [N,T]=input[0].trim().split(" ").map(Number);
   var arr=input[1].trim().split(" ").map(Number);
   var arr=arr.sort((a,b)=>a-b);
   var line=2;
   var tests=[]
   for(let i =0;i<T;i++){
var num=+input[line++];
tests.push(num)

   }
   main(N,tests,arr)
  }
  function main(N,tests,arr){
   
     for(let t=0;t<tests.length;t++){
        var i=0;
        var j=N-1;
        var count=0;
        var num=tests[t]
    
//   console.log(arr)
while(i<=j){
    var mid=Math.floor((i+j)/2);
    
    
    if(num==arr[mid]){
        count++;
      break;
    }
    else if(num<arr[mid]){
        j=mid-1;
    }
    else if(num>arr[mid]){
        i= mid+1;
    }
    }
    if(count>=1){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
     }
     
  
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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