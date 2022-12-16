/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head;
    let value = [];
    
    while(cur) {
        value.push(cur.val);
        cur = cur.next;
    };
    
    cur = head;
    
    while(cur) {
        cur.val = value.pop();
        cur = cur.next;
    }
    
    return head;
};