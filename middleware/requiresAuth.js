export default (context) => {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent

    console.log(context.req.headers.cookie);
}