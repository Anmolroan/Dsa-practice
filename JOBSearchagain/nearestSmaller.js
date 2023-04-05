function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
        let arr =input[line++].trim().split(" ").map(Number);
        main(N,arr);
    }
   
  }

  function main(N,arr){
    let stack = [];
    let top =-1;
    let left =[];
    for(let i =0;i<arr.length;i++){
        while(stack.length>0&&arr[stack[top]]>=arr[i]){
            stack.pop();
            top--;
        };
        if(stack.length>0){
            left.push(stack[top])
        }else{
            left.push(-1)
        }
        stack.push(i);
        top++;
    };

    let right =[];
    let stack1=[];
    let t=-1
    for(let i =arr.length-1;i>=0;i--){
        while(stack1.length>0&&arr[stack1[t]]>=arr[i]){
            stack1.pop();
            t--;
        };
        if(stack1.length>0){
            right.push(stack1[t])
        }else{
            right.push(-1)
        }
        stack1.push(i);
        t++;
    };
    right =right.reverse();
    let ans =[];
    for(let i =0;i<arr.length;i++){
        if(left[i]===-1&&right[i]===-1){
            ans.push(-1)
        }else if(left[i]===-1){
            ans.push(arr[right[i]])
        }else if(right[i]===-1){
            ans.push(arr[left[i]])
        }else{
            let l = Math.abs(i-left[i]);
            let r= Math.abs(i-right[i]);
            if(l<r){
                ans.push(arr[left[i]])
            }else if(l>r){
                ans.push(arr[right[i]])
            }else{
                ans.push(arr[left[i]])
            }
        }
    }
    console.log(ans.join(" "))
 
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
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

//   5 6 6 -1 4 5 5 -1 -1