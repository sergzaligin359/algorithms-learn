const arrNums = [1, 10, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2];

const qsort = (arr) => {

  if(arr.length < 2) return arr;

  let pivot = arr[Math.ceil(arr.length / 2)];
  let less = arr.filter(el => el < pivot);
  let more = arr.filter(el => el > pivot);
  let eq = arr.filter(el => el == pivot);

  return [ ...qsort(less), ...eq, ...qsort(more) ]
  console.log(pivot);
}
console.log(qsort(arrNums));
