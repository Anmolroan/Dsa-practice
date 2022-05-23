function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let line =1;
   let tc =+input[0];
   for(let i =0;i<tc;i++){
       let N =+input[line++];
       let arr =input[line++].trim().split(" ").map(Number);
       main(arr,N)
   }
  }
  function main(arr,N) {
      let missing;
      
      let obj ={};
      for(let i=0;i<arr.length;i++){
          if(i+1!=arr[i]){
             missing =i+1;
          }
                 if(obj[arr[i]]==undefined){
                     obj[arr[i]]=1;
                 }else{
                     obj[arr[i]]=obj[arr[i]]+1;
                 }
              
          
      }
      let twice ;
      for(key in obj){
          if(obj[key]===2){
              twice=key;
          }
      }
      console.log(missing+" "+twice);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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