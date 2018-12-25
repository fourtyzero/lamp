const faker = require('faker');
const _ = require('lodash');

module.exports = {
  friendlyName: 'Hot',

  description: 'return some random keywords',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    const kws = _.range(0, 10).map(() => faker.lorem.word());
    // All done.
    return kws;
  },
};
