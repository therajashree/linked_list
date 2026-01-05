/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/


function reverseKGroup(head, k) {
    if(head === null || k === 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy, next = dummy, prev = dummy;
    let count = 0;

    while(curr.next !== null) {
        curr = curr.next;
        count++
    }

    while(count >= k) {
        curr = prev.next;
        next = curr.next;

        for(let i = 1; i < k; i++) {
            curr.next = next.next;
            next.next = prev.next;
            
            prev.next = next;
            next = curr.next;
        }
        prev = curr;
        count = count - k;
    }

    return dummy.next;

}