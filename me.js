function findTarget(arr1,arrsize,target){
  var count=0;
  var index1=null;
  var index2=null;
for(j=0;j<arrsize-1;j++){
if(count<1){
  for(k=j+1;k<arrsize;k++){
if(arr1[j]+arr1[k]==target){
   index1=j;
  index2=k;
  count++;
}

}
}

}
if(count>=1){
  console.log(index1+" "+index2)}
  else{console.log(-1+" "+-1)}
  
}












    function runProgram(input) {
        // Write code here
input=input.trim().split("\n");

size=+input[0];
N=[];
arr=[];
for(i=1;i<input.length;i++){
if(i%2==0){
  arr.push(input[i].trim().split(" ").map(Number))
}
else{N.push(input[i].trim().split(" ").map(Number))}
}
for(i=0;i<arr.length;i++){
  var arr1=arr[i];
  var arrsize=N[i][0];
  var target=N[i][1];
  findTarget(arr1,arrsize,target)
}

      }
      if (process.env.USER === "anmolkumar") {
        runProgram(`3
        4 9
        2 7 11 15
        5 10
        1 2 3 5 5
        2 100
        48 49`);
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