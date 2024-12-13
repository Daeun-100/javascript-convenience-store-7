export default function selectNotNull(a, b) {
  if (a !== null && a !== "null") {
    return a;
  }
  if (b !== null && b !== "null") {
    return b;
  }
  return a;
}
