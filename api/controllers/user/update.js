module.exports = {
  friendlyName: 'Update',

  description: 'Update user.',

  inputs: {
    token: {
      type: 'string',
    },
    field: {
      type: 'string',
    },
    value: {
      type: 'string',
    },
  },

  exits: {
    notAuthorized: {
      responseType: 'unauthorized'
    }
  },

  fn: async function({ token, field, value }, exits) {
    // const { id } = await sails.helpers.verify(token);
    // if (!id) {return exits.notAuthorized();}
    const id = this.req.uid;
    const user = await User.findOne({ id });
    if (user) {
      const updated =  await User.updateOne({ id }).set({ [field]: value });
      return exits.success({field, value: updated[field]});
    }else {
      throw 'notAuthorized';
    }
  },
};
