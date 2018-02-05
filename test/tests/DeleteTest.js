var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'Delete a quote' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .elements('css selector', '.quote', function(result){
        var i = 0;
        result.forEach(function(){
            i++;
        });
        console.log(i);
      })
      .pause(2000)
    .end();
  }
};
