const solution = (price, money, count) => {
  const totalCost = Array.from({ length: count }, (_, i) => price * (i + 1)).reduce((acc, cur) => acc + cur, 0);

  const shortage = totalCost - money;

  return shortage > 0 ? shortage : 0;
};