function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n")
       var N =+input[0];
        var arr=input[1].trim().split(" ").map(Number);
    main(N,arr)
   
  }
  function main(N,arr) {
    function mergeSort(l,r){
        if(l<r){
            var mid=Math.floor((l+r)/2);
            mergeSort(l,mid);
            mergeSort(mid+1,r);
            merge(l,mid,r,arr);
        }else{
            return 
        }
    }
    mergeSort(0,N-1)
    console.log(arr)
    function merge(l,mid,r,arr){
      let i =l;
      let j =mid+1;
      let k =l;
      let temp=[];
      while(i<=mid&&j<=r){
        if(arr[i]<=arr[j]){
          temp[k]=arr[j];
          j++;
        }else{
          temp[k]=arr[i];
          i++;
        }
        k++;
      }
      if(i<=mid){
        while(i<=mid){
          temp[k]=arr[i];
          k++;
          i++;
        }
      }
      if(j<=r){
        while(j<=r){
          temp[k]=arr[j];
          k++;
          j++;
        }
      }
      for(let i =l;i<=r;i++){
        arr[i]=temp[i];
      }
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    2 3 1 4 5`);
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
 
   