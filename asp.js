var arr= ["apple", "windows", "ubuntu", "cola", "system"];
function find(abc){
    if(abc[0]=="a"||abc[abc.length-1]=="a"){
        return abc
    }
}
console.log(arr.filter(find))
