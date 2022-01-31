var nums =[1,1,5];
let ma =[];
let N = nums.length;
function swap(a,b,nums){
    var temp=nums[a]
   nums[a]=nums[b];
   nums[b]=temp;

}
function permute(nums,curr){
    if(curr==N){
        ma.push(nums.join(""))
        return
    }
    for(let i =curr;i<N;i++){
        swap(i,curr,nums)
        permute(nums,curr+1)
        swap(i,curr,nums)
    }
  }
  permute(nums,0);
 ma.sort((a,b)=>a-b);
//   console.log(nums.join(""))
  var r =nums.join("");
  let index =null;
  for(let i =0;i<ma.length;i++){
      if(r==ma[i]){
         index =i;
          break;
      }
  };
  console.log(ma)
  if(index!=ma.length-1){
      console.log( ma[index+1].split("").map(Number));
  }else{
    console.log( ma[0].split("").map(Number));
  }
