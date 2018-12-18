module.exports = {


  friendlyName: 'Update',


  description: 'Update profile.',


  inputs: {
    id: {
      type: 'string'
    },
    field: {
      type: 'string',
      isIn: ['phone', 'avatar', 'nickname', 'password'],
      description: 'the filed to update'
    },
    value: {
      type: 'string'
    }
  },


  exits: {

  },

// TODO: file upload for avatar update
  fn: async function (inputs) {
    const {field, value, id} = inputs;
    await User.updateOne({id}).set({[field]: value});
    // All done.
    return;

  }


};
