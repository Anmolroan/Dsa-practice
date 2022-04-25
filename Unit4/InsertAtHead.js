const LinkedListNode =class{
    constructor(item){
        this.data =item;
        this.next=null
    }
}
const node1 =new LinkedListNode(4)

function add(head,data){
    let node2 = new LinkedListNode(data)
    if(head===null){
        head =node1
        return head;
    }else{
        node2.next=head;
        head =node2;
        return head;
    }
}
add(node1,3);
function print(head){
    cur =head;
    while(cur!=null){
        console.log(cur.data);
        cur =cur.next
    }
}

function InsertAtEnd(head,data){
     const node1=new LinkedListNode(data);
    
        cur =head;

        while(cur!=null){
            cur=cur.next;
        }
        // console.log(cur)
        cur=node1;
        // console.log(cur)
        
    
}
InsertAtEnd(node1,60)
print(node1);