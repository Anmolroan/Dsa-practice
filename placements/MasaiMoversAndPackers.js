function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let [K,N]=input[0].trim().split(" ").map(Number);
   let arr =input[1].trim().split(" ").map(Number);
  main(K,N,arr);

  }
  function main(K,N,arr) {
    let sum =0;
    let max =-Infinity;
    let min =Infinity;
   
    let rec =(cur,newarr,K)=>{
        if(K===0){
            min = Math.min(min,cur);
            max=Math.max(max,cur);
        }
        if(K<=0){
        return 
        }
        for(let i =0;i<N;i++){
            rec(cur+1,newarr,K-arr[i]);
        }
    }
    rec(0,[],K);
  if(min===Infinity&&max===-Infinity){
    console.log(-1)}
else{

    console.log(min+" "+max)}

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