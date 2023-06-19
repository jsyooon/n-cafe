export const cookieToString = (cookies: { [key in string]: any }) => {
  return cookies.map(({ name, value }) => `${name}=${value}`).join('&');
};
