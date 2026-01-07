/*
Given the head of a singly linked list, the task is to remove a cycle if present. A cycle exists when a node's next pointer points back to a previous node, forming a loop. Internally, a variable pos denotes the index of the node where the cycle starts, but it is not passed as a parameter. The terminal will print true if a cycle is removed otherwise, it will print false.

Examples:
Input: head = 1 -> 3 -> 4, pos = 2
Output: true
Explanation: The linked list looks like
A loop is present in the list, and it is removed.

Input: head = 1 -> 8 -> 3 -> 4, pos = 0
Output: true
Explanation: 
The Linked list does not contains any loop. 

Input: head = 1 -> 2 -> 3 -> 4, pos = 1
Output: true
Explanation: The linked list looks like 
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function removeLoop(head) {
    let slow = head;
    let fast = head;

    slow = slow.next;
    fast = fast.next.next;

    while (fast !== null && fast.next !== null) {
        if(slow === fast) break;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (slow == fast) {
        slow = head;
        if (slow !== fast) {
            while(slow.next !== fast.next) {
                slow = slow.next;
                fast = fast.next;
            }
            fast.next = null;
        } else {
            while (fast.next !== slow) {
                fast = fast.next;
            }
            fast.next = null;
        }
    }
}

function printList(curr) {
    let result = [];
    while (curr != null) {
        result.push(curr.data);
        curr = curr.next;
    }
    console.log(result.join(' '));
}

// Create a hard-coded linked list:
// 1 -> 3 -> 4
let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);

// Create a loop
head.next.next.next = head.next;

removeLoop(head);
printList(head);

// node removeLoop.js