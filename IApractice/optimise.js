function curve(a,b,c,k){
    let l=0;
    let h=10**10;
    
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2);
        let value=a
        if(arr[mid]===k){
            
        }
    }
    
  }
  
  function runProgram(input) {
      // Write code here
      input=input.trim().split("\n");
      let test=+input[0];
      let line=1;
      for(let i=0;i<test;i++){
          let [a,b,c,k]=input[line++].trim().split(" ").map(Number);
          curve(a,b,c,k);
      }
     
    }
    function curve(a,b,c,k) {
        let l =0;
        let h =10**10;
        let ans =-1;

while(l<=h){
let mid =l +Math.floor((h-l)/2);
let sum =(a*(mid**2))+(b*mid)+c;

if(sum>=k){
    ans=mid;
    h=mid-1;
}
    else{
                l=mid+1;
            }
        }
   if(ans<=0){
       console.log(-1)
   }else{
       console.log(ans)
   }

}
    
    if (process.env.USER === "anmolkumar") {
      runProgram(`1
      3 2 4 15`);
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