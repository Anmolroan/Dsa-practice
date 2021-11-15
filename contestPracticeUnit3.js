// 
// quicksort
// function runProgram(input) {
//     // Write code here
//    input=input.trim().split("\n")
//    var N=+input[0];
//    var arr=input[1].trim().split(" ").map(Number);
 
//    main(N,arr)
//   }
// function main(N,arr){
//     function swap(i,j){
//         var temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//    function partition(l,h){
//        var pivot=arr[l];
//        var i =l;
//        var j=h;
//        while(i<j){
//            while(arr[i]<=pivot){
//             i++;

//            }
//            while(arr[j]>pivot){
//                j--;
//            }
//            if(i<j){
//                swap(i,j)
//            }
//        }
//        swap(j,l);
//        return j;
//    }
//    function quickSort(l,h){
       
//        if(l<h){
//            var pivot=partition(l,h);
//            quickSort(l,pivot-1);
//            quickSort(pivot+1,h)
//        }
//        else{
//            return;
//        }
//    }
//    quickSort(0,N-1);
//    console.log(arr.join(" "))

// }
  
 

//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`5
//     3 5 0 9 8`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }
// bubble sort
// var arr=[3,5,0,9,8];
// var N=5;
// function swap(i,j){
//     var temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
// }
// function bubble(i){
//     if(i==N){
//        console.log(arr)
//         return
//     }
//     for(let j=0;j<N-1-i;j++){
// if(arr[j]>arr[j+1]){
//     swap(j,j+1)
// }
//     }
//     bubble(i+1)
// }
// bubble(0)
// next greater element;
function runProgram(input) {
    // Write code here
   input=input.trim().split("\n")
   var test =+input[0];
   var line=1;
   for(let i = 0;i<test;i++){
       var N=+input[line++];
       var arr=input[line++].trim().split(" ").map(Number);
nextGreater(N,arr)
   }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5
    5 4 1 3 2`);
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
  function nextGreater(N,arr){
      var left=[];
      var right=[];
      var stack=[];
      var top=-1;
      for(let  i =0;i<N;i++){
          while(stack.length>0&&arr[stack[top]]<=arr[i]){
            stack.pop();
            top--;
          }
          if(stack.length>0){
              left.push(stack[top]);
          }
          else{
              left.push(-1)
          }
          stack.push(i);
          top++;
      }
    //   console.log(left);
      var top=-1;
      var stack=[]
      for(let  i = N-1;i>=0;i--){
        while(stack.length>0&&arr[stack[top]]<=arr[i]){
          stack.pop();
          top--;
        }
        if(stack.length>0){
            right.push(stack[top]);
        }
        else{
            right.push(-1)
        }
        stack.push(i);
        top++;
    }
    right=right.reverse();
    var ans=[]
for(let i =0;i<N;i++){
    if(left[i]==-1&&right[i]==-1){
        ans.push(-1)
    }
    else if(left[i]==-1){
        ans.push(arr[right[i]])
    }
    else if(right[i]==-1){
        ans.push(arr[left[i]])
    }
    else {
        var temp1=Math.abs(i-left[i]);
        var temp2=Math.abs(i-right[i]);
        if(temp1>temp2){
            ans.push(arr[right[i]])
        }
        else{
            ans.push(arr[left[i]])
        }
    }
}    
console.log(left)  
console.log(right)
// console.log(ans.join(" "))
  }