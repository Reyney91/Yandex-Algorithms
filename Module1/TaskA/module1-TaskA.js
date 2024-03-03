const { createInterface } = require("readline");

const lines = [];
createInterface({
  input: process.stdin,
}).on("line", (line) => {
  lines.push(line.toString().trim());
}).on("close", () => {
  const P_V = lines[0];
  const Q_M = lines[1];

  const [P, V] = P_V.split(' ');
  const [Q, M] = Q_M.split(' ');

  const result = treesPaintingCalculation(+P, +V, +Q, +M);
  console.log(result);
});
const treesPaintingCalculation = (P, V, Q, M) => {
  const diff = Math.max(P - V, Q - M) - Math.min(P + V, Q + M);
  if (diff == 0) {
    return (V * 2 + M * 2 + 1);
  }
  if (diff > 0) {
    return (V * 2 + M * 2 + 2);
  }
  if (diff < 0) {
    return (V * 2 + M * 2 + 1 + diff);
  }
}
