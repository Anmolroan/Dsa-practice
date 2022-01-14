function runProgram(input) {
    // Write code here
input=input.trim().split("\n");
var N=+input[0];
var matrix=[];
for(let i=1;i<=N;i++){
    var arr=input[i].trim().split(" ")
    matrix.push(arr)
}
   find(matrix)
  }
  function find(matrix){
      let ma =[];
      let team1 =[];
      let team2 =[];
      let team3 =[];
      let team4 =[];
    //   ma.push(team1);
    //   ma.push(team2);
    //   ma.push(team3);
    //   ma.push(team4);
    var temp=[];
      for(let i =0;i<matrix.length;i++){
          if(matrix[i][0]==="E"){
              if(matrix[i][1]=="1"){
                  ma.push(temp);
                  ma[0].push(matrix[i][2])
              }else if(matrix[i][1]=="2"){
                ma.push(temp);
                  ma[1].push(matrix[i][2]);
              }else if(matrix[i][1]=="3"){
                ma.push(temp);
                  ma[2].push(matrix[i][2]);
              }else{
                ma.push(temp);
                  ma[3].push(matrix[i][2]);
              }
            }
        //   else if(matrix[i][0]==="D"){
        //       if(ma[0].length!=0){
        //           console.log("1"+" "+ma[0][0]);
        //           ma[0].shift();
        //       }else if(ma[1].length!=0){
        //         console.log("2"+" "+ma[1][0]);
        //         ma[1].shift();
        //       }else if(ma[2].length!=0){
        //         console.log("3"+" "+ma[2][0]);
        //         ma[2].shift();
        //       }else if(ma[3].length!=0){
        //         console.log("4"+" "+ma[3][0]);
        //         ma[3].shift();
        //       }
         
        // }

          
      }
     
     console.log(ma)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    E 1 1
    E 2 1
    E 1 2
    D
    D`);
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