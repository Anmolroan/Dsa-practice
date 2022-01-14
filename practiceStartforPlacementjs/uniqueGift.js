function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i =0;i<test;i++){
        var string=input[line++].trim();
        unique(string);
    }
   
  }
  function unique(string){
    var obj={};
    var arr=[];
    
      for(let i=0;i<string.length;i++){
          var char=string[i];
          if(obj[char]===undefined){
              obj[char]=1;
              
          }
          else{
              obj[char]=obj[char]+1;
          }
          var count=0;
          console.log(obj)
          for( let key in obj){
              if(obj[key]===1){
                  count++;
                  arr.push(key);
                  break;
              }
          }
          if(count===0){
              arr.push("#")
          }
           
      }
      console.log(arr.join(""))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    abadbc
    abcabc`);
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