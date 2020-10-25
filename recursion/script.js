const fact = (n) => {
  if(n < 2) return 1;
  return n * fact(n - 1);
};
const cicle = (n) => {
  if(n === 1) return 1;
  console.log(n);
  cicle(n - 1);
};
console.log('cicle', cicle(10));
console.log(fact(5));
