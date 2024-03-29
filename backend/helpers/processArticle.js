const isMine = (userId, reqUserId) => ({ isMine: userId === reqUserId });

const processComment = ({ User, ...rest }, { reqUserId, feedWriterId }) => ({
  ...rest,
  writer: User,
  isArticleWriter: User.id === feedWriterId,
  ...isMine(User.id, reqUserId),
});

const processFeed = ({ User, FeedImages, ...rest }, reqUserId) => ({
  ...rest,
  ...isMine(User.id, reqUserId),
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
  processComment,
};
