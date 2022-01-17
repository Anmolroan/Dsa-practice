function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
    var N=+input[0];
    var arr =input[1].trim().split(" ").map(Number);
    main(N,arr)
   
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
  function main(N,arr){
      let swap=(i,j)=>{
          var temp=arr[i]
          arr[i]=arr[j];
          arr[j]=temp;
      }
      partition=(l,h)=>{
        var pivot=arr[l];
        var i = l;
        var j =h;
        while(i<j){
        while(arr[i]<=pivot){
            i++;
        }
        while(arr[j]>pivot){
            j--;
        }
        if(i<j){
            swap(i,j)
        }
        }
        swap(j,l);
        return j
      }
      function quickSort(l,h){
          if(l<h){
              var pivot =partition(l,h);
              quickSort(l,pivot-1);
              quickSort(pivot+1,h);
          }else{
            return;
          }
      }
      quickSort(0,N-1);
      console.log(arr.join(" "))
  }