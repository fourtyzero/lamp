module.exports = {


  friendlyName: 'Create',


  description: 'Create footprint.',


  inputs: {
    uid: {
      type: 'string'
    },
    pid: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function ({uid, pid}) {
    await Footprint.create({product: pid, owner: uid});
    // All done.
    return this.res.ok();

  }


};
