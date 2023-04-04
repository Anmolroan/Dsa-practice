function runProgram(input) {
    // Write code here;
    input =input.trim().split('\n');
    let N =+input[0];
    let line =1;
    for(let i =0;i<N;i++){
        main(input[line++].trim())
    }
   
  }
  function main(str){
    // console.log(str);
    // let i =0;
    // let j =str.length-1;
    // let flag=false;
    // while(i<j){
    //     if(str[i]==="("&&str[j]==")" ||str[i]==="{"&&str[j]=="}" ||str[i]==="["&&str[j]=="]"){
    //         flag=true;
    //         i++;
    //         j--;
    //     }else{
    //         flag=false;
    //         break;
    //     }
    // }
    // if(flag){
    //     console.log("balanced")
    // }else{
    //     console.log("unbalanced")
    // }
    let stack =[];
    let top=-1;
    for(let i =0;i<str.length;i++){
        if(stack.lenght!=0 &&stack[top]+str[i]==="()" || stack[top]+str[i]==="{}" ||stack[top]+str[i]==="[]"){
            stack.pop();
            top--;
        }else{
            stack.push(str[i]);
            top++;
        }
        
    }
    if(stack.length>0){
        console.log("not balanced");
    }else{
        console.log("balanced");
    }


  }


  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    {([])}
    ()
    ([]`);
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