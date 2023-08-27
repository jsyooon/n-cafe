const isMine = (userId, reqUserId) => ({ isMine: userId === reqUserId });

const processFeed = ({ User, userId, FeedImages, ...rest }, reqUserId) => ({
  ...rest,
  ...isMine(userId, reqUserId),
  images: FeedImages,
  writer: User,
});

const processFeedPreview = ({ content, ...feed }, reqUserId) => ({
  ...processFeed(feed, reqUserId),
  summary: content.replaceAll(/(<img([^>]+)\/?>|<br\s?\/?>)/g, ''),
});

module.exports = {
  isMine,
  processFeedPreview,
  processFeed,
};
