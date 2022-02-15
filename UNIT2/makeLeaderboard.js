function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N =+input[0];
    let line =1;
    let name=[];
    let marks =[]
    for(let i=0;i<N;i++){
        let [n,m]=input[line++].trim().split(" ");
        name.push(n);
        marks.push(+m)
        
    }
   makeLeaderboard(name,marks)
  }
  function makeLeaderboard(name,marks){

console.log(name);
for(let i = 0; i < marks.length; i++){
    for(let j = 0;j<marks.length-i-1;j++){
        if(marks[j]<marks[j+1]){
            [marks[j], marks[j+1]]=[marks[j+1], marks[j]];
            [name[j], name[j+1]]=[name[j+1], name[j]]
        }
    }
}
console.log(name,marks);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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