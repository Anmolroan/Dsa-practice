function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i=0; i<tc; i++){
    let [N,M]=input[line++].trim().split(" ").map(Number);
    let matrix=[];
    for(let j =0;j<N; j++){
        let temp=input[line++].trim().split("");
        matrix.push(temp)
    }
    let str=input[line++].trim();
    main(matrix,N,M,str);
   }
  }
  function main(matrix,N,M,str) {
   
    let j =0;
    let i =0;
    let count=0;
    while(i<str.length){
        let j =i%N;
       
        for(let k=0;k<matrix[j].length;k++){
            if(matrix[j][k]===str[i]){
                count++;
                break;
            }
        }
        i++;
   }
   if(count===str.length){
    console.log("Yes")
   }else{
    console.log("No")
   }
}
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    12 10
    rtfjquabwb
    uhttieiwqd
    wuiexnmqse
    glzlurhxud
    aomtjvxrtp
    wrjhviukyo
    qgbpuwjdvd
    jvuvodsnxo
    cvfncdvynv
    odequyofbj
    jkgfiwkajh
    olfwahzxio
    wtwop
    `);
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