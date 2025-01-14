const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = '';
  if (typeof members !== 'undefined' && members !== null && members.length > 0) {
    for (let i = 0; i < members.length; i++){
      if (typeof members[i] === 'string'){
        team += members[i].replace(/ /g,'')[0];
      } else if (typeof members[i] != 'string') {
        team += '';
      } else {
        return false;
      }
    }
  }
  return team.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
