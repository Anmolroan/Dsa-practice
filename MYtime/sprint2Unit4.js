// function runProgram(input) {
//     // Write code here
//    input = input.trim().split("\n");
//    let N = +input[0];
//    let arr =input[1].trim().split(" ").map(Number);
//    countDigits(N,arr)
//   }
//   function countDigits(N,arr){;
//     let obj={}
// for(let i =0;i<N;i++){
//     var char=arr[i];
//     if(obj[char]===undefined){
//         obj[char]=1;
//     }else{
//         obj[char]=obj[char]+1;
//     }
// }
// let output=""
// for(key in obj){
//     output=output+obj[key]+" "
// }
// console.log(output)
//   }
//   if (process.env.USER=== "anmolkumar") {
//     runProgram(`10
//     0 1 0 1 1 1 0 2 2 0 `);
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


function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var line=1;
    var test =+input[0];
    for(let i =0;i<test;i++){
        let k=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
        findPlace(k,arr)
    }
   
  }
  function findPlace(k,arr){
      let i =0;
      let j =arr.length-1;
      var place=0;
   for(let i =0;i<arr.length-1;i++){
       if(arr[i]<k&&arr[i+1]>k){
           var front=arr[i];
           var behind=arr[i+1]
       }else if(arr[0]>k){
           var front="Front";
           var behind=arr[0]
       }
   }
        
      
    //   console.log(place);
    
  }
  

  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3
    1 4 5 6 8 9
    5 
    1 2 6 7 8
    1
    2 3 4 5 6`);
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