function runProgram(input) {
    // Write code here;
    var N=+input;
    main(N)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4`);
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
  function  main(N){
      var arr=[];
      for(let i =0;i<N;i++){
          var temp=[]
        for(let j =0;j<N;j++){
        temp[j]=0;
        }
        arr.push(temp)
    }
    // console.log(arr)
      function conflict(r,c){
          for(let  i =0;i<N;i++){
              if(arr[r][i]==1){
                  return true
              }
          }
          for(let i =0;i<N;i++){
              if(arr[i][c]==1){
                  return true
              }
          }
          var sum=r+c;
          var diff=r-c
          for(let i =0;i<N;i++){
              for(let j =0;j<N;j++){
                if(i+j==sum&&arr[i][j]==1){
                    return true
                }
                else if(i-j==diff&&arr[i][j]==1){
                    return true
                }
              }
          }
          return false;
      }
      var count=0;
      function solve(r){
          if(r==N){
            console.log(arr)
            count++;
              return true;
              
          }

        for(let c=0;c<N;c++){
            if(conflict(r,c)==false){
                arr[r][c]=1;
                if(solve(r+1)==true){
                    arr[r][c]=0
                  
                    
                }
                else{
                    arr[r][c]=0
                }
                 }
                
            }
            
        
        return false
    }
              
    solve(0)
    // console.log(arr)
   console.log(count)
  }