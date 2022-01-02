// function printMasaiSchool(num) {
//     // Write code here
//     for(let i =0;i<num;i++) {
//         console.log("Masai School")
//     }
  
// }
// printMasaiSchool(5);

function loop1toN(num) {
    // Write code here
    for(let i = 1; i < num; i++) {
        console.log(i)
    }
}
function fromAtoB(max,min){
    //write code here
    for(let i =min;i< max; i++){
        console.log(i)
    }
    
}
function multiplicationTableN(num) {
    // Write code here
    for(let i =1; i <= 10; i++){
console.log(i*num)
    }
    
}
function moveTwoAhead(num) {
    // Write code here
    for(let i =1; i <=num; i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
function moveTwoAheadII(num) {
    // Write code here
    for(let i =1; i <=num; i++){
        if(i%2==0){
            console.log(i)
        }
    }
    
}
function evenSumBelowN(num) {
    // Write code here
    var sum =0;
    for(let i =0; i <=num; i++){
        if(i%2==0){
           sum =sum+i;
        }
    }
    console.log(sum);
}
function oddSumBelowN(num) {
    // Write code here
    var sum =0;
    for(let i =0; i <=num; i++){
        if(i%2!==0){
           sum =sum+i;
        }
    }
    console.log(sum);
}
function modeof10(num) {
    // Write code here;
    for(let i =1;i<=num; i++){
        console.log(i%10)
    }
}