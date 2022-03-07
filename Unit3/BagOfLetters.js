function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N =+input[0];
    let str1 =input[1].trim();
    let M =+input[2];
    let str2 =input[3].trim();
    letters(N,str1,M,str2);
   
  }
  function letters(N,str1,M,str2) {
      let obj ={};
      for(let i=0;i<str1.length;i++){
          if(obj[str1[i]]===undefined) obj[str1[i]]=1;
          else{
              obj[str1[i]]++;
          }
      };
    //   console.log(obj);
      let flag ="Yes";
      for(let i=0; i<str2.length; i++){
if(obj[str2[i]]===undefined){
flag="No";
break;
}else{
    if(obj[str2[i]]>0){
        obj[str2[i]]--;
    }else{
        flag="No";
        break;
    }
}

      }
      console.log(flag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    aabbc
    3
    abc`);
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