function runProgram(input) {
    // Write code here;
    let str=input.trim();
    main(str);
   
  };
  function checkVowels(str){
    let obj={};
    let string="";
    for(let k =0;k<str.length;k++) {
        if(str[k]==="a"  || str[k]==="i" || str[k]==="o" || str[k]==="u"){
            obj[str[k]]=1;
        }
    }
    for(key in obj ){
        string=string+key;
    }
    ;
    let vowels = string.trim().split("").sort().join("");
    return vowels;
  }

  function main(str){
   
let vInStr = checkVowels("coronavirus");
let count=0;
for(let i =0;i<str.length;i++){
    let subs=str[i];
    for(let j =i+1;j<str.length;j++){
        subs=subs+str[j];
        let vinsubs = checkVowels(subs);
        if(vinsubs===vInStr){
            count++;
        }
    }
}
console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`pandemicsituation`);
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