var reverseList = function(head) {
  // conditional to account for empty list
  if(!head) return head;
  // declare stack to use as storage
  const stack = [];
  // set temp variable equal to head
  let node = head;
  
  // while loop to push all nodes in list to stack
  while(node) {
    stack.push(node);
    node = node.next;
  }
  
  // save node at top of stack (previous tail)
  const newHead = stack.pop();
  // set temp variable equal to newHead to start building list
  let curr = newHead;
  
  // while loop to rebuild linked list starting with new head
  while(curr) {
    // save next node in stack || null if stack empty
    let next = stack.pop() || null;
    // assign that node to curr.next
    curr.next = next
    // re-assign curr to next 
    curr = next
  }
  
  // return new head node at the end
  return newHead;
};

















// var link = {
//   value: 'A',
//   next: {
//     value: 'B',
//     next: {
//       value: 'C',
//       next: {
//         value: 'D',
//         next: {
//           value: 'E',
//           next: null
//         }
//       }
//     }
//   }
// }

// const node5 = {
//   value: 'E',
//   next: null
// };
// const node4 = {
//   value: 'D',
//   next: node5
// };
// const node3 = {
//   value: 'C',
//   next: node4
// };
// const node2 = {
//   value: 'B',
//   next: node3
// };
// const node1 = {
//   value: 'A',
//   next: node2
// };

// const arr = [node1, node2, node3, node4, node5];

// console.log('testing:', reverseList(arr[0]));