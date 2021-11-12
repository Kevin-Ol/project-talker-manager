exports.validateTalkFields = (talk) => {
  const { watchedAt, rate } = talk;

  if (watchedAt == null || rate == null) {
    return true;
  }

  if (watchedAt === '' || rate === '') {
    return true;
  }

  return false;
};
