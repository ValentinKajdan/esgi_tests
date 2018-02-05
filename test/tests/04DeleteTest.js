var config = require('../../nightwatch.conf.BASIC.js');

nb = 4;
module.exports = {
  'Delete a quote' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .elements('css selector', '.quote', function(result){
        nb = result.value.length;
      })
      .pause(1000)
      .expect.element('.quote:nth-child('+ nb +')').to.be.present;
      client.click('.quote:first-child .delete')
      .pause(1000)
      .expect.element('.quote:nth-child('+ nb +')').to.not.be.present;
    client.end();
  }
};
