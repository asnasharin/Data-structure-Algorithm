class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class doublyLinedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        if(this.head) {
            this.head.prev = newNode
        }
        this.head = newNode
    }
    addLast(data) {
        const newNode = new Node(data)

        if(!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next) {
            current = current.next
        }

        newNode.prev = current
        current.next = newNode
    }

    size() {
        let count = 0
        let current = this.head
        while(current) {
            count++
            current = current.next
        }
        return count
    }

    addAt(index, data) {
        if(index < 0 || index > this.size()) {
            console.log("invalid index")
            return
        }
        const newNode = new Node(data)
        if(index === 0) {
            newNode.next = this.head
            if(this.head) {
                this.head.prev = newNode
            }
            this.head = newNode
            return
        }


        let current = this.head
     for(let i = 0; i < index - 1; i++) {
         current = current.next
}

         newNode.next = current.next
        if(current.next) {
        current.next.prev = newNode
    }
        current.next = newNode
        newNode.prev = current
        
    }

    removeFirst() {
        if(!this.head) {
            return
        }
        else {
            this.head = this.head.next
        }
        if(this.head) {
            this.head.prev = null
        }
    }

    removeLast() {
        if(!this.head) {
            return
        }
        if(!this.head.next) {
            this.head = null
            return
        }
        let current = this.head
        while(current.next.next) {
            current = current.next
        }
        current.next = null
    }

    removeAt(index, data) {
        if(index < 0 || index>this.size()) {
            console.log("invalid index")
            return
        }
        if(index == 0) {
            this.head = this.head.next

            if(this.head) {
                this.head.prev = null
            }
        }

    let current = this.head
    for(let i = 0; i < index -1; i++) {
        current = current.next
    }

    if(current.next) {
        current.next = current.next.next
    }
    if(current.next) {
        current.next.prev = current
    }
    }

    print() {
        let current = this.head
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}


const dll = new doublyLinedList()

dll.addFirst(4);   
dll.addLast(5);   
dll.addFirst(3);   
dll.addFirst(2); 
dll.addLast(6);    
dll.addAt(5, 9);

console.log("kdj")
dll.print()