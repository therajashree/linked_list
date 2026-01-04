/*
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.
*/

function MySinglyLinkedList() {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    this.head = null;
    this.size = 0;

    this.get = function (index) {
        if(index < 0 || index >= this.size) return -1;

        let current = this.head;
        for(let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.val;
    }

    this.addAtHead = function (val) {
        let newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    this.addAtTail = function (val) {
        let newNode = new ListNode(val);

        if(this.head === null) {
            this.head = newNode;
        } else {
             let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    this.addAtIndex = function(val) {
        if(index < 0 || index > this.size) return;
        if( index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        } 

        let node = new ListNode(val);
        let current = this.head;
        for (let i = 0; i < index -1; i++) {
            current = current.next;
        }

        node.next = current.next;
        current.next = node;
        this.size++;
    }

    this.deleteAtIndex = function (index) {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            let deletedNode = current.next;
            current.next = deletedNode.next;
        }

        this.size--;
    }

}


function MyDoublyLinkedList() {
    function ListNode(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    this.head = null;
    this.tail = null;
    this.size = 0;

    this.get = function (index) {
        if(index < 0 || index >= this.size) return -1;

        let current;

        if (index < this.size / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.size -1; i > index; i--) {
                current = current.prev;
            }
        }

        return current.val;
    }

    this.addAtHead = function (val) {
        let node = new ListNode(val);

        if (this.head !== null) {
            this.head.prev = node;
        } else {
            this.tail = node;
        }

        this.head = node;
        this.size++;
    }

    this.addAtTail = function(val) {
        let node = new ListNode(val);
        node.prev = this.tail;

        if(this.tail !== null) {
            this.tail.next = node
        } else {
            this.head = node;
        }
        this.tail = node;
        this.size++
    }

    this.addAtndex = function(index, val) {
        if(index < 0 || index > this.size) return;

        if(index === 0) {
            this.addAtHead(val);
            return;
        }

        if(index === this.size) {
            this.addAtTail(val);
            return;
        }

        let current;
        let node = new ListNode(val);
        if (index < this.size / 2) {
            current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            
        } else {
            current = this.tail;
            for (let i = this.size; i > index; i--) {
                current = current.prev;
            }
        }

        node.prev = current;
        node.next = current.next;
        current.next.prev = node;
        current.next = node
        this.size++;
    }

    this.deleteAtIndex = function (index) {
        if (index < 0 || index >= this.size) return;

        if(index === 0) {
           if(this.head.next !== null) {
            this.head = this.head.next;
            this.head.prev = null;
           } else {
            this.head = null;
            this.tail = null;
           }
        } else if (index === this.size - 1) {
            if(this.tail.prev !== null) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                this.head = null;
                this.tail = null;
            }
        } else {
            let current;
            if (index < this.size / 2) {
                current = this.head;
                for (let i = 0; i < index; i++) {
                    current = current.next
                }
                
            } else {
                current = this.tail;
                for (let i = this.size-1; i > index; i--) {
                    current = current.prev;
                }
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
    }
}