const path = require('path');
const { writeFile } = require('fs').promises;
const readTalkers = require('./readFile');

async function writeTalker(talker) {
  const talkers = await readTalkers();
  talkers.push(talker);
  await writeFile(path.join(__dirname, '..', 'talker.json'), JSON.stringify(talker));
}

module.exports = writeTalker;