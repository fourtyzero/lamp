module.exports = {
  friendlyName: 'Log',

  description: 'Log something.',

  fn: async function() {
    // sails.log('Running custom shell script... (`sails run log`)');
    // sails.log(Object.keys(sails.models));
    // sails.log(sails.models);
    sails.log(sails.models.cartitem.globalId);
    sails.log(sails.models.orderitem.globalId);
  },
};
