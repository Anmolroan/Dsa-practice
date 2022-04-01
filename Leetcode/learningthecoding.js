function processData(input) {
    //Enter your code here
   input=input.trim();
        var lower =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var obj={};
    for(let i =0;i<lower.length;i++){
        obj[lower[i]]=1;
    };
  
    var low =0;
    for(let i =0;i<input.length;i++){
        if(obj[input[i]]===1){
            low++;
        }
    }
    let upper = input.length-low
    
                if(low<upper){
        console.log(input.toUpperCase())
    }else{
        console.log(input.toLowerCase())
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
