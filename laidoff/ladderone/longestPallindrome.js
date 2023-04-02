function runProgram(input) {
    // Write code here
    input=input.trim();
    main(input)
    
   
  }

  function main(str){
    let max=-Infinity;
    for(let i =0;i<str.length;i++){
        let subs=str[i];
        for(let j =i+1;j<str.length;j++){
            subs=subs+[str[j]];
            if(checkPallindrome(subs)){
              max =Math.max(max,subs.length);
            }
            
        }
    }
    if(str.length===1){
        console.log(1)
    }else{
        console.log(max);
    }
    
  }
  function checkPallindrome(str){
    let count =0;
    let i=0;
    let j = str.length-1;
    while(i<j){
        if(str[i]!==str[j]){
           break;
        }
        i++;
        j--;
        count++;
    }
    if(count===Math.floor(str.length/2)){
        return true;
    }else{
        return false;
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`thisracecarisgood`);
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