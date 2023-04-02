function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N,T]= input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    main(N,T,arr);
   
  }
  function main(N,T,arr) {
    let obj={};
    let count=0;
 for(let i =0;i<arr.length;i++) {
if(obj[T-arr[i]]===undefined){
    if(obj[arr[i]]){
        obj[arr[i]]++;;
    }else{
        obj[arr[i]]=1;
    }
}else{
 count=count+obj[T-arr[i]];
 if(obj[arr[i]]){
    obj[arr[i]]++;;
}else{
    obj[arr[i]]=1;
}
}
 }
 console.log(count);
  }


  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 9
    3 0 6 2 7`);
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