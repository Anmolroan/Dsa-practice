
n = 11 ;

 var arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
 let dp=[];
 for(let i =0;i<n;i++){
dp[i]=Infinity
 }
 console.log(dp)
    dp[0]=0;
    
    for(let i=1;i<n;i++){
        for(let j=0;j<i;j++){
            if(arr[j]+j>=i){
                dp[i]=Math.min(dp[i],dp[j]+1);
            }
        }
    }
    console.log(Math.max(...dp));