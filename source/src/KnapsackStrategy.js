class KnapsackStrategy {

  solve(time, activities)  {
    let maxVal = -Infinity;
    let max = null;
    // recursively find all combinations of activities
    // if the total XP of any combination is greater than max, store in closure
    const findCombos = (items, prefix = []) => {
      for (let i = 0; i < items.length; i++) {
        const combo = [
          ...prefix,
          items[i]
        ];
        const xp = totalXp(combo);
        if (xp > maxVal && totalTime(combo) <= time) {
          maxVal = xp;
          max = combo;
        }
        findCombos(items.slice(i + 1), combo);
      }
    };

    const totalXp = acts => acts.reduce((total, act) => total + act.xp, 0);

    const totalTime = acts => acts.reduce((total, act) => total + act.time, 0);

    findCombos(activities);
    return max;
  };
}
 export default KnapsackStrategy
