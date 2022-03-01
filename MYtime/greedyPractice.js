// Ashutosh has N friends and he wants to give a party to his C friends on his birthday.
//  Ashutosh knows the amount he will have to spend on each of his N friends in party.
//  Given the expense amount of each of the N friends,
//  comment if it is possible for Ashutosh to give a party to his C friends if he has just R rupees.
// function runProgram(input) {
//     // Write code here;
//     input=input.trim().split("\n");
//     let [N,C,R]=input[0].trim().split(" ").map(Number);
//     let arr=input[1].trim().split(" ").map(Number);
//     partyOrNot(N,C,R,arr)
   
//   }
//   function  partyOrNot(N,C,R,arr){
//       arr.sort((a,b)=>a-b);
//       var sum =0;
//       for(let i =0;i<C;i++){
//           sum=sum+arr[i]
//       }
//       if(sum<=R){
//           console.log("Party")
//       }else{
//           console.log("Sad")
//       }
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`6 3 50
//     10 10 25 25 25 35`);
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



/*
Love of Samosa 
Description
Amit went down to the Samosa street to have some. But he only has K units of money with him.
 There are N shops on the street and unfortunately, all of them have only one samosa remaining.
  You are also given an array A, where Ai is the cost of a samosa on the i'th shop.

Find the maximum samosas that Amit can eat.
*/
// function runProgram(input) {
//     // Write code here
//    input =input.trim().split("\n");
//    let [N,K]=input[0].trim().split(" ").map(Number);
//    let shops=input[1].trim().split(" ").map(Number);
//    loveOfSamosha(N,K,shops)
//   }
//   function loveOfSamosha(N,K,shops){
//       shops.sort((a,b)=>a-b);
//     let count=0;
//     var sum=0;
//       for(let i =0;i<N;i++){
//         sum=sum+shops[i];
//         if(sum<=K){
//             count++;
//         }else{
//             break;
//         }
//       }
//       console.log(count)
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`4 10
//     5 4 2 4`);
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

/*
Dance Night! Show Editorial  Ended
Description
Masai School will be hosting its Prom Night on 29th Feb.
There would be M boys and N girls at the prom tonight. 
Each boy wants a girl who is strictly shorter than him. 
A girl can dance with only one boy and vice-versa.
given the heights of all the boys and girls comment 
whether it is possible for all boys to get a girl.
*/
// function runProgram(input) {
//     // Write code here;
//     input=input.trim().split("\n");
//     let test =+input[0];
//     let line =1;
//     for(let i =0;i<test ;i++){
//         let [M,N]=input[line++].trim().split(" ").map(Number);
//         let boys=input[line++].trim().split(" ").map(Number);
//         boys.sort((a,b)=>a-b);

//         let girls =input[line++].trim().split(" ").map(Number);
//         girls.sort((a,b)=>a-b)
//         danceNight(M,N,boys,girls)
//     }
   
//   }
//   function danceNight(M,N,boys,girls){
//       let i =0;
//       let j =0;
//       while(i<M&&j<N){
//           if(girls[j]<boys[i]){
//               i++;
//               j++
//           }
//           else{
//               break;
//           }
//       }
//       if(i==M){
//           console.log("YES")
//       }else{
//           console.log("NO")
//       }
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`1
//     4 5
//     2 5 6 8
//     3 8 5 1 7`);
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

/*
Nikhil and his Search  Ended
Description
Nikhil and his friend Sachin are on a quest to find the answer to Life.

In order to complete it, they need to answer Q queries on an array A having N integers. 
The queries can be of the following two types:

0 x: Find the number of numbers in A which are not less than x.

1 x: Find the number of numbers in A which are greater than x.

Help them complete the quest.
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var N =+input[0];
    var arr =input[1].trim().split(" ").map(Number);
    arr.sort((a,b)=>a-b)
    var query =+input[2];
    var Q=[];
    for(let i =3;i<3+query;i++){
      var char=input[i].trim().split(" ").map(Number);
      Q.push(char)
    };
    nikhilAndSearch(N,arr,query,Q);
  }
  function nikhilAndSearch(N,arr,query,Q){
     for(let l =0;l<query;l++){
if(Q[l][0]==0){
    var lowerbound=0;
    var k =Q[l][1];
    var i =0;
    var j=N-1;
    while(i<=j){
        var mid =i+Math.floor((j-i)/2)
        if(arr[mid]>=k){
            if(arr[mid]==k){
                lowerbound=mid
            }
            j=mid
        }else if(arr[mid]<k){
            i= mid+1;
        }
        if(i===j){
            break;
        }
    }
    console.log(lowerbound)
}else{
    var upperbound=0;
    var i =0;
    var j=N-1;
    var k =Q[l][1];
    while(i<=j){
        let mid =i+Math.floor((j-i)/2);
        if(arr[mid]==k){
            upperbound=mid;
            i=mid+1;
        }else if(arr[mid]>k){
            j=mid-1;
        }else{
            i=mid+1;
        }
    }
    console.log(N-1-upperbound)
}
     }
      
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    1 2 3 4 
    3
    0 5
    1 3
    0 3`);
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