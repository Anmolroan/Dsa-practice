function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    var N=+input[0]
    var string=input[1].trim()
    subs(N,string)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    abcd`);
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
  function subs(N,string){
    var newstr="";
    var curr=0;
  find=(str,newstr,curr)=>{
if(newstr.length>0){
  console.log(newstr)
}
if(curr===N){
  return
}
for(let i =curr;i<N;i++){
  newstr=newstr+str[i];
  find(str,newstr,i+1);
  var st="";
  for(let j=0;j<newstr.length-1;j++){
st=st+newstr[j]
  }
  newstr=st;
  //  newstr.delete[newstr.length-1]

}
  }
  find(string,newstr,curr)

  }