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
var deleteDuplicates = function(head) {
    if(!head) return null;
    
    let cur = head;
    let next = head.next;
    
    while(next) {
        if(cur.val === next.val) {
            cur.next = next.next;
        } else {
            cur = cur.next;
        }
        
        next = next.next;
    }
    
    return head;
};