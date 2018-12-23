module.exports = {


  friendlyName: 'All',


  description: 'All category.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const cats = await Category.find();
    // All done.
    return cats;

  }


};
