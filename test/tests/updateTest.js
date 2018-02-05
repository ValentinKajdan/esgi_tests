var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'Update work with normal use' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)

      client.verify.elementPresent(".quote:first-child .updateName")
	  client.verify.elementPresent(".quote:first-child .updateQuote")
	  client.verify.elementPresent(".quote:first-child .updateSubmit")

	  client.setValue(".quote:first-child .updateName", "test");
	  client.setValue(".quote:first-child .updateQuote", "test");

	  client.click('.quote:first-child .updateSubmit'); 

      .end();
  },
  'Update display error without quote' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)

      client.verify.elementPresent(".quote:first-child .updateName")
	  client.verify.elementPresent(".quote:first-child .updateQuote")
	  client.verify.elementPresent(".quote:first-child .updateSubmit")

	  client.setValue(".quote:first-child .updateName", "test")
	  client.setValue(".quote:first-child .updateQuote", "")

	  client.click('.quote:first-child .updateSubmit')

	  .waitForElementVisible('.errorUpdate', 1000)
      .assert.containsText('.errorAdd', 'Vous devez remplir tous les champs')

      .end();
  },
    'Update display error without name' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)

      client.verify.elementPresent(".quote:first-child .updateName")
	  client.verify.elementPresent(".quote:first-child .updateQuote")
	  client.verify.elementPresent(".quote:first-child .updateSubmit")

	  client.setValue(".quote:first-child .updateName", "")
	  client.setValue(".quote:first-child .updateQuote", "test")

	  client.click('.quote:first-child .updateSubmit')

	  .waitForElementVisible('.errorUpdate', 1000)
      .assert.containsText('.errorAdd', 'Vous devez remplir tous les champs')

      .end();
  },
    'Update display error without quote and name' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)

      client.verify.elementPresent(".quote:first-child .updateName")
	  client.verify.elementPresent(".quote:first-child .updateQuote")
	  client.verify.elementPresent(".quote:first-child .updateSubmit")

	  client.setValue(".quote:first-child .updateName", "")
	  client.setValue(".quote:first-child .updateQuote", "")

	  client.click('.quote:first-child .updateSubmit')

	  .waitForElementVisible('.errorUpdate', 1000)
      .assert.containsText('.errorAdd', 'Vous devez remplir tous les champs')

      .end();
  }
};