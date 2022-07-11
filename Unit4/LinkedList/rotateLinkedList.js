const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
let arr =[1,2,3,4,5];
let head = new LinkedListNode(arr[0]);
let i =1;
let cur=head;
while(i<arr.length){
let temp =new LinkedListNode(arr[i]);
    cur.next=temp;
    cur=cur.next;
    i++;
}

var reverseList = function(head) {
    let cur=head;
    let prev=cur;
    let n=null;
   while(cur!=null){
       prev=cur;
       cur =cur.next;
       prev.next=n;
       n=prev;
       head =n
   }
    return head;
};
console.log(reverseList(head));