function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    var N=+input[0];
    var arr =input[1].trim().split(" ").map(Number);
    main(N,arr)
   
  }
  function main(N,arr) {
      function quickSort(l,h){
          if(l<h){
             pivot =partition(l,h);
              quickSort(l,pivot-1);
              quickSort(pivot+1,h);
          }else{
              return ;
          }
      }
      quickSort(0,N-1);
      console.log(arr.reverse().join(" "));
      function partition(l,h) {
          let i =l;
          let j =h;
          var p=Math.floor((l+h)/2);
          var pivot =arr[p];
          while(i<j){
              while(arr[i]<=pivot){
                  i++;
              }
              while(arr[j]>pivot){
                  j--;
              }
              if(i<j){
                  [arr[i],arr[j]]=[arr[j],arr[i]]
              }
          }
   [ arr[j],arr[l]]=[arr[l],arr[j] ]
          return p;
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    3 5 0 9 8`);
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