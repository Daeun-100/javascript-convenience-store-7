export default function selectNotZero(a, b) {
  if (a !== 0 && a !== "0") {
    return a;
  }
  if (b !== 0 && b !== "0") {
    return b;
  }
  return a;
}
