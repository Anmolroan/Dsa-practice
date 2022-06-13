
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   let i =0;
   let cur =head;
   let prev =cur;
   while(i<position){
       prev =cur;
       cur =cur.next;
       i++;
   }
if(!cur){
    return null
}else{
    prev.next=cur.next;
    return head;
}
}

