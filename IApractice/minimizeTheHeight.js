K= 5, N = 10
var arr  = [2 ,6 ,3 ,4 ,7 ,2 ,10 ,3 ,2 ,1];

// 5
// 10
// 2 6 3 4 7 2 10 3 2 1;


arr.sort((a, b) =>a-b);
console.log(arr)

var min =0
var  max =0
 var ans =[];
for(let i =0;i<N;i++){
    if(arr[i]<K){
       
        min =Math.min(min,arr[i]+K);
       
    }else{
        var r =max -min;
        if(m===null||m>r){
            
        }
        max =Math.max(max,arr[i]-K);
    }
       
}
console.log(min,max);

