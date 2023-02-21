export const cookieToString = (cookies: { [key in string]: any }) => {
  return Object.entries(cookies)
    .map((cookie) => cookie.join('='))
    .join('&');
};
