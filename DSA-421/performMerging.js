function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let N =+input[0];
   let arr1 =input[1].trim().split(" ").map(Number);
   let arr2 =input[2].trim().split(" ").map(Number);
   main(arr1,arr2,N);
  }
  function main(arr1,arr2,N) {
      let i =0;
      let j=0;
      let k=0;
      let ans =[];
    while(i<N&&j<N) {
        if(arr1[i]<=arr2[j]){
            ans[k]=arr1[i];
            i++;
            k++;
        }else{
            ans[k]=arr2[j];
            j++;
            k++;
        }
        
        }
        if(i<N){
            while(i<N){
                ans[k]=arr1[i];
                i++;
                k++;
            }
        }else if(j<N){
            while(j<N){
                ans[k]=arr2[j];
                j++;
                k++;
            }
        }
    console.log(...ans);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
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