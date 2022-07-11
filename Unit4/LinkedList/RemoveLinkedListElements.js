const LinkedListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};
let arr =[1,2,6,3,4,5,7];
let head = new LinkedListNode(arr[0]);
let i =1;
let cur=head;
while(i<arr.length){
let temp =new LinkedListNode(arr[i]);
    cur.next=temp;
    cur=cur.next;
    i++;
};
var removeElements = function(head, val) {
    let cur =head;
    if(cur.val===val){
        cur=cur.next;
        head=cur;
    }
   let prev=cur;
    while(cur.next!=null){
        prev=cur
        cur=cur.next;
        if(cur.val===val){
           prev.next=cur.next;
            
        }
         
        
        
    }
    // if(cur.val===val){
    //     cur=cur.next;
    
    // }
    return head
};
console.log(removeElements(head,6))