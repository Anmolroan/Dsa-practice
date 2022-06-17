function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let N =+input[0];
   let arr1 =input[1].trim().split(" ").map(Number);
   let arr2 =input[2].trim().split(" ").map(Number);
   main(N,arr1,arr2);
  }
  function main(N,arr1,arr2) {
    let i =0;
    let j =0;
    let k =0;
    let temp=[];
    while(i<N&&j<N){
        if(arr1[i]<=arr2[j]){
            temp[k]=arr1[i];
            i++;
            k++
        }else{
            temp[k]=arr2[j];
            j++;
            k++;
        }

    }
    if(i<N){
        while(i<N){
            temp[k]=arr1[i];
            i++;
            j++;
        }
    }else if(j<N){
        while(j<N){
            temp[k]=arr2[j];
            k++;j++
        }
    }
    console.log(...temp)
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