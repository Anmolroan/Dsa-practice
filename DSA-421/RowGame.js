function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let line =1;
    let tc =+input[0];
    for(let i=0;i<tc;i++){
        let [n,m]=input[line++].trim().split(" ").map(Number);
        let matrix=[]
        for(let j =0;j<n;j++){
            let temp =input[line++].trim().split(" ").map(Number);
            matrix.push(temp)
        }
       main(matrix,n,m)
    }
   
  }
  function main(matrix,n,m){
      
      for(let i =0;i<n;i++){
        let obj ={};
          for(let j =0;j<m;j++){
              if(obj[matrix[i][j]]===undefined){
                  obj[matrix[i][j]]=1;
              }
          }
          let temp =[];
          for (key in obj){
              temp.push(+key);
          }
          matrix[i]=temp;
      }
     
      let obj ={};
      for(let i =0;i<n;i++){
        
          for(let j =0;j<matrix[i].length;j++){
              if(obj[matrix[i][j]]===undefined){
                  obj[matrix[i][j]]=1;
              }else{
                  obj[matrix[i][j]]=obj[matrix[i][j]]+1;
              }
          }
         
          
      }
     
      let count =0;
      for(key in obj){
          if(obj[key]===n){
              count++;
          }
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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