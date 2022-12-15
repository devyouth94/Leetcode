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
    
    const newHead = new ListNode(-1, head);
    let prev = newHead;
    let cur = head;
    
    while(cur) {
        while(cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        
        if(cur === prev.next) {
            prev = prev.next;
        } else {
            prev.next = cur.next;
        }
        
        cur = cur.next;
    }
    
    return newHead.next;
};