const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    let s =head;
    let fast =head;
    while(fast&&fast.next){
        s=s.next;
        fast=fast.next.next;
    }
    return s.data;
};