function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let maxProfit = 0;

  for (let i = 0; i < score.length; i += m) {
    if (i + m > score.length) break;

    const box = score.slice(i, i + m);
    const minScore = box[m - 1];

    maxProfit += minScore * m;
  }

  return maxProfit;
}

