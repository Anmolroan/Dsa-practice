function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var N=+input[0];
   var students=[];
   var marks=[];
   var line=1;
   for(var i=1;i<=N;i++){
       var stu=input[i].trim().split(" ");
       
       students.push(stu[0].trim());
       marks.push(+stu[1])
   }
   leaderboard(students,marks)
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
  function leaderboard(students,marks){
  function min(a,b){
    if(a.length<b.length){
      return a.length;
    }
    else if(a.length>b.length){
      return b.length;
    }
    else{
      return a.length;
    }
  }

function swap(arr,a,b){
var temp=arr[a];
arr[a]=arr[b];
arr[b]=temp
}

function checkstring(a,b){
  for(let i=0;i<min(a,b);i++){
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
var n=students.length;
for(let i=0;i<n;i++){
  for(let j=0;j<n-1-i;j++){
    if(checkstring(students[j],students[j+1])===true){
      swap(students,j,j+1);
      swap(marks,j,j+1)
    }
  }
}
for(let i=0;i<n;i++){
  for(let j=0;j<n-1-i;j++){
if(marks[j]<marks[j+1]){
  swap(marks,j,j+1);
  swap(students,j,j+1)
}
  }
}
var index=1;
var array=[];
array.push(index);
for(let i=1;i<n;i++){
  
  if(marks[i]==[marks[i-1]]){
    index=index
  }
  else{
    index=i+1;
  }
  array.push(index);
}
for(let i=0;i<n;i++){
  console.log(array[i]+" "+students[i])
}
  }