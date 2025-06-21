const counter = (function() {
  // Private counter, scoped inside this IIFE
  let count = 0;

  return {
    increment() { count++; },
    decrement() { count--; },
    getValue() { return count; }
  };
})();
