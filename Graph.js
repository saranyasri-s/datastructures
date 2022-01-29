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
}

let g = new Graph();
console.log(g);
console.log(g.addVertex("coimbatore"));
console.log(g.addVertex("chennai"));
console.log(g.addVertex("madurai"));
console.log(g.addVertex("nellai"));
console.log(g.addVertex("vaigai"));
console.log(g.addEdge("coimbatore", "chennai"));
console.log(g.addEdge("coimbatore", "madurai"));
console.log(g.addEdge("coimbatore", "nellai"));
console.log(g.addEdge("madurai", "chennai"));
console.log(g.removeEdge("madurai", "chennai"));
console.log(g.removeEdge("madurai", "coimbatore"));
