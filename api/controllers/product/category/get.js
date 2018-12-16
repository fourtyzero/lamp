module.exports = {


  friendlyName: 'Get',


  description: 'Get category.',


  inputs: {
    category: {
      type: 'string'
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return {category: inputs.category};

  }


};
