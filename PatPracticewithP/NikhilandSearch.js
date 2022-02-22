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
        var mid = i+(Math.floor((j-i)/2));
        if(arr[mid]<k){
        i=mid+1;
        }else{
        lowerbound=mid;
        j=mid-1;
        }
    }
    console.log(lowerbound);
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