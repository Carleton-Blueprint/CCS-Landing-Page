export const getMinutesAfterMidnight = (time) => {
  try {
    let hours = time.split(':')[0];
    let mins = time.split(':')[1].slice(0, 2);
    let period = time.split(':')[1].slice(-2).toLowerCase();
    let totalTimePastMidnight = period === 'pm' ? 720 : 0;

    totalTimePastMidnight += parseInt(hours) * 60;
    totalTimePastMidnight += parseInt(mins);
    return totalTimePastMidnight;
  } catch (err) {
    return 0;
  }
};
