function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    var capicity =+input[0];
    let N=+input[1];
    let value =input[2].trim().split(" ").map(Number);
    let weight =input[3].trim().split(" ").map(Number)
   steal(N,value,weight,capicity)
  }
  function steal(N,value,weight,capicity){
    let av=[]
   for(let i =0;i<N;i++){
av.push(value[i]/weight[i])
   }
   let arr =av;
   merge=(l,mid,r)=>{
    var ma=[];
    var k=l;
    var i=l;
    var j=mid+1;
    var nw =[]
    while(i<=mid&&j<=r){
        if(arr[i]<arr[j]){
            ma[k]=arr[i];
            // 
            nw[k]=weight[i]
            i++
        }
        else{
            ma[k]=arr[j];
            // 
            nw[k]=weight[j]
            j++;
        }
        k++;
    }
    if(i>mid){
        while(j<=r){
         ma[k]=arr[j];
        // 
        nw[k]=weight[j]
          j++;
          k++;
        }
      }
      else{
        while(i<=mid){
         ma[k]=arr[i];
         nw[k]=weight[i]
          i++;
          k++;
        }
      }
      for(let i =l;i<=r;i++){
        arr[i]=ma[i];
        weight[i]=nw[i]

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
// console.log(arr);
// console.log(weight);
let sum =0;

for(let i =value.length-1;i>=0;i--){
if(capicity===0){
  break;
}
if(capicity>=weight[i]){
  sum=sum+av[i]*weight[i];
  capicity=capicity-weight[i]
}
else if(capicity<weight[i]){
  sum =sum+capicity*av[i];
  capicity=0;
}
}
console.log(Math.round(sum))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`50 
    3
    60 100 120 
    10 20 30`);
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