class ListNode {
    constructor(val=0, next=null) {
        this.val = val
        this.next = next
    }
}

function mergeTwoLists(l1, l2) {
    let dummyHead = new ListNode()
    let current = dummyHead

    while(l1 !== null && l2!== null) {
        if(l1.val <= l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }


if(l1 !== null) {
    current.next = l1
} else {
    current.next = l2
}
 return dummyHead.next
}

function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }
    console.log("null");
}


let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));

// Create second linked list: 1 -> 3 -> 4 -> null
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Merge the two lists
let mergedList = mergeTwoLists(l1, l2);

// Print the merged linked list
printList(mergedList);