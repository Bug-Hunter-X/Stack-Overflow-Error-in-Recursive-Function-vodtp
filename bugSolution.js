function foo(a, b) {
  while (a !== 0) {
    b = a + b;
    a--;
  }
  return b;
}