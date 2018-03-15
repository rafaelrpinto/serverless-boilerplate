// @flow

const hello = async (event: Object, contextevent: Object, cb: Function) => {
  cb(null, {
    body: {
      message: 'The boilerplate is working!',
    },
    event,
  });
};

export default hello;
