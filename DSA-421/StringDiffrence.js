function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
let S1 =input[0].trim().split("").sort();
let S2 =input[1].trim().split("").sort();
let i =0;
let j=0;

while(i<S1.length&&j<S2.length){
   if(S1[i]==S2[j]){
       i++;
       j++;
   }
   else{
       j++;
   }
}  

let bag="";
for(let k =i;k<S1.length;k++){
    bag=bag+S1[k]+" "
}
console.log(bag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`AXCB
    ABCD`);
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