function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var line=1;
    var test =+input[0];
    for(let i =0;i<test;i++){
        let k=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        findPlace(k,arr)
    }
   
  }
  function findPlace(k,arr){
      var i =0;
      var j =arr.length;-1;
      var lowerbound=-1;
      if(arr[arr.length-1]<k){
          lowerbound = arr.length-1;
        }else{

        
  while(i<=j){
let mid =i+Math.floor((j-i)/2);
if(arr[mid]>=k){
   
    j=mid-1;
}else if(arr[mid]<k){
    lowerbound = mid;
    i=mid+1;
}
  }
}
if(lowerbound===0){
    console.log("Front" +" "+arr[lowerbound])
}else if(lowerbound===(arr.length-1)){
console.log(arr[lowerbound]+" "+"Last")
}else{
console.log(arr[lowerbound-1]+" "+arr[lowerbound])
}
   
  }
  
 
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3
    1 4 5 6 8 9
    5 
    1 2 6 7 8
    29
   0 2 3 6 7 9 10 11 13 15 16 17 18 20 22 24 26 27 28 30`);
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