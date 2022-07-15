const LinkedListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};
let arr =[1,2,3,4,5,6];
let head = new LinkedListNode(arr[0]);
let i =1;
let cur=head;
while(i<arr.length){
let temp =new LinkedListNode(arr[i]);
    cur.next=temp;
    cur=cur.next;
    i++;
};
var middleNode = function(head) {
    let s=head;
    let f=head;
    while(s.next!=null&&f.next!=null){
        s=s.next;
        if(f.next.next!=null){
            f=f.next.next;
        }else{
            f=f.next
        }
       
    }
    if(f===null){
        return s.next;
    }else{
        return s;
    }
    
};
console.log(middleNode(head));