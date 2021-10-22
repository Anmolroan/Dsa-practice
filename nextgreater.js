// var arr=[];
// var stack=[];
var q=[4,5,2,25];
// var top=-1;
// for(let i =q.length-1;i>=0;i--){
//     while(q.length!=0&&q[stack[top]]<=q[i]){
//         stack.pop();
//         top--;
//     }
//     if(q.length!=0&&q[stack[top]]>q[i]){
//         arr.push(stack[top]);
//     }
//     else {
//         arr.push(-1)
//     }
//     stack.push(i)
//     top++;
// }
// right=arr.reverse();
var arr=[];
var stack=[];
var top=-1
for(let i =0;i<q.length;i++){
    while(q.length!=0&&q[stack[top]]<=q[i]){
        stack.pop();
        top--;
    }
    if(q.length!=0&&q[stack[top]]>q[i]){
        arr.push(stack[top]);
    }
    else {
        arr.push(-1)
    }
    stack.push(i)
    top++;
}
left=arr;



console.log(arr)


