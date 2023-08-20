const processFeed = ({ User, userId, FeedImages, ...rest }, reqUserId) => {
  return {
    ...rest,
    isMine: reqUserId === userId,
    images: FeedImages,
    writer: User,
  };
};

const processFeedPreview = ({ content, ...feed }, reqUserId) => ({
  ...processFeed(feed, reqUserId),
  summary: content.replaceAll(/(<img([^>]+)\/?>|<br\s?\/?>)/g, ''),
});

module.exports = {
  processFeedPreview,
  processFeed,
};
