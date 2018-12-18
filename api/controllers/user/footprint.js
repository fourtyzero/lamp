module.exports = {


  friendlyName: 'Footprint',


  description: 'Footprint user.',


  inputs: {
    id: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    const {id} = inputs;
    const user = await User.findOne({id}).populate('footprints');
    // All done.
    return user.footprints;

  }


};
