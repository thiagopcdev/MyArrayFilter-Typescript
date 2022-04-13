import myFilter from './myFilter';

console.log(myFilter([1, 2, 3, 4, 5], (item) => {
  return item < 3
}));

console.log(myFilter(["a", "b", "c", "d", "e"], (item) => {
  return item !== "a"
}));