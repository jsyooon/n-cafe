const processFeed = ({ User, userId, ...rest }, reqUserId) => {
  return {
    ...rest,
    isMine: reqUserId === userId,

    writer: User,
  };
};

const processFeedPreview = ({ content, FeedImages, ...feed }, reqUserId) => ({
  ...processFeed(feed, reqUserId),
  images: FeedImages,
  summary: content.replaceAll(/(<img([^>]+)\/?>|<br\s?\/?>)/g, ''),
});

module.exports = {
  processFeedPreview,
  processFeed,
};
