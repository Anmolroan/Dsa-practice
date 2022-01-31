N = 4, M = 5
 var arr1= [1, 3, 5, 7];
var arr2 = [0, 2, 6, 8, 9];

for(let i = 0; i < N; i++){
    for(let j = 0; j < M; j++){
         if(arr2[j]<arr1[i]){
var temp =arr1[i];
arr1[i]=arr2[j];
arr2[j]=temp;

        }
    }
    
}
console.log(arr1,arr2.sort((a,b)=>a-b))
