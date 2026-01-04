/*
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

 

Example 1:


Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2]
*/

function partition(head, x) {
    let lessHead = new ListNode(0);
    let greaterHead = new LitNode(0);

    let less = lessHead;
    let greater = greaterHead;

    while(head !== null) {
        if(head.val < x) {
            less.next = head;
            less = less.next;
        } else {
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }

    greater.next = null;
    less.next = greaterHead.next;

    return lessHead.next;
}
