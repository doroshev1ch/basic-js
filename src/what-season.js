const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = date.getMonth();
  console.log(season)
  console.log(date)
    if (season === 2 || season === 3 || season === 4) {
      season = 'spring';
      return season
    } else if (season === 5 || season === 6 || season === 7) {
      season = 'summer';
      return season
    } else if (season === 8 || season === 9 || season === 10) {
      season = 'autumn';
      return season
    } else if (season === 0 || season === 1 || season === 2) {
      season = 'winter';
      return season
    }
    return season
  }

module.exports = {
  getSeason
};
