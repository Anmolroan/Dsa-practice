const LinkedListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};
let arr =[1,2,6,3,4,5,6];
let head = new LinkedListNode(arr[0]);
let i =1;
let cur=head;
while(i<arr.length){
let temp =new LinkedListNode(arr[i]);
    cur.next=temp;
    cur=cur.next;
    i++;
};