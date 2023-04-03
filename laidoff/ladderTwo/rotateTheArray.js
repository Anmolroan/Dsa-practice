function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(i=0;i<test;i++){
   var[N,k]=input[line++].trim().split(" ").map(Number);
   var arr=input[line++].trim().split(" ").map(Number);
   rotatearr(N,k,arr)

    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
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
function rotatearr(N,k,arr){
function reverse (start,end){

    let i=start;
    let j=end;
    while(i<j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
}
 k=k%N;
 reverse(0, N-1); // reverse   <--<------
 reverse(0, k-1) // reverse first part ---><----
reverse(k, N-1)// reverse second part --->----->
console.log(arr.join(" "))
}




/*Reverse Array Using Two Pointers Algorithm.

Approach
We can divide an array into two parts, one from index 0 to k and the other from index k+1 to the end of the array.
We can then reverse each part separately using a two pointers algorithm.
Finally, we can reverse the entire array to obtain the desired result.
Complexity
Time complexity:
Linear Time.

Space complexity:
Constant Space.
  // for(let i = 0; i<k; i++){

    //     let temp = nums[nums.length - 1];//7

    //     for(let j = nums.length - 1; j>0; j--){

    //         nums[j] = nums[j-1];
    //     }
    //     nums[0]=temp;
    // }

    // return nums;

       reverse(nums, 0, nums.length-k-1);

    //part 2
    //reverse right part
     reverse(nums, nums.length-k, nums.length-1);

    //all
    
    reverse(nums, 0, nums.length-1);

    return nums;
};
*/

