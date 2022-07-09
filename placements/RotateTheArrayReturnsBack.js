function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        let [N,K]=input[line++].trim().split(" ").map(Number);
        let arr =input[line++].trim().split(" ").map(Number);
        main(arr,N,K);
    }
  }
    // Approach: The approach is simple yet optimized. 
// The idea is to reverse the array three times. 
// For the first time we reverse only the last k elements. 
// Second time we will reverse first n-k(n=size of array) elements. 
// Finally we will get our rotated array by reversing the entire array
  function main(arr,N,K){
   K=K%N;
   function rev(start,end){
    let n = Math.floor(start+end)/2;
    for(let i =start;i<n;i++){
        let temp=arr[i];
        arr[i]=arr[end-1-i];
        arr[end-1-i]=temp;
    }
   }
   rev(N-K,N);
   let start=0;
   let end=start+N-K
   rev(start,end);
   rev(0,N)
console.log(arr);

  
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
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
// let arr = [4, 6, 10, 15, 16]; let limit = 21
// function getIndicesOfItemWeights(arr, limit) {
//   // your code goes here
// let obj={};
//   let ans=[];
//   for(let i =arr.length-1;i>=0;i--){
//   let temp=arr[i];
//    if(obj[temp]===undefined){
//      obj[temp]=i;
//    }else{
//      ans.push(+obj[temp],i);
//     break;
//    }
//   }
//   return ans
// }
// console.log(getIndicesOfItemWeights(arr, limit) )