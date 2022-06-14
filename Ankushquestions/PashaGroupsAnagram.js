function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i=0;i<tc;i++){
let N =+input[line++];
let arr=[]
for(let j=0;j<N;j++){
arr.push(input[line++].trim())
}
arr.sort();
main(arr,N)
   }
  }
  function main(arr,N) {
    let matrix=[];
    let array=[];
    array.push(arr[0])
    matrix.push(array);
    
    for(let i=1;i<arr.length;i++){
        let j =0;
        let flag = false;
        while(j<matrix.length){
            if(matrix[j][0].split("").sort().join("")===arr[i].split("").sort().join("")){
                matrix[j].push(arr[i]);
                flag=true;
                break;
            }else{
                j++;
            }
           
        }
        if(!flag){
            let temp =[];
            temp.push(arr[i])
            matrix.push(temp)
        }
    }
    for(let i=0;i<matrix.length;i++){
        console.log(matrix[i].length);
        for(let j=0;j<matrix[i].length;j++){
            console.log(matrix[i][j])
        }
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    6
    eat
    tea
    tan
    ate
    nat
    bat
    3
    abc
    abc
    def`);
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