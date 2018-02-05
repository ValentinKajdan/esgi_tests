var config = require('../nightwatch.conf.BASIC.js');

module.exports = {
  'The website is launched' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .assert.title('Tests ESGI')
      .end();
  }
};
