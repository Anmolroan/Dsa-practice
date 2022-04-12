function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let [N,K] =input[0].trim().split(" ").map(Number);
    let arr =input[1].trim().split(" ").map(Number);
   main(arr,N,K)
   
  }
  const main =(arr,N,K) => {
      let i =0;
      let j =N-1;
      let pivot=0;
while(i<=j){
let mid =i+Math.floor((j-i)/2);
console.log(mid)
if(arr[mid]<arr[(mid+N-1)%N]&&arr[mid]<arr[(mid+1+N)%N]){
pivot=mid;
break;
}
    if(arr[i]<=arr[mid]){
        i=mid+1;
    }else if(arr[mid]<=arr[j]){
       j= mid-1;
    }

}
console.log(pivot);
let l =pivot;
let r =N-1;
let flag =false;
let ans =-1;
function check(l,r,K){
    while(l<=r){
        let mid=l+Math.floor((r-l)/2);
        if(K==arr[mid]){
         
        ans=mid;
          break;
        }
        else if(K<arr[mid]){
            r=mid-1;
        }
        else if(K>arr[mid]){
            l= mid+1;
        }
    }
  return ans


  }
  if(check(0,pivot-1,K)!=-1){
      console.log(check(0,pivot,K))
  }else if(check(pivot,N-1,K)!=-1){
      console.log(check(pivot+1,N-1,K))
  }else{
      console.log(ans);
  }
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10 -1
    4 6 7 9 10 -1 0 1 2 3`);
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