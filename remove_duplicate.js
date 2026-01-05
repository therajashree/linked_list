/*

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
*/

function deleteDuplicates(head) {

    let dummy = new ListNode(0);
    dummy.next = head;

    let current = head;
    let prev = dummy;

    while(current != null) {
        while(current.next !== null && current.val === current.next.val) {
            current = current.next;
        }

        if (prev.next === current) {
            prev = current;
        } else {
            prev.next = current.next;
        }
        current = current.next;
    }
    return dummy.next;

}


/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

function deleteDuplicatesAllowOne(head) {
    let curr = head;

    while(curr) {
        if(curr.next && curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}