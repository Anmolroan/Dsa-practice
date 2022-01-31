var N = 3;
let arr  = [10, 10, 10];

var count =0;
    console.log(arr);
    function merge(a,l,mid,r){
        var i =l;
        var j=mid+1;
        var ma=[];
        var k=l;
       
        while(i<=mid&&j<=r){
            if(a[i]<=a[j]){
               ma[k]=a[i];
              
                i++;
            }
            else{
               ma[k]=a[j];
               count=count+(mid-i)+1;
                j++;
                
            }
            k++;
        }
        if(i>mid){
          while(j<=r){
           ma[k]=a[j]
            j++;
            k++;
          }
        }
        else{
          while(i<=mid){
           ma[k]=a[i]
            i++;
            k++;
          }
        }
    for(let i =l;i<=r;i++){
   a[i]=ma[i];
    }

    }

    // merge(arr,0,5,7);
    // console.log(arr)
    
  mregeSort=(a,l,r)=>{
      if(l<r){
          var mid =Math.floor((l+r)/2);
          mregeSort(a,l,mid)
          mregeSort(a,mid+1,r)
          merge(a,l,mid,r)
      }
      else{
          return;
      }
  }
  mregeSort(arr,0,N-1);
  console.log(arr);
  console.log(count);
