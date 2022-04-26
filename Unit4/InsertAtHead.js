const LinkedListNode =class{
    constructor(item){
        this.data =item;
        this.next=null
    }
}

const Node  =class {
    constructor(item){
        this.data=item;
        this.next =null;
    }
}

const firstNode =new Node(4)

const secondNode =new Node(5)
firstNode.next = secondNode;

console.log(firstNode.next);
// console.log(secondNode);

function addAtZero(head,data){
const ThirdNode =new Node(data);
ThirdNode.next = head;
head=ThirdNode;
console.log(head);
}

addAtZero(firstNode,6)

function AddAtTail(head,data){
var FourthNode =new Node(data);
let cur =head;
while(cur.next!==null){
    cur=cur.next;
}
cur.next=FourthNode;
console.log(head);
}

AddAtTail(firstNode,7)
// const node1 =new LinkedListNode(4)

// function add(head,data){
//     let node2 = new LinkedListNode(data)
//     if(head===null){
//         head =node1
//         return head;
//     }else{
//         node2.next=head;
//         head =node2;
//         return head;
//     }
// }
// add(node1,3);
// function print(head){
//     cur =head;
//     while(cur!=null){
//         console.log(cur.data);
//         cur =cur.next
//     }
// }

// function InsertAtEnd(head,data){
//      const node1=new LinkedListNode(data);
    
//         cur =head;

//         while(cur!=null){
//             cur=cur.next;
//         }
//         // console.log(cur)
//         cur=node1;
//         // console.log(cur)
        
    
// }
// InsertAtEnd(node1,60)
// print(node1);