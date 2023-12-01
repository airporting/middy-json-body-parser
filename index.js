const httpJsonBodyParserMiddleware = () => {
  async function before(request) {
    const { body } = request.event;

    try {
      const data = request.event.isBase64Encoded
        ? Buffer.from(body, 'base64').toString()
        : body;

      request.event.body = JSON.parse(data);
    } catch (err) {
      console.warn('Invalid or malformed JSON was provided');
    }
  }

  return {
    before,
  };
};
export default httpJsonBodyParserMiddleware;
