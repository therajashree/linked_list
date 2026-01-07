/* Given a singly linked list, we have to check whether it is a palindrome or not. */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let curr = head;
    let next;

    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function isIdentical(head, head2) {
    while (head && head2) {
        if (head.data !== head2.data) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }
    return true;
}

function isPalindrome(head) {
    if (head === null || head.next === null) return true;

    let slow = head;
    let fast = head;

    while (fast!==null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let head2 = reverseList(slow);

    let res = isIdentical(head, head2);

    reverseList(head2);

    return res;
}

// Linked list : 1->2->3->2->1
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);
// head.next.next.next.next.next = new Node(4);

let result = isPalindrome(head);
if (result) {
    console.log("true");
} else {
    console.log("false");
}


// node isPalindrome.js