// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        return ++this.length;
    }

    pop() {
        if (this.length === 0) return null;

        let temp = this.top;

        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = temp.next;
        }

        this.length--;
        return temp.value;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    constructor() {
        this.front = null;
        this.back = null;
        this.inStack = null;
        this.outStack = null;
        this.length = 0;
    }
    // TODO: Implement the StackQueue class!

    enqueue(val) {

    }

    dequeue() {

    }

    size() {
        return this.length;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
