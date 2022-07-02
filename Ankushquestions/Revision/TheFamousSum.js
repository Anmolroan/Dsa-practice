function runProgram(input) {
    // Write code here
   var [n,k]=input.trim().split(" ");
   find(n,+k);
  }
  function find(n,k) {
    function sumdigit(v) {
        let sum =0;
       for(let i =0;i<v.length;i++){
        sum =sum+(+v[i]);
       }
      
        return sum;
    }
   

    let cur =sumdigit(n)*k;
  
    function rec(cur) {
        if(cur<=9){
            return cur;
        }else{
           return rec(sumdigit(cur.toString()));
        
        }
    }
  
    if(cur<=9){
        console.log(cur);
    }else{
       console.log(rec(cur));
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`861568688536788 100000`);
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