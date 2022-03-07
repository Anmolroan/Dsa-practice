function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let N =+input[0];
    let arr1 =input[1].trim().split(" ").map(Number);
    let M =+input[2];
    let arr2 =input[3].trim().split(" ").map(Number);
    party(N,M,arr1,arr2);
   
  }
  function party(N,M,arr1,arr2){
      let obj ={};
      for(let i=0;i<arr1.length;i++){
          if(obj[arr1[i]]===undefined){
              obj[arr1[i]]=1;
          }
      };
    //   console.log(obj);
      let count =0;
      for(let i=0;i<arr2.length;i++){
if(obj[arr2[i]]!==undefined){
    count++;
}
      }
    //   console.log(count);
      if(count ===arr2.length){
          console.log("Yes");
      }else{
          console.log("No");
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    1 2 2 3 4 
    6
    1 2 3 4 5 5`);
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