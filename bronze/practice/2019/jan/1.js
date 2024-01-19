const solution = (n, swaps) => {
  let highest = 0;

  for (let j = 0; j < 3; j++) {
    let score = 0;
    let placement = j;
    for (let i = 0; i < n; i++) {
      const swap = swaps[i];
      if (swap[0] - 1 == placement) {
        placement = swap[1] - 1;
      } else if (swap[1] - 1 === placement) {
        placement = swap[0] - 1;
      }
      if (placement === swap[2] - 1) {
        score += 1;
      }
    }

    if (score > highest) {
      highest = score;
    }
  }

  return highest;
};

console.log(
  solution(20, [
    [1, 2, 3],
    [2, 3, 2],
    [3, 2, 3],
    [2, 1, 1],
    [3, 2, 2],
    [2, 3, 1],
    [3, 1, 2],
    [2, 1, 1],
    [1, 3, 3],
    [2, 3, 3],
    [3, 1, 3],
    [1, 3, 3],
    [3, 1, 3],
    [3, 2, 1],
    [2, 3, 1],
    [1, 3, 1],
    [1, 3, 2],
    [2, 1, 1],
    [3, 1, 2],
    [3, 1, 2],
  ]),
);
