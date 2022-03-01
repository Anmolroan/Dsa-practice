function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i=0;i<test;i++){
        var matrix=[];
        var N=+input[line++];
        for( let j=1;j<=N;j++){
            var arr=input[line++].trim().split("");
           matrix.push(arr)
        }
       console.log(findroad(matrix))
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    4 
    RRRR
    LLLL
    UUUU
    DDDD
    3
    LRL
    UUU
    DLR
    2
    RL
    DD
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
  function findroad(arr){


    count = 0;
        i = 0;
        j = 0;
        while(i >= 0 && j >= 0 && i < arr.length && j < arr.length){
            if (arr[i][j] == 'X') {return 0;}
            if (arr[i][j] == 'L'){
                arr[i][j] = 'X';
                j--;
            }
            else if (arr[i][j] == 'R'){
                arr[i][j] = 'X';
                j++;
            }
            else if (arr[i][j] == 'U'){
                arr[i][j] = 'X';
                i--;
            }
            else{
                arr[i][j] = 'X';
                i++;
            }
            count++;
        }
        return count;


  
  }
  