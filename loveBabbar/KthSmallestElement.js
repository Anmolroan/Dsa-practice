class Solution {
    kthSmallest(arr,l,r,k){
      //code here
      arr.sort((a,b)=>a-b);
      let result =arr[k-1];
      return result
    }
  }
//   Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

//   Example 1:
  
//   Input:
//   N = 6
//   arr[] = 7 10 4 3 20 15
//   K = 3
//   Output : 7
//   Explanation :
//   3rd smallest element in the given 
//   array is 7.
