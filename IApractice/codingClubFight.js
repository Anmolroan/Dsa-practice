function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N =+input[0];
    let line =1;
    let oppo =[];
    for(let i =0;i<N;i++){
oppo.push(+input[line++]);
    }
    let M =+input[line++];
    let power =[]
    for(let i =0;i<M;i++){
        power.push(+input[line++]);
    }
    CodingClubFight(oppo,power);
   
  }
  function CodingClubFight(oppo,power){
      function sum(arr,l,sum){
    for(let i =0;i<l;i++){
    sum=sum+arr[i];
     }
return sum;
      }
      for(let i =0;i<power.length;i++){
          let element = power[i];
          let l =0;
          let r = oppo.length-1;
          let upperbound=0;
          while(l<=r){
             let mid =l+Math.floor((r-l)/2);
             
             if(oppo[mid]>element){
                r=mid-1;
             } else{
                 upperbound = mid;
                 l=mid+1;
                ;
             }
          }
        
        
              console.log(upperbound+1 + " "+sum(oppo,upperbound+1,0))
          
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
    2`);
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