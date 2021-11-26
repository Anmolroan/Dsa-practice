function runProgram(input) {
    // Write code here
input=input.trim().split("\n");
var K =+input[0];
var arrival =input[1].trim().split(" ").map(Number);
var departure =input[2].trim().split(" ").map(Number);
parkingManagement(K,arrival,departure)
   
  }
  function parkingManagement(K,arrival,departure){
      var count=0;
      var arr=[];
  for(let i =0;i<arrival.length;i++){
if(count<K){
    count++
arr.push(departure[i])
}
else{
   for(let j =0;j<arr.length;j++){
    if(arrival[i]>arr[j]){
        count++;
        arr[j]=departure[i]
break;
    }
   }
}
  }
  if(count===arrival.length){
      console.log("Possible")
  }else{
      console.log("Not Possible")
  }
      }
  
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    1 2 3 5 4
    6 6 6 6 5`);
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