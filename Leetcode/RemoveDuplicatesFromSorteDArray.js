let nums= [0,0,1,1,1,2,2,3,3,4];
var removeDuplicates = function(nums) {
   let i =0;
   let j =1;
   let count=0;
   while(i<j&&j<nums.length){
    if(nums[i]===nums[j]){
        j++;
    }else{
        i++;
        nums[i]=nums[j];
        count++;
    }
   }
   for(let i =count;i<nums.length;i++){
    nums[i]=undefined;
   }
   return nums;
};
removeDuplicates(nums);
