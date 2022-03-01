function runProgram(input) {
    // Write code here;
    input =input.trim().split("\n");
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
    //   mrege function
    merge=(l,mid,r)=>{
        var ma=[];
        var k=l;
        var i=l;
        var j=mid+1;
        while(i<=mid&&j<=r){
            if(arr[i]<arr[j]){
                ma[k]=arr[i];
                i++
            }
            else{
                ma[k]=arr[j];
                j++;
            }
            k++;
        }
        if(i>mid){
            while(j<=r){
             ma[k]=arr[j]
              j++;
              k++;
            }
          }
          else{
            while(i<=mid){
             ma[k]=arr[i]
              i++;
              k++;
            }
          }
          for(let i =l;i<=r;i++){
            arr[i]=ma[i]
             }
    }
    function mergeSort(l,r){
        if(l<r){
            var mid=Math.floor((l+r)/2)
            mergeSort(l,mid);
            mergeSort(mid+1,r);
            merge(l,mid,r)
        }
        else{
            return;
        }
    }
    mergeSort(0,N-1);
    console.log(arr.join(" "))
  }