exports.processFeedPreview = ({ FeedImages, User, userId, content, ...item }, reqUserId) => {
  return {
    ...item,
    isMine: reqUserId === userId,
    summary: content.replaceAll(/(<img([^>]+)\/?>|<br\s?\/?>)/g, ''),
    images: FeedImages,
    writer: User,
  };
};
