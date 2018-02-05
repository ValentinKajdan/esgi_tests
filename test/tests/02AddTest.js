var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'Add a quote without errors' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .setValue('.addName', 'Author')
      .setValue('.addQuoteText', 'Quote')
      .click('.addSubmit')
      .assert.containsText('.quote:last-child div span:first-child', 'Author')
      .assert.containsText('.quote:last-child div span:nth-child(2)', 'Quote')

    client.end();
  },

  'Add a quote without name' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .setValue('.addQuoteText', 'quote')
      .click('.addSubmit')
      .waitForElementVisible('.errorAdd', 1000)
      .assert.containsText('.errorAdd', 'Vous devez remplir tous les champs')

    client.end();
  },

  'Add a quote without quote' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .setValue('.addName', 'Author')
      .click('.addSubmit')
      .waitForElementVisible('.errorAdd', 1000)
      .assert.containsText('.errorAdd', 'Vous devez remplir tous les champs')

    client.end();
  },

  'Add a quote without fill the two inputs' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .click('.addSubmit')
      .waitForElementVisible('.errorAdd', 1000)
      .assert.containsText('.errorAdd', 'Vous devez remplir tous les champs')

    client.end();
  }
};
