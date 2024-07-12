// reverse singly linked lsit

function Node(val, next) {
    this.val = (val === undefined ? 0 :val)
    this.next = (next === undefined ? null : next)
}


var reverseList = function(head) {
     let current = head
     let prev = null

     while(current!=null) {
        const nextNode = current.next
        current.next = prev
        prev = current
        current = nextNode
     }
     return prev
}


function print(head) {
    let current = head
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

 let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
console.log("jakkjl")

console.log("Original list:");
print(head);

// Reverse the linked list
let reversedHead = reverseList(head);

// Print reversed list
console.log("Reversed list:");
print(reversedHead);