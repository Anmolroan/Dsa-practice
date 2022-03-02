function runProgram(input){
    input = input.split("\n");
    var tc = +input[0];
    var l= 1;
    for(var i=0; i<tc; i++){
        var N = +input[l++];
        var arr = input[l++].split(" ").map(Number)
        funl(N,arr)
    }
    
}
function funl(N,arr){
    var s = [];
    var a = [];
    
    for(var i=0; i<N; i++){
        while(s.length!=0 && s[s.length-1]<=arr[i]){
            s.pop()
        }
        if(s.length>0&&s[s.length-1]>arr[i]){
            a.push(s[s.length-1]);
        }
        else{
            a.push(-1);
        }
        s.push(arr[i])
    }
    console.log(a.join(" "))
}

 

if (process.env.USER === "") {
  runProgram(``);
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
    process.exit(0);
  });
}