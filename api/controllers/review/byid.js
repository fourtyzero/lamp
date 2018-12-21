module.exports = {


  friendlyName: 'Byid',


  description: 'Byid review.',


  inputs: {
    id: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function ({id}) {
    const review = await Review.findOne({id}).populate('comments');
    // All done.
    return review;

  }


};
