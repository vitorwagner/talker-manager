const searchTalkerByName = (query, talkers) => {
  const newTalkers = talkers.filter((talker) => talker.name.includes(query));
  return newTalkers;
};

const searchTalkerByRate = (query, talkers) => {
  const newTalkers = talkers.filter((talker) => talker.talk.rate === Number(query));
  return newTalkers;
};

const searchTalkerByWatchedAt = (query, talkers) => {
  const newTalkers = talkers.filter((talker) => talker.talk.watchedAt === query);
  return newTalkers;
};

module.exports = {
  searchTalkerByName,
  searchTalkerByRate,
  searchTalkerByWatchedAt,
};