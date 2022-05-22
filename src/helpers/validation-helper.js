module.exports.signup = (body) => {
  if (!body.name) {
    throw new Error('Body missing name!');
  }

  return {
    name: body.name
  };
};