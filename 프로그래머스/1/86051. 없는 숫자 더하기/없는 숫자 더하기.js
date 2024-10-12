const solution = (numbers) => {
  const totalSum = 45; 
  const numbersSum = numbers.reduce((acc, curr) => acc + curr, 0); 
  return totalSum - numbersSum; 
};