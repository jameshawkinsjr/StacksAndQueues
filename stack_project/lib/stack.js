// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    };

    push(value) {
        let newNode = new Node(value);
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
            return temp.value;
        } else {
            let temp = this.top;
            this.top = this.top.next;
            this.length--;
            return temp.value;
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

exports.Node = Node;
exports.Stack = Stack;
