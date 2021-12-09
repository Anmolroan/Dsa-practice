function runProgram(input) {
    // Write code here;
    input =input.trim().split("\n")
    var test =input[0];
    let line =1;
    for(let i =0;i<test;i++){
        var [S,N]=input[line++].trim().split(" ").map(Number);
        let value=[];
        let weight=[];
        for(let j =0;j<N;j++){
            let [w,v]=input[line++].trim().split(" ").map(Number);
            value.push(v);
            weight.push(w);
        }
        main(weight,value,S,N)
    }
  
   
  }
  function main(weight,value,S,N){
      let av =[];
      for(let i =0;i<N;i++){
          av.push(value[i]/weight[i])
      }
    //   console.log(av);
      function swap(arr,i,j){
          var temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
      }
      for(let i =0;i<N;i++){
          for(let j =0;j<N-1-i;j++){
              if(av[j]>av[j+1]){
                  swap(av,j,j+1);
                  swap(weight,j,j+1);
                  swap(value,j,j+1)
              }
          }
      }
      var stole=0;
      
   for(let i =N-1;i>=0;i--){
      
       if(S>=weight[i]){
           stole=stole+value[i];
           S=S-weight[i]
       }
   }
//    console.log(weight);
//    console.log(value)
console.log(stole)
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