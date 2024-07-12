class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

var isPalindrome = function(head) {
    let string1 = "", string2 = "";
    let node = head;

    while (node != null) {
        string1 = `${string1}${node.val}`;
        string2 = `${node.val}${string2}`;
        node = node.next;
    }

    return string1 === string2;
};


const list = new LinkedList();
list.add(1);
list.add(2);
list.add(8);
list.add(1);


console.log(isPalindrome(list.head)); 
