var arr=[1,2,3,4,5,];
var N =5;
function swap(arr,i,j){
    var temp =arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
// swap(arr,0,2);
var mid=N/2;
var i =0;
while(i<mid){
    swap(arr,i,N-1-i);
    i++;
}
console.log(arr);