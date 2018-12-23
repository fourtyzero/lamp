module.exports = {


  friendlyName: 'Footprint',


  description: 'Footprint user.',


  inputs: {
    token: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const {id} = this.req.uid;
    const user = await User.findOne({id}).populate('footprints');
    // All done.
    return exits.success(user.footprints);

  }


};
