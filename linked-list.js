/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  /**retrive the index of the node */
  _get(id) {
    let curr = this.head;
    let count = 0;
    while (curr !== null && count != id) {
      count++;
      curr = curr.next;
    }

    return curr;
  }
  /** push(val): add new value to end of list. */

  push(val) {
    //make a new node
    let newNode = new Node(val);
    //if there is no head (if likedlist is null) then assign newnode as hade
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //if likedlist is not empty then assign new node at the end of the liskedlist
      this.tail.next = newNode;
      this.tail = newNode;
    }

    //icrease the length of the linkedlist
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //create the new node
    let newNode = new Node(val);

    //if head is null then add the new node and make it head
    if (this.head === null) {
      this.head = newNode;
    } else {
      //if headis not empty then make the exisitng head as a next node
      newNode.next = this.head;
      //make the newnode head
      this.head = newNode;
    }

    //if the length og the linkedlist is 0 then head and tail are same
    if (this.length === 0) 
      this.tail = this.head;

    //increase the length of the linkedlist
    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    //remove the last node of the linkedlist
    return this.removeAt(this.length - 1);
  
  }

  /** shift(): return & remove first item. */
  shift() {
  //remove the node at the 0th index
    return this.removeAt(0);

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    //if the index value is within the length of the linkedlist then return
    if (idx < this.length && idx > 0) {
      return this._get(idx).val;
    }

    return -1;
  }

  

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //if idx is within the linkedlist length then set the value
    if (idx < this.length && idx > 0) {
      let curr = this._get(idx);
      curr.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx < this.length && idx > 0) {
      //if idx=0 then unshift the nodes
      if (idx === 0) return this.unshift(val);
      //if idx is the last node then push the value
      if (idx === this.length) return this.push(val);
  
     //if the idx is inbetween node  then get the prev node (prev node of idx which is idx-1)
      let prev = this._get(idx - 1);
      //create new node
      let newNode = new Node(val);
      //append prev mode to newnode
      newNode.next = prev.next;
      prev.next = newNode;
      //increase the length
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < this.length && idx > 0) {

    //case 1: remove first node

    if (idx === 0) {
      //store the value of the head
      let val = this.head.val;
      //assign next node of head as a head
      this.head = this.head.next;
      //decrease the length of the linkedlist
      this.length --;
      //if the length is <2 then there is only one node in the linkedlist
      if (this.length < 2) 
        this.tail = this.head;
      //return the value
      return val;
    }

    let prev = this._get(idx - 1);

    // case 2: remove tail

    if (idx === this.length - 1) {
      //store the last node value
      let val = prev.next.val;
      //assign last node next refrenece as null
      prev.next = null;
      //assign prev node as a tail
      this.tail = prev;
      //decrease the length of the linkedlist
      this.length -= 1;
      //return the value
      return val;
    }

    // case 3: remove middle node

    //store the last node value
    let val = prev.next.val;
    //assign prev.newt.next as prev.next
    prev.next = prev.next.next;
     //decrease the length of the linkedlist
    this.length -= 1;
    //return the value
    return val;
  }

  }

  /** average(): return an average of all values in the list */

  average() {

    //if the linkedlist length is 0 then the avg is 0
    if (this.length === 0)
      return 0;

    //total sum is 0 initially.
    let sum = 0;
    //store the head value as a current value
    let current = this.head;

    //calculate the sum
    while (current) {
      sum += current.val;
      current = current.next;
    }

    //find the avg
    return sum / this.length;
  
    
  }
}

module.exports = LinkedList;
