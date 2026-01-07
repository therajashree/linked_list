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
    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev= curr;
        curr = next;
    }
    return prev;
}

function addTwoLists(head1, head2) {
    let dummy = new Node(0);
    let curr = dummy;

    let carry = 0;
    let p1 = reverseList(head1);
    let p2 = reverseList(head2);
    
    while(p1 !== null || p2 !== null) {
        let x = p1 ? p1.data : 0;
        let y = p2 ? p2.data : 0;

        let sum = carry + x + y;
        carry = Math.floor(sum / 10);

        curr.next = new Node(sum % 10);
        curr = curr.next;

        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
    }

    if (carry > 0) {
        curr.next = new Node(carry);
    }
    console.log(dummy.next)
    let lsit = reverseList(dummy.next);
    let res = removLeadingZero(list);

    return res === null ? new Node(0) : res;
}

function removLeadingZero(head) {
    while(head !== null && head.data === 0) {
        head = head.next;
    }
    return head;
}

function printList(head) {
    let curr = head;
    let result = "";
    while (curr !== null) {
        result += curr.data;
        if(curr.next !== null){
            result += " -> ";
        }
        curr = curr.next;
    }
    console.log(result.trim());
}

let num1 = new Node(1);
num1.next = new Node(2);
num1.next.next = new Node(3);

let num2 = new Node(9);
num2.next = new Node(9);
num2.next.next = new Node(9);

let sum = addTwoLists(num1, num2);
printList(sum)

// node addTwo.js