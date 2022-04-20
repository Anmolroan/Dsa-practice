function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++) {
        let pasha =input[line++].trim();
        let shasha =input[line++].trim();
        main(pasha,shasha);
    }
   
  }
  function main(pasha,shasha){
      let obj ={};
      let count =0;
      if(pasha.length!==shasha.length){
          console.log("No")
      }else{
      for(let i =0;i<pasha.length;i++){
        let char =pasha[i];
        if(obj[char]===undefined){
            obj[char]=1;
        }else{
            obj[char]=obj[char]+1
        }
      }
      for(let i =0;i<pasha.length;i++){
          let char = shasha[i];
          if(obj[char]===undefined){
              break;
          }else{
              obj[char]=obj[char]-1;
              if(obj[char]===0){
                  count++
              }
          }
      }
      if(count===pasha.length){
          console.log("Yes")
      }else{
          console.log("No")
      }
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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