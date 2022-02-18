function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let n=+input[0];
   let name=[];
   let marks=[];
   let line=1;
   for(let i=1;i<=n;i++){
       let [s,a]=input[line++].trim().split(" ");
       name.push(s);
       marks.push(+a);
   }
  makeLeaderboard(marks,name);
   
  }
  function makeLeaderboard(marks,name){
    console.log(marks,name);
    let N =marks.length;
    function swap(arr,i,j){
      var temp =arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };
    for(let i =0;i<N-1;i++){
      for(let j =0;j<N-1-i;j++){
if(marks[j]<marks[j+1]){
swap(marks,j,j+1);
swap(name,j,j+1)
}
else if(marks[j]===marks[j+1]){
if(name[j]>name[j+1]){
  swap(name,j,j+1);
}
      }
    }
  
}
console.log(marks,name);
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