function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let line =1;
    let tc =input[0]
    for(let i =0;i<tc;i++){
     let [N,K]=input[line++].trim().split(' ').map(Number);
     let arr =input[line++].trim().split(' ').map(Number);
     main(arr,N,K);
    }
   
  }
  function main(arr,N,K){
    
    let ans =0;
    function rec(cur,newarr){
        if(newarr.length>0){
            let count =0;
            for(let i=0;i<newarr.length;i++){
                if(newarr[i]%2!=0){
                    count++;
                }
            }
            if(count>=K){
                ans++;
            }
            
        }
        if(cur===N){
            return
        };
        for(let i=cur;i<N;i++){
          
                newarr.push(arr[i]);
                rec(i+1,newarr);
                newarr.pop();
            
         
        }
    }
    rec(0,[]);
    console.log(ans)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
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