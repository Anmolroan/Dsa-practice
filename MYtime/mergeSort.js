function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var N=+input[0];
    var arr=[]
    var arr1=input[1].trim().split(" ").map(Number);
for(let i =0;i<N;i++){
    arr.push(arr1[i])
}
    var arr2=input[2].trim().split(" ").map(Number);
    for(let i =0;i<N;i++){
        arr.push(arr2[i])
    }
    var N=arr.length
   main(N,arr)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
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
      console.log(arr)
      function merge(a,l,mid,r){
          var i =l;
          var j=mid+1;
          var ma=[];
          var k=l;
         
          while(i<=mid&&j<=r){
              if(a[i]<=a[j]){
                 ma[k]=a[i];
                
                  i++;
              }
              else{
                 ma[k]=a[j]
                  j++;
                  
              }
              k++;
          }
          if(i>mid){
            while(j<=r){
             ma[k]=a[j]
              j++;
              k++;
            }
          }
          else{
            while(i<=mid){
             ma[k]=a[i]
              i++;
              k++;
            }
          }
      for(let i =l;i<=r;i++){
     a[i]=ma[i]
      }

      }
  
      // merge(arr,0,5,7);
      // console.log(arr)
      
    mregeSort=(a,l,r)=>{
        if(l<r){
            var mid =Math.floor((l+r)/2);
            mregeSort(a,l,mid)
            mregeSort(a,mid+1,r)
            merge(a,l,mid,r)
        }
        else{
            return;
        }
    }
    mregeSort(arr,0,N-1);
    console.log(arr)
  }