var hasCycle = function(head) {
    let cur=head;
    if(cur===null||cur.next==null){
    return false
    }
    while(cur.next!=null){
        cur.val="X";
        cur=cur.next;
        
        if(cur.val==="X"){
            return true;
        }
    }
    return false
};