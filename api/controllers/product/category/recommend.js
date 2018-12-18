module.exports = {


  friendlyName: 'Recommend',


  description: 'Recommend category.',


  inputs: {
    category: {
      type: 'string',
      description: 'is objectid of category'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    const {category} = inputs;

    const products = await Product.find({
      where:  {category },
      sort: 'sales ASC',
      limit: 12,
    });
    // All done.
    return products;

  }


};
