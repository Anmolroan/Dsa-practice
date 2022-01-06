// Given an input of products in the below format (Name Quantity Price)
// Input
// Rice 2 60
// Dal 3 50
// Salt 1 20
// Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}
// The object must have a method called total which calculates the total values of items (multiplying quantity of each with its price)
// Sample output for the above case 290
// Submission Image/Video Instructions

// var obj={
//   data:[],
  
//   addCart:function(nm,q,p){
//     var market={
//       name:nm,
//       quant:q,
//       price:p
//     }
//     this.data.push(market)
//   },
//   total:function(arr){
//     var count=0;
//     for(i=0;i<arr.length;i++){
//       var object=arr[i]
//       count=count+(object.quant*object.price)
//     }
//     console.log(count);
//   }

  
// }

// obj.addCart("rice",2,60);

// obj.addCart("Dal",3,50)

// obj.addCart("rice",1,20)


//  console.log(obj.data)
// obj.total(obj.data)
// Sample Output
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90

var details=
[
  {
      grade: "V",
      students: [
          {name: "Nrupul", marks: [10, 20, 30]},
          {name: "Prateek", marks: [20, 30, 40]}
      ]
  },
  {
      grade: "VI",
      students: [
          {name: "Aman", marks: [10, 20, 30]},
          {name: "Albert", marks: [20, 30, 40]}
      ]
  },
  {
      grade: "VII",
      students: [
          {name: "Yogesh", marks: [10, 20, 30]},
          {name: "Sandhya", marks: [20, 30, 40]}
      ]
  }
]
 




















// var str="MasAi"
// var c =str.length;
// //  up=str.toUpperCase()
// // console.log(up)










//  var output="";
//  var arr =[];
// for(i=1;input%16!=0;i++){
//   output=output+input%16;

//   input=(input-(input%16))/16

// } 
// var m=output.length;
// var output2="";
// for(j=m-1;j>=0;j--){
//   output2=output2+output[j]
// }
// // console.log(output2)



//  var string="anmol aaka kaka"
// var n=string.length;
// arr=[];
// var output="";
// for(i=0;i<n;i++){
// if(string[i]!=" "){
//   output=output+string[i]
// }
// else{arr.push(output);
// output="";}

// }arr.push(output);
// console.log(arr);
// console.log(string.split(" "));


// console.log(array1);
// array1.toString

// console.log(array1)


// var arr =[-2, 0, 8, 4]
// var n=arr.length;
// for(i=0;i<n;i++){
    
//   var subs=0;
  
//   for(j=0;j<n;j++){
//   if(arr[i]<arr[j]){
//     subs++;
//     if(subs==n-1){console.log(arr[i])}
//   }
//   else{continue;}
  
  
//   }}

//   for(l=0;l<n;l++){
//     var count=0;
//   for(k=0;k<n;k++){
//     if(arr[l]>arr[k]){
//       count++
//       if(count==n-1){
//         console.log(arr[l])
//       }
//     }
//     else{continue;}
//   }
//   }













// You are provided an arrayarrwhich hasnintegers.

// You need to find the count of all such integers in array which are larger than its neighbours.

// Neighbours of a integer in array are its adjacent integers. Check hint for more understanding.

// var arr=[1,2, 3, 4, 2, 1, 6, 5]
// var n=arr.length;
// var count=0;
// for(i=0;i<n;i++){
//   if(i==0){if(arr[i]>arr[i+1]){
//     count++
//   }

//   }
//   else if(i>0&&i<n-1){
//     if(arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
//       count++
//     }
//   }
//   else if(i==n-1)[
//     if(arr[i]>arr[i-1]){
//       count++
//     }
//   ]
// }
// console.log(count);






//  var n=170;
//   var bill=0;
//   bill1=0;
//   bill2=0;
//   bill3=0;
//   for(i=0;i<=n;i++){
//   if(i>=0&&i<=50){bill1=bill1+(i*3)}

//    if(i>50&&i<=150){
//   bill2=bill2+(i*5)
//   }
   
//     if(i>150){bill3=bill3+(i*10);}
  
//   }console.log(bill1+bill2+bill3+80);
// var number =971;
// var result=0;
// var rem =0;
// while(number !=0){
// rem =number%10;
// result=result*10+rem;
// number = (number-rem)/10




// }console.log(result);









// Description
// You are given a number, stored in a variable with the namenum

// You have to printnumlines, and on each line print all the numbers from 1 to the value stored innum

// For example, if the value stored innum = 5, then the required output is

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// 

// var starting = 10;
// var ending = 25;
// while(starting<=ending){
//   console.log(starting)
//   starting++;
// }
// var limit = 44;
// var i = 1;
// while(i<=limit){
//   if(i%2!=0){
//     console.log(i);
  
//   }  i++;
// }


// var limit =6;
// var i =1;
// var sum =0;
// while(i<=limit){
//   if(i%3==0){sum=sum+i}
//   i++

// }  console.log(sum);

// var i=1;
// var limit =2;
// var sum=0;
// var quantity = 0;
// while(i<=limit){
// sum=sum+i;
// quantity++;
// i++;

// }console.log(sum/quantity);
// console.log(quantity);


// var i= 1;
// var limit=10;
// var quant=0;
// var sum=0;
// while(i<=limit){
// if(i%2==0){
//   sum=sum+i;
//   quant++;
  

// }i++;


// }console.log(sum/quant);
// console.log(quant);
// var sum=0;
// var quant =0;
// for(i=1;i<=10;i++){
//   if(i%2==0){sum=sum+i;
//   quant++;
  
//   }

// }console.log(sum/quant);
// console.log(quant);


// var count =1;
// while(count <=10){
// console.log("anmol");
// count++}

// for(var i=1;i<=count;i++){
//   console.log("Anmol");
// }
// var count =1;
// while( count<=10){
//   console.log(4+count);
//   count++;
// }















// var a= 11;
// var b =a--;
// var c = --a;

// console.log(a);
// console.log(b);
// console.log(c);






// You are given a number, stored in a variable with the namenum

// You have to printnumlines, and on each line print all the numbers from 1 to the value stored innum

// For example, if the value stored innum = 5, then the required output is

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// var num= 5;
// for(i=1;i<=num;i++){
//   output = "";
//   for(j=1;j<=num;j++){
//     output = output+j+" ";

//   }console.log(output);
// }

// You are given a number stored in a variable with the nameN

// You have to printNlines such that on each line you find the sum of all even numbers in the range of[1,i], whereirepresents all the numbers in the range of[1,N]

// For example, consider the value stored inN = 3

// Then, first we find the sum of all even numbers, in the range of [1,1], which comes out to be zero, as there are no even numbers in the range

// Then, we find the sum of all even numbers, in the range of [1,2], which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

// Finally, we find the sum of all even numbers in the range of [1,3], which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

// Therefore, the final output becomes

// 0
// 2
// 2
//  var n=4;
//  for(i=1;i<=n;i++){
// sum=0;
// for(j=1;j<=i;j++){
//   if(j%2==0){
//     sum=sum+j;
//   }
// }console.log(sum);

//  }




// Description
// You are given a number stored in a variable with the nameN

// Print the required pattern, such that for all numbers in the range[1, N], includingN, if the number is odd, print a single_, else printN*without space, on a new line

// For example, consider the value stored inN = 5. Therefore, the required output is

// _
// *****
// _
// *****
// _

// Input
// The first and the only line of the input contains the value stored inN


// Output
// Print the required pattern as shown in the problem statement


// Sample Input 1 
// 6
// Sample Output 1
// _
// ******
// _
// ******
// _
// ******
// var num =6;
// for(i=1;i<=num;i++){
//   output="";
//   for(j=1;j<=num;j++){
//     if(i%2!=0){
//       output="-";

//     }
//     else{output=output+"*";}
//   }console.log(output);
// }




var num=18
// for(i=1;i<=num;i++){
// output="";
// for(j=1;j<=num;j++){
//   if(i==1||i==num||i==2||i==num-1){
//     output=output+"_"+" ";
//   }
//   else{
//     if(j==1||(j==num)||j==2||j==num-1){output=output+"|"+" ";}
//     else{output=output+" "+" "
//     ;}
//   }
// }console.log(output);

// }









// var starting = 10;
// var ending = 25;
// while(starting<=ending){
//   if
//   console.log(starting);
//   starting++;}
// var num=6;
// for(i=1;i<=num;i++){
//   output="";
//   for(j=1;j<=num;j++){
// //     if(i==1){if(j==3||j==4){
// //       output=output+"-"+" ";
// //     }
// // else{output=output+" "+" ";}

//     // }
//      if(i==2){
//       if(j==3||j==4){output=output+"/"+" ";}
//       else{output=output+" "+" ";}
//     }
//     else if(i==3){
//       if(j==2||j==5){output=output+"/"+" "}
//       else{output=output+" "+" ";}
//     }
//     else if(i==4){
//       if(j==1||j==6){output=output+"/"+" ";}
//       else{output=output+" "+" ";}
//     }
//     else{output=output+" "+" ";}
//   }console.log(output);
// }






// var num=4;
// for(i=1;i<=num;i++){
//   output="";
//   for(j=1;j<=num;j++){
//     if(i==num){output=output+"*"+" ";}
//     else{
//       if(j==num){output=output+" "+" ";}
//       else{output=output+"*" +" ";}
//     }
//   }console.log(output);
// }



// var day =6;
// switch(day){
// case 1:
// console.log("mon");
// break;

// case 2:
// console.log("tue");
// break;
// case 3:
// console.log("wed");
// break;
// case 4:
// console.log("thu");
// break;
// case 5:
// console.log("fri");
// break;
// case 6:
// console.log("1weekend");

// case 7:
// console.log("sun");
// break;
// default:
// console.log("week start again");
















// var num =4;
//  count =0;
// for(i=1;i<=num;i++){
//   output = "";
 
//   for(j=1;j<=num;j++){count++;
//   output =output+" "+count;
//   }
  
//   console.log(output);
// }





//   var a=11;
//   var b=17;
  
  
//   for(i=2;i<a;i++){
//  var output1= 0;
//    var count=0;
//     if(a%i==0){output1++;
//     if(output1==0){count++;}}
    
  
  
//   }
//   for(j=2;j<b;j++){
//  var output2= 0;
//    var count1=0;
//     if(b%j==0){output2++;
//      if(output2==0){count1++;}  }
 
//   }
//   var g=count1+count;
//   if(g==2){console.log("True");}
//   else{console.log("False");}
// var a=2;
// var b=a++;
// var c=++a;
// console.log(c);
// for(i=1;i<=5;i++){
// output="";
// for(j=1;j<=5;j++){
//   if(j%2!=0){output=output+"*"+" ";}
//   else{output=output+"- "+" "}
// }

// console.log(output);

// }
// console.log("2");
// var i=1;
// while(i<=5){
//   output="";
//   var j=1;
//   while(j<=5){
//     if(j%2!=0){output=output+"*"+" "}
//     else{output=output+"- "+" ";}
//     j++
//   }
//   i++;
//   console.log(output)
// }
// var a=5;
// var b=5;

 
//   var r1=0;
//    var count =0;
//   for(i=2;i<a;i++){
   
//   if(a%i==0){
//   count++
//   }}if(count==0){
//   console.log("p");} 
  

// var count1=0;
// var r2=0;
// for(j=2;j<b;j++){
// if(b%i==0){count++}
//   if(count==0){r2++}
// }
// if(r2+r1==2){console.log("True");}
// // else{console.log("False");}
// var day =6;
// switch(day){
//   case 1:
//   console.log(1);
//    case 2:
//   console.log(2);
//    case 3:
//   console.log(3);
//    case 4:
//   console.log(4);
//    case 5:
//   console.log(5);
//    case 6:
//   console.log(6);
//   break;
//    case 7:
//   console.log(7);
//    default:
//   console.log("no day");

// }



// var num=5;
// for(i=1;i<=num;i++){
// output="";
// for(j=1;j<=num;j++)
// {if(i<num){output="*"+" ";}

// else{output=output+"*"+" ";}


// }
// console.log(output);

// }
// var i =1;
// var j=1;
// while(i<=5){
//   output="";
  
//   while(j<=5){
//     if(i==num){output= output+"*"+" ";}
//     else{output="*"+" ";}
    
//     j++;
  
//   } console.log(output);
//   i++;

// }
// var N=5;
// for(i=1;i<=N;i++){
// output="";
// for(j=1;j<=N;j++){
//   if(i==1){output=output+"*"+" ";}
//   else{output="*";}
// }
// console.log(output);

// }
// var left =2;
// var right =10;
// for(i=1;i<=right;i++)
// var math =10;
// var name ="Anmol"


// console.log(name )
// console.log(math)
// console.log("Ⓐ");
// var day = "saturday"
// if(day ==="monday"){
//   console.log("class")
// }
// else if(day ==="tuesday"){
//   console.log("class")
// }
// else if(day ==="wed"){
//   console.log("class")
// }
// else{
//   console.log("no class")
// }

// for(var i =1; i <=4; i++){
//   var bag ="";
//   for(var j =1;j<=4; j++){
// bag =bag+"*";
//   }
//   console.log(bag)
// }
var n= 245;
var num =0;
while(n){
  var r = n%10;
  n=(n-r)/10;
  
   num= num*10+r;
   console.log(num)
   console.log(n)
   if(n===0){
     break
   }
   
}
console.log(num)