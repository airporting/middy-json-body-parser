const httpJsonBodyParserMiddleware = () => {
  async function before(request) {
    console.log(request);
    try {
      const { body } = request.event;

      console.log('will parse body');
      console.log('body', body);
      const data = request.event.isBase64Encoded
        ? Buffer.from(body, 'base64').toString()
        : body;

      console.log({ from: data });
      request.event.body = JSON.parse(data);
      console.log({ got: request.event.body });
    } catch (err) {
      console.warn('Invalid or malformed JSON was provided');
    }
  }

  return {
    before,
  };
};
export default httpJsonBodyParserMiddleware;
