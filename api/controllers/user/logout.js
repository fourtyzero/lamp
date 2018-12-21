module.exports = {


  friendlyName: 'Logout',


  description: 'Logout user.',


  inputs: {
    token: {
      type: 'string'
    },
    id: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    // const user = await User.findOne({id});
    // All done.
    return {};

  }


};
