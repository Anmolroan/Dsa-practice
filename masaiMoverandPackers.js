function runProgram(input) {
  // Write code here
 input=input.trim().split("\n");
 let [K,N]=input[0].trim().split(" ").map(Number);
 let arr=input[1].trim().split(" ").map(Number);
 main(K,N,arr)
}
if (process.env.USER=== "anmolkumar") {
  runProgram(`3 3
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
function main(K,N,arr){
    let count=0;
pAm=function(weight,arr,cur,newarr){
if(weight==0){;
  // console.log(newarr)
  count++
  
}
if(weight<=0){
  return
}
for(let i =0;i<N;i++){
  newarr.push(arr[i])
  pAm(weight-arr[i],arr,cur+1,newarr);
  newarr.pop()
}
}
pAm(K,arr,0,[]);
console.log(count)
}
  