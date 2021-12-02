function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let test =+input[0];
    var line =1;
    for(let i =0;i<test;i++){
        let [S,N]=input[line++].trim().split(" ").map(Number);
        var weight=[];
var value =[];
        for(let j =0;j<N;j++){
var [w,v]=input[line++].trim().split(" ").map(Number);
weight.push(w);
value.push(v)
        }
       museamTheif(S,N,weight,value)
    }

   
  }
  function museamTheif(S,N,weight,value){
    actualvalue =[];
    function swap (i,j,arr){
        var temp =arr[i];
        arr[i]=arr[j];
        arr[j]=temp
    }
    for(let i =0;i<N;i++){
       
        var temp = value[i]/weight[i];
        actualvalue.push(temp)
    }
    // console.log(actualvalue);
    for(let i =0;i<N;i++){
        for(let j =0;j<N-1-i;j++){
            if(actualvalue[j]>actualvalue[j+1]){
                swap(j,j+1,actualvalue);
                swap(j,j+1,value);
                swap(j,j+1,weight)
            }
        }
    };
    var sum =0;
    var capicity =S
    for(let i =N-1;i>=0;i--){
      
      if(capicity>=weight[i]){
          sum=sum+(actualvalue[i]*weight[i]);
          capicity =capicity-weight[i]
      }
      
    }
    // console.log(actualvalue,value,weight);
console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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