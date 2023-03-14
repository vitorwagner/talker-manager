const readTalkers = require('./readFile');
const writeTalker = require('./writeFile');
const {
  searchTalkerByName,
  searchTalkerByRate,
  searchTalkerByWatchedAt,
} = require('./searchTalkers');

module.exports = {
  readTalkers,
  writeTalker,
  searchTalkerByName,
  searchTalkerByRate,
  searchTalkerByWatchedAt,
};
