function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let tc =+input[2];
    let line =3;

    for(let i =0;i<tc; i++){
        var k =+input[line++]
        shop(N,arr,k);
    }
   
  }
  function shop(N,arr,k){
    
      let lowerbound =0;
      var i =0;
      var j =N-1;
      while(i<=j){
var mid = i+(Math.floor((j-i)/2));
if(arr[mid]<k){
i=mid+1;
}else{
lowerbound=mid;
j=mid-1;
}
      }
      if(arr[N-1]<k){
          console.log(N)
      }else{
        console.log(lowerbound)
      }
      
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    11`);
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