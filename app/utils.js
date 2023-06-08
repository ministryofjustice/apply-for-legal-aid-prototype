const proceedings = require('./data/proceedings.json')

// const proceedings = require('./data/swagger_example.json')

module.exports = {

    getProceedings: function() {
      console.log('getproceedings');
        return proceedings;
    }

}
