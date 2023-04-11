const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMaximum = function (head) {
    let index =findMaximumIndex(head);
    let curr =head;
    let i = 0;
    let prev=null;
    if(head===null){
        return null
    }
    else if(index===0 ){
        curr =curr.next
        head =curr;
    }else{
        while(i<index&&curr.next!=null){
        prev =curr;
        curr=curr.next;
        i++;
    }
       prev.next =curr.next;
    }
    
 
    return head;
};

function findMaximumIndex(head){
    let curr =head;
    let max =-Infinity;
    let index;
    let i =0;
    while(curr){
        if(curr.data>max){
            max =curr.data;
            index =i;
        }
        curr=curr.next;
        i++;
    }
    return index;
}
