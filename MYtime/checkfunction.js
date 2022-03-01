var arr=[1,2,3,4,5];
var N=arr.length;
function reverse(arr,start,end){
    var n=Math.floor((start+end)/2);
    for(i=0;i<=n;i++){
        var temp=arr[i];
        arr[i]=arr[end-1-i];
        arr[end-1-i]=temp;
    }
    return arr;
}
console.log(reverse(arr,0,N))