let nums=[-1,0,1,2,-1,-4]

var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let set=new Set();
    let obj={}
    for(let i=0;i<nums.length-2;i++){

    let j =i+1;
    let k =nums.length-1;
    while(j<k){
        let sum =nums[i]+nums[j]+nums[k];
       

        if(sum<0){
            j++;
        }else if(sum>0){
            k--;
        }else{
            
          let temp=[nums[i],nums[j],nums[k]];
         
           if(obj[temp]===undefined){
               obj[temp]=1;
                set.add(temp)
           }
           
            k--;

        }
    }
}



return Array.from(set)
}

console.log(threeSum(nums))