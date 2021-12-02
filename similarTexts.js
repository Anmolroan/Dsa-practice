function runProgram(input) {
    // Write code here
   input= input.trim().split("\n");
   let string1 =input[0].trim();
   let string2 =input[1].trim();
   findSimilar(string1,string2)
  }
  function findSimilar(string1,string2){
      var obj ={};
      for(let i =0;i<string1.length;i++){
          var char =string1[i];
          if(obj[char]===undefined){
              obj[char]=1;
          }
        //   else{
        //       obj[char]=obj[char]+1
        //   }
      }
      console.log(obj);
      var obj1 ={};
      for(let i =0;i<string2.length;i++){
          var char =string2[i];
          if(obj1[char]===undefined){
              obj1[char]=1;
          }
        // else{
        //       obj1[char]=obj1[char]+1
        //   }
      }
      console.log(obj1);
      var sum=0;
      var arr1 =[];
      arr2 =[]
      for(key in obj){
        arr1.push(key)
      }
      for(key in obj1){
        arr2.push(key)
      }
    console.log(arr1);
    console.log(arr2);
    for(let i =0;i<arr1.length;i++){
        for(let j =i;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                sum++;
            }
        }
    }
    console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`eziowiomkvrrdzx
    orugiebaolddavd`);
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