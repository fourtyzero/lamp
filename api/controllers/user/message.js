module.exports = {


  friendlyName: 'Messages',


  description: 'Messages user.',


  inputs: {
    id: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    const {id} = inputs;
    const user = await User.findOne({id}).populate('messages');

    // All done.
    return user.messages;

  }


};
