const getProceedings = () => {
  return require('./data/proceedings.json');
};

const getProceedingsSwag = () => {
  return require('./data/swagger_example.json');
};

const getScaProceedings = () => {
  return require('./data/sca-and-s8-prohibited.json');
};

const getLiveProceedings = () => {
  return require('./data/live-proceedings.json');
};

async function getProceedingsFromLfa () {
    const res = await fetch('https://legal-framework-api-staging.cloud-platform.service.justice.gov.uk/proceeding_types/all');

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data
    } else {
      return require('./data/live-proceedings.json');
    }

}

module.exports = { getProceedings, getScaProceedings, getProceedingsSwag, getLiveProceedings, getProceedingsFromLfa };
