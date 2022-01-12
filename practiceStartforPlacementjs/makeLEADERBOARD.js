function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   let n=+input[0];
   let name=[];
   let marks=[];
   let line=1;
   for(let i=1;i<=n;i++){
       let [s,a]=input[line++].trim().split(" ");
       name.push(s);
       marks.push(+a);
   }
  makeLeaderboard(marks,name);
   
  }
  function makeLeaderboard(marks,name){
      console.log(marks,name);
      function swap(arr,i,j){
          let temp =arr[i];
          arr[i] = arr[j];
          arr[j]=temp
      }
     
 
function checkstring(a,b){
  for(let i=0;i<Math.min(a.length,b.length);i++){
    if(a[i]!=b[i]){
    if(a[i]>b[i]){
      return true;
    }
    else{
      return false;
    }

    }
    else{
      if(a.length>b.length){
        return true
      }
      else{
        false
      }
    }
  }


}
for(let i =0;i<marks.length;i++){
  for(let j = 0;j<marks.length-i-1;j++){
    if(checkstring(name[j],name[j+1])===true){
      swap(name,j,j+1);
      swap(marks,j,j+1)
    }
  }
};
for(let i =0;i<marks.length;i++){
  for(let j =0;j<marks.length-i-1;j++){
      if(marks[j]<marks[j+1]){
          swap(marks,j,j+1);
          swap(name,j,j+1);
  }
}
}
let index =1;
let output ="1";
console.log(name[0]+" "+index);
for(let i = 1; i <marks.length;i++) {
  if(marks[i]==marks[i-1]){
    index = index;
  }else{
    index=i+1;
  }
  console.log(name[i]+" "+index)
}

}
 
    if (process.env.USER=== "anmolkumar") {
      runProgram(`6
      rancho 45
      chatur 32
      raju 30
      farhan 28
      virus 32
      joy 45`);
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