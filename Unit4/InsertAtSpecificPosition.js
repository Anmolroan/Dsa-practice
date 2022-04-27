const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    const node1 =new LinkedListNode(data);
    if(head===null){
        head=node1
        return head;
    }else{
        cur = head;
        let i=0;
        while(i<position){
            prev =cur
            cur=cur.next;
            i++
        }
        prev.next=node1;
        node1.next=cur;
        return head;
        
    }
}