export default function selectNotNull(a, b) {
  if (a !== null) {
    return a;
  }
  if (b !== null) {
    return b;
  }
  return a;
}
