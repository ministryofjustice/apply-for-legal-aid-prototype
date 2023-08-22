const getProceedings = () => {
  return require('./data/proceedings.json');
};
const getProceedingsSwag = () => {
  return require('./data/swagger_example.json');
};
const getScaProceedings = () => {
  return require('./data/sca-and-s8-prohibited.json');
};

module.exports = { getProceedings, getScaProceedings, getProceedingsSwag };
