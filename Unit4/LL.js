const Node =class {
   constructor(item){
       this.song=item;
       
       this.next = null;
   }
}
const firstNode =new Node("aafreen aafreen");
// console.log(firstNode);

// const secondNode =new Node("chal chaiya chaiya");

// firstNode.next = secondNode;
// console.log(firstNode);
// const ThirdNode =new Node("lolipop lagelau")
// secondNode.next =ThirdNode;
// console.log(firstNode);
function addAtZero (head,data){
    const fakeFirstSong = new Node(data);
    fakeFirstSong.next =head;
    head = fakeFirstSong;
    console.log(head);
}
addAtZero(firstNode,"baby baby");

