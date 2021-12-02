function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    let N =+input[0];
    let line =1;
    let integers=[]
    for(let i =0;i<N;i++){
integers.push(+input[line++]);

    }
   suchSixNumbers(integers,N)
  }
  function  suchSixNumbers(integers,N){
      var lhs =[];
      var rhs =[];
   for(let i =0;i<N;i++){
       for(let j =0;j<N;j++){
           for(let k =0;k<N;k++){
lhs.push((integers[i]*integers[j])+integers[k]);
if(integers[k]!=0){
rhs.push((integers[i]+integers[j])*integers[k])}
           }
       }
   }
   lhs.sort((a,b)=>a-b);
   rhs.sort((a,b)=>a-b);
   console.log(lhs);
   console.log(rhs)
//    var obj1 ={};

//    var obj2={};
//   for(let i=0;i<lhs.length;i++){
// var char =lhs[i];
// if(obj1[char]===undefined){
//     obj1[char]=1;
// }else{
//     obj1[char]=obj1[char]+1;
// }
  
//    }
//    for(let i=0;i<rhs.length;i++){
//     var char =rhs[i];
//     if(obj2[char]===undefined){
//         obj2[char]=1;
//     }else{
//         obj2[char]=obj2[char]+1;
//     }
      
//        };
//        var sum =0;
//        for(key in obj1){
//            for(k in obj2){
//                if(key==k){
//                    sum=sum+(obj2[k]*obj1[key])
//                }
//            }
//        }
    //    console.log(sum)
//    console.log(obj1);
//    console.log(obj2);

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    5
    7
    10`);
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