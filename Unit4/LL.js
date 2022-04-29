const Node =class {
   constructor(item){
       this.song=item;
       
       this.next = null;
   }
}

// console.log(firstNode);

// const secondNode =new Node("chal chaiya chaiya");

// firstNode.next = secondNode;
// console.log(firstNode);
// const ThirdNode =new Node("lolipop lagelau")
// secondNode.next =ThirdNode;
// console.log(firstNode);
// function addAtZero (head,data){
//     const fakeFirstSong = new Node(data);
//     fakeFirstSong.next =head;
//     head = fakeFirstSong;
//     console.log(head);
// }
// addAtZero(firstNode,"baby baby");

const LinkedListNode =class {
    constructor(item){
        this.data=item;
        this.next= null;

    }
}
const firstNode =new LinkedListNode(1);
const secondNode =new LinkedListNode(2)
console.log(firstNode);

firstNode.next= secondNode;
console.log(firstNode);

function addAtZero (head,data){
    const newNode = new LinkedListNode(data);
if(head===null){
    head=newNode;
    return head;
}else{
    newNode.next=head;
    head=newNode;
    return head;
}
}
console.log(addAtZero(firstNode,3))

function addAtEnd(head,data){
    const newNode =new LinkedListNode(data);
    if(head===null){
        head=newNode;
        return head;
    }
    else{
       
        let cur =head;
        while(cur.next!=null){
            cur=cur.next;
        }
        cur.next=newNode;
        return head;
    }
}
console.log(addAtEnd(firstNode,4));

const addAtAnyIndex =(index,head,data)=>{
    const newNode= new LinkedListNode(data);

if(index===0){
    newNode.next=head
head=newNode;
head;

}else{
    let i =0;
    let prev;
    let cur =head;
    while(i<index){
        prev=cur;
        cur=cur.next;
        i++;
    }
    prev.next=newNode;
    newNode.next=cur;
    return head;
}
}