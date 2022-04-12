function Node(val){
  this.value = val
  this.left = null
  this.right = null
}
function BTree(){
  this.root = null
  this.append = function(val){
    if(!this.root){
      return this.root = new Node(val)
    }
    this._appendHelper(val, this.root)
  }
  this._appendHelper = function(val, current){
    if(current.value>val){
      return !current.left? current.left = new Node(val)
        :this._appendHelper(val, current.left)
    }
    return !current.right? current.right = new Node(val)
        :this._appendHelper(val, current.right)
  }
}
// set up the tree
const binaryTree = new BTree()
binaryTree.append(5)    
binaryTree.append(3)   //     _ 5 _
binaryTree.append(4)   //  _ 3_    7_
binaryTree.append(7)   // 1   4      9
binaryTree.append(9) 
binaryTree.append(1) 


const visited = []
// pre order 
function PreOrder(root){
  if(root === null) return
  
  visited.push(root.value)
  PreOrder(root.left)
  PreOrder(root.right)
  
  return visited
}
// driver code
//console.log(PreOrder(binaryTree.root))

// post order 
function PostOrder(root){
  if(root === null) return
  
  PostOrder(root.left)
  PostOrder(root.right)
  visited.push(root.value)
  
  return visited
}
// driver code
//console.log(PostOrder(binaryTree.root))

// in order 
function InOrder(root){
  if(root === null) return
  
  InOrder(root.left)
  visited.push(root.value)
  InOrder(root.right)
  
  return visited
}
/// driver code
//console.log(InOrder(binaryTree.root))
