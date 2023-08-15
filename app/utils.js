const getProceedings = () => {
  return require('./data/proceedings.json');
};
const getProceedingsSwag = () => {
  return require('./data/swagger_example.json');
};

module.exports = {getProceedings, getProceedingsSwag};
