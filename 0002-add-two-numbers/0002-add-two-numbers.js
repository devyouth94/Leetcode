/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let answer = new ListNode();
    
    let n1 = l1;
    let n2 = l2;
    let cur = answer;
    let isOverTen = false;
    
    let value = n1.val + n2.val;
    if(value > 9) {
        value = value % 10;
        isOverTen = true;
    }
    cur.val = value;
    
    while(n1.next || n2.next) {
        n1 = n1.next || new ListNode();
        n2 = n2.next || new ListNode();
        cur.next = new ListNode();
        cur = cur.next;
        
        value = n1.val + n2.val;
        if(isOverTen) {
            value++;
            isOverTen = false;
        }
        if(value > 9) {
            value = value % 10;
            isOverTen = true;
        }
        cur.val = value;
    }
    
    if(isOverTen) {
        cur.next = new ListNode(1);
    }
    
    return answer;
};