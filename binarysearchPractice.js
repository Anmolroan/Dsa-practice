function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var [N,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number)
   
   upperbound(N,k,arr)
  }
  
  function upperbound(N,k,arr){
      var i=0;
      var j=N-1;
      var upperbound=-1;
      while(i<=j){
        var mid=i+(Math.floor((j-i)/2));
        if(arr[mid]==k){
            upperbound=mid;
            i=mid+1;
            // if(i>j){
            //     break;
            // }
        }
        else if(arr[mid]<k){
            i=mid+1;
           
        }
        else{
           
           
            j=mid-1;
            
          
        }
       
      }
     
      console.log(upperbound);
      lowerbound(N,k,arr);
      function lowerbound(N,k,arr){
        var lowerbound=-1;
        var i=0;
        var j=N-1;
        while(i<=j){
            var mid=i+(Math.floor((j-i)/2))
            if(arr[mid]>=k){
                j=mid;
                if(arr[mid]===k){
                    lowerbound=mid;
                }
                if(i==j){
                    break
                }
            }
            else{
                i=mid+1;
            }
        }
        
     if(lowerbound==-1){
         console.log(-1)
     }else{
         console.log(upperbound-lowerbound+1)
     }
        
       
     
     }
  }


  
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10 22
    2 2 2 2 2 11 15 18 20 22`);
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
  //   binary search recursive
// function  binary(N,k,arr){
//     arr.sort((a,b)=>a-b);
//     var flag=-1;
//     function binary(i,j){
//         if(i>j){
//             return;
//         }
//         var mid=(i+Math.floor((j-i)/2));
//         if(arr[mid]==k){
//             flag=1;
//             return;
//         }
//         else if(arr[mid]>k){
//             binary(i,mid-1)
//         }
//         else{
//             binary(mid+1,j)
//         }
//     }
//     binary(0,N-1);
//     console.log(flag)
// }
//   binary search iterative
//    function binary(N,k,arr){
//        var flag=-1;
//     arr.sort((a,b)=>a-b)
    
// var i=0;
// var j=N-1
//        while(i<=j){
     
//         var mid=i+Math.floor((j-i)/2)
//         if(arr[mid]===k){
//             flag=1;
//             break;
//         }
//         else if(arr[mid]>k){
//             j=mid-1;
//         }
//         else{
//             i=mid+1;
//         }
//        }
//        console.log(flag)
//    }