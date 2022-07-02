function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let tc =+input[0];
   let line =1;
   for(let i =0;i<tc;i++){
    let str=input[line++].trim();
    main(str);
   }
  }
  function main(str){
    let arr =str.split(" ");

    for(let i=0;i<arr.length;i++){
        let temp=arr[i].trim().split("").reverse().join("");
       
        arr[i]=temp;
    }
   console.log(arr.join(" "))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    hi there
    hello  world
    a  b`);
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