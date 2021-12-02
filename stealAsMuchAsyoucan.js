function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    var capicity =+input[0];
    let N=+input[1];
    let value =input[2].trim().split(" ").map(Number);
    let weight =input[3].trim().split(" ").map(Number)
   steal(N,value,weight,capicity)
  }
  function steal(N,value,weight,capicity){
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
    //   console.log(actualvalue);
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
    
      for(let i =N-1;i>=0;i--){
          if(capicity==0){
              break;
          }
        if(capicity>=weight[i]){
            sum=sum+(actualvalue[i]*weight[i]);
            capicity =capicity-weight[i]
        }else{
            sum=sum+(actualvalue[i]*capicity);
            capicity =capicity-capicity
        }
      }
    //   console.log(actualvalue,value,weight);
console.log(Math.round(sum))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`17000
    20
    36 83 69 41 64 26 44 45 94 48 61 71 77 66 1 19 28 6 39 98
    5717 2118 1938 690 4653 5646 9767 657 9826 3738 4558 1966 3059 1277 902 5277 3135 1820 1189 3517`);
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