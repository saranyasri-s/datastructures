class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
    return this.adjacencyList;
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this.adjacencyList;
  }
  removeEdge(v1, v2) {
    let indexofV1 = this.adjacencyList[v2].indexOf(v1);
    let indexofV2 = this.adjacencyList[v1].indexOf(v2);
    this.adjacencyList[v1].splice(indexofV2, 1);
    this.adjacencyList[v2].splice(indexofV1, 1);
    return this.adjacencyList;
  }
  removeVertex(v1) {
    while (this.adjacencyList[v1][0]) {
      this.removeEdge(v1, this.adjacencyList[v1][0]);
    }
    delete this.adjacencyList[v1];
    return this.adjacencyList;
  }
  depthfirstTraverse(v) {
    if (!this.adjacencyList[v] || this.adjacencyList[v].length === 0) {
      return null;
    }
    let visited = {};
    let list = [];
    let adjList = this.adjacencyList;
    function helper(v) {
      visited[v] = true;
      list.push(v);
      for (let i = 0; i < adjList[v].length; i++) {
        if (!visited[adjList[v][i]]) {
          helper(adjList[v][i]);
        }
      }
    }
    helper(v);
    return list;
  }
}

let g = new Graph();
console.log(g);
// console.log(g.addVertex("coimbatore"));
// console.log(g.addVertex("chennai"));
// console.log(g.addVertex("madurai"));
// console.log(g.addVertex("nellai"));
// console.log(g.addVertex("vaigai"));
// console.log(g.addEdge("coimbatore", "chennai"));
// console.log(g.addEdge("coimbatore", "madurai"));
// console.log(g.addEdge("coimbatore", "nellai"));
// console.log(g.addEdge("madurai", "chennai"));
// // console.log(g.removeEdge("madurai", "chennai"));
// // console.log(g.removeEdge("madurai", "coimbatore"));
// console.log(g.removeVertex("chennai"));
console.log(g.addVertex("A"));
console.log(g.addVertex("B"));
console.log(g.addVertex("C"));
console.log(g.addVertex("D"));
console.log(g.addVertex("E"));
console.log(g.addVertex("F"));
console.log(g.addEdge("A", "B"));
console.log(g.addEdge("A", "C"));

console.log(g.addEdge("B", "D"));
console.log(g.addEdge("C", "E"));
console.log(g.addEdge("D", "E"));
console.log(g.addEdge("D", "F"));
console.log(g.addEdge("E", "F"));
console.log(g.depthfirstTraverse("A"));
