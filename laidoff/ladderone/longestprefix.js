function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N=+input[line++];
        let arr=[]
        for(let j=0;j<N;j++){
            arr.push(input[line++].trim()) 
        }
        main(N,arr);
    }
   
  }
function main(N,arr){
    let min=Infinity;
    for(let i=0;i<arr.length;i++){
        min=Math.min(min,arr[i].length)
    }
    let store=[];
    console.log(min)


    for(let i=0;i<N;i++){
        for(let j=0;j<min;j++){
            if(store[j]===undefined){
                let str=1+"-"+arr[i][j];
                store[j]=str;
            }else{
                let checkstore=store[j].trim().split("-");
                if(checkstore[1]===arr[i][j]){
                    checkstore[0]=+checkstore[0]
                    let str=(checkstore[0]+1)+"-"+arr[i][j];
                    store[j]=str;
                }
            }
        }
    }
let newstr="";
for(let i =0;i<store.length;i++){
    let checkstore=store[i].trim().split("-");
    checkstore[0]=+checkstore[0];
    if(checkstore[0]===N){
        newstr=newstr+checkstore[1];
    }
}
console.log(newstr);
}



  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    3
    flower
    flow
    flick
    4
    a
    bc
    mc
    kc
    2
    ab
    abc
    1
    o`);
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