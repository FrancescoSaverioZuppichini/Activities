class KnapsackStrategy {

  solve(time, activities) {

    const optimalSolution = (items, n = items.length, timeLeft = time) => {

      // if we have no time left or no items left to consider, return empty arr
      if (n === 0 || timeLeft === 0) {
        return [];
      }

      // if last item is too heavy (we sorted the array), don't consider it
      if (items[n - 1].time > timeLeft) {
        return optimalSolution(items, n - 1, timeLeft);
      }

      const lastItem = items[n - 1];
      const withLastItem = [
        lastItem,
        ...optimalSolution(items, n - 1, timeLeft - lastItem.time)
      ];
      const withoutLastItem = optimalSolution(items, n - 1, timeLeft);

      if (totalXp(withLastItem) > totalXp(withoutLastItem)) {
        return withLastItem;
      } else {
        return withoutLastItem;
      }
    };

    const totalXp = arr => arr.reduce((total, ea) => total + ea.xp, 0);

    const sortedByTime = activities
      .slice()
      .sort((a, b) => a.time - b.time);

    return optimalSolution(sortedByTime);
  }
}
export default KnapsackStrategy
