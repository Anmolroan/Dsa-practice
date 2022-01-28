function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let test =+input[0];
    let line =1;
for(let i=0; i<test; i++) {
let str1 =input[line++].trim();
let str2 =input[line++].trim();
anagram(str1,str2);
}
   
  }
  function anagram(str1,str2){
      let flag ="True";
      str1.split("").sort().join("");
      str2.split("").sort().join("");
      let obj1={};
      let obj2={};
      let count =0;
      if(str1.length!=str2.length){
          flag="False"
      }else{
        for(let i=0;i<str1.length;i++){
if(obj1[str1[i]]===undefined){
obj1[str1[i]]=1;
}else{
    obj1[str1[i]]=obj1[str1[i]]+1
}
        }

        for(let i=0;i<str2.length;i++){
            if(obj2[str2[i]]===undefined){
                obj2[str2[i]]=1;
                }else{
                    obj2[str2[i]]=obj2[str2[i]]+1
                }
        }
      
        
        for(let key in obj1){
            for(let k in obj2){
              if(key==k){
                  count++;
                  if(obj1[key]!=obj2[key]){
                      flag="False";
                  }
              }
            }
        }
        if(count!=str1.length){
            flag="False";
        }
      }
 console.log(flag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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