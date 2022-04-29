const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    let L =0;
    cur =head;
    while(cur.next!=null){
        cur=cur.next;
        L++;
    }
    let I=(L-n)+1;
    let ncur=head;
    let i =0;
    while(i<I){
        ncur=ncur.next;
        i++;
    }
    return ncur.data
}
