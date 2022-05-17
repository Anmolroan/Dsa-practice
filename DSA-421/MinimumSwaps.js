function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i=0;i<tc;i++){
       let N =+input[line++];
       let arr =input[line++].trim().split("");
     main(arr,N);
   }
  }
  function main(arr,N){
      let i =0;
      let j =1;
      let count =0;
      let flag=false;
      while(j<N){
          if(arr[i]===arr[j]){
              i++;
              j++;
          }else {
            let temp =arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            count++;
            // console.log(arr.join("")===arr.reverse().join(""))
            if(arr.join("")===arr.reverse().join("")){
                flag=true;
               
            }
            i++;j++;
            break;
          }
         
          
      }
      console.log(flag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    aabcb
    8
    adbcdbad `);
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