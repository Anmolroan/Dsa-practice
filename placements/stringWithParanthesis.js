function runProgram(input) {
    // Write code here
   input=input.trim();
    let arr =input.split("");
    arr=arr.filter((el)=>{
        if(el==="("||el==")"||el=='['||el==']'||el=='{'||el=='}'){
            return el;
        }
    })
   main(arr);
  }
  function main(arr) {
    let stack = [];
    let top =-1;
    flag=true;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==="("||arr[i]=="{"||arr[i]=='['){
            stack.push(arr[i]);
            top++;
        }else if(arr[i]===")"||arr[i]=="}"||arr[i]==']'){
            console.log(arr[i],stack[top])
            if(arr[i]+stack[top]==="[]"||arr[i]+stack[top]==='{}'||arr[i]+stack[top]==='()'){
                stack.pop();
                top--;
            }else{
                flag=false;
            }
        }
        
    }
    console.log(stack)
    if(stack.length>0||!flag){
        console.log("unbalanced")
    }else{
        console.log("balanced")
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`{(([])[])[]]} `);
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