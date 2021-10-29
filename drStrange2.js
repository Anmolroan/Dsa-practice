function runProgram(input) {
  // Write code here;
  input=input.trim().split("\n")
  var N=+input[0];
  var arr=input[1].trim().split(" ").map(Number)
arr.sort((a,b)=>a-b)
  
  
  subs(N,arr)
 
}
if (process.env.USER=== "anmolkumar") {
  runProgram(`2
  10 3`);
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
function subs(N,arr){

 var newarr=[];
 var curr=0;
 var ma=[]
var obj={}
  function find(arr,newarr,curr,N){
    if(newarr.length>=0){
      var el=newarr.join(" ");
      var count =0;
      for(let i =0;i<ma.length;i++){
        if(el==ma[i]){
          count++;
        }
      }
      if(count==0){
        ma.push(el)}
        // console.log(newarr.join(" "))
       
    }
    if(curr==arr.length){
      return ;
    }
    for(let i =curr;i<arr.length;i++){
      newarr.push(arr[i])
      find(arr,newarr,i+1,N)
      
      newarr.pop()
    }
  }
  find(arr,newarr,curr,arr.length)
 
// ma.sort((a,b)=>{
//   return a-b;
// })
// ma.sort()
console.log(ma)
for(let i =0;i<ma.length;i++){
  console.log(ma[i])
}
}



