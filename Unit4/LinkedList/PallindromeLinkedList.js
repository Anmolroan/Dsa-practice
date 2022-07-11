const LinkedListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};
let arr =[1,2,2,1];
let head = new LinkedListNode(arr[0]);
let i =1;
let cur=head;
while(i<arr.length){
let temp =new LinkedListNode(arr[i]);
    cur.next=temp;
    cur=cur.next;
    i++;
};
var isPalindrome = function(head) {
 
    let cur=head;
    let prev=cur;
    let n =null;
    let stack = [];
    stack.push(head.val);
    let i=0;
    while(cur!=null){
        prev=cur;
       cur =cur.next;
       if(cur!=null){
        stack.push(cur.val);
       }
      
       prev.next=n;
       n=prev;
        i++;
        
    }
   while(n!=null){
    if(stack[stack.length-1]===n.val){
        stack.pop();
    }
    n=n.next
   }

if(stack.length===0){
    return true;
}
return false;
 
};
console.log(isPalindrome(head) );