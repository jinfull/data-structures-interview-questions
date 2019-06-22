// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.minimumArr = [];
        this.maximumArr = [];
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.maximumArr.length || newNode.value > this.maximumArr[this.maximumArr.length - 1].value) {
            this.maximumArr.push(newNode);
        } 
        // why can't the below statement be else if?? 
        // why does it have to be a standalone if?
        // i guess they aren't exclusive. a newNode can be both of these i guess if it is the first node.
        
        if (!this.minimumArr.length || newNode.value < this.minimumArr[this.minimumArr.length - 1].value) {
            this.minimumArr.push(newNode);
        }

        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }

        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }



        if (this.top.value === this.minimumArr[this.minimumArr.length - 1].value) {
            this.minimumArr.pop();
        } 
        if (this.top.value === this.maximumArr[this.maximumArr.length - 1].value) {
            this.maximumArr.pop();
        }

        const temp = this.top;

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;

        return temp;
    }

    size() {
        return this.length;
    }

    min() {
        return this.minimumArr[this.minimumArr.length - 1] || null;
    }

    max() {
        return this.maximumArr[this.maximumArr.length - 1] || null;
    }
}

// Forgetting something down here? 
exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
