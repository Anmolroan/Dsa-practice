function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    var line =1;
    for(let i=0; i<tc; i++){
var s1 = input[line++].trim().split("").sort();
var s2 = input[line++].trim().split("").sort();
PashaAndShasha(s1,s2);
    }
   
  }
  function PashaAndShasha(s1,s2){
      let obj1={};
      let obj2={};
      if(s1.length!=s2.length){
          console.log("False")
      }else{
for(let i=0;i<s1.length;i++){
    if(obj1[s1[i]]===undefined){
        obj1[s1[i]]=1;
    }else{
        obj1[s1[i]]++;
    }
    if(obj2[s2[i]]===undefined){
        obj2[s2[i]]=1;
    }else{
        obj2[s2[i]]++;
    }
}
// console.log(obj2,obj1);
var flag ="True";
for(k1 in obj1){
    for(k2 in obj2){
        if(obj1[k1]!==obj2[k2]){
            flag="False";
        }
    }
}
console.log(flag)
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