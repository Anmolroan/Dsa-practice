// Masai Packers & Movers
// function runProgram(input) {
//     // Write code here;
//     input=input.trim().split("\n");
//     var [K,N]=input[0].trim().split(" ").map(Number);
//     var arr=input[1].trim().split(" ").map(Number);
//    main(K,N,arr)
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`3 3
//     1 2 3`);
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
//   function main(K,N,arr){
//       var count=0;
//       function solve(sum){
//           if(sum==K){
//               count++;
//           }
//           if(sum>K){
//               return
//           }
//           for(let i =0;i<N;i++){
             
//               solve(sum+arr[i])
//           }
//       }
//       solve(0);
//       console.log(count)
//   }

// Q no 2 Odd subset
// Given an integer array, return the count of all the subsets of the array, where the sum of all the elements in the subset is odd.
// function runProgram(input) {
//     // Write code here
//     input=input.trim().split("\n");
//         var [N]=input[0].trim().split(" ").map(Number);
//         var arr=input[1].trim().split(" ").map(Number);
//        main(N,arr)
   
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`7
//     -3 -1 -10 8 -5 0 7 `);
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
//   function main(N,arr){
//       var newarr=[];
//       var count=0;
//       function solve(cur,newarr){
//           if(newarr.length>=0){
//               var sum=0;
//              for(let i =0;i<newarr.length;i++){
//                  if(newarr[i]%2!=0){
//                     sum=sum+newarr[i];
//                  }
//              }
//              if(sum%2!=0){
//                 count++;
//              }
//           }
//           if(cur==N){
           
//               return
//           }
//           for(let i=cur;i<N;i++){
//               newarr.push(arr[i])
//               solve(i+1,newarr);
//               newarr.pop()
//           }
//       }
//       solve(0,newarr);
//       console.log(count)
//   }

// Q no 3 All Twice Except One
// Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.

// In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.

// Added Constraint -> Do in O(1) auxiliary space and linear time complexity.
// function runProgram(input) {
//     // Write code here
//     input=input.trim().split("\n")
//     var test = +input[0];
//     var line =1;
//     for(let  i  = 0;i<test ;i++){
//         var N =+input[line++];
//         var arr=input[line++].trim().split(" ").map(Number);
//         main(N,arr)
//     }
   
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`2
//     1
//     5
//     5
//     1 2 1 3 2`);
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
//   function  main(N,arr){
//       var obj={};
//       solve =(i)=>{
// if(i==N){
//     for(key in obj){
//         if(obj[key]==1){
//             console.log(key)
//         }
//     }
//     return;
// }
// var char=arr[i];
// if(obj[char]==undefined){
//     obj[char]=1;
// }
// else{
//     obj[char]= obj[char]+1
// }
// solve(i+1)
//       }
//       solve(0);
     
//   }
// Q no 4 Find the weird sum;
// You are given an array of size N, which contains unique numbers. 
// You need to find if there is a subsequence of an array whose sum is equal to the largest element in the array.

// Note:- You cannot include the largest element while counting the sum.
// function runProgram(input) {
//     // Write code here
//     input=input.trim().split("\n")
//     var test = +input[0];
//     var line =1;
//     for(let  i  = 0;i<test ;i++){
//         var N =+input[line++];
//         var arr=input[line++].trim().split(" ").map(Number);
//         main(N,arr)
//     }
   
   
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`3
//     3
//     1 2 3
//     4
//     0 1 2 3
//     4
//     2 3 6 10`);
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
// function main(N,arr){
//     var largest=null;
//     var newarr=[]
//     for(let i =0;i<N;i++){
//         if(largest==null||largest<arr[i]){
//             largest=arr[i]
//         }
//     }
//    var count=0;
//     function solve(cur,newarr){
//         if(newarr.length>0){
//             var sum=0;
//             for(let i =0;i<newarr.length;i++){
//                 sum=sum+newarr[i]
//             }
//             if(sum==largest){
//                 count++
//             }
//         }
//         if(cur==N){
//             return;
//         }
//         for(let i =cur;i<N;i++){
//            if(arr[i]!=largest){
//             newarr.push(arr[i]);
//             solve(i+1,newarr);
//            newarr.pop()
//            }
          
           
//         }
//     }
//     solve(0,newarr)
    
//     if(count==0){
//         console.log("No")
//     }
//     else{
//         console.log("Yes")
//     }
// }
// Q no 5 Merge Sorting
// You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.
// function runProgram(input) {
//     // Write code here
//    input=input.trim().split("\n");
//    var N=+input[0];
//    var arr=input[1].trim().split(" ").map(Number);
//    main(N,arr)
//   }
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
//   function  main(N,arr){
//       merge=(l,r,mid,arr)=>{
//         var i=l;
//         var j=mid+1;;
//         var k=l;
//         var temp=[]
//         while(i<=mid&&j<=r){
//             if(arr[i]<=arr[j]){
//                 temp[k]=arr[i];
//                 i++;
//                 k++;
//             }
//             else{
//                 temp[k]=arr[j];
//                 k++;
//                 j++;
//             }
//         }
//         if(i<=mid){
//             while(i<=mid){
//                 temp[k]=arr[i]
//                 i++;
//                 k++;
//             }
//         }
//         else{
//             while(j<=r){
//                 temp[k]=arr[j];
//                 j++;
//                 k++;
//             }
//         }
        
//         for(let i =l;i<=r;i++){
// arr[i]=temp[i];
//         }
//       }
//       function mergeSort(l,r){
//           if(l<r){
//               var mid=Math.floor((l+r)/2)
//               mergeSort(l,mid);
//               mergeSort(mid+1,r);
//               merge(l,r,mid,arr)
//           }
//           else{
//               return;
//           }
//       }
//       mergeSort(0,N-1);
//       console.log(arr.join(" "))
//   }
// Q no 6 Quick sort
// You are given an array of N integers. Write QUICK SORT ALGORITHM to sort the numbers in ascending order
// DO NOT USE ANY BUILTIN FUNCTION TO SORT

// ALSO, YOU MUST NOT USE ANY OTHER ALGORITHM
// function runProgram(input) {
//     // Write code here
//     input=input.trim().split("\n");
//        var N=+input[0];
//        var arr=input[1].trim().split(" ").map(Number);
//        main(N,arr)
   
//   }
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
//   function  main(N,arr){
//       swap=(i,j)=>{
// var temp=arr[i];
// arr[i]=arr[j];
// arr[j]=temp;
//       }
//       function partition(l,h){
// var i =l;
// var j =h;
// var pivot=arr[l];
// while(i<j){
//     while(arr[i]<=pivot){
//         i++;
//     }
//     while(arr[j]>pivot){
//         j--;;
//     }
//     if(i<j){
//         swap(i,j)
//     }
   
// }
// swap(j,l);
// return j;

//       }
//       function quickSort(l,h){
//           if(l<h){
//               var pivot=partition(l,h);
//               quickSort(l,pivot-1);
//               quickSort(pivot+1,h)
//           }
//       }
//       quickSort(0,N-1);
//       console.log(arr)
//   }
// Q no 7 Mr Robot - Elliot
// Mr.Robot needs an encryption method, so Elliott was there to help him.
//  At the same time, Richard wrote a paper on encryption.
//   Elliott then started writing his algorithms with the help of 
//   paper from Richard but he needs your help in implementing. 
//   The algorithm is like this:

// Given an input string, the encrypted string will start with 
// the middle character of the string and will be formed henceforth with
//  the middle characters of the left and right substrings (of the middle character of the word) and so on. 
//  Take a look at the explanation of the sample test case for better understanding.
// function runProgram(input) {
//     // Write code here;
//     input=input.trim().split("\n");
//     var test=+input[0];
//     var line=1;
//     for(let  i = 0; i< test;i++){
//         var N =+input[line++];
//         var str=input[line++].trim()
//         main(N,str)
//     }
   
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`3
//     3
//     abc
//     4
//     abcd
//     11
//     abcdefghijk`);
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
//   function main(N,str){
// var newstr=""
//     function middle(l,h,newstr){
//         if(h<l){
//             return "";
//         }
//         var mid=Math.floor((l+h)/2);
//          newstr=newstr+str[mid]+middle(l,mid-1,newstr)+middle(mid+1,h,newstr)
//          return newstr;
         
        
       
//     }
 
// console.log(middle(0,N-1,newstr))
//   }