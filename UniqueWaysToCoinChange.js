function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    let [M,N]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   main(M,N,arr);
  }
  function main(M,N,arr){
      let sum =0;
      let count =0;
      let obj={};
      function subs(newarr,curr){
if(newarr.length>0){
    console.log(newarr);
    console.log(sum);
 


}
if(curr==N){
    return ;
}
for(let i =0;i<N;i++){
    newarr.push(arr[i]);
    sum =sum+arr[i];
    
    if(sum ===M){
        count++;
    }
    subs(newarr,curr+1);
    newarr.pop();
    sum=sum-arr[i];
}
      }
      subs([],0);
      console.log(count);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4 3
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