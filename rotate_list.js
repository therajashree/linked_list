/*
Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:

Input: head = [0,1,2], k = 4
Output: [2,0,1]
*/

function rotateRight(head, k) {
    if (head === null || head.next === null) return head;

    // Calculate the length of the list
    let length = 1;
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }
    
    // Make the list circular
    tail.next = head;

    // Find the new head and tail
    k = k % length;
    let stepsToNewHead = length - k;
    let newTail = tail;
    while (stepsToNewHead-- > 0) {
        newTail = newTail.next;
    }
    const newHead = newTail.next;
    newTail.next = null;
    
    return newHead;
}