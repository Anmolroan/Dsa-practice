function runProgram(input) {
    // Write code here
    input =input.trim();
    main(input);
   
  }
  function main (str){
    let count;
    let i =0;
    let j =str.length-1;
    while(i<=j){
        if(str[i]===str[j]){
            count=true;
            i++;
            j--;
        }
        else {
            count=false;
            break;
        }
    }
    if(count){
        console.log("Yes")
    }else{
        console.log("No")
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1221`);
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