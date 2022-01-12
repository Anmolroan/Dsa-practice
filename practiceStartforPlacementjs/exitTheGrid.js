function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let test=+input[0];
    let line=1;
    for(let i=0;i<test;i++){
        let n=+input[line++];
        let arr=[];
        for(let j=0;j<n;j++){
            let a=input[line++].trim().split('');
            arr.push(a);
        }
        console.log(exitTheGrid(arr));
    }
   
  }
  function exitTheGrid(arr){
     let i =0;
     let j =0;
     var count=0;
     while(i<arr.length&&j<arr.length&&i>=0&&j>=0){
         if(arr[i][j]=="X"){
            
             return 0;
         }
         if(arr[i][j]=="R"){
          
             arr[i][j]="X";
             count++
             j++;
         }
        else if(arr[i][j]=="L"){
            count++
            arr[i][j]="X";
            j--;;
        }
        else if(arr[i][j]=="U"){
            count++
            arr[i][j]="X";
            i--;
        }
        else if(arr[i][j]=="D"){
            count++
            arr[i][j]="X";
            i++;
        }
     }
     return count;
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