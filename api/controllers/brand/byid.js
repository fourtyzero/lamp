module.exports = {


  friendlyName: 'Byid',


  description: 'Byid brand.',


  inputs: {
    id: {
      type: 'string',
    }
  },


  exits: {

  },


  fn: async function ({id}) {
    const brand = await Brand.findOne({id}).populate('products');
    // All done.
    return brand;

  }


};
