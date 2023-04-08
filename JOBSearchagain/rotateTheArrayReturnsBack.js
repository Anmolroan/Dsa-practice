function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        const [n,k] = input[line++].trim().split(' ').map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        main(n,k,arr)
    }
   
  }
function main(n,k,arr){
    // for(let i=0; i<k; i++){
    //     let temp =arr[n-1];
    //     for(let j=n-1;j>=0;j--){
    //         arr[j]=arr[j-1];

    //     };
    //     arr[0]=temp
    // };
    // console.log(arr.join(" "));
    const reverseList = (i,j)=>{
        while(i<j){
            let temp =arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;
            j--;
        }
       
    }
    k=k%n;
    reverseList(0,n-1);
    reverseList(0,k-1);
    reverseList(k,n-1)
    console.log(arr.join(" "))
   

}

  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
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