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
    let list =null;
    let cur2=list;
    while(cur!=null){
        if(cur.val!=val){
            if(list===null){
                list=new LinkedListNode(cur.val);
                 cur2=list;
            }else{
                let temp =new LinkedListNode(cur.val);
                cur2.next=temp;
                cur2=cur2.next
            }
            
            
        }
        cur=cur.next;
    }
    return list
};
console.log(removeElements(head,6))