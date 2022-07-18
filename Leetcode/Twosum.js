let nums = [2,7,11,15];
let  target = 9;
let arr=[];
nums.map((e,i) =>{
    arr.push(i)
});
for(let i = 0; i < nums.length; i++){
    for(let j = 0; j <nums.length-i-1;j++){
        if(nums[j]>nums[j+1]){
            [nums[j], nums[j+1]]=[nums[j+1], nums[j]];
            [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
        }
    }
}

let i =0;
let j = nums.length - 1;
while(i<j){
let sum=nums[i]+nums[j];

if(sum===target){
    console.log(arr[i],arr[j]);
    break;
}
else if(sum<target){
    i++;
}else if(sum>target){
    j--;
}
}