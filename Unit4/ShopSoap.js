function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N = +input[0];
    let arr =input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
    let q = +input[2];
    let line =3
    for(let i =0;i<q;i++){
        let K =+input[line++];
main(K,arr)
    }


   
  }
  function main(K,arr) 
  {
      let i =0; 
      let j =arr.length-1;
      let lowerbound =-1;
      while(i<=j){
          let mid =i+Math.floor((j-i)/2);
         
          if(arr[mid]>=K){
           
              j=mid-1;
          }else{
              lowerbound = mid
            i=mid+1;
          }
      }
      console.log(lowerbound+1)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    1 4 10 5 6
    1
    11`);
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