
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let node = new LinkedListNode(data);
    if(position===0){
        node.next =head;
        head =node;
        
    }else{
        let cur =head;
        let i =0;
        let prev=cur;
        while(i<position){
            prev=cur;
            cur =cur.next;
            i++;
        }
        prev.next =node ;
        node.next =cur;
        
    }
    return head;
}

