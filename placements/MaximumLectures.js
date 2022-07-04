function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let s=[];
   let e=[];
   let N =+input[0];
   let line=1;
   for(let i =0;i<N;i++){
    let [M,N]=input[line++].trim().split(" ").map(Number);
    s.push(M)
    e.push(N)
   }
   find(s,e)
  }
  function find(s,e) {
    for(let i =0;i<s.length;i++){
        for(let j =0;j<e.length-i-1;j++){
            if(s[j]>s[j+1]){
                [s[j], s[j+1]]=[s[j+1], s[j]];
                [e[j], e[j+1]]=[e[j+1], e[j]]
            }
        }
    }
  let end=e[0];
  let i=1;
  let count =1;
  while(i<e.length){
    if(s[i]>=end){
        count++; 
        end=e[i];
       
    }
    i++
  }
  console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3 5
    5 8
    4 9  `);
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