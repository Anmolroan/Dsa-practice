
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
     let cur =head;
     let node =new LinkedListNode(data)
     if(head===null){
         head =node;
     }else{
        while (cur.next!=null){
        cur =cur.next;
    }
    cur.next =node;
     }
    return head;
}

