function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        let N =+input[line++];
        let str =input[line++].trim();
        main(str,N);
    }
   
  }
  function main(str,N) {
      let ans =[]
      const rec =(l,r)=>{
if(l===r){
    return str[l];
}
if(l<r){
    let mid =Math.floor((l+r)/2);
    return ans +str[mid]+rec(l,mid-1)+rec(mid+1,r);
}return ""


      }
      console.log(rec(0,N-1))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk
    `);
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