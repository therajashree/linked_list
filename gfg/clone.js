/*
You are given a special linked list with n nodes where each node has two pointers a next pointer that points to the next node of the singly linked list, and a random pointer that points to the random node of the linked list.

Construct a copy of this linked list. The copy should consist of the same number of new nodes, where each new node has the value corresponding to its original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list, such that it also represent the same list state. None of the pointers in the new list should point to nodes in the original list.

Return the head of the copied linked list.

NOTE : Original linked list should remain unchanged.
Each node of the linked list is represented as a pair of [val, random_index] where:

val represents node.data.
random_index (1-based index) represents the index of the node that the random pointer of the current node points to, or NULL if it does not point to any node.
Examples:

Input: head = [[1, 3], [3, 3], [5, NULL], [9, 3]] 
   
Output: [[1, 3], [3, 3], [5, NULL], [9, 3]]
Explanation: 
Node 1 points to Node 3 as its NEXT and Node 5 as its RANDOM.
Node 3 points to Node 5 as its NEXT and Node 5 as its RANDOM.
Node 5 points to Node 9 as its NEXT and NULL as its RANDOM.
Node 9 points to NULL as its NEXT and Node 5 as its RANDOM.
Input: head = [[1, 3], [2, 1], [3, 5], [4, 3], [5, 2]]
  
Output: [[1, 3], [2, 1], [3, 5], [4, 3], [5, 2]]
Explanation: 
Node 1 points to Node 2 as its NEXT and Node 3 as its RANDOM.
Node 2 points to Node 3 as its NEXT and Node 1 as its RANDOM.
Node 3 points to Node 4 as its NEXT and Node 5 as its RANDOM.
Node 4 points to Node 5 as its NEXT and Node 3 as its RANDOM.
Node 5 points to NULL as its NEXT and Node 2 as its RANDOM.
Input: head = [[7, NULL], [7, NULL]]
Output: head = [[7, NULL], [7, NULL]]
Explanation: 
Node 7 points to Node 7 as its NEXT and NULL as its RANDOM.
Node 7 points to NULL as its NEXT and NULL as its RANDOM.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.random = null;
    }
}

function clone(head) {
    if(head === null) return null;

    let curr = head;
    while(curr !== null) {
        let newNode = new Node(curr.data);
        newNode.next = curr.next;
        curr.next = newNode;

        curr = newNode.next;
    }

    curr = head;
    while (curr !== null) {
        if (curr.random !== null) {
            curr.next.random = curr.random.next;
        }

        curr = curr.next.next;
    }

    curr = head;
    let clonedHead = head.next;
    let clone = clonedHead;

    while(clone.next !== null) {
        curr.next = curr.next.next;
        clone.next = clone.next.next;

        clone = clone.next;
        curr = curr.next;
    }

    curr.next = null;
    clone.next = null;

    return clonedHead;
}

function printList(head) {
    let result = "";
    while (head !== null) {
        result += head.data + "(";
        result += head.random ? head.random.data : "null";
        result += ")";

        if (head.next !== null) {
            result += " -> ";
        }
        head = head.next;
    }
    console.log(result);
}

// Creating a linked list with random pointer
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.random = head.next.next;
head.next.random = head;
head.next.next.random = head.next.next.next.next;
head.next.next.next.random = head.next.next;
head.next.next.next.next.random = head.next;

// Print the original list
console.log("Original linked list:");
printList(head);

let clonedList = clone(head);

console.log("Cloned linked list:");
printList(clonedList);