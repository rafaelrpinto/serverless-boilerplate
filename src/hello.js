const hello = async (event, context, cb) => {
  cb(null, {
    body: 'Go Serverless Webpack (Babel) v1.0! Your function executed successfully!',
    event,
  });
};

export default hello;
