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
    if (head === null || head.next === null || k === 0) return head;

    let tail = head;
    let length = 1;

    while(tail.next != null) {
        length++;
        tail = tail.next;
    }
    
    tail.next = head;

    k = k % length;
    let stepToHead = length - k;

    let newTail = head;
    while(stepToHead > 0) {
        newTail = newTail.next;
        stepToHead--;
    }
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
}
