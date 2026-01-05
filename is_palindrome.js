/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:

Input: head = [1,2,2,1]
Output: true
Example 2:

Input: head = [1,2]
Output: false
*/

function isPalindrome(head) {
    let firstHalf = findFirstHalf(head);
    let secondHalf = reverse(firstHalf.next);

    let p1 = head;
    let p2 = secondHalf;
    let result = true;

    while (result && p2 !== null) {
        if(p1.val !== p2.val) {
            result = false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    firstHalf.next = reverse(secondHalf);
    return result;

    // find the middle point and return
    function findFirstHalf(head) {
        let slow = head;
        let fast = head;

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    // reverse the list after middle node;
    function reverse(head) {
        let prev = null;
        let next;

        while(head !== null) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}

