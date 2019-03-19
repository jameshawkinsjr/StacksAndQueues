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
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(node) {
        let newNode = node;
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let temp = this.top;
            this.top = newNode;
            newNode.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (this.length === 0){ return null; }
        else if (this.length === 1) { 
            let temp = this.top;
            this.top = null;
            this.bottom = null;
            this.length--;
            return temp;
        } else {
            let temp = this.top;
            this.top = this.top.next;
            this.length--;
            return temp;
        }
    }

    size() {
        if (this.length <= 0 ){
            return 0;
        } else {
            return this.length;
        }
    }
};


class StackQueue {
    constructor(){
        this.front = null;
        this.back = null;
        this.inStack = null;
        this.outStack = null;
        this.length = 0;
    }


    enqueue(value){
        let newNode = new Node(value);
        if (!this.front){
            this.front = newNode;
            this.back = newNode;
            this.length++;
            return this.size();
        } else {
            let temp = this.back;
            this.back = newNode;
            temp.next = newNode;
            this.length++;
            return this.size();
        }
    }

    dequeue(){
        if (!this.front){
            return null;
        } else if (this.size() === 1){
            let temp = this.front;
            this.front = null;
            this.back = null;
            this.length--;
            return temp;
        } else {
            let temp = this.front;
            this.front = this.front.next;
            this.length--;
            return temp;
        }

    }

    size(){
        if(this.length <= 0){
            return 0;
        }
        return this.length;
    }

}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
