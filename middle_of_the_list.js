/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/

function middleNode(head) {
    // Initialize two pointers, 'slow' and 'fast'
    let slow = head, fast = head;
    
    // Move 'slow' by 1 step and 'fast' by 2 steps
    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // slow moves 1 step
        fast = fast.next.next;     // fast moves 2 steps
    }
    
    // When 'fast' reaches the end, 'slow' will be at the middle
    return slow;
}