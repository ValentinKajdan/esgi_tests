var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'Update work with normal use' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .verify.elementPresent(".quote:first-child .updateName")
  	  .verify.elementPresent(".quote:first-child .updateQuote")
  	  .verify.elementPresent(".quote:first-child .updateSubmit")
      .setValue(".quote:first-child .updateName", "test")
      .setValue(".quote:first-child .updateQuote", "test")
      .click('.quote:first-child .updateSubmit')
      .end();
  },
  'Update display error without quote' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .verify.elementPresent(".quote:first-child .updateName")
  	  .verify.elementPresent(".quote:first-child .updateQuote")
  	  .verify.elementPresent(".quote:first-child .updateSubmit")
  	  .setValue(".quote:first-child .updateName", "test")
  	  .setValue(".quote:first-child .updateQuote", "")
  	  .click('.quote:first-child .updateSubmit')
  	  .waitForElementVisible('.errorUpdate', 1000)
      .assert.containsText('.errorUpdate', 'Vous devez remplir tous les champs')
      .end();
  },
    'Update display error without name' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .verify.elementPresent(".quote:first-child .updateName")
  	  .verify.elementPresent(".quote:first-child .updateQuote")
  	  .verify.elementPresent(".quote:first-child .updateSubmit")
  	  .setValue(".quote:first-child .updateName", "")
  	  .setValue(".quote:first-child .updateQuote", "test")
  	  .click('.quote:first-child .updateSubmit')
  	  .waitForElementVisible('.errorUpdate', 1000)
      .assert.containsText('.errorUpdate', 'Vous devez remplir tous les champs')

      .end();
  },
    'Update display error without quote and name' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .verify.elementPresent(".quote:first-child .updateName")
  	  .verify.elementPresent(".quote:first-child .updateQuote")
  	  .verify.elementPresent(".quote:first-child .updateSubmit")
  	  .setValue(".quote:first-child .updateName", "")
  	  .setValue(".quote:first-child .updateQuote", "")
  	  .click('.quote:first-child .updateSubmit')
  	  .waitForElementVisible('.errorUpdate', 1000)
      .assert.containsText('.errorUpdate', 'Vous devez remplir tous les champs')
      .end();
  }
};
