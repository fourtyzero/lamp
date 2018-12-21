module.exports = {


  friendlyName: 'Footprints',


  description: 'Footprints user.',


  inputs: {
    uid: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function ({uid}) {
    const u = await User.findOne({id: uid}).populate('footprints');
    // All done.
    return u.footprints;

  }


};
