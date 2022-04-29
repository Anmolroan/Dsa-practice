
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   let cur =head;
   let prev;
   let i =0;
   while(i<position){
       prev=cur;
       cur=cur.next;
       i++;
   }
   prev.next=cur.next;
   cur.next =null;
   return head;
}

