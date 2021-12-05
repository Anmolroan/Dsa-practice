function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    var capicity =+input[0];
    let N=+input[1];
    let value =input[2].trim().split(" ").map(Number);
    let weight =input[3].trim().split(" ").map(Number)
   steal(N,value,weight,capicity)
  }
  function steal(N,value,weight,capicity){
    function swap(i,j,arr){
      let temp = arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
   for(let i =0;i<N;i++){
     for(let j =0;j<N-1-i;j++){
if(value[j]/weight[j]>value[j+1]/weight[j+1]){
  swap(j,j+1,weight);
  swap(j,j+1,value)
}
     }
   }
 
let sum =0;

for(let i =value.length-1;i>=0;i--){
if(capicity===0){
  break;
}
if(capicity>=weight[i]){
  sum=sum+value[i];
  capicity=capicity-weight[i]
}
else if(capicity<weight[i]){
  sum =sum+capicity*(value[i]/weight[i]);
  capicity=0;
}
}
console.log(Math.round(sum))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`50 
    3
    60 100 120 
    10 20 30`);
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